const db = require('../config/connection');
const { User,Project,Category,Comment,Donate,Reply} = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');
const categorySeeds = require('./categorySeeds.json');

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
    await Project.deleteMany({});

    await Project.create(projectSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);

  }
  console.log("🎉 Project seeded! 🎉");

  console.info('🎉--------Seeding complete! 🌱--------------🎉');

});


