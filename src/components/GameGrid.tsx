import { Alert, AlertIcon, AlertTitle, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre);
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
      {error && (
        <Alert status="error" sx={{ borderRadius: "10px 0px 0px 10px" }}>
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        marginTop={2}
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer
                key={parseFloat(skeleton) * Math.random() * 10}
              >
                <GameCardSkeleton opacity_num={skeleton} />{" "}
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
