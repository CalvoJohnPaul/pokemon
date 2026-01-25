import {Box, styled} from '@/styled-system/jsx';

export default function NotFound() {
  return (
    <Box py={16} display="flex" flexDir="column" alignItems="center">
      <styled.h1 fontSize="9xl" fontWeight="black" color="neutral.700">
        404
      </styled.h1>
    </Box>
  );
}
