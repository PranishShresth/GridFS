const {
  uploadFileHelper,
  downloadFileHelper,
  findFileById,
} = require("./../utils/grid_fs");
const auth = require("./../config/auth");

module.exports = {
  uploadFile: async (req, res) => {
    try {
      const file = req.file;
      console.log(file);
      uploadFileHelper(file);
      res.status(200).json({ msg: "File succesfully uploaded" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  downloadFile: async (req, res) => {
    try {
      const fileId = req.params.id;

      const file = await findFileById(fileId);
      const fileArray = await file.toArray();
      if (fileArray.length) {
        res.status(200);
        res.set({
          "Content-Length": fileArray[0].length,
          "Content-Disposition":
            "attachment; filename =" + fileArray[0].filename,
        });
        downloadFileHelper(fileId).pipe(res);
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
