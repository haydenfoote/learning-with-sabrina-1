import { TextField, Typography, Box, Button, FormControl } from "@mui/material";
import React, { useState } from "react";
import { useCardData } from "../components/Context";
import Router from "next/router";
import validator from "validator";

const Signin = () => {
  const { setIsSignedIn } = useCardData();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorExists, setErrorExists] = useState(false);
  const userNameError = "Please enter your email for UserName";
  const passwordError =
    "Please make sure that your password is minimum of length 8, and has letters and numbers";

  const hasNumbers = (myString) => {
    return /\d/.test(myString);
  };
  const hasLetters = (myString) => {
    return /[a-z]/.test(myString);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      validator.isEmail(userName) &&
      validator.isLength(password, { min: 8, max: 16 }) &&
      hasLetters(password) &&
      hasNumbers(password)
    ) {
      alert("Successfully Signed In");
      setIsSignedIn(true);
      Router.push("/");
    } else {
      console.log("Error is detected");
      setErrorExists(true);
    }
  };
  const handleClearAll = () => {
    setUserName("");
    setPassword("");
    setErrorExists(false);
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
      <form onSubmit={handleSubmit}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Sign In
        </Typography>
        <Typography variant="h5">Pages\signin.js</Typography>
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
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setErrorExists(false);
            }}
          />
          <Typography variant="h6">
            onChange setUserName state is set and setErrorExists state set to
            false
          </Typography>
          <TextField
            fullWidth
            id="password"
            variant="outlined"
            size="small"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorExists(false);
            }}
          />
        </Box>
        {errorExists && (
          <Typography sx={{ color: "red" }}>Please check the inputs</Typography>
        )}
        <Button type="submit" disabled={errorExists}>
          Sign In
        </Button>
        <Button onClick={handleClearAll}>Clear All</Button>
      </form>
    </Box>
  );
};

export default Signin;
