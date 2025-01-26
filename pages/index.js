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
        <title>
          ZARA777 | The Best Online Satta Matka App for Fun and Wins
        </title>
        {/* Set your page title */}
      </Head>
      {/* <MovingText /> */}
      {isLoggedIn ? <HomeMain /> : <HomeMain2 />}

      {/* bottom view start */}

      {/* bottom view end */}
    </div>
  );
}

export default Home;
