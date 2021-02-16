const express = require("express");
const router = express.Router();
const upload = require("./../config/multer");
const auth = require("./../config/auth");

const {
  uploadFile,
  downloadFile,
  deleteFile,
  getAllFiles,
} = require("./../controller/files.controller");

router.post("/upload", auth, upload.single("file"), uploadFile);
router.post("/download/:id", auth, downloadFile);
router.delete("/delete/:id", auth, deleteFile);
router.get("/getFiles", auth, getAllFiles);
module.exports = router;
