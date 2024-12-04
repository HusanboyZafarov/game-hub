import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  return (
    <>
      {error ? (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          <AlertTitle>Failed!</AlertTitle>
          <AlertDescription>
            Failed to load platforms. We have problems with server or check your
            connection, please!
          </AlertDescription>
        </Alert>
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem key={platform.id} onClick={() => console.log(platform)}>
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default PlatformSelector;
