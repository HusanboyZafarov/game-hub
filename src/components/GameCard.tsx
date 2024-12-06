import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImgUrl from "../services/img-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card key={game.id}>
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
        <Heading fontSize="2xl">
          {game.name.length > 20 ? game.name.slice(0, 20) + " ..." : game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
