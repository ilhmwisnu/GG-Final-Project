import { Text, Box, Img } from "@chakra-ui/react";

const ProductItem = ({ name, price, prodUrl, imgUrl }) => {
  return (
    <Box
      boxShadow={"base"}
      borderRadius={"md"}
      bg={"white"}
      padding={"12px"}
      m={"16px"}
    >
      <Img
        borderRadius={"base"}
        width={"full"}
        aspectRatio={1}
        src={ imgUrl }
        alt=""
      />
      <Text mt={"8px"} fontWeight={"normal"} fontSize={"14px"}>
        {name}
      </Text>
      <Text mb={"8px"} fontWeight={"bold"} fontSize={"14px"}>
        Rp {price}
      </Text>
      <a href={prodUrl}>
        <Box
          fontSize={"14px"}
          borderRadius={"md"}
          py={"8px"}
          bg={"#41b549"}
          textAlign={"center"}
          color={"white"}
          fontWeight={"bold"}
          w={"full"}
          px={"24px"}
        >
          Beli
        </Box>
      </a>
    </Box>
  );
};

export default ProductItem;
