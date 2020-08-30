import React, {FunctionComponent} from 'react';
import {ChatBotMessage} from '../ChatBotMessage';

interface ChatBotMessageWithWidgetProps {
  passDownProps;
  messages;
  setState;
  state;
  widgetRegistry;
  withAvatar;
}

export const ChatBotMessageWithWidget: FunctionComponent<ChatBotMessageWithWidgetProps> = ({
  passDownProps,
  messages,
  setState,
  state,
  widgetRegistry,
  withAvatar,
}) => {
  return (
    <React.Fragment>
      <ChatBotMessage
        {...passDownProps}
        messages={messages}
        withAvatar={withAvatar}
        setState={setState}
      />

      {!passDownProps.loading &&
        widgetRegistry.getWidget(passDownProps.widget, {
          ...state,
        })}
    </React.Fragment>
  );
};
