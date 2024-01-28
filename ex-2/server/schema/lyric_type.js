import graphql from "graphql";
import Lyric from "../models/lyric.js";
import SongType from "./song_type.js";
const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } = graphql;

const LyricType = new GraphQLObjectType({
  name: "LyricType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: SongType,
      async resolve(parentValue) {
        const lyric = await Lyric.findById(parentValue).populate("song");
        console.log(lyric);
        return lyric.song;
      },
    },
  }),
});

export default LyricType;
