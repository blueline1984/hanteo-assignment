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
