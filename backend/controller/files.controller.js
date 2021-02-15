const { uploadFileHelper } = require("./../utils/grid_fs");

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
};
