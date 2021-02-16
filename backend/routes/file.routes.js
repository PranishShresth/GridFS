const express = require("express");
const router = express.Router();
const upload = require("./../config/multer");
const auth = require("./../config/auth");

const {
  uploadFile,
  downloadFile,
  deleteFile,
} = require("./../controller/files.controller");

router.post("/upload", auth, upload.single("file"), uploadFile);
router.post("/download/:id", downloadFile);
router.delete("/delete/:id", auth, deleteFile);
module.exports = router;
