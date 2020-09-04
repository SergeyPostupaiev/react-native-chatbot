import React, {
  useState,
  useCallback,
  useRef,
  FunctionComponent,
  Dispatch,
} from 'react';
import {ChatBotState} from '../../../manager/helpers';
import {View, TextInput, ScrollView} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {UserChatMessage} from '../UserChatMessage';
import {ChatBotMessage} from '../ChatBotMessage';
import {ChatBotMessageWithWidget} from '../ChatBotMessageWithWidget';
import {CommandList} from '../CommandList';
import {botMessage, createChatMessage, showAvatar} from './utils';
import {WidgetRegistry, MessageParser} from '../../../manager/helpers';
import {styles} from './styles';

interface ChatProps {
  state: ChatBotState;
  setState: Dispatch<any>;
  widgetRegistry: WidgetRegistry;
  messageParser: MessageParser;
}

export const Chat: FunctionComponent<ChatProps> = ({
  state,
  state: {messages},
  setState,
  widgetRegistry,
  messageParser,
}) => {
  const [showBtn, setShowBtn] = useState(false);
  const [input, setInputValue] = useState('');
  const scrollView = useRef<ScrollView>(null);
  const cmdInput = useRef<TextInput>(null);

  const handleChangeText = useCallback((text: string) => {
    setInputValue(text);
    setShowBtn(!!text.length);
  }, []);

  const handleSubmit = useCallback(() => {
    cmdInput.current?.clear();
    setShowBtn(false);
    setState({
      ...state,
      messages: [...state.messages, createChatMessage(input, 'user')],
    });

    messageParser.parse(input.toLowerCase());
    setInputValue('');
  }, [input, messageParser, state, setState]);

  const handleContentSizeChange = useCallback(
    (width, height) => scrollView.current?.scrollTo({y: height}),
    [],
  );

  return (
    <View style={styles.chatContainer}>
      <View style={styles.messageContainer}>
        <ScrollView
          ref={scrollView}
          onContentSizeChange={handleContentSizeChange}
          showsVerticalScrollIndicator={false}>
          {messages.map((messageItem, index) => {
            const withAvatar = showAvatar(messages, index);

            const chatBotMessageProps = {
              concreteMessageProps: {...messageItem},
              setState,
              state,
              widgetRegistry,
              messages,
            };

            if (!botMessage(messageItem)) {
              return (
                <UserChatMessage
                  key={index}
                  message={messageItem.messageText}
                  createDate={messageItem.createDate}
                />
              );
            }

            if (messageItem.widget) {
              return (
                <ChatBotMessageWithWidget
                  key={index}
                  withAvatar={withAvatar}
                  {...chatBotMessageProps}
                />
              );
            }

            return (
              <ChatBotMessage
                key={index}
                withAvatar={withAvatar}
                {...chatBotMessageProps.concreteMessageProps}
                messages={messages}
                setState={setState}
              />
            );
          })}
        </ScrollView>
      </View>
      <CommandList
        handleCommandSubmit={handleSubmit}
        setInputValue={setInputValue}
      />
      <View style={styles.inputContainer}>
        <TextInput
          ref={cmdInput}
          style={styles.inputField}
          placeholder="Type your message here..."
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmit}
        />
        {showBtn && (
          <Button
            buttonStyle={styles.sendButton}
            onPress={handleSubmit}
            icon={<Icon iconStyle={styles.buttonIcon} name="send" />}
          />
        )}
      </View>
    </View>
  );
};
