import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VideoItem = ({ thumbnail_url, title, desc, id }) => {
  return (
    <Link to={`/${id}`}>
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
        <Text textOverflow={"ellipsis"} noOfLines={1} color={"white"} fontWeight={"bold"} fontSize={16}>{ title }</Text>
        <Text textOverflow={"ellipsis"} noOfLines={1} color={"white"} fontWeight={"normal"} fontSize={16} >{ desc }</Text>
      </Box>
    </Link>
  );
};

export default VideoItem;
