import { Track } from "./types";

export interface TrackModel extends Omit<Track, "author"> {
  authorId: string;
}
