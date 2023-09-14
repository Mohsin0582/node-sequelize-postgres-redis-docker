const createPost = (db) => async (req, res) => {
  try {
    const post = await db.Post.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}


const getPostById = (db) => async (req, res) => {
    try {
      const { postId } = req.params;
      const post = await db.Post.findOne({
        where: { id: postId },
        include: [
          {
            model: db.Comment,
            as: 'comments',
            include: [
             {
              model: db.User,
              as: 'author',
             }
            ]
          },
          {
            model: db.User,
            as: 'author'
          }
        ]
      });
      if (post) {
        return res.status(200).json({ post });
      }
      return res.status(404).send('Post with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
}


const getAllPosts = (db) => async (req, res) => {
    try {
      console.log("hereeeeeeeeeeeeeeeeeeeeeeeee");
      const posts = await db.Post.findAll({
        include: [
          {
            model: db.Comment,
            as: 'comments'
          },
          {
            model: db.User,
            as: 'author'
          }
        ]
      });
      console.log("posts", posts);
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).send(error.message);
    }
}


const updatePost = (db) => async (req, res) => {
    try {
      const { postId } = req.params;
      const [ updated ] = await db.Post.update(req.body, {
        where: { id: postId }
      });
      if (updated) {
        const updatedPost = await db.Post.findOne({ where: { id: postId } });
        return res.status(200).json({ post: updatedPost });
      }
      throw new Error('Post not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
};


const deletePost = (db) => async (req, res) => {
    try {
      const { postId } = req.params;
      const deleted = await db.Post.destroy({
        where: { id: postId }
      });
      if (deleted) {
        return res.status(204).send("Post deleted");
      }
      throw new Error("Post not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
};


module.exports = {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost
}