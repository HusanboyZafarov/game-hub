import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesReponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setGames([]);
        setError(err.message);
      });
  });

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
