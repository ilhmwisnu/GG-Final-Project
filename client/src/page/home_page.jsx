import { Box, InputGroup,Input, Grid, InputLeftElement, Flex } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons'

import VideoItem from "../components/video_item";

const HomePage = () => {
  return (
    <Box mx={"80px"}>
      <Flex alignItems={"center"} py={"16px"} gap={4}>
        <img width={"80px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TlcMnE9vtRgjicAmg0e39wxVx3hGcGoYxKdfekBzqA&s" alt="" />
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Cari" />
        </InputGroup>
      </Flex>
      <Grid
        mb={"32px"}
        justifyContent={"space-between"}
        gap={"16px"}
        templateColumns="repeat(auto-fit, 240px)"
        templateRows="repeat(auto-fit,400px)"
      >
        {
          [1,2,3,4,5,6,7,8].map((v)=>{
            return <VideoItem title={"Title"} desc={"Description"} thumbnail_url={"https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"}/>
          })
        }
        <VideoItem></VideoItem>
      </Grid>
    </Box>
  );
};

export default HomePage;
