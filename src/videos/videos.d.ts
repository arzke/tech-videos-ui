export interface IVideo {
  id?: number;
  url: string;
  title: string;
  description: string;
}

export interface IVideoIdInRoute {
  videoId: string;
}
