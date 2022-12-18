import { TextField, Typography, Box, Button } from "@mui/material";
import React from "react";
import { useCardData } from "../components/Context";
import Router from "next/router";

const Signin = () => {
  const { setIsSignedIn } = useCardData();
  const handleSignIn = () => {
    setIsSignedIn(true);
    Router.push("/");
  };
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        Sign In
      </Typography>
      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField
          fullWidth
          id="login"
          variant="outlined"
          size="small"
          placeholder="User Name"
        />
        <TextField
          fullWidth
          id="password"
          variant="outlined"
          size="small"
          placeholder="Password"
        />
      </Box>
      <Button onClick={handleSignIn}>Sign In</Button>
    </Box>
  );
};

export default Signin;
