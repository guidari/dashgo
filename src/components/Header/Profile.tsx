import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Guilherme Datilio</Text>
        <Text color="gray.300" fontSize="small">
          guilhermedatilio@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Guilherme Datilio"
        src="https://github.com/guidari.png"
      />
    </Flex>
  );
}
