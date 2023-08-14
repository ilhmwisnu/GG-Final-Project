import { Box, Text } from "@chakra-ui/react";

const CommentItem = ({ username, comment, createdAt }) => {
  return (
    <Box borderBottom={"1px"} py={"12px"} borderColor={"gray.100"}>
      <Text fontSize={"12px"} fontWeight={"bold"}>
        {username}
      </Text>
      <Text fontWeight={"normal"} fontSize={"12px"}>
        {comment}
      </Text>
      <Text mt={"4px"} color={"gray.300"} fontSize={"10px"} textAlign={"right"}>
        {createdAt}
      </Text>
    </Box>
  );
};

export default CommentItem;
