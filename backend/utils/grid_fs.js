const mongoose = require("mongoose");
const { Readable } = require("stream");

module.exports = {
  uploadFileHelper: async function (file) {
    try {
      //default connection
      const db = mongoose.connection.db;
      let bucket = new mongoose.mongo.GridFSBucket(db, {
        bucketName: "files",
      });

      let uploadStream = await bucket.openUploadStream(file.fileName, {
        metadata: {
          user: "John",
        },
      });
      function bufferToStream(binary) {
        const readableStream = new Readable(binary);
        readableStream.push(binary);
        readableStream.push(null);
        return readableStream;
      }

      const stream = bufferToStream(file.buffer);
      stream
        .pipe(uploadStream)
        .on("finish", function () {
          console.log("File Uploaded");
        })
        .on("error", function (err) {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  },
};
