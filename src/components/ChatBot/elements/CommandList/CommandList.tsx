import React, {FunctionComponent, Dispatch, SetStateAction} from 'react';
import {View, ScrollView} from 'react-native';
import {CommandButton} from './elements';
import {Commands} from '../../../manager/commands';
import {styles} from './styles';

const commands = [
  {value: Commands.HELP, label: 'help'},
  {value: Commands.PRODUCTS, label: 'show products'},
];

interface CommandListProps {
  handleCommandSubmit: () => void;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const CommandList: FunctionComponent<CommandListProps> = ({
  handleCommandSubmit,
  setInputValue,
}) => {
  return (
    <View style={styles.commandContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        {commands.map((commandItem, index) => (
          <CommandButton
            key={index}
            command={commandItem}
            handleCommandSubmit={handleCommandSubmit}
            setInputValue={setInputValue}
          />
        ))}
      </ScrollView>
    </View>
  );
};
