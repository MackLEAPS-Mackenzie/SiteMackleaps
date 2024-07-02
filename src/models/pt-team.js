import mongoose from "mongoose";

const PtTeamSchema = new mongoose.Schema({
  img: String,
  name: String,
  date: String,
  role: String,
  link: String,
});

const PtTeam = mongoose.models.PtTeam || mongoose.model("PtTeam", PtTeamSchema);

export default PtTeam;
