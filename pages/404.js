import React from "react";
import { Box, Typography, Button } from "@mui/material";
import NotFoundImg from "../assets/404.png";
import Image from "next/image";
import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        fontWeight: "bold",
        gap: "20px",
      }}
    >
      <Image src={NotFoundImg} width={300} height={250} />
      <Typography variant="h3">Page Not Found</Typography>
      <Button onClick={handleClick}>Go Home</Button>
    </Box>
  );
};

export default PageNotFound;
