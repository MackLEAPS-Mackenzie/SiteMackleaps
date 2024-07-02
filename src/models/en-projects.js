import mongoose from "mongoose";

const EnProjectsSchema = new mongoose.Schema({
  img: String,
  date: String,
  description: String,
  status: String,
  title: String,
  body: String,
});

const EnProjects =
  mongoose.models.EnProjects || mongoose.model("EnProjects", EnProjectsSchema);

export default EnProjects;
