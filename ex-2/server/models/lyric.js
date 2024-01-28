import { Schema, model } from "mongoose";

const LyricSchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: "song",
  },
  likes: { type: Number, default: 0 },
  content: { type: String },
});

LyricSchema.statics.like = async function (id) {
  const Lyric = model("lyric");
  const lyric = await Lyric.findById(id);
  ++lyric.likes;
  return lyric.save();
};

const Lyric = model("lyric", LyricSchema);

export default Lyric;
