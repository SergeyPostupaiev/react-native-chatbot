import React, {useEffect, useState, FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {ChatbotMessageAvatar} from '../ChatBotMessageAvatar';
import {Loader} from '../Loader';
import {styles} from './styles';

interface ChatBotMessageProps {
  messageText;
  loading;
  messages;
  setState;
  delay;
  id;
  withAvatar;
}

export const ChatBotMessage: FunctionComponent<ChatBotMessageProps> = ({
  messageText: message,
  loading,
  messages,
  setState,
  delay,
  id,
  withAvatar,
}) => {
  const [show, toggleShow] = useState(false);

  useEffect(() => {
    const disableLoading = (messages, setState) => {
      let defaultDisableTime = 750;
      if (delay) {
        defaultDisableTime += delay;
      }
      setTimeout(() => {
        const message = messages.find((message) => message.id === id);

        if (!message) {
          return;
        }
        message.loading = false;
        message.delay = undefined;

        setState((state) => ({...state, messages: messages}));
      }, defaultDisableTime);
    };

    disableLoading(messages, setState);
  }, [delay, id, setState, messages]);

  useEffect(() => {
    if (delay) {
      setTimeout(() => toggleShow(true), delay);
    } else {
      toggleShow(true);
    }
  }, [delay]);

  return (
    <React.Fragment>
      {show && (
        <View style={styles.messageContainer}>
          {withAvatar && <ChatbotMessageAvatar />}

          <View style={styles.chatBotMessage}>
            {loading ? (
              <Loader />
            ) : (
              <Text style={styles.chatBotMessageText}>{message}</Text>
            )}
          </View>
        </View>
      )}
    </React.Fragment>
  );
};
