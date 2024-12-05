import { HStack, Img } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <HStack padding='10px'>
      <Img src={logo} boxSize='60px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
