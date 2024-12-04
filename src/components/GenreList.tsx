import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/img-url";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const activeBg = useColorModeValue("gray.200", "gray.600");
  const skeletons = [
    "1",
    "1",
    "0.75",
    "0.75",
    "0.5",
    "0.5",
    "0.25",
    "0.25",
    "0.1",
    "0.1",
  ];

  return (
    <List>
      {isLoading
        ? skeletons.map((skeleton) => (
            <GenreItemSkeleton
              opacity_num={skeleton}
              key={parseFloat(skeleton) * Math.random() * 10}
            />
          ))
        : data.map((genre) => (
            <ListItem
              key={genre.id}
              padding="5px"
              marginY="4px"
              bg={
                selectedGenre !== null && selectedGenre?.id === genre.id
                  ? activeBg
                  : "transparent"
              }
              borderRadius={8}
              _hover={{
                bg: hoverBg,
                cursor: "pointer",
              }}
              _active={{ bg: activeBg }}
              onClick={() => onSelectGenre(genre)}
            >
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImgUrl(genre.image_background)}
                />
                <Text fontSize="lg" variant="link">
                  {genre.name}
                </Text>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

export default GenreList;
