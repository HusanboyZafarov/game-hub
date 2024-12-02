import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {
  opacity_num: string;
}

const GameCardSkeleton = ({ opacity_num }: Props) => {
  return (
    <Card opacity={opacity_num}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
