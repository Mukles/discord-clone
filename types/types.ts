export interface IChannel {
  id: number;
  description?: string;
  messages: Array<IMessage>;
  label: string;
  icon?: string;
  unread?: boolean;
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
  [key: string]: {
    label: string;
    categories: ICategory[];
  };
}
