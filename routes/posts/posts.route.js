const router = require('express').Router();
const db = require('../../database/models');
//=================================================
//Method 1: consult controllers/index.js
//=================================================
// const { PostsController } = require('../../controllers');

// const { 
//     getAllPosts, 
//     getPostById, 
//     createPost, 
//     updatePost, 
//     deletePost 
// } = PostsController //destructing PostsController functions


//=================================================
//Method 2: consult controllers/index.js
//=================================================
const { posts } = require('../../controllers');
const { 
    getAllPosts, 
    getPostById, 
    createPost, 
    updatePost, 
    deletePost 
} = posts; //destructing signin functions


// above code can be written in one line
// const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../../controllers').PostsController;
// const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../../controllers').posts;


router.get('/', (req, res) => res.send('Welcome'))
router.get('/posts', getAllPosts(db));                           // dependency injection
router.get('/posts/:postId', getPostById(db));                  // dependency injection
router.post('/posts', createPost(db));                          // dependency injection
router.put('/posts/:postId', updatePost(db));                   // dependency injection
router.delete('/posts/:postId', deletePost(db));                // dependency injection 

module.exports = router;