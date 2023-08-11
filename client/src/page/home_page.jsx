import {
  Box,
  InputGroup,
  Input,
  Grid,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import VideoItem from "../components/video_item";
import { useEffect, useState } from "react";
import { client } from "../utils/http_client";

const HomePage = () => {
  let [keyword, setKeyword] = useState(null);
  let [data, setData] = useState([]);

  let getData = async () => {
    let res = await client.get(`/video?keyword=${keyword ?? ""}`);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, [keyword]);

  function handleSearch(e) {
    setKeyword(e.target.value);
  }

  return (
    <Box mx={"80px"}>
      <Flex alignItems={"center"} py={"16px"} gap={4}>
        <img
          width={"80px"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TlcMnE9vtRgjicAmg0e39wxVx3hGcGoYxKdfekBzqA&s"
          alt=""
        />
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" onChange={handleSearch} placeholder="Cari" />
        </InputGroup>
      </Flex>
      <Grid
        mb={"32px"}
        justifyContent={"center"}
        gap={"16px"}
        templateColumns="repeat(auto-fit, 240px)"
        templateRows="repeat(auto-fit,400px)"
      >
        {data &&
          data.map((v) => {
            return (
              <VideoItem
                key={v._id}
                id={v._id}
                title={v.title}
                thumbnail_url={v.img_url}
              />
            );
          })}
      </Grid>
    </Box>
  );
};

export default HomePage;
