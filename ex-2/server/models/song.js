import { Schema, model } from "mongoose";

const SongSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  lyrics: [
    {
      type: Schema.Types.ObjectId,
      ref: "lyric",
    },
  ],
});

SongSchema.statics.addLyric = function (id, content) {
  const Lyric = model("lyric");

  return this.findById(id).then((song) => {
    const lyric = new Lyric({ content, song });
    song.lyrics.push(lyric);
    return Promise.all([lyric.save(), song.save()]).then(
      ([lyric, song]) => song
    );
  });
};

SongSchema.statics.findLyrics = function (id) {
  return this.findById(id)
    .populate("lyrics")
    .then((song) => song.lyrics);
};

const Song = model("song", SongSchema);

export default Song;
