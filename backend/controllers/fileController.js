const grid = require("gridfs-stream");
const mongoose = require("mongoose");

const url = `http://localhost:8000`;
const conn = mongoose.connection;

let gfs, gridFsBucket;
conn.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "files",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("files");
  console.log("AA meri jaan");
});

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json({
        status: "error",
        message: "File not found",
      });
    }

    const fileUrl = `${url}/file/${req.file.filename}`;
    console.log(req.file);
    return res.status(200).json(fileUrl);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "error",
      message: "Error uploading file",
      error: err,
    });
  }
};

exports.getFile = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "error",
      message: "Error getting file",
      error: err,
    });
  }
};
