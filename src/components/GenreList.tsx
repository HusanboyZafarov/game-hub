import {
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/img-url";
import useGameQueryStore from "../store";
import GenreItemSkeleton from "./GenreItemSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const activeBg = useColorModeValue("gray.100", "gray.700");
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
    <>
      <Heading mb={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {isLoading
          ? skeletons.map((skeleton) => (
              <GenreItemSkeleton
                opacity_num={skeleton}
                key={parseFloat(skeleton) * Math.random() * 10}
              />
            ))
          : data?.results.map((genre) => (
              <ListItem
                key={genre.id}
                padding="5px"
                marginY="4px"
                bg={
                  selectedGenreId !== null && selectedGenreId === genre.id
                    ? activeBg
                    : "transparent"
                }
                borderRadius={8}
                _hover={{
                  bg: hoverBg,
                  cursor: "pointer",
                }}
                _active={{ bg: activeBg }}
                onClick={() => setSelectedGenreId(genre.id)}
                pointerEvents={selectedGenreId === genre.id ? "none" : "auto"}
              >
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    src={getCroppedImgUrl(genre.image_background)}
                    objectFit="cover"
                  />
                  <Text fontSize="lg" variant="link">
                    {genre.name}
                  </Text>
                </HStack>
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default GenreList;
