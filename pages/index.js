import HomeMain from "@/components/HomeMain";
import HomeMain2 from "@/components/HomeMain2";
import MovingText from "@/components/MovingText";
import { getSetData } from "@/utils";
import Head from "next/head"; // Import Head from next/head
import React from "react";

function Home() {
  const checkUserToken = getSetData("token");
  const isLoggedIn = Boolean(checkUserToken);

  return (
    <div>
      <Head>
        <title>Play Satta Matka on ZARA777 – Win Big Today</title>

        <meta
          name="description"
          content="The trusted online matka app in India with fast results. Play now and enjoy quick wins and exciting games like Madhur Matka, Milan Matka, Gali Matka and more!"
        />
        {/* Set your page title */}

        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="https://zara777.in/"/>
      </Head>
      {/* <MovingText /> */}
      {isLoggedIn ? <HomeMain /> : <HomeMain2 />}

      {/* bottom view start */}

      {/* bottom view end */}
    </div>
  );
}

export default Home;
