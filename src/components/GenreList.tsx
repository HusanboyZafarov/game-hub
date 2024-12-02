import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/img-url";
import GenreItemSkeleton from "./GenreItemSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
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
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImgUrl(genre.image_background)}
                />
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};

export default GenreList;
