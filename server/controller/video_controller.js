const { default: mongoose } = require("mongoose")
const Video = require("../models/video");
const Product = require("../models/product")
const Comment = require("../models/comment")

const getAll = async (req, res) => {
  try {
    let keyword = req.query.keyword
    let data


    if (keyword) {
      data = await Video.find({ "title": { $regex: '.*' + keyword + '.*' } })
    }else{
      data = await Video.find();
    }


    res.json({
      message: "Success get data",
      data: data ?? [],
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id) {
      throw Error("Video id is required")
    }

    let data = await Video.findById(id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.json({
      message: "Success get data",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getProducts = async (req,res) => {
  try {
    let video_id = req.params.id

    if (!video_id) {
      throw Error("Video Id is required")
    }

    let data = await Product.find({ video_id : new mongoose.Types.ObjectId(video_id)})

    res.json({
      message : "Success get data",
      data : data ?? []
    })

  } catch (error) {
    res.status(400).json({
      message : error.message,
    })
  }
}

const getComments = async (req,res) => {
  try {
    let video_id = req.params.id

    if (!video_id) {
      throw Error("Video Id is required")
    }

    let data = await Comment.find({ video_id : new mongoose.Types.ObjectId(video_id)})

    res.json({
      message : "Success get data",
      data : data ?? []
    })

  } catch (error) {
    res.status(400).json({
      message : error.message,
    })
  }
}

const addComment = async (req,res) => {
  try {
    let video_id = req.params.id
    let { username, comment } = req.body

    if (!video_id || !username || !comment) {
      throw Error("Some data is missing")
    }

    await Comment.create({
      video_id : video_id,
      username : username,
      comment : comment,
      created_at : Date.now()
    })

    res.json({
      message : "Success create comment",
    })

  } catch (error) {
    res.status(400).json({
      message : error.message,
    })
  }
}

module.exports = { getAll, getById, getProducts, getComments, addComment };
