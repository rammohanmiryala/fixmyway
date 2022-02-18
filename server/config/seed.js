const db = require('./connection');
const {
  User,
  Project,
  Category,Comment
} = require('../models');

db.once('open', async () => {

  // categories data ---------------------------------------------------
  await Category.deleteMany();

  const categories = await Category.insertMany([{
    name: 'Abandoned vehicles'
  },
  {
    name: 'Blocked drainage gullies'
  },
  {
    name: 'Bus stops'
  },
  {
    name: 'Public toilets'
  },
  {
    name: 'Pavements/footpaths'
  },
  {
    name: 'Dog fouling'
  },
  {
    name: 'Rubbish (refuse and recycling)'
  },
  {
    name: 'Street lighting'
  },
  {
    name: 'Graffiti'
  },
  {
    name: 'Street nameplates'
  }
  ]);

  console.log('categories seeded');

  // categories data---------------------------------------------------
  await Project.deleteMany();

  const projects = await Project.insertMany([
    {
      projectTitle: 'fix Public toilets',
      projectDescription: ' litora torquent per conubia nostra, per inceptos himenaeos.',
      projectAuthor: 'ram',
      category: categories[3]._id,
     
      
    }, {
      projectTitle: 'fix bustop',
      projectDescription: 'Class aptent taciti sociosqu ad litora  per inceptos himenaeos.',
      projectAuthor: 'hem',
      category: categories[2]._id,
      
    
    }, {
      projectTitle: 'fix Dog fouling',
      projectDescription: 'per inceptos himenaeos.',
      projectAuthor: 'king',
      category: categories[5]._id,
      
      
    },
    {
      projectTitle: 'really a Public toilets',
      projectDescription: '  per conubia nostra',
      projectAuthor: 'ram',
      category: categories[3]._id,
     
      
    },

  ]);

  console.log('products seeded');

  // User data---------------------------------------------------

  await User.deleteMany();


  const users = await User.insertMany([
    {
      username: 'ram',
      email: 'ram@email.com',
      password: 'rammohan99'
    },
    {
      username: 'dory',
      email: 'dory@email.com',
      password: 'password01'
    },
    {
      username: 'drew',
      email: 'drew@email.com',
      password: 'password01'
    },
    {
      username: 'portia',
      email: 'portia@email.com',
      password: 'password01'
    }

  ]);

  console.log('users seeded');

// Comment data---------------------------------------------------

// await Comment.deleteMany();


//   const comments = await Comment.insertMany([
//     {
//       commentText: 'ytutdfblab',
//       commentAuthor: 'ram',
//       rating: '3'
//     },
//     {
//       commentText: 'wqewesfsdf',
//       commentAuthor: 'dory',
//       rating: '2'
//     },
//     {
//       commentText: 'sdfsdfsff',
//       commentAuthor: 'drew',
//       rating: '5'
//     },
//     {
//       commentText: 'lskdnh',
//       commentAuthor: 'portia',
//       rating: '3'
//     }

//   ]);



  process.exit();
});
