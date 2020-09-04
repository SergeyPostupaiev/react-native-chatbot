import React, {
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import {Button} from 'react-native-elements';
import {styles} from './styles';

interface CommandButtonProps {
  handleCommandSubmit: () => void;
  setInputValue: Dispatch<SetStateAction<string>>;
  command: {[key: string]: string};
}

export const CommandButton: FunctionComponent<CommandButtonProps> = ({
  handleCommandSubmit,
  setInputValue,
  command: {value, label},
}) => {
  const handleButtonPress = useCallback(() => {
    setInputValue(value);
    handleCommandSubmit();
  }, [handleCommandSubmit, setInputValue, value]);

  return (
    <Button
      buttonStyle={styles.commandButton}
      titleStyle={styles.commandButtonTitle}
      title={label}
      onPress={handleButtonPress}
    />
  );
};
