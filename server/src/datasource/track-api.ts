import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  baseURL?: string = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId: string) {
    return this.get(`track/${trackId}/modules`);
  }

  incrementTrackViews(trackId: string) {
    // INFO: put is idempotent where patch is non-idempotent
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}
