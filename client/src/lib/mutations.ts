// a file to hold mutations

import { gql } from "@apollo/client";

export const INCREMENT_TACK_VIEWS_MUTATION = gql`
  mutation IncrementTrackViews($trackId: ID!) {
    incrementTrackViews(id: $trackId) {
      code
      success
      message
      track {
        id
        numberOfViews
      }
    }
  }
`;
