import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  messageContainer: {
    flex: 1,
    paddingHorizontal: 17,
  },
  inputField: {
    flex: 1,
    textAlign: 'right',
    paddingHorizontal: 20,
  },
  sendButton: {
    width: 50,
    backgroundColor: /*AppColors.GREEN*/ 'green',
  },
  buttonIcon: {
    color: /*AppColors.WHITE*/ 'white',
  },
  keyboardAvoiding: {
    flex: 1,
  },
});
