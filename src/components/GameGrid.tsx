import { Alert, AlertIcon, AlertTitle, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = [
    "1",
    "1",
    "0.75",
    "0.75",
    "0.5",
    "0.25",
    "0.25",
    "0.1",
    "0.1",
  ];

  if (error)
    return (
      <Alert status="error" sx={{ borderRadius: "10px 0px 0px 10px" }}>
        <AlertIcon />
        <AlertTitle>{error}</AlertTitle>
      </Alert>
    );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={3}
      marginTop={3}
    >
      {isLoading
        ? skeletons.map((skeleton) => (
            <GameCardContainer key={parseFloat(skeleton) * Math.random() * 10}>
              <GameCardSkeleton opacity_num={skeleton} />{" "}
            </GameCardContainer>
          ))
        : data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
