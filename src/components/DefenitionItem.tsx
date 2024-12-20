import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefenitionItem = ({ term, children }: Props) => {
  return (
    <Box my={5}>
      <Heading as="dt" fontSize="xl" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefenitionItem;
