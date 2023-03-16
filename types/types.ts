export interface IChannel {
  id: number;
  label: string;
  icon?: string;
  description?: string;
  unread?: boolean;
  messages: IMessage[];
}

export interface IMessage {
  avatarUrl: string;
  user: string;
  date: string;
  text: string;
}

export interface ICategory {
  id: number;
  label: string;
  channels: IChannel[];
}

export interface IServer {
  id: number;
  label: string;
  img: string;
  categories: ICategory[];
}
