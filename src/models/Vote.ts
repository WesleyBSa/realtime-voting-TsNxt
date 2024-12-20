import mongoose, { Schema, Document } from "mongoose";

interface IVote extends Document {
  pollId: string;
  option: string;
  timestamp: Date;
}

const VoteSchema = new Schema<IVote>({
  pollId: { type: String, required: true },
  option: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<IVote>("Vote", VoteSchema);
