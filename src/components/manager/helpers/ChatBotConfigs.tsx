import React from 'react';
import {createChatBotMessage} from '../../ChatBot/elements/Chat';
import {ChatBotConfigsObject, WidgetList} from './types';
import {BotProductList} from '../../widgets/BotProductList';
import {BotHelpBar} from '../../widgets/BotHelpBar';

const BotName = 'IEat bot';

export const ChatBotConfigs: ChatBotConfigsObject = {
  BotName,
  lang: 'en',
  initialMessages: [
    createChatBotMessage(`Hi I'm ${BotName}.`),
    createChatBotMessage('How can I help you?'),
  ],
  state: {
    products: ['soup', 'bread'],
    messages: [],
  },
  widgets: [
    {
      widgetName: WidgetList.PRODUCT_LIST,
      widgetComponent: (props) => <BotProductList {...props} />,
      mapStateToProps: ['products'],
    },
    {
      widgetName: WidgetList.HELP_BAR,
      widgetComponent: (props) => <BotHelpBar {...props} />,
    },
  ],
};
