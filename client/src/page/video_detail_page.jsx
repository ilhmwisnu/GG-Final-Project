import {
  Box,
  Grid,
  GridItem,
  AspectRatio,
  Text,
  Input,
  Flex,
  Img,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductItem from "../components/product_item";
import PrimaryButton from "../components/primary_button";
import CommentItem from "../components/comment_item";

const VideoDetailPage = () => {
  return (
    <Grid
      templateAreas={`"header header header"
                    "prod main comment "`}
      gridTemplateRows={"64px 1fr"}
      gridTemplateColumns={"250px 1fr 350px"}
      gapx="1"
      color="blackAlpha.700"
      fontWeight="bold"
      height={"100vh"}
    >
      <GridItem
        p={"16px"}
        alignItems={"center"}
        display={"flex"}
        borderBottom={"1px"}
        borderColor={"gray.100"}
        area={"header"}
      >
        <Link to="/">
          <Img
            height={16}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TlcMnE9vtRgjicAmg0e39wxVx3hGcGoYxKdfekBzqA&s"
            alt=""
          />
        </Link>
      </GridItem>
      <GridItem
        overflowY={"auto"}
        borderRight={"1px"}
        borderColor={"gray.100"}
        area={"prod"}
      >
        <ProductItem price={10000} name="Nama Produk" imgUrl={""}></ProductItem>
        <ProductItem price={10000} name="Nama Produk" imgUrl={""}></ProductItem>
        <ProductItem price={10000} name="Nama Produk" imgUrl={""}></ProductItem>
        <ProductItem price={10000} name="Nama Produk" imgUrl={""}></ProductItem>
        <ProductItem price={10000} name="Nama Produk" imgUrl={""}></ProductItem>
      </GridItem>
      <GridItem p={"16px"} height={"100%"} area={"main"}>
        <AspectRatio my={"auto"} ratio={16 / 9}>
          <iframe
            height={"100%"}
            width={"100%"}
            src="https://youtube.com/embed/Qzcc-FWv0cM?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <Text fontWeight={"black"} mt={"24px"} as="h2" className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          nihil?
        </Text>
        <Text mt={"8px"} fontWeight={"normal"} className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident
          error, cumque ab blanditiis possimus enim corporis sint aspernatur.
          Beatae?
        </Text>
      </GridItem>
      <GridItem
        borderLeft={"1px"}
        borderColor={"gray.100"}
        bg=""
        display="flex"
        flexDirection={"column"}
        area={"comment"}
        overflowY={"hidden"}
      >
        <Text boxShadow={"sm"} p="16px" fontSize={"18px"}>
          Comments
        </Text>
        <Box overflow={"auto"} flexGrow={1}>
          <Flex direction={"column"} px={"16px"}>
            {[1, 2, 3, 4, 5, 6, 7].map((c) => {
              return <CommentItem />;
            })}
          </Flex>
        </Box>
        <Flex
          position={"relative"}
          borderTop={"1px"}
          p={"16px"}
          borderColor={"gray.100"}
          flexDirection="column"
          gap={"8px"}
          className=""
        >
          <Input fontSize={"14px"} placeholder="Username" />
          <Input fontSize={"14px"} placeholder="Comment" />
          <PrimaryButton>Kirim</PrimaryButton>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default VideoDetailPage;
