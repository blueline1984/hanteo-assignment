export interface Banner {
  id: number;
  imgUrl: string;
  mainText: string;
  subText: string;
  buttonText?: string;
  url?: string;
}

export interface Page {
  children: React.ReactNode;
}

export interface DataList {
  image: Image[];
  listeners: string;
  mbid: string;
  name: string;
  playcount: string;
  streamable: string;
  url: string;
}

interface Image {
  size: string;
  text: string;
}
