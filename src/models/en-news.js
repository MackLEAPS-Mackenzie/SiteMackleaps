import mongoose from "mongoose";

const bodySchema = new mongoose.Schema({
  __html: String,
});

const EnNewsSchema = new mongoose.Schema({
  img: String,
  date: String,
  description: String,
  author: String,
  author_img: String,
  title: String,
  body: bodySchema,
});

const EnNews = mongoose.models.EnNews || mongoose.model("EnNews", EnNewsSchema);

export default EnNews;
