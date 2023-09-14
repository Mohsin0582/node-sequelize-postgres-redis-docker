'use strict';
const {
  Model
} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Comment extends Model {
//     static associate(models) {
//     }
//   }
//   Comment.init({
//     postId: DataTypes.INTEGER,
//     comment: DataTypes.TEXT,
//     userId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Comment',
//   });
//   return Comment;
// };


// ===================================
// New code
// ===================================
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postId: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author'
    });
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post'
    });
  };
  return Comment;
};

// database/models/comment.js