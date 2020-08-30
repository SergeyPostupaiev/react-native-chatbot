import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  chatMessageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 15,
  },
  chatMessage: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    minWidth: 150,
    maxWidth: 250,
  },
  chatMessageText: {
    color: 'white',
    textAlign: 'left',
  },
  chatMessageTime: {
    color: 'darkgrey',
    textAlign: 'right',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 12.5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
