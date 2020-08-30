import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'flex-start',
  },
  chatBotMessage: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    minWidth: 150,
    maxWidth: 250,
    textAlign: 'left',
  },
  chatBotMessageText: {
    color: 'white',
  },
});
