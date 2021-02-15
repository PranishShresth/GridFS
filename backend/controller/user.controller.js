const User = require("../models/User.model");
const { userSchema } = require("../config/validation");

module.exports = {
  register: async (req, res) => {
    try {
      const result = await userSchema.validateAsync(req.body);
      const doesEmailExist = await User.findOne({ email: result.email });
      if (doesEmailExist) {
        return res.status(400).json({ msg: "User already exists" });
      }
      const user = await User.create(result);
      user.save();
      res.status(201).json({ msg: "User successfully created" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
};
