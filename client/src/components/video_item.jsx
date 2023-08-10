import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VideoItem = ({ thumbnail_url, title, desc }) => {
  return (
    <Link to="/id">
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"end"}
        minW={"200px"}
        w="240px"
        h={"400px"}
        borderRadius={12}
        backgroundSize={"cover"}
        border={"1px"}
        p={"16px"}
        borderColor={"gray.100"}
        backgroundPosition={"center"}
        backgroundImage={
          `url("${thumbnail_url}")`
        }
      >
        <Text color={"white"} fontWeight={"bold"} fontSize={4}>{ title }</Text>
        <p>{ desc }</p>
      </Box>
    </Link>
  );
};

export default VideoItem;
