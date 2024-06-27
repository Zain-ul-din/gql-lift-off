import React from "react";
import { Layout, QueryResult } from "../components";
import { useQuery } from "@apollo/client";
import { HOME_TRACK_QUERY } from "../lib/quires";
import TrackCard from "../containers/track-card";
import { Track } from "../__generate__/graphql";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, data, error } = useQuery(HOME_TRACK_QUERY);

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome.map((track: Track) => {
          return <TrackCard key={track.id} track={track} />;
        })}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
