import React, {useState, FunctionComponent} from 'react';
import {Chat} from './elements';
import {getInitialState} from './utils';
import {ChatBotManager} from '../manager';

export const ChatBot: FunctionComponent = () => {
  const initialState = getInitialState(ChatBotManager.ChatBotConfigs);
  const [state, setState] = useState(initialState);

  const chatBotManager = new ChatBotManager(setState);

  return (
    <Chat
      state={state}
      setState={setState}
      widgetRegistry={chatBotManager.widgetRegistry}
      messageParser={chatBotManager.messageParser}
    />
  );
};
