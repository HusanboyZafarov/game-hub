import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 75
      ? "green"
      : score > 50 && score < 75
      ? "yellow"
      : score > 25 && score < 50
      ? "orange"
      : "red";
  return (
    <Badge
      colorScheme={color}
      paddingX={2}
      paddingY={0.5}
      fontSize="14px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
