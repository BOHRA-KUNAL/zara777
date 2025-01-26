import Link from "next/link";
import Info from "./Info";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ApiClient from "@/api/apiClient";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Loader from "./Loader";
import { useRouter } from "next/router";
import { getSetData } from "@/utils";
import {
  addmoney_icon,
  addMoneyIcon,
  bgImage,
  call_icon,
  whatsapp_icon,
  whatsappIcon,
} from "@/resources/images";

import ModalComponent from "./Moda";
import Howtoplay from "@/pages/howtoplay";
import { useSelector } from "react-redux";
import { withdrawlicon } from "@/resources/images";
import { setContactDetails } from "@/redux/slice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import styles from "../styles/Home2.module.css";

const HomeMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const modalVisibleDetails = getSetData("closeModal");

  const [data, setData] = useState({});
  const [datawl, setDatawl] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [SlidingText, setSlidingText] = useState(null);
  const [contactDetails, setContactDetailsData] = useState({});
  const router = useRouter();
  const audioRef = useRef(null);
  const query = router.query;
  const [userData, setUserData] = useState(null);

  // console.log("userD----",userData)
  const [isClient, setIsClient] = useState(false);
  const { user_id } = getSetData("userData", false, true);
  const [error, setError] = useState(null);

  const reduxData = useSelector((state) => state?.data);
  const { contact_details } = reduxData;

  console.log("contact---?>>", contact_details);
  const dispatch = useDispatch();

  let info = data?.result || [];
  let infowl = datawl?.result || [];

  useEffect(() => {
    const checkAuth = () => {
      const token = getSetData("token");
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    setModalVisible(!modalVisibleDetails);
  }, [modalVisibleDetails]);

  const getUserProfile = () => {
    setIsLoading(true);
    setError(null);
    let payload = {
      user_id: user_id,
    };

    ApiClient.userProfile(payload)
      .then((res) => {
        if (res?.data?.profile[0]) {
          setUserData(res.data.profile[0]);
        } else {
          setError("No profile data found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch user profile");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUserProfile();
    setIsClient(true);
  }, []);

  const getContactData = () => {
    ApiClient.getContactDetails()
      .then((res) => {
        if (res?.data?.data && res?.data?.data[0]) {
          let data = res?.data?.data[0];
          dispatch(setContactDetails(data));
          setContactDetailsData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchInfo();
    } else {
      fetchpublicGames();
    }
    fetChImages();
    fetchSliderText();
    getContactData();
  }, [isAuthenticated]);

  useEffect(() => {
    if (query.welcomesound === "true" && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          router.replace(router.pathname, undefined, { shallow: true });
        })
        .catch((error) => {
          console.error("Audio playback failed:", error);
        });
    }
  }, [query.welcomesound, router]);

  useEffect(() => {
    if (query.transaction === "true") {
      Swal.fire({
        title: "Success!",
        text: "Payment Successful!",
        icon: "success",
      });
    } else if (query.transaction === "false") {
      Swal.fire({
        title: "Oops!",
        text: "Payment Failed!",
        icon: "error",
      });
    }

    if (query.transaction) {
      const newUrl =
        router.pathname +
        router.asPath.replace(/(\?|&)transaction=[^&]*(&|$)/, "$1");
      router.replace(newUrl, undefined, { shallow: true });
    }
  }, [query.transaction]);

  const fetchInfo = () => {
    setLoading(true);
    ApiClient.dashbordInfo()
      .then((res) => {
        setData(res?.data);
        let newData = structuredClone(res?.data);
        delete newData.result;
        getSetData("basicDetails", newData || {}, true);
      })
      .catch((error) => {
        console.error("Error fetching dashboard info:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchpublicGames = () => {
    ApiClient.indexPageGames()
      .then((res) => {
        setDatawl({ result: res.data.game_result });
      })
      .catch((error) => {
        console.error("Error fetching public games:", error);
      });
  };

  const fetchSliderText = () => {
    ApiClient.getSliderText({
      app_key: "@34@Y#456)D9)(JE4dsj36f$%#(zara777!in)8fe8345*&^ef8ef8",
    })
      .then((res) => {
        setSlidingText(res.data.content.newsText);
      })
      .catch((err) => {
        console.error("Error fetching slider text:", err);
      });
  };

  const fetChImages = () => {
    ApiClient.homeSliderImages({
      app_key: "@34@Y#456)D9)(JE4dsj36f$%#(zara777!in)8fe8345*&^ef8ef8",
    })
      .then((res) => {
        if (res?.data?.status && Array.isArray(res.data.sliderdata)) {
          setSliderImages(res.data.sliderdata);
        } else {
          console.error("Invalid slider data format:", res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching slider images:", err);
      });
  };

  const dataCard = (a) => {
    let isClosed = a?.msg_status > 1;
    if (isAuthenticated) {
      return (
        <>
          <div className="d-flex text-center w-100 justify-content-center f-12 gap-2">
            <span className="nowrap"> Open: {a?.open_time}</span>
            <span className="nowrap"> Close: {a?.close_time}</span>
          </div>
          <div className="d-flex bold align-items-center justify-content-center gap-2 f-12">
            <span className="bold"> Market Status : </span>
            <p className={`${isClosed ? "gameoff" : "gameon"} bold`}>
              {isClosed ? " Close" : " Running"}
            </p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="d-flex text-center w-100 justify-content-center f-12 gap-3">
            <span> Open: {a?.openTime}</span>
            <span> Close: {a?.closeTime}</span>
          </div>
        </>
      );
    }
  };

  // const showInfoModal = () => {
  //   if (!isAuthenticated) {
  //     return <></>;
  //   }
  //   return (
  //     <ModalComponent
  //       setShow={(res) => {
  //         setModalVisible(res);
  //         getSetData("closeModal", !res);
  //       }}
  //       show={modalVisible}
  //     >
  //       <Howtoplay />
  //     </ModalComponent>
  //   );
  // };

  const formatGameResult = (game) => {
    const { openNumber, openResult, closeResult, closeNumber } = game;

    const format = (value, defaultValue) => {
      if (value === "***") return "XXX";
      if (value === "*") return "X";
      if (value === "0" || value === 0) return "0";
      return value || defaultValue;
    };

    const formattedOpen = format(openNumber, "XXX");
    const formattedOpenResult = format(openResult, "X");
    const formattedCloseResult = format(closeResult, "X");
    const formattedClose = format(closeNumber, "XXX");

    return `${formattedOpen} - ${formattedOpenResult} ${formattedCloseResult} - ${formattedClose}`;
  };

  const renderGameswithoutlogin = () => {
    return infowl.map((game, index) => {
      const isClosed =
        new Date() > new Date(`${new Date().toDateString()} ${game.closeTime}`);
      const { game_name, openTime, closeTime } = game;

      return (
        <div
          key={index}
          className="game-list-inner d-flex justify-content-between ps-2 pe-3 px-md-4 px-lg-5"
        >
          <div className="my-auto">
            <div className="game-time pointer">
              <Link
                href={isAuthenticated ? `/chart/${game_name}` : "/login"}
                target={isAuthenticated ? "_blank" : ""}
              >
                <Image src={"/chart.png"} width={50} height={50} alt="chart" />{" "}
                <br />
                Chart
              </Link>
            </div>
          </div>
          <div className="my-auto">
            <div className="game-list-box">
              <span className="gameName bold mb-1 heading">{game_name}</span>
              <div className="bold f-15 mb-1">{formatGameResult(game)}</div>
              <div>
                Open: {openTime} | Close: {closeTime}
              </div>
            </div>
          </div>
          <div
            className="my-auto"
            onClick={() => {
              if (!isClosed && isAuthenticated) {
                router.push({
                  pathname: `/game-dashboard/${game_name}`,
                  query: { data: JSON.stringify(game) },
                });
              } else if (!isAuthenticated) {
                window.location.href =
                  "https://backend.zara777.in/logo/Jodi_Play.apk";
              }
            }}
          >
            <div className="game-play gray pointer">
              <PlayCircleIcon
                className={`${isClosed ? "text-danger" : "text-success"}`}
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
      );
    });
  };

  const renderGames = () => {
    return info?.map((a, index) => {
      let isClosed = a?.msg_status > 1;
      let { game_name, game_id, close_result, open_result } = a;

      return (
        <>
          {/* <div
          key={index}
          className="game-list-inner d-flex justify-content-between ps-2 pe-3 px-md-4 px-lg-5"
        >
          <div className="my-auto">
            <div className="game-time pointer">
              <Link
                href={isAuthenticated ? a.web_chart_url : "/login"}
                target={isAuthenticated ? "_blank" : ""}
              >
                <Image src={"/chart.png"} width={50} height={50} alt="chart" />{" "}
                <br />
                Chart
              </Link>
            </div>
          </div>

          <div className="my-auto">
            <div className="game-list-box">
              <span className="gameName bold mb-1 heading"> {game_name} </span>
              <div className="bold f-15 mb-1">
                {open_result || "XXX - X"}
                {close_result || "X - XXX"}
              </div>
              {dataCard(a)}
            </div>
          </div>

          <div
            className="my-auto"
            onClick={() => {
              let route = isAuthenticated
                ? `/game-dashboard/${game_name}/${game_id}`
                : "/login";
              !isClosed &&
                router.push({
                  pathname: route,
                  query: { data: JSON.stringify(a) },
                });
            }}
          >
            <div className="game-play gray pointer">
              <PlayCircleIcon
                className={`${isClosed ? "text-danger" : "text-success"}`}
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
                {isClosed ? "Close" : "Play"}
              </p>
            </div>
          </div>
        </div> */}

          <div className="game-list-inner pt-3 pb-3 ps-2 pe-3 m-2 px-md-4 px-lg-5">
            <div className=" d-flex w-full align-items-center justify-content-between">
              <div>
                <div>
                  <span className="bold f-15">{game_name}</span>
                  <div style={{textAlign: "left"}} className="bold f-15 pt-3 mb-1">
                    {open_result || "XXX - X"}
                    {close_result || "X - XXX"}
                  </div>

                  <div style={{textAlign: "left"}} className="pt-2">
                    <span className="fw-bold">Market Status:</span>
                    <span className={`${isClosed ? "gameoff" : "gameon"} bold`}>
                      {isClosed ? " Close" : " Running"}
                    </span>
                    {/* <p className={`${isClosed ? "gameoff" : "gameon"} bold`}>
              {isClosed ? " Close" : " Running"}
            </p> */}
                  </div>
                </div>

                <div className="py-2">
                  {/* <span>{formatGameResult(game)}</span> */}
                </div>
              </div>

              <div>
                <div
                  className="my-auto"
                  onClick={() => {
                    let route = isAuthenticated
                      ? `/game-dashboard/${game_name}/${game_id}`
                      : "/login";
                    !isClosed &&
                      router.push({
                        pathname: route,
                        query: { data: JSON.stringify(a) },
                      });
                  }}
                >
                  <div className="game-play gray pointer">
                    <PlayCircleIcon
                      style={{ fontSize: "45px" }}
                      className={`${isClosed ? "text-danger" : "text-success"}`}
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

            <div className="d-flex justify-content-center gap-5">
              <Link
                href={isAuthenticated ? a.web_chart_url : "/login"}
                target={isAuthenticated ? "_blank" : ""}
                style={{ width: "100%" }}
              >
                <div className={styles.chart_btn}>Pana Chart</div>
              </Link>

              {/* <div className={styles.chart_btn}>Jodi Chart</div> */}
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <div className="px-1">
                <span>Open Bids:</span>{" "}
                <span className="fw-bold">{a?.open_time}</span>
              </div>
              <div className="px-1">
                <span>Close Bids:</span>{" "}
                {/* <span className="fw-bold">{closeTime}</span> */}
                <span className="fw-bold">{a?.close_time}</span>
              </div>
            </div>
          </div>
        </>
      );
    });
  };
  // const renderGames = () => {
  //   return info?.map((a, index) => {
  //     let isClosed = a?.msg_status > 1;
  //     let { game_name, game_id, close_result, open_result } = a;

  //     return (
  //       <div
  //         key={index}
  //         className="game-list-inner d-flex justify-content-between ps-2 pe-3 px-md-4 px-lg-5"
  //       >
  //         <div className="my-auto">
  //           <div className="game-time pointer">
  //             <Link
  //               href={isAuthenticated ? a.web_chart_url : "/login"}
  //               target={isAuthenticated ? "_blank" : ""}
  //             >
  //               <Image src={"/chart.png"} width={50} height={50} alt="chart" />{" "}
  //               <br />
  //               Chart
  //             </Link>
  //           </div>
  //         </div>

  //         <div className="my-auto">
  //           <div className="game-list-box">
  //             <span className="gameName bold mb-1 heading"> {game_name} </span>
  //             <div className="bold f-15 mb-1">
  //               {open_result || "XXX - X"}
  //               {close_result || "X - XXX"}
  //             </div>
  //             {dataCard(a)}
  //           </div>
  //         </div>

  //         <div
  //           className="my-auto"
  //           onClick={() => {
  //             let route = isAuthenticated
  //               ? `/game-dashboard/${game_name}/${game_id}`
  //               : "/login";
  //             !isClosed &&
  //               router.push({
  //                 pathname: route,
  //                 query: { data: JSON.stringify(a) },
  //               });
  //           }}
  //         >
  //           <div className="game-play gray pointer">
  //             <PlayCircleIcon
  //               className={`${isClosed ? "text-danger" : "text-success"}`}
  //             />
  //             <br />
  //             <p
  //               style={{
  //                 backgroundColor: isClosed ? "red" : "green",
  //                 color: "white",
  //                 width: "50px",
  //                 borderRadius: "20px",
  //                 margin: "auto",
  //               }}
  //             >
  //               {isClosed ? "Close" : "Play"}
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  const renderCarousel = () => {
    if (!sliderImages?.length) {
      return <></>;
    }

    return sliderImages.map((item, index) => {
      return (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={item.image_id}
          style={{ height: "25dvh" }}
        >
          <Link
            href={item.slider_link || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.slider_image || ""}
              className="d-block w-100"
              alt={`Slider image ${item.image_id}`}
              style={{ height: "25dvh", width: "100dvw", objectFit: "cover" }}
            />
          </Link>
        </div>
      );
    });
  };

  if (isLoading) {
    return <Loader show={true} />;
  }

  return (
    <div
      className={`maxWidth px-3 ${!isAuthenticated ? "showbackgroundnl" : ""}`}
    >
      {isAuthenticated ? (
        <div>
          {/* <div className="d-flex my-3 justify-content-between">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            className="yellow-gradient text-large1 stol-500"
            id="scroll-text"
          >
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="10"
              style={{
                fontSize: "1.2rem",
                color: "#00659e",
                whiteSpace: "nowrap",
              }}
            >
              {SlidingText} &nbsp;&nbsp;&nbsp; {SlidingText}
            </marquee>
          </div>
        </div> */}
        </div>
      ) : (
        <div></div>
      )}

      {/* <audio ref={audioRef} src="/sound.mp3" preload="auto" />
      {showInfoModal()} */}

      {!isAuthenticated && (
        <section className="d-lg-none sm-d-block sectionhome">
          <div className="container">
            <div className="row">
              <div
                style={{ marginTop: "25px" }}
                className="col-12 text-center sm-heading"
              >
                <div className="stol-400 stol-400 text-small1">
                  India's Most Trusted Matka Play App
                </div>
                <div
                  className="yellow-gradient text-large1 stol-500"
                  id="scroll-text"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      animation: "scrollText 20s linear infinite",
                      fontSize: "1.2rem",
                    }}
                  >
                    {SlidingText}
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-4">
                {/* <Link href="/login"> */}
                <img
                  src="banner-img.png"
                  alt="banner Image"
                  className="policy-shadow-mobile w-85"
                />

                <a
                  href="https://backend.zara777.in/logo/Jodi_Play.apk"
                  download
                >
                  <div className="link-input">
                    <div className="download-link-bg">
                      <button>Download Mobile App</button>
                    </div>
                  </div>
                </a>

                <div
                  id="androidParagraph"
                  className="android-paragraph text-white pt-1 stol-b text-13"
                  style={{ display: "block" }}
                >
                  <p style={{ color: "#ffce41" }}>For Better User Experience</p>
                </div>
                <img
                  src="certificate.webp"
                  alt="certificate"
                  className="mt-4"
                  style={{ width: "95%" }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <div>
        {/* <div
          style={{ marginTop: "20px" }}
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">{renderCarousel()}</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>

      {!isAuthenticated ? (
        <>
          <div className="text-center">{renderGameswithoutlogin()}</div>
          <div className="d-flex my-3 justify-content-between gap-3 ">
            <Link
              href="add-fund"
              className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center"
            >
              <img src={"/money.png"} style={{ height: "20px" }} alt="money" />
              <b> Add Points</b>
            </Link>

            <Link
              href={contact_details?.whatsapp_no || "#"}
              target="_blank"
              className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center"
              style={{ background: "#21A711" }}
            >
              <img
                src={"/whatsapp.png"}
                style={{ height: "20px" }}
                alt="money"
              />
              <b>Whatsapp</b>
            </Link>

            <Link
              style={{ background: "#D05141" }}
              href={isAuthenticated ? "/withdraw" : "/login"}
              className="home-sl2-box m-auto text-center bold w-100"
            >
              <img
                src={withdrawlicon}
                style={{ height: "20px", marginRight: "2px" }}
                alt="Withdrawal"
              />
              <b>Withdrawal</b>
            </Link>
          </div>
          {!isAuthenticated ? (
            <div className="d-flex my-3 justify-content-between gap-3 ">
              <Link
                href="https://www.facebook.com/profile.php?id=61564633610663&mibextid=ZbWKwL"
                target="_blank"
                className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center"
              >
                <img
                  src={"/facebook.webp"}
                  style={{ height: "20px" }}
                  alt="Facebook"
                />
                <b>Facebook</b>
              </Link>

              <Link
                href="https://www.instagram.com/zara777.in?igsh=MTZ4bmc1M2F4bzc4bQ=="
                target="_blank"
                className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center"
                style={{
                  background:
                    "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)",
                }}
              >
                <img
                  src={"/instagram.webp"}
                  style={{ height: "20px" }}
                  alt="Instagram"
                />
                <b>Instagram</b>
              </Link>

              {/* <Link
                href="https://www.youtube.com/@JodiPlay-u5b"
                target="_blank"
                className="d-flex align-items-center justify-content-center m-auto bold w-100 gap-1 home-sl2-box text-center"
                style={{ background: "#FF0000" }}
              >
                <img
                  src={"/youtube.png"}
                  style={{ height: "20px" }}
                  alt="Youtube"
                />
                <b>Youtube</b>
              </Link> */}
            </div>
          ) : (
            <Link
              style={{ background: "red" }}
              href={isAuthenticated ? "/galidesawar" : "/login"}
              className="home-sl2-box m-auto text-center bold w-100"
            >
              <b>Gali Desawar Market</b>
            </Link>
          )}

          <Info />
        </>
      ) : (
        <div className="container">
          <div>
            <div className="pt-4">
              <h3 className="text-center text-white" style={{ fontSize: "1rem" }}>
                Hello {userData?.user_name}, Welcome to Zara777
              </h3>
              <div>
                <div
                  className="yellow-gradient text-large1 stol-500"
                  id="scroll-text"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <marquee
                    behavior="scroll"
                    direction="left"
                    scrollamount="10"
                    style={{ color: "#ffc107", whiteSpace: "nowrap" }}
                  >
                    Welcome to Zara777 - Online Matka Play App. - India's Most
                    Trusted Satta Matka Games with 24x7 Costumer Support.
                  </marquee>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between my-3 border p-3" style={{ boxShadow: "4px 4px 4px 1px #fff" }}>
              <div>
                <a href="/add-fund">
                  <div
                    className={`d-flex flex-column align-items-center justify-content-center m-auto  text-center ${styles.whitehometext} ${styles.home_sl2_box}`}
                  >
                    <div className={styles.ellipse_box}>
                      <img src={addmoney_icon} alt="Call" />
                    </div>
                    <a href="/add-fund">
                      <b style={{ marginTop: "5px", color: "#fff" }}>
                        Add Money
                      </b>
                    </a>
                  </div>
                </a>
              </div>

              <div>
                <a target="_blank" href={"tel://" + contact_details?.mobile_1}>
                  <div
                    className={`d-flex flex-column align-items-center justify-content-center m-auto  text-center ${styles.whitehometext} ${styles.home_sl2_box}`}
                  >
                    <div className={styles.ellipse_box}>
                      <img src={call_icon} alt="Call" />
                    </div>
                    <b style={{ marginTop: "5px", color: "#fff" }}>
                      Call Us
                    </b>
                  </div>
                </a>
              </div>

              <div>
                <Link href={contact_details?.whatsapp_no || "#"}>
                  <div
                    className={`d-flex flex-column align-items-center justify-content-center m-auto  text-center ${styles.whitehometext} ${styles.home_sl2_box}`}
                  >
                    <div className={styles.ellipse_box}>
                      <img src={whatsappIcon} alt="Call" />
                    </div>
                    <b style={{ marginTop: "5px", color: "#fff" }}>
                      WhatsApp
                    </b>
                  </div>
                </Link>
              </div>

              <div>
                <a href="/withdraw">
                  <div
                    className={`d-flex flex-column align-items-center justify-content-center m-auto  text-center ${styles.whitehometext} ${styles.home_sl2_box}`}
                  >
                    <div className={styles.ellipse_box}>
                      <img src={withdrawlicon} alt="Call" />
                    </div>
                    <a href="/withdraw">
                      <b style={{ marginTop: "5px", color: "#fff" }}>
                        Withdrawal
                      </b>
                    </a>
                  </div>
                </a>
              </div>
            </div>

            <hr className="text-white"/>

            {/* galidesawar button start */}

            <div className="my-auto">
              <a href="/galidesawar">
                <div className={styles.galidesawar_btn}>
                  <div className={styles.home_s12_btn}>
                    <b style={{ color: "#fff" }}>
                      Gali Desawar Market - <br /> DS, GL, FB, GB, SG, DB
                    </b>
                  </div>

                  <div className={styles.galidesawar_btn_icon}>
                    <div className={styles.game_play}>
                      <img src="/img/play.png" height={"60px"} width={"60px"} alt="galidesawar"/>
                      {/* <PlayCircleIcon
                        style={{ fontSize: "45px" }}
                        className="text-success"
                      /> */}

                      {/* <iframe src="https://giphy.com/embed/XwcRflO9HD0Sk6RaRM" class="giphy-embed" allowFullScreen></iframe> */}

                      {/* <p
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          width: "70px",
                          textAlign: "center",
                          borderRadius: "20px",
                          margin: "auto",
                        }}
                      >
                        {"Play"}
                      </p> */}
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* galidesawar button end*/}
          </div>

          <div className="text-center d-flex  flex-wrap justify-content-center  mt-5">
            {renderGames()}
          </div>
        </div>
      )}

      <Loader show={loading} />
    </div>
  );
};

export default HomeMain;
