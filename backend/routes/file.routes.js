const express = require("express");
const router = express.Router();
const upload = require("./../config/multer");
const { uploadFile } = require("./../controller/files.controller");

router.post("/upload", upload.single("file"), uploadFile);
module.exports = router;
