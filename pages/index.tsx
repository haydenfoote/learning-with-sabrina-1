import { useEffect } from "react";
import CardList from "../components/CardList";
import { useCardData } from "../components/Context";
import Router from "next/router";
import { Typography } from "@mui/material";
import React from "react";
// import { GetServerSideProps } from "next/types";

export default function Home() {
  const { isSignedIn } = useCardData();
  useEffect(() => {
    if (!isSignedIn) {
      Router.push("/signin");
    }
  }, [isSignedIn]);
  return (
    <>
      <Typography variant="h6">
        index.js calls CardList component if isSignedIn is true
      </Typography>
      <CardList />
    </>
  );
}

// export async function GetServerSideProps(context) {
//   if (!isSignedIn) {
//     return {
//       redirect: {
//         destination: "/signin",
//       },
//     };
//   }
// }
