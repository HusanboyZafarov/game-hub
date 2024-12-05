import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={8} placeholder={'Sarch games...'} variant='filled' />
    </InputGroup>
  );
};

export default SearchInput;
