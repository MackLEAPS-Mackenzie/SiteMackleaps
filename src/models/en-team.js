import mongoose from "mongoose";

const EnTeamSchema = new mongoose.Schema({
  img: String,
  name: String,
  date: String,
  role: String,
  link: String,
});

const EnTeam = mongoose.models.EnTeam || mongoose.model("EnTeam", EnTeamSchema);

export default EnTeam;
