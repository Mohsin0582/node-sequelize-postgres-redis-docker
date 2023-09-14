const jwt = require('jsonwebtoken')
const redis = require("redis")


const handleSignin = (db, brcypt, req, res) => {

    const { email } = req.body;
    if(!email){
        return Promise.reject('incorrect form submission')
    }

    // const { email, password } = req.body;
    // if(!email || !password){
    //     return Promise.reject('incorrect form submission')
    // }

    // return db.select ('email', 'hash').from('login')
        // .where('email', '=', email)
        // .then(data => {
        //     const isValid = brcypt.compareSync(password, data[0].hash)
        //     if(isValid){
                return db.Post.findOne({
                                include: [
                                    {
                                        model: db.Comment,
                                        as: 'comments',

                                        include: [
                                         {
                                          model: db.User,
                                          as: 'author'
                                         }
                                        ]
                                    },
                                    {
                                        model: db.User,
                                        as: 'author',
                                        where: { email: email }
                                    },
                                ],
                            })
                            .then(post => { return post; } )
                            .catch(err => Promise.reject('unable to get user'))
        //     }else{
        //         Promise.reject('wrong credentials')
        //     }
        // })
        // .catch(err => Promise.reject('wrong credentials'))
}

const setupRedis = async(authorization=null, token=null, id=null) => {
    const redisClient = redis.createClient({  
        url: process.env.REDIS_URI,
    });

    redisClient.on('error', err => Promise.reject(err));
    
    await redisClient.connect();

    if(token && id){
        await redisClient.set(token, id) // set key=token, value=id
        authorization = token
    }

    const value = await redisClient.get(authorization);
    await redisClient.disconnect();
    return Promise.resolve(value)
}


const getAuthTokenId = async (req, res) => {
    const { authorization } = req.headers

    return setupRedis(authorization)
            .then(value => res.json({id: value}) )
            .catch((err) => res.status(400).json('Unauthorized'))
}


const signToken = (email) => {
    const jwtPayload = { email }
    return jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn : '2 days'})
}


const setToken = (token, id) => {  
    return setupRedis('', token, id)
            .then(value => Promise.resolve(value))
            .catch((err) => Promise.reject('Unauthorized'))
}


const createSession = (user) => {
    const {id, email} = user
    const token = signToken(email)
    return setToken(token, id)
            .then( () => {
                return {succes: 'true', userId: id, token}
            })
            .catch(console.log)
}


// ============================================
// Main Function
// ============================================
const signinAuthentication = (db, brcypt) => (req, res) => {
    const { authorization } = req.headers
    return authorization 
        ? getAuthTokenId(req, res)
        : handleSignin(db, brcypt, req, res)
            .then(data => {
                // return data.id && data.email ? createSession(data) : Promise.reject(data) //we are getting the response but to make sure are we getting what we want
                return data.id? createSession({id: data.id, email: data.author.email}) : Promise.reject(data) //we are getting the response but to make sure are we getting what we want
            })
            .then(session => res.json(session))
            .catch(err => res.status(404).json(err))
}


module.exports = {
    signinAuthentication
}