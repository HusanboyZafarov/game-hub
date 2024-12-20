import {
  Alert,
  AlertIcon,
  AlertTitle,
  Center,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { error, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGames();

  if (error)
    return (
      <Alert status="error" sx={{ borderRadius: "10px 0px 0px 10px" }}>
        <AlertIcon />
        <AlertTitle>{error.message}</AlertTitle>
      </Alert>
    );

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <Center>
          <Spinner marginY={5} />
        </Center>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        marginTop={3}
      >
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
