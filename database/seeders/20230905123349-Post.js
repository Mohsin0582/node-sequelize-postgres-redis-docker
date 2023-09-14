'use strict';

/** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {},

//   async down (queryInterface, Sequelize) {}
// };



// ===============================================
// New Code
// ===============================================
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          title: "hispotan de nu",
          content:
            "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          userId: 2,
          title: 'some dummy title',
          content:
            "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Posts", null, {})
};
// database/seeds/xxxx-Post.js


