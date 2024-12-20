import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshoots from "../hooks/useScreenshoots";

interface Props {
  gameId: number;
}

const GameScreenshoots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshoots(gameId);
  console.log(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshoots;
