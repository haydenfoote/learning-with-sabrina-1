import { useEffect } from "react";
import CardList from "../components/CardList";
import { useCardData } from "../components/Context";
import Router from "next/router";
// import { GetServerSideProps } from "next/types";

export default function Home() {
  const { isSignedIn } = useCardData();
  useEffect(() => {
    if (!isSignedIn) {
      Router.push("/signin");
    }
  }, []);
  return (
    <>
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
