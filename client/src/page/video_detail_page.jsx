import { Box, Grid, GridItem, AspectRatio } from "@chakra-ui/react";

const VideoDetailPage = () => {
  return (
    <Grid
      templateAreas={`"header header header"
                    "prod main comment "`}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={"300px 1fr 300px"}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      height={"100vh"}
    >
      <GridItem bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem bg="pink.300" area={"prod"}>
        Prod
      </GridItem>
      <GridItem bg="green.300"  height={"100%"} area={"main"}>
        <AspectRatio my={"auto"} ratio={16 / 9}>
          <iframe
            height={"100%"}
            width={"100%"}
            src="https://youtube.com/embed/Qzcc-FWv0cM?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </AspectRatio>
        <h2 className="">Title</h2>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident error, cumque ab blanditiis possimus enim corporis sint aspernatur. Beatae?</p>
      </GridItem>
      <GridItem
        pl="2"
        bg="green.300"
        display="flex"
        flexDirection={"column"}
        area={"comment"}
      >
        <Box flex={1} className="">
          Comments
        </Box>
        <div className="">Add Comment</div>
      </GridItem>
    </Grid>
  );
};

export default VideoDetailPage;
