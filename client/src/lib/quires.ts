/**
 * GQL Quires
 */

import { gql } from "@apollo/client";

// import { graphql } from "../__generate__";

export const HOME_TRACK_QUERY = gql`
  query GetTracks {
    tracksForHome {
      id
      author {
        name
        photo
        id
      }
      length
      thumbnail
      modulesCount
      title
    }
  }
`;
