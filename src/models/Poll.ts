import mongoose, { Schema, Document } from "mongoose";

interface IPoll extends Document {
  title: string;
  options: string[];
  votes: { [key: string]: number };
  createdAt: Date;
}

const PollSchema = new Schema<IPoll>({
  title: { type: String, required: true },
  options: { type: [String], required: true },
  votes: { type: Object, default: {} },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPoll>("Poll", PollSchema);
