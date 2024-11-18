import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && (
        <Alert status="error" sx={{ borderRadius: "10px 0px 0px 10px" }}>
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
