import { HStack, Img } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <HStack padding="10px">
      <Img
        style={{
          cursor: "pointer",
        }}
        src={logo}
        boxSize="60px"
        onClick={() => navigate("/")}
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
