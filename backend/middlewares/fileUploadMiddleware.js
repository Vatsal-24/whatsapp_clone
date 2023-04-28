const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dotenv = require("dotenv");
dotenv.config();

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const storage = new GridFsStorage(
  {
    url: DB,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (req, file) => {
      const match = ["image/jpeg", "image/jpg", "image/png"];

      if (match.indexOf(file.mimeType) !== -1) {
        return `${Date.now()}-file-${file.originalname}`;
      }

      return {
        bucketName: "files",
        filename: `${Date.now()}-file-${file.originalname}`,
      };
    },
  },
  {}
);

module.exports = multer({ storage });
