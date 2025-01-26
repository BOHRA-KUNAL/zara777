import React, { useEffect, useRef, useState } from "react";
import "../styles/Home2.module.css";
import styles from "../styles/Home2.module.css";
import Image from "next/image";

import Swipper from "./common/Swipper";
import BottomView from "./common/BottomView";
import Footer1 from "./common/footer/Footer1";
import Loader from "./Loader";
import { getSetData } from "@/utils";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setContactDetails } from "@/redux/slice";
import ApiClient from "@/api/apiClient";
import Link from "next/link";
import { withdrawlicon } from "@/resources/images";
import Info from "./Info";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import FAQ from "./common/FAQ";
import FAQ from "./common/FAQ/FAQ";
// import FAQ from "./common/FAQ/FAQ";

const HomeMain2 = () => {
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

  const reduxData = useSelector((state) => state?.data);
  const { contact_details } = reduxData;
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

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     fetchInfo();
  //   } else {
  //     fetchpublicGames();
  //   }
  //   fetChImages();
  //   fetchSliderText();
  //   getContactData();
  // }, [isAuthenticated]);

  useEffect(() => {
    fetchpublicGames();

    fetChImages();
    fetchSliderText();
    getContactData();
  }, []);

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
            <span className="bold text-black"> Market Status : </span>
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

  const showInfoModal = () => {
    if (!isAuthenticated) {
      return <></>;
    }
    return (
      <ModalComponent
        setShow={(res) => {
          setModalVisible(res);
          getSetData("closeModal", !res);
        }}
        show={modalVisible}
      >
        <Howtoplay />
      </ModalComponent>
    );
  };

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
      // console.log("game-->>>>",game)
      const isClosed =
        new Date() > new Date(`${new Date().toDateString()} ${game.closeTime}`);
      const { game_name, openTime, closeTime } = game;

      return (
        <div className="home_main_card_div">
          <Link
            href={isAuthenticated ? a.web_chart_url : "/login"}
            target={isAuthenticated ? "_blank" : ""}
          >
            <div className="game-list-inner6 pt-2 pb-3 ps-2 pe-3 m-2 px-md-4 px-lg-5">
              <div className="d-flex w-full align-items-center justify-content-between">
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

                  <div className="py-2" style={{ textAlign: "left" }}>
                    <span className="fw-bold">{formatGameResult(game)}</span>
                    <div className="pt-3">
                      <div className="d-flex bold align-items-center justify-content-center gap-2 f-12">
                        <span className="bold text-black"> Market Status : </span>
                        <p
                          style={{ marginBottom: "0px" }}
                          className={`${isClosed ? "gameoff" : "gameon"} bold`}
                        >
                          {isClosed ? "Close" : "Running"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
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
                <div className={styles.chart_btn}>Pana Chart</div>

                {/* <div className={styles.chart_btn}>Jodi Chart</div> */}
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div className="px-1">
                  <span>Open Bids:</span>
                  <span className="fw-bold">{openTime}</span>
                </div>
                <div className="px-1">
                  <span>Close Bids:</span>
                  <span className="fw-bold">{closeTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  const renderGames = () => {
    return info?.map((a, index) => {
      let isClosed = a?.msg_status > 1;
      let { game_name, game_id, close_result, open_result } = a;

      return (
        <div
          key={index}
          className="game-list-inner d-flex justify-content-between ps-2 pe-3 px-md-4 px-lg-5"
        >
          <div className="my-auto">
            <div className="game-time pointer">
              <Link
                href={isAuthenticated ? a.web_chart_url : "/login"}
                target={isAuthenticated ? "_blank" : ""}
              >
                <Image src={"/chart.png"} width={50} height={50} alt="chart" />
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
                className={` ${isClosed ? "text-danger" : "text-success"}`}
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
        </div>
      );
    });
  };

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
    <div className={styles.bg_color}>
      <div className="container pt-4">
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <div className="banner_left">
            <p className={styles.main_heading}>₹1 Lakh+ Daily Winnings</p>

            <div className={styles.sub_heading_container}>
              <span className={` ${styles.main_sub_heading}`}>
                <span> </span>
                <h1>Real Cash With Zara777 Online Matka Game</h1>
              </span>
            </div>

            <div>
              <p className={` ${styles.text}`}>
                Download App & Get Surprise Bonus
              </p>
            </div>

            <div className={styles.link_input}>
              {/* <div className={styles.input_main_bg}>
                <div className={styles.input_main}>
                  <div className={styles.tel}>+91 -</div>
                  <input
                    name="phoneNumber"
                    className={styles.phoneNum}
                    autocomplete="off"
                    maxlength="10"
                    placeholder="Enter Mobile Number"
                    type="text"
                  />
                </div>
              </div> */}

              <div className={styles.download_link_bg}>
                <button
                  className={styles.smsButton}
                  onclick="sendSmsLink(this)"
                >
                  Download Mobile App
                </button>
              </div>
            </div>

            {/* <div className={styles.app_rating_img}>
                <div className={styles.rating}>
                    <div className={styles.app_rating_heading}>
                        <div>
                        <Image src={"https://www.getrushapp.com/assets/images/homepage/star.png"} width={16} height={14} />
                        </div>

                        <div>
                            <p>4.4</p>
                        </div>
                    </div>

                    <div className={styles.app_rating_sub_heading}>
                        <p>Ratings</p>
                    </div>
                </div>
            </div> */}
          </div>
          <div className="banner_left">
            <div className={styles.rating_img_main}>
            <img
              className={styles.rating_img}
              loading="lazy"
              src="/img/zara_header_image.png"
            />
            </div>
          </div>
        </div>

        {/* withdraw winings start */}
        <div className={styles.section_container}>
          <div className={styles.section_heading}>
            <h2>Instantly</h2>
          </div>

          <div className={styles.section_sub_heading}>
            <h2>Withdraw Instant In Your Account</h2>
          </div>

          <div>
            <div
              className={` ${styles.section_content} ${styles.payment_section}`}
            >
              <Image src={require("../public/payment/G_pay.png")} alt="" />

              <Image src={require("../public/payment/Phone_pe.png")} alt="" />

              <Image src={require("../public/payment/paytm.png")} alt="" />

              {/* <Image src={require("../public/payment/G_pay.png")} alt="" />

              <Image src={require("../public/payment/G_pay.png")} alt="" /> */}
            </div>

            <div className={`mt-4 ${styles.section_sub_heading}`}>
            <h2>Live Matka Result</h2>
          </div>

          </div>
        </div>
        {/* withdraw winings end */}

        {!isAuthenticated ? (
          <>
            <div className="text-center d-flex justify-content-center flex-wrap  mt-2">
              {renderGameswithoutlogin()}
            </div>
            {/* <div className="d-flex my-3 justify-content-between gap-3 ">
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
          </div> */}
            {/* {!isAuthenticated ? (
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
                href="https://www.instagram.com/jodi.play?igsh=YXNwMzFqcXJyOWNs"
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

              <Link
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
              </Link>
            </div>
          ) : (
            <Link
              style={{ background: "red" }}
              href={isAuthenticated ? "/galidesawar" : "/login"}
              className="home-sl2-box m-auto text-center bold w-100"
            >
              <b>Gali Desawar Market</b>
            </Link>
          )} */}

            {/* <Info /> */}
          </>
        ) : (
          <div className="text-center">{renderGames()}</div>
        )}

        {/*  */}
        <div className={styles.certificate_container}>
          {/* <Image
            src={require("../public/img/certification/1.png")}
            className={styles.certificate_img}
            alt=""
          /> */}
          <Image
            src={require("../public/img/certification/2.png")}
            className={styles.certificate_img}
            alt=""
          />
          {/* <Image
            src={require("../public/img/certification/3.png")}
            className={styles.certificate_img}
            alt=""
          /> */}
          <Image
            src={require("../public/img/certification/4.png")}
            className={styles.certificate_img}
            alt=""
          />
          <Image
            src={require("../public/img/certification/5.png")}
            className={styles.certificate_img}
            alt=""
          />
          <Image
            src={require("../public/img/certification/6.png")}
            className={styles.certificate_img}
            alt=""
          />
        </div>

        <div className={styles.rating_section}>
          <div className={styles.section_heading}>
            <h2>Trusted by Thousands</h2>
          </div>

          <div className={styles.section_sub_heading}>
            <h2>Play Confidently on Zara777 Online Matka Play App </h2>
          </div>

          {/* <div className={styles.section_body_content}> */}
          <div className={styles.section_sub_heading}>
            <p>
              Zara777 is a trusted platform designed for safe, secure, and
              enjoyable online matka play. With instant deposits and
              withdrawals, transparent transactions, and dedicated support, we
              prioritize your trust and satisfaction every step of the way. Join
              a community of players who choose Zara777 for reliability and
              real-money rewards!
            </p>
          </div>

          <div className="pt-4">
            <Image
              src={require("../public/img/main_rating_img.png")}
              className={styles.app_rating_img}
              alt=""
            />
          </div>

          {/* <div className={styles.desktop_youtube_container}>
            <div className={styles.youtube_content}>
              So does online Ludo players 🤗
            </div>

            <div className={styles.desktop_youtube_list}>
              <div className={styles.desktop_youtube_item}>
                <Image
                  src={require("../public/img/ratings/kiku_youtube.png")}
                  className={styles.rating_img}
                  alt=""
                  style={{ display: "none" }}
                />
                <iframe
                  loading="lazy"
                  frameborder="0"
                  scrolling="no"
                  data-src="https://www.youtube.com/embed/7lPai2mpXWQ?autoplay=1&amp;rel=0"
                  src="https://www.youtube.com/embed/7lPai2mpXWQ?autoplay=1&amp;rel=0"
                  allow="autoplay"
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowfullscreen=""
                  style={{ display: "block" }}
                ></iframe>
              </div>
              <div className={styles.desktop_youtube_item}>
                <Image
                  src={require("../public/img/ratings/kiku_youtube.png")}
                  className={styles.rating_img}
                  alt=""
                  style={{ display: "none" }}
                />
                <iframe
                  loading="lazy"
                  frameborder="0"
                  scrolling="no"
                  data-src="https://www.youtube.com/embed/7lPai2mpXWQ?autoplay=1&amp;rel=0"
                  src="https://www.youtube.com/embed/7lPai2mpXWQ?autoplay=1&amp;rel=0"
                  allow="autoplay"
                  webkitallowfullscreen=""
                  mozallowfullscreen=""
                  allowfullscreen=""
                  style={{ display: "block" }}
                ></iframe>
              </div>
            </div>
          </div> */}
          {/* Review Section Starts */}

          <div>
             

            <div className="pt-4">
              <Swipper />
            </div>

            {/* <div className={styles.user_review_container}>
           
              <div className={styles.user_review_item}>
                <div className={styles.user_review}>
                  <p>
                    I earned ₹1 Lakh from this game. I quickly withdrew the
                    winnings to my bank account. It is safe & easy to use app.
                  </p>
                </div>

                <div className={styles.user_profile}>
                  <div className={styles.user_info}>
                    <div className={styles.user_name}>
                      <p>Vishal Gupta</p>

                      <Image
                        src={require("../public/img/ratings/verify.png")}
                      />
                    </div>

                    <p className={styles.user_winning}>Won ₹3,12,856</p>

                    <p className={styles.user_state}>Bhadohi, Uttar Pradesh</p>
                  </div>

                  <div className={styles.user_img}>
                    <Image src={require("../public/img/ratings/user_1.png")} />
                  </div>
                </div>
              </div>

             
              <div className={styles.user_review_item}>
                <div className={styles.user_review}>
                  <p>
                    I earned ₹1 Lakh from this game. I quickly withdrew the
                    winnings to my bank account. It is safe & easy to use app.
                  </p>
                </div>

                <div className={styles.user_profile}>
                  <div className={styles.user_info}>
                    <div className={styles.user_name}>
                      <p>Vishal Gupta</p>

                      <Image
                        src={require("../public/img/ratings/verify.png")}
                      />
                    </div>

                    <p className={styles.user_winning}>Won ₹3,12,856</p>

                    <p className={styles.user_state}>Bhadohi, Uttar Pradesh</p>
                  </div>

                  <div className={styles.user_img}>
                    <Image src={require("../public/img/ratings/user_1.png")} />
                  </div>
                </div>
              </div>

              
              <div className={styles.user_review_item}>
                <div className={styles.user_review}>
                  <p>
                    I earned ₹1 Lakh from this game. I quickly withdrew the
                    winnings to my bank account. It is safe & easy to use app.
                  </p>
                </div>

                <div className={styles.user_profile}>
                  <div className={styles.user_info}>
                    <div className={styles.user_name}>
                      <p>Vishal Gupta</p>

                      <Image
                        src={require("../public/img/ratings/verify.png")}
                      />
                    </div>

                    <p className={styles.user_winning}>Won ₹3,12,856</p>

                    <p className={styles.user_state}>Bhadohi, Uttar Pradesh</p>
                  </div>

                  <div className={styles.user_img}>
                    <Image src={require("../public/img/ratings/user_1.png")} />
                  </div>
                </div>
              </div>

              
              <div className={styles.user_review_item}>
                <div className={styles.user_review}>
                  <p>
                    I earned ₹1 Lakh from this game. I quickly withdrew the
                    winnings to my bank account. It is safe & easy to use app.
                  </p>
                </div>

                <div className={styles.user_profile}>
                  <div className={styles.user_info}>
                    <div className={styles.user_name}>
                      <p>Vishal Gupta</p>

                      <Image
                        src={require("../public/img/ratings/verify.png")}
                      />
                    </div>

                    <p className={styles.user_winning}>Won ₹3,12,856</p>

                    <p className={styles.user_state}>Bhadohi, Uttar Pradesh</p>
                  </div>

                  <div className={styles.user_img}>
                    <Image src={require("../public/img/ratings/user_1.png")} />
                  </div>
                </div>
              </div>
 
              <div className={styles.user_review_item}>
                <div className={styles.user_review}>
                  <p>
                    I earned ₹1 Lakh from this game. I quickly withdrew the
                    winnings to my bank account. It is safe & easy to use app.
                  </p>
                </div>

                <div className={styles.user_profile}>
                  <div className={styles.user_info}>
                    <div className={styles.user_name}>
                      <p>Vishal Gupta</p>

                      <Image
                        src={require("../public/img/ratings/verify.png")}
                      />
                    </div>

                    <p className={styles.user_winning}>Won ₹3,12,856</p>

                    <p className={styles.user_state}>Bhadohi, Uttar Pradesh</p>
                  </div>

                  <div className={styles.user_img}>
                    <Image src={require("../public/img/ratings/user_1.png")} />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* Review Section Ends */}
        </div>

        {/* crousel */}

        {/* logics code start */}

        <Loader show={loading} />

        {/* logics code end */}

        {/* crousel */}

        <div className={` ${styles.section_container}`}>
          <div className={styles.section_heading}>
            <h2>About</h2>
          </div>

          <div className={styles.section_sub_heading}>
            <h2>Zara777</h2>
          </div>

          <div
            className={`${styles.section_content} ${styles.about_carrom_section}`}
          >
            {/* <div className="col-2 col-md-1">
              <Image
                src={require("../public/img/about_ludo.png")}
                className={styles.rating_img}
                alt=""
              />
            </div> */}
            <div className="col-12 ">
              <p>
                It’s your classic board game, Ludo,but now online and with a
                spin of speed. Get the highest score in just 10 minutes, and you
                earn money! Think you’ll have to wait for a 6 to open your
                token? Nah! This is different from other ludo apps. All tokens
                are at the starting positions. So, come, roll the dice and start
                playing and earning with Ludo online!
              </p>
              <p>
                Our commitment to convenience and security is at the core of
                everything we do. With our 24/7 automated deposit and withdrawal
                services, you can play whenever you like, without the hassle of
                waiting times. We understand the importance of seamless
                transactions, so we’ve designed our platform to offer instant
                processing, ensuring that you have a smooth and enjoyable
                experience every time you visit.
              </p>
              <p>
                Join us at Zara777 and experience the future of online matka
                play with a platform you can count on. Happy playing!
              </p>
            </div>
          </div>
        </div>

        {/* <div className={` ${styles.section_container}`}>
          <div className={styles.section_heading}>
            <h2>Rush Speed Ludo</h2>
          </div>

            <h2>Best Real Money Game</h2>
          </div>

          <div className={styles.section_body_content}>
            <p>
              Calling all Ludo lovers! Everyone is playing Speed Ludo at Rush by
              Hike and earning money. Don’t miss out! Hop into your favorite
              casual board game, Ludo online. But there’s a twist. Play Speed
              Ludo online, absolutely FREE and win real cash without investment.
            </p>
          </div>
        </div> */}

        {/* How to Download section */}

        <div className={` ${styles.section_container}`}>
          <div className={styles.section_heading}>
            <h2>How to download</h2>
          </div>

          <div className={styles.section_sub_heading}>
            <h2>Zara777</h2>
          </div>

          <div className={styles.section_body_content}>
            <p>
              Here’s a step-by-step guide on how users can download from the
              Zara777 website:
            </p>
          </div>

          <div
            className={`${styles.section_content} ${styles.about_carrom_section}`}
          >
            {/* right div */}
            <div>
              <div className={styles.download_heading_container}>
                <Image src={require("../public/img/android_logo.png")} />
                <p className={styles.android_heading}>On Android:</p>
              </div>

              <div style={{paddingTop: "20px"}}>
                <ul>
                  <li>
                    <strong>Visit the zara777.in Website:- </strong> <br /> Go
                    to the official Zara777 website in your browser.
                  </li>

                  <li>
                    <strong>Look for the Download Button:- </strong> <br />{" "}
                    Scroll down the homepage or navigate to the “Download” or
                    “App” section, often available in the main menu.
                  </li>
                  <li>
                    <strong>Click the Download Button:- </strong> <br /> Click
                    the “Download” button, and the download process will start.
                    Follow any on-screen prompts to complete it.
                  </li>
                  <li>
                    <strong>Install the Application:- </strong> <br /> Once the
                    download is complete, open the downloaded file to install it
                    on your device. You may need to allow permissions to install
                    from unknown sources (for Android).
                  </li>
                  <li>
                    <strong>Open and Log In:- </strong> <br /> Launch the app,
                    log in with your credentials, and enjoy playing on Zara777!.
                  </li>
                </ul>
              </div>
            </div>

            {/* left div */}

            {/* <div>
              <div className={styles.download_heading_container}>
                <Image src={require("../public/img/ios_logo.png")} />
                <p>On iOS:</p>
              </div>

              <div>
                <ul>
                  <li>Visit the App Store. </li>
                  <li>Search for 'Rush Play Games, Win Cash.</li>
                  <li>Tap on the 'Get' icon.</li>
                  <li>
                    Sign up on Rush by entering your mobile number and 4-digit
                    OTP received.
                  </li>
                  <li>
                    Set your Rush Avatar using a selfie or choose from the
                    gallery.
                  </li>
                  <li>Claim your Sign-up bonus and start playing!.</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>

        {/* Play LUDO Game Start */}
        <div className={styles.section_container}>
          {/* <div className={styles.section_heading}>
            <h2>Play Ludo Game &</h2>
          </div> */}

          <div className={styles.section_sub_heading}>
            <h2>Why Zara777 is the Best Platform for Earning Real Money</h2>
          </div>

          {/* <div className={styles.section_body_content}>
            <p>
              The Speed Ludo rules are simple and very similar to the board
              game. Know how to play the best ludo game online and win real
              money without investing here
            </p>
          </div> */}

          <div
            className={`${styles.section_content} ${styles.about_carrom_section}`}
          >
            <p></p>
            <ul style={{ listStyleType: "none", paddingLeft : "0px"}}>
              <li>
                <span style={{ color: "white" }}>
                  100% Trusted and Reliable:
                </span>
                Zara777 is built on trust and transparency. With a reputation
                for delivering secure, fair, and reliable services, our platform
                has become a top choice for players looking to earn real money
                through matka play.
              </li>
              <li>
                <span style={{ color: "white" }}>Real Money Earnings: </span>At
                Zara777, you can play and win real money with ease. Our platform
                is designed to provide you with a fair chance to earn from
                multiple matka markets, giving you the excitement of gaming with
                the potential for real rewards.
              </li>
              <li>
                <span style={{ color: "white" }}>Instant, Secure Payouts:</span>
                With our 24/7 automated deposit and withdrawal system, you can
                enjoy fast, hassle-free transactions. Your earnings are
                available for immediate withdrawal, ensuring you receive your
                winnings without delay.
              </li>
              <li>
                <span style={{ color: "white" }}>
                  Trusted by Thousands of Players:
                </span>
                Our commitment to transparency and security has made Zara777 a
                trusted name in the online matka community. Thousands of players
                rely on us for a safe and enjoyable experience every day.
              </li>
              <li>
                <span style={{ color: "white" }}>Round-the-Clock Access: </span>
                Zara777 operates 24/7, allowing you to play whenever it’s
                convenient for you. Whether you're an early bird or a night owl,
                you can access the platform and enjoy uninterrupted gaming.
              </li>
              <li>
                <span style={{ color: "white" }}>
                  Dedicated Customer Support:
                </span>
                We pride ourselves on our customer service. Our team is
                available to assist with any questions, issues, or guidance,
                making sure you have a smooth and satisfying experience.
              </li>
              <li style={{ color: "white" }}>
                Join Zara777 Experience the best platform for earning real
                money, backed by a reputation for trust and integrity. Join
                Zara777 today and take your matka game to the next level!
              </li>
            </ul>
             
          </div>
        </div>
        {/* Play LUDO Game end */}

        {/* WHY Play Starts */}

        {/* <div className={styles.section_container}>
          <div className={styles.section_heading}>
            <h2>WHY PLAY</h2>
          </div>

          <div className={styles.section_sub_heading}>
            <h2>Zara777</h2>
          </div>

          <div className={styles.section_body_content}>
            <p>
              There is not just one but many reasons for you to play Speed Ludo
              and earn money. Find out here.
            </p>
          </div>

          <div
            className={`${styles.section_content} ${styles.about_carrom_section} ${styles.play_section}`}
          >
            <div>
              <Image
                src={require("../public/img/why_play_ludo.png")}
                className={styles.rating_img}
                alt=""
              />
            </div>
            <div>
              <p></p>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  <span style={{ color: "white" }}>
                    Reliability and Trust:
                  </span>
                  Zara777 is a trusted name in online matka play, known for
                  providing secure and reliable services. We value our players
                  and strive to offer an experience you can count on.
                </li>
                <li>
                  <span style={{ color: "white" }}>
                    
                    Instant Transactions:
                  </span>
                  Enjoy the freedom of instant deposits and withdrawals, so you
                  can focus on the game without waiting around for transactions
                  to process.
                </li>
                <li>
                  <span style={{ color: "white" }}>24/7 Access: </span> Our
                  platform operates around the clock, giving you the flexibility
                  to play whenever it’s convenient for you. Zara777 is always
                  open for you.
                </li>
                <li>
                  <span style={{ color: "white" }}>Wide Range of Games: </span>
                  We’re committed to giving players choice and variety, with all
                  types of matka games available in one place.
                </li>
                <li>
                  <span style={{ color: "white" }}>
                    Safety and Transparency:
                  </span>
                  With secure transactions and a transparent system, Zara777
                  ensures that your experience is safe and straightforward.
                </li>

                <li
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Join Zara777 for a matka experience that’s trusted,
                  accessible, and player-focused. We’re here to make every
                  moment enjoyable!
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div> */}

        {/* WHY Play Ends */}

        {/* Common Terms Used In Starts */}
        <div className={styles.section_container}>
          {/* <div className={styles.section_heading}>
            <h2>Common terms used in</h2>
          </div> */}

          <div className={styles.section_sub_heading}>
            <h2>Our Services and Strengths</h2>
          </div>

          {/* <div className={styles.section_body_content}>
            <p>
              While playing Speed Ludo, keep these common ludo terms in mind to
              earn more points and money.
            </p>
          </div> */}

          <div
            className={`${styles.section_content} ${styles.about_carrom_section} ${styles.play_section}`}
          >
            <div>
              <p></p>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  <span style={{ color: "white" }}>
                    Extensive Matka Market Options:
                  </span>
                  At Zara777, we cater to all major matka markets, providing you
                  with a wide selection of games to choose from. Whether you
                  prefer single, Jodi, or Patti, we have something for everyone.
                </li>
                <li>
                  <span style={{ color: "white" }}>
                    24/7 Automated Deposits and Withdrawals:
                  </span>
                  Our automated system ensures that you can deposit and withdraw
                  funds instantly, any time of day or night, with zero waiting
                  time. Play whenever you want, without delays.
                </li>
                <li>
                  <span style={{ color: "white" }}>Secure Transactions:</span>
                  Security is a top priority at Zara777. All transactions are
                  protected by advanced encryption protocols, ensuring your
                  funds and personal information remain safe.
                </li>
                <li>
                  <span style={{ color: "white" }}>
                    User-Friendly Platform:
                  </span>
                  Zara777’s interface is designed for ease of use. Whether
                  you're new to matka play or an experienced player, our
                  platform makes it simple to navigate and enjoy.
                </li>
                <li>
                  <span style={{ color: "white" }}>
                    Dedicated Customer Support:
                  </span>
                  Our support team is available to assist with any questions or
                  issues, ensuring a seamless experience. Reach out anytime, and
                  we’ll be ready to help.
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
        {/* Common Terms Used In Ends */}

        {/* Tips and Tricks starts */}

        <div className={styles.section_container}>
          {/* <div className={styles.section_heading}>
            <h2>Tips & Tricks to Win</h2>
          </div> */}

          <div className={styles.section_sub_heading}>
            <h2>Why Choose Zara777?</h2>
          </div>

          {/* <div className={styles.section_body_content}>
            <p>
            Reliability and Trust: Zara777 is a trusted name in online matka play, known for providing secure and reliable services. We value our players and strive to offer an experience you can count on.
            </p>
          </div> */}

          <div
            className={`${styles.section_content} ${styles.about_carrom_section} ${styles.play_section}`}
          >
            <div>
              <p></p>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  <span style={{ color: "white" }}>Reliability and Trust:</span>
                  Zara777 is a trusted name in online matka play, known for
                  providing secure and reliable services. We value our players
                  and strive to offer an experience you can count on.
                </li>
                <li>
                  <span style={{ color: "white" }}>Instant Transactions:</span>
                  Enjoy the freedom of instant deposits and withdrawals, so you
                  can focus on the game without waiting around for transactions
                  to process.
                </li>
                <li>
                  <span style={{ color: "white" }}>24/7 Access:</span> Our
                  platform operates around the clock, giving you the flexibility
                  to play whenever it’s convenient for you. Zara777 is always
                  open for you.
                </li>
                <li>
                  <span style={{ color: "white" }}>Wide Range of Games:</span>
                  We’re committed to giving players choice and variety, with all
                  types of matka games available in one place.
                </li>
                <li>
                  <span style={{ color: "white" }}>
                    Safety and Transparency:
                  </span>
                  With secure transactions and a transparent system, Zara777
                  ensures that your experience is safe and straightforward.
                </li>
                <li style={{ color: "white" }}>
                  Join Zara777 for a matka experience that’s trusted,
                  accessible, and player-focused. We’re here to make every
                  moment enjoyable!
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>

        {/* Tips and Tricks ends */}

        {/* Faq Starts */}


        <FAQ />
        {/* Faq Ends */}

        <div>
          <BottomView />
        </div>

        <div className="pt-2">
          <Footer1 />
        </div>
      </div>
    </div>
  );
};

export default HomeMain2;
