const mongoose = require("mongoose");
require("dotenv").config();
const mongoString = process.env.DATABASE_URL;
const Video = require("./models/video");
const videoSeed = require("./seeds/video");
const Product = require("./models/product");
const productSeed = require("./seeds/product");
const Comment = require("./models/comment");
const { faker } = require("@faker-js/faker");

mongoose
  .connect(mongoString)
  .then(() => {
    seed()
      .then(() => {
        mongoose.disconnect();
        console.log("Seeding Completed");
      })
      .catch((err) => {
        throw err;
      });
  })
  .catch((err) => {
    console.log(err);
  });

async function seed() {
  // Video data
  for (let i = 0; i < videoSeed.length; i++) {
    await Video.create(videoSeed[i]);
  }

  let videos = await Video.find();

  // Product data
  for (let vi = 0; vi < videos.length; vi++) {
    for (let pi = 0; pi < productSeed.length; pi++) {
      await Product.create({
        ...productSeed[pi],
        video_id: videos[vi]._id,
      });
    }
  }

  //Comment data

  for (let vi = 0; vi < videos.length; vi++) {
    for (let ci = 0; ci < 3; ci++) {
      await Comment.create({
        video_id: videos[vi]._id,
        username: faker.internet.userName(),
        comment: faker.lorem.lines(),
        created_at: faker.date.recent(),
      });
    }
  }
}
