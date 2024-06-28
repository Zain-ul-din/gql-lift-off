import { Author, Module, Track } from "./types";

export interface TrackModel extends Omit<Track, "author"> {
  authorId: string;
}

export interface AuthorModel extends Author {}
export interface ModuleModel extends Module {}
