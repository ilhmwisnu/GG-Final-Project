import { Button } from "@chakra-ui/react";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <Button
      fontWeight={"bold"}
      bg={"#41b549"}
      color={"white"}
      width={"full"}
      fontSize={14}
      onClick={onClick}
    >
      { children }
    </Button>
  );
};

export default PrimaryButton;
