import { TrackAPI } from "./datasource/track-api";
import { Resolvers } from "./types";

const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    trackForHomeUsingFetch: async (_, __, ___) => {
      // test with out no caching
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/tracks`);
      return res.json();
    },
  },
  Track: {
    author: ({ authorId }, __, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export default resolvers;
