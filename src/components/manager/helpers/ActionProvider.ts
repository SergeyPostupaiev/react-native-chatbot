import React from 'react';

import {createChatBotMessage} from '../../ChatBot/elements/Chat';
import {WidgetList, Message} from './types';

export class ActionProvider {
  setState: React.Dispatch<any>;

  constructor(setState: React.Dispatch<any>) {
    this.setState = setState;
  }

  handleHelpCommand = () => {
    const message = createChatBotMessage(
      'Hello, what is wrong? What type of help do you need?',
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: WidgetList.HELP_BAR,
      },
    );

    this.addMessageToState(message);
  };

  handleProductsCommand = () => {
    const message = createChatBotMessage('Available list of products: ', {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
      widget: WidgetList.PRODUCT_LIST,
    });

    this.addMessageToState(message);
  };

  handleDefaultCommand = () => {
    const message = createChatBotMessage(
      "Sorry, I do not understand you, try 'help' command.",
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message: Message) => {
    this.setState((state: any) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}
