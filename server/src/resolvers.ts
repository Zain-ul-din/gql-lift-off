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
    track: async (_, args, { dataSources }) => {
      return dataSources.trackAPI.getTrack(args.id);
    },
  },
  Track: {
    author: ({ authorId }, __, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

export default resolvers;
