import { useEffect } from "react";
import CardList from "../components/CardList";
import Router from "next/router";
import { Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../store";
// import { GetServerSideProps } from "next/types";

export default function Home() {
  const authorised = useAppSelector((state) => state.user.authorised);
  useEffect(() => {
    if (!authorised) {
      Router.push("/signin");
    }
  }, [authorised]);
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
