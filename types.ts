
export type PageId = 'home' | 'visit' | 'sermons' | 'prayer' | 'about';

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
