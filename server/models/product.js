const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  video_id : mongoose.Types.ObjectId,
  product_link : String,
  title : String,
  price : Number,
  img_url : String,
}) 

module.exports = mongoose.model("Product", ProductSchema)