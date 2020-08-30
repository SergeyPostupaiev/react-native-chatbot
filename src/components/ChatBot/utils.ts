import {ChatBotConfigsObject} from '../manager/helpers';

export const getInitialState = (ChatBotConfigs: ChatBotConfigsObject) => ({
  ...ChatBotConfigs.state,
  messages: [...ChatBotConfigs.initialMessages],
});
