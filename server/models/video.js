const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
  img_url : String,
  title : String,
  video_url : String
}) 

module.exports = mongoose.model("Video", VideoSchema)