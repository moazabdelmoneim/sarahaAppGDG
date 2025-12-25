import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcrypt";

export const getUserProfile = (req, res, next) => {
  try {
    const { userName, email, _id } = req.user;
    return res.status(200).json({ userProfile: { userName, email, _id } });
  } catch (error) {
    return res.status(400).json({ error: err.message });
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await userModel.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "profile updated" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
export const updatePassword = async (req, res, next) => {
  try {
    const { newPassword, oldPassword } = req.body;
    if (!newPassword || !oldPassword) {
      return res
        .status(400)
        .json({ message: "old password and new password are required" });
    }
    if (!bcrypt.compareSync(oldPassword, req.user.password)) {
      return res.status(400).json({ message: "old password is incorrect" });
    }
    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    const user = await userModel.findByIdAndUpdate(
      req.user._id,
    { password: hashedPassword },
        { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({ message: "password updated" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
