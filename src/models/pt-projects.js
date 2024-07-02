import mongoose from "mongoose";

const PtProjectsSchema = new mongoose.Schema({
  img: String,
  date: String,
  description: String,
  status: String,
  title: String,
  body: String,
});

const PtProjects =
  mongoose.models.PtProjects || mongoose.model("PtProjects", PtProjectsSchema);

export default PtProjects;
