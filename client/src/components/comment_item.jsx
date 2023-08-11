import { Box, Text } from "@chakra-ui/react";

const CommentItem = ({ username, comment, createdAt }) => {
  return ( <Box borderBottom={"1px"} py={"12px"} borderColor={"gray.100"} >
    <Text fontSize={"12px"} fontWeight={"bold"} >Username</Text>
    <Text fontWeight={"normal"} fontSize={"12px"} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error neque fuga sit enim repellat hic voluptatibus nam, iusto repellendus dolorem.</Text>
    <Text mt={"4px"} color={"gray.300"} fontSize={"10px"} textAlign={"right"} >10-10-2023</Text>
  </Box> );
}
 
export default CommentItem;