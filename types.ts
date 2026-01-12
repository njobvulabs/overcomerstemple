
export type PageId = 'home' | 'visit' | 'sermons' | 'prayer' | 'about' | 'media';

export interface Sermon {
  id: string;
  title: string;
  date: string;
  speaker: string;
  videoUrl: string;
  thumbnail: string;
}

export interface Testimony {
  id: string;
  name: string;
  story: string;
  date: string;
}

export interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  category: string;
}
