import React, {FunctionComponent, Dispatch} from 'react';
import {ChatBotMessage} from '../ChatBotMessage';
import {Message, ChatBotState, WidgetRegistry} from '../../../manager/helpers';

interface ChatBotMessageWithWidgetProps {
  concreteMessageProps: Message;
  messages: Message[];
  setState: Dispatch<any>;
  state: ChatBotState;
  widgetRegistry: WidgetRegistry;
  withAvatar: boolean;
}

export const ChatBotMessageWithWidget: FunctionComponent<ChatBotMessageWithWidgetProps> = ({
  concreteMessageProps,
  messages,
  setState,
  state,
  widgetRegistry,
  withAvatar,
}) => {
  return (
    <React.Fragment>
      <ChatBotMessage
        {...concreteMessageProps}
        messages={messages}
        withAvatar={withAvatar}
        setState={setState}
      />

      {!concreteMessageProps.loading &&
        widgetRegistry.getWidget(concreteMessageProps.widget, {
          ...state,
        })}
    </React.Fragment>
  );
};
