import {
  Box,
  Grid,
  GridItem,
  AspectRatio,
  Text,
  Input,
  Flex,
  Img,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link, useParams } from "react-router-dom";
import ProductItem from "../components/product_item";
import PrimaryButton from "../components/primary_button";
import CommentItem from "../components/comment_item";
import useFetch from "../utils/use_fetch";
import { useEffect, useRef, useState } from "react";
import { client } from "../utils/http_client";

const VideoDetailPage = () => {
  let params = useParams();
  let video_id = params.video_id;

  let [ username, setUsername ] = useState()
  let [ userComment, setUserComment ] = useState()

  let [comments, setComments] = useState([]);

  let bottomComment = useRef()

  let {
    data: prodData,
    isLoading: isProdLoading,
    error: prodError,
  } = useFetch(`/video/${video_id}/product`);

  let { data: videoData, isLoading: isVideoLoading } = useFetch(
    `/video/${video_id}`
  );
  
  useEffect(() => {
    let getComments = async () => {
      let res = await client.get(`/video/${video_id}/comment`);
      let data = res.data.data;
      setComments(data);
      bottomComment?.current?.scrollIntoView({ behavior: 'smooth' })
    };

    setInterval(() => {
      getComments();
    }, 1000);
  }, [video_id]);

  let handleSubmit = async (e)=>{
    try {
      e.preventDefault()
      await client.post(`/video/${video_id}/comment`,{
        "username" : username,
        "comment" : userComment
      });
      setUsername('')
      setUserComment('')
    } catch (error) {
      console.error(error);
    }
  }

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
        gap={"16px"}
      >
        <Link to="/">
          <ArrowBackIcon fontSize={"2xl"} />
        </Link>
        <Link to="/">
          <Img
            height={16}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TlcMnE9vtRgjicAmg0e39wxVx3hGcGoYxKdfekBzqA&s"
          />
        </Link>
      </GridItem>
      <GridItem
        className="product_container"
        overflowY={"auto"}
        borderRight={"1px"}
        borderColor={"gray.100"}
        area={"prod"}
      >
        {isProdLoading &&
          [1, 2, 3, 4].map((e) => {
            return (
              <Skeleton
                key={e}
                borderRadius={"md"}
                m={"16px"}
                aspectRatio={3 / 4}
              />
            );
          })}
        {prodData &&
          prodData.map((p) => {
            return (
              <ProductItem
                key={p._id}
                prodUrl={p.product_link}
                price={p.price}
                name={p.title}
                imgUrl={p.img_url}
              ></ProductItem>
            );
          })}
        {prodError && (
          <Text p={"16px"} color={"red"} fontWeight={"normal"}>
            {prodError}
          </Text>
        )}
      </GridItem>
      <GridItem p={"16px"} height={"100%"} area={"main"}>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={`https://www.youtube.com/embed/${ videoData?.video_url?.split("/")[videoData?.video_url?.split("/").length - 1] }?autoplay=1`}
            title={videoData?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        {isVideoLoading ? (
          <SkeletonText />
        ) : (
          <Text fontWeight={"black"} mt={"24px"} as="h2" className="">
            {videoData?.title}
          </Text>
        )}
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
        <Box overflow={"auto"} flexGrow={1} >
          <Flex direction={"column"} px={"16px"}>
            {
              [...comments.map((c) => {
                return (
                  <CommentItem
                    key={c._id}
                    username={c.username}
                    comment={c.comment}
                    createdAt={new Date(c.created_at).toLocaleDateString("id", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  />
                );
              }), <div ref={bottomComment}></div> ]
            }
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
          <Input required fontSize={"14px"} value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Username" />
          <Input required fontSize={"14px"} value={userComment} onChange={(e)=> setUserComment(e.target.value)} placeholder="Comment" />
          <PrimaryButton onClick={handleSubmit}>Kirim</PrimaryButton>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default VideoDetailPage;
