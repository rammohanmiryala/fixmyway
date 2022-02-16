const db = require('../config/connection');
const { User,Project,Category,Comment,Donate,Reply} = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const commentSeeds = require('./commentSeeds.json');
const donateSeeds = require('./donateSeeds.json');
const replySeeds = require('./replySeeds.json');
db.once('open', async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🎉 Users seeded! 🎉");

  try {
    await Category.deleteMany({});

    await Category.create(categorySeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🎉 Category seeded! 🎉");

  try {
    await Donate.deleteMany({});

    await Donate.create(donateSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🎉 Donate seeded! 🎉");

  
  

  try {
    await Comment.deleteMany({});

    await Comment.create(commentSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🎉 Comment seeded! 🎉");
  
 

  try {
    await Project.deleteMany({});

    await Project.create(projectSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);

  }
  console.log("🎉 Project seeded! 🎉");

  console.info('🎉--------Seeding complete! 🌱--------------🎉');

});


