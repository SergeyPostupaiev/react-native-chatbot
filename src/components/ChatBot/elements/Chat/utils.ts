import {Message} from '../../../manager/helpers';

export const botMessage = (message: Message) => message.type === 'bot';

export const createChatMessage = (messageText: string, type: string) => ({
  messageText,
  type,
  id: Math.floor(Math.random() * 100),
  createDate: new Date(),
});

export const createChatBotMessage = (messageText: string, options?: any) => {
  return {
    ...createChatMessage(messageText, 'bot'),
    ...options,
    loading: true,
  };
};

export const showAvatar = (messages: Message[], index: number) => {
  if (index === 0) {
    return true;
  }

  const lastMessage = messages[index - 1];

  return lastMessage.type !== 'bot' && !lastMessage.widget;
};
