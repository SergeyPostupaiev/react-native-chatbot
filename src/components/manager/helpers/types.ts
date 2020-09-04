type MessageSender = 'user' | 'bot';
type Language = 'en' | 'ru' | 'ua';

export type Message = {
  id: any;
  type: MessageSender;
  loading: boolean;
  terminatedLoading: boolean;
  delay: number | undefined;
  widget: string;
  createDate: Date;
  messageText: string;
  withAvatar?: boolean;
};

export type ChatBotState = {
  messages: Message[];
  products: string[];
};

export type Widget = {
  widgetName?: string;
  widgetComponent: (props: any) => any;
  mapStateToProps?: string[];
  props?: any;
};

export interface ChatBotConfigsObject {
  BotName: string;
  lang: Language;
  initialMessages: Message[];
  state: ChatBotState;
  widgets: Widget[];
}

export enum WidgetList {
  PRODUCT_LIST = 'PRODUCT_LIST',
  HELP_BAR = 'HELP_BAR',
}
