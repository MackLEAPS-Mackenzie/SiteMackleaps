import mongoose from "mongoose";

const EnSystemsSchema = new mongoose.Schema({
  title: String,
  description: String,
  situation: String,
  natureza: String,
  members: String,
  link: String,
});

const EnSystems =
  mongoose.models.EnSystems || mongoose.model("EnSystems", EnSystemsSchema);

export default EnSystems;
