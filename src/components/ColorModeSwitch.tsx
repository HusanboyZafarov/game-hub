import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text whiteSpace='nowrap'>
        {colorMode === 'dark' ? 'Dark mode' : 'Light mode'}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
