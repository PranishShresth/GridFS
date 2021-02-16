const {
  uploadFileHelper,
  downloadFileHelper,
  findFileById,
  deleteFileHelper,
  getFileByUser,
} = require("./../utils/grid_fs");
const auth = require("./../config/auth");

module.exports = {
  uploadFile: async (req, res) => {
    try {
      const file = req.file;
      const userId = req.user;
      uploadFileHelper(file, userId);
      res.status(200).json({ msg: "File succesfully uploaded" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
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
      return res.status(500).json({ msg: "Internal server error" });
    }
  },
  deleteFile: (req, res) => {
    try {
      const { id } = req.params;
      deleteFileHelper(id);
      return res.status(200).json({ msg: "File successfully deleted" });
    } catch (err) {
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  getAllFiles: async (req, res) => {
    try {
      const userId = req.user;

      const response = await getFileByUser(userId);

      const files = await response.toArray();
      if (files.length) {
        return res.status(200).send(files);
      }
      res.status(400).json({ msg: "No files found" });
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },
};
