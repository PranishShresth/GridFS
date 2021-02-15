const express = require("express");
const router = express.Router();
const upload = require("./../config/multer");
const {
  uploadFile,
  downloadFile,
} = require("./../controller/files.controller");

router.post("/upload", upload.single("file"), uploadFile);
router.post("/download/:id", downloadFile);
module.exports = router;
