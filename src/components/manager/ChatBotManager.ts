import React from 'react';
import {
  ChatBotConfigs,
  ChatBotConfigsObject,
  ActionProvider,
  MessageParser,
  WidgetRegistry,
} from './helpers';

export class ChatBotManager {
  static ChatBotConfigs: ChatBotConfigsObject = ChatBotConfigs;
  actionProvider: ActionProvider;
  messageParser: MessageParser;
  widgetRegistry: WidgetRegistry;

  constructor(setState: React.Dispatch<any>) {
    this.actionProvider = new ActionProvider(setState);
    this.widgetRegistry = new WidgetRegistry(
      setState,
      this.actionProvider,
      ChatBotManager.ChatBotConfigs,
    );
    this.messageParser = new MessageParser();

    this.subscribeCommands();
  }

  subscribeCommands() {
    this.messageParser.helpCommandEvent.subscribe(
      this.actionProvider.handleHelpCommand,
    );
    this.messageParser.productsCommandEvent.subscribe(
      this.actionProvider.handleProductsCommand,
    );
    this.messageParser.greetCommandEvent.subscribe(
      this.actionProvider.handleGreetingCommand,
    );
    this.messageParser.defaultCommandEvent.subscribe(
      this.actionProvider.handleDefaultCommand,
    );
  }
}
