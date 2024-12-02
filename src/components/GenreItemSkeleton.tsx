import { Skeleton, HStack } from "@chakra-ui/react";

interface Props {
  opacity_num: string;
}

const GenreItemSkeleton = ({ opacity_num }: Props) => {
  return (
    <HStack paddingY="5px" opacity={opacity_num}>
      <Skeleton height="32px" minWidth="32px" borderRadius={8} />
      <Skeleton height="5" width="100%" />
    </HStack>
  );
};

export default GenreItemSkeleton;
