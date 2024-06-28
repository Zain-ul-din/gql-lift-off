import { useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import { TRACK_QUERY } from "../lib/quires";
import TrackDetail from "../components/track-detail";

export default function Track() {
  const { trackId } = useParams();
  const { data, loading, error } = useQuery(TRACK_QUERY, {
    variables: {
      trackId,
    },
  });
  return (
    <Layout>
      <QueryResult loading={loading} data={data} error={error}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
}
