import mongoose from "mongoose";

const PtSystemsSchema = new mongoose.Schema({
  title: String,
  description: String,
  situation: String,
  natureza: String,
  members: String,
  link: String,
});

const PtSystems =
  mongoose.models.PtSystems || mongoose.model("PtSystems", PtSystemsSchema);

export default PtSystems;
