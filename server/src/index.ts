import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { TrackAPI } from "./datasource/track-api";
// import mocks from "./mockes";

async function startApolloServer() {
  const server = new ApolloServer({
    // schema: addMocksToSchema({
    //   schema: makeExecutableSchema({ typeDefs }),
    //   mocks,
    // }),
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({
            cache,
          }),
        },
      };
    },
  });

  console.log(`🚀 Apollo Server is running at: ${url}`);
}

startApolloServer();
