import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ApiClient from "@/api/apiClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { useDispatch } from "react-redux";
import { setHeaderTitle } from "@/redux/slice";
import { chart, history, rupee, star } from "@/resources/images";
import Link from "next/link";
import BarChartIcon from '@mui/icons-material/BarChart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DehazeIcon from '@mui/icons-material/Dehaze';
import StarIcon from '@mui/icons-material/Star';
import ConditionalDownloadButton from "../ConditionalDownloadButton";
import Image from "next/image"
import styles from "../../styles/Home2.module.css";

const GaliDesawar = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("GALI DESAWAR"));
  }, []);

  const fetchInfo = () => {
    setLoading(true);
    ApiClient.galiGames()
      .then((res) => {
        setInfo(res?.data);
      })
      .catch((error) => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const renderHeader = () => {
    return (
      <div className=" px-4 justify-content-between align-items-center py-3">
        <ConditionalDownloadButton/>
        <div className="d-flex my-3 justify-content-between gap-3 ">

        {/* <Link href={info?.web_gali_disswar_chart_url ?? ""} className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center">
          <BarChartIcon />
          <b>Chart</b>
        </Link> */}

        <Link
          href={"/galidesawar/game-rates"}
          className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center"
          style={{ background: "#21A711" }}
        >
          <CurrencyRupeeIcon />
          <b>Game Rates</b>
        </Link>

      </div>
      <div className="d-flex my-3 justify-content-between gap-3 ">
        <Link
          style={{ background: "#D05141" }}
          href={"/galidesawar/bidding-history"}
          className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center"
        >
          <DehazeIcon/>
          <b>Bid History</b>
        </Link>
        <Link
          style={{ background: "#D05141" }}
          href={"/galidesawar/win-history"}
          className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center"
        >
          <StarIcon/>
          <b>Win History</b>
        </Link>
        </div>
        {/* <Link
          style={{ background: "red" }}
          href={isLoggedIn ? "/galidesawar" : "/login"}
          className="home-sl2-box m-auto text-center bold w-100"
        >
          <b>Gali Desawar Market</b>
        </Link> */}
        {/* <a
          href={info?.web_gali_disswar_chart_url}
          target="_blank"
          className="d-flex flex-column align-items-center justify-centent-center gap-1"
        >
          <BarChartIcon sx={{ fontSize: 50, width: 50, height: 50, color: '#00659E' }} />
          <div className="f-12">Chart</div>
        </a>
        <Link
          href={"/galidesawar/game-rates"}
          className="d-flex flex-column align-items-center justify-centent-center gap-1"
        >
          <CurrencyRupeeIcon sx={{ fontSize: 50, width: 50, height: 50, color: '#00659E' }} />
          <div className="f-12">Game Rates</div>
        </Link>
        <Link
          href={"/galidesawar/bidding-history"}
          className="d-flex flex-column align-items-center justify-centent-center gap-1"
        >
          <DehazeIcon sx={{ fontSize: 50, width: 50, height: 50, color: '#00659E' }} />
          <div className="f-12">Bid History</div>
        </Link>
        <Link
          href={"/galidesawar/win-history"}
          className="d-flex flex-column align-items-center justify-centent-center gap-1"
        >
          <StarIcon color="#00659E" sx={{ fontSize: 50, width: 50, height: 50, color: '#00659E' }} />
          <div className="f-12">Win History</div>
        </Link> */}
      </div>
    );
  };

  const renderGames = () => {
    return info?.result.map((a, index) => {
      let isClosed = a?.msg_status > 1;

      let { game_name, game_id, open_result } = a;

      return (
        <>
        {/* // <div key={index} className="game-list-inner d-flex justify-content-between my-2 p-3 px-4">
        //   <div className="my-auto">
        //     <div className="game-time pointer">
        //       <Link href={info?.web_gali_disswar_chart_url} target="_blank">
        //         <Image src={"/chart.png"} width={50} height={50} alt="chart" /> <br />
        //         Chart
        //       </Link>
        //     </div>
        //   </div>
        //   <div className="text-start d-flex justify-content-around flex-column">
        //     <span className="gameName bold mb-1 heading"> {game_name} </span>
        //     <div className="bold f-12 mb-1">{a.open_result || a.close_result || "XX"}</div>
        //     <div className="d-flex bold align-items-center gap-2 f-12">
        //       <span className="bold"> Market Status : </span>
        //       <div className={`${isClosed ? "gameoff" : "gameon"} bold`}>
        //         {a.msg == "Betting is closed for today" ? " Close" : " Running"}
        //       </div>
        //     </div>
        //     <div className="d-flex bold align-items-center gap-2 f-12">
        //       <span style={{marginTop: '10px'}} className="bold"> Close Time : </span>
        //       <div style={{marginTop: '10px'}} className= "bold">
        //       {a.open_time}
        //       </div>
        //     </div>
        //   </div>

        //   <div
        //     className="my-auto"
        //     onClick={() => {
        //       !isClosed && router.push(`galidesawar/${game_name}/${game_id}`);
        //     }}
        //   >
        //     <div className="game-play gray pointer">
        //       <PlayCircleIcon className={`${isClosed ? "text-danger" : "text-success"}`} />
        //       <br />
        //       <p
        //         style={{
        //           backgroundColor: isClosed ? "red" : "green",
        //           color: "white",
        //           width: "50px",
        //           borderRadius: "20px",
        //           margin: "auto",
        //         }}
        //       >
        //         {isClosed ? "Close" : "Play"}
        //       </p>
        //     </div>
        //   </div>
        // </div> */}

{/* <Link
            href={isAuthenticated ? a.web_chart_url : "/login"}
            target={isAuthenticated ? "_blank" : ""}
          > */}
            <div className="game-list-inner4 pt-2 pb-3 ps-2 pe-3 m-2 px-md-4 px-lg-5">
              <div className=" d-flex w-full align-items-center justify-content-between">
                <div>
                  <div
                    style={{
                      textAlign: "left",
                      fontWeight: 800,
                      fontSize: "13px",
                    }}
                  >
                    <span>{game_name}</span>
                  </div>
                  

                  <div className=" py-2" style={{ textAlign: "left" }}>
                    {/* <span className="fw-bold">{formatGameResult(game)}</span> */}
                    <div className="pt-1">
                    <span style={{fontWeight: "800"}}>{open_result ? open_result : "XX"}</span>
                    </div>
                    <div className="pt-2">
                      <div className="d-flex bold align-items-center justify-content-center gap-2 f-12">
                        <span className="bold text-black"> Market Status : </span>
                        <p
                          style={{ marginBottom: "0px" }}
                          className={`${isClosed ? "gameoff" : "gameon"} bold`}
                        >
                          {isClosed ? " Close" : " Running"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className="my-auto"
                    onClick={() => {
                      !isClosed && router.push(`galidesawar/${game_name}/${game_id}`);
                    }}
                  >
                    <div className="game-play gray pointer">
                      <PlayCircleIcon
                        style={{ fontSize: "45px" }}
                        className={`${
                          isClosed ? "text-danger" : "text-success"
                        }`}
                      />
                      <br />
                      <p
                        style={{
                          backgroundColor: isClosed ? "red" : "green",
                          color: "white",
                          width: "50px",
                          borderRadius: "20px",
                          margin: "auto",
                        }}
                      >
                        {isClosed ? "Closed" : "Play"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 gap-5">

                <Link href={`https://backend.zara777.in/gali-game-result-chart/${a.game_id}`} target="_blank" >
                
                <div className={styles.chart_btn}>Jodi Chart</div>
                </Link>

                {/* <div className={styles.chart_btn}>Jodi Chart</div> */}
              </div>

              <hr />

              <div className="d-flex justify-content-center">
                <div className="px-1">
                  <span>Close Time:</span>
                  <span className="fw-bold">{a.open_time}</span>
                </div>
              </div>
            </div>
          {/* </Link> */}


        </>
      );
    });
  };

  return (
    <div className="maxWidth px-3 text-center">
      {renderHeader()}
      <div className="container">
      <div className="text-center d-flex  flex-wrap   mt-5">
      {renderGames()}
      </div>
      </div>

      <Loader show={loading} />
    </div>
  );
};

export default GaliDesawar;
