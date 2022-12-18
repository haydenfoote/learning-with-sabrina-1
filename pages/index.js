import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { Box } from "@mui/system";
import { useEffect } from "react";
import CardList from "../components/CardList";
import { useCardData } from "../components/Context";
import Router from "next/router";

export default function Home() {
  const { isSignedIn } = useCardData();
  useEffect(() => {
    if (!isSignedIn) {
      Router.push("/signin");
    }
  }, []);
  return (
    <>
      (<CardList />)
    </>
  );
}
