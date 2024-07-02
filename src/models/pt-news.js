import mongoose from "mongoose";

const bodySchema = new mongoose.Schema({
  __html: String,
});

const PtNewsSchema = new mongoose.Schema({
  img: String,
  date: String,
  description: String,
  author: String,
  author_img: String,
  title: String,
  body: bodySchema,
});

const PtNews = mongoose.models.PtNews || mongoose.model("PtNews", PtNewsSchema);

export default PtNews;
