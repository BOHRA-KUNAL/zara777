import SubjectIcon from "@mui/icons-material/Subject";
import ApiClient from "@/api/apiClient";
import { SideBar } from "./SideBar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getSetData } from "@/utils";
import { walletIcon } from "@/resources/images";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderTitle } from "@/redux/slice";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user_id } = getSetData("userData", false, true);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const reduxData = useSelector((state) => state.data);
  let { headerTitle } = reduxData;

  const fetchWalletAmount = () => {
    ApiClient.wallet_amount({ user_id })
      .then((res) => {
        setAmount(res?.data?.wallet_amt || 0);
      })
      .catch((error) => {
        console.error("Error fetching wallet amount:", error);
      });
  };

  useEffect(() => {
    setIsClient(true);
    fetchWalletAmount(); // Initial fetch

    // Set up polling every 30 seconds
    const intervalId = setInterval(fetchWalletAmount, 10000);

    const handleOutsideClick = (event) => {
      if (active && !event.target.closest("#sidebar")) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [router.pathname, router.query.refresh]);

  useEffect(() => {
    // Update header title based on the current route
    const routeTitles = {
      '/': 'ZARA777',
      '/wallet': 'Wallet',
      '/signup': 'Register',
      '/my-profile': 'My Profile',
      '/add-fund': 'Add Funds',
      '/payment-methods': 'Payment Methods',
      '/withdraw': 'Withdraw',
      '/bidding-history': 'Bid History',
      '/win-history': 'Winning History',
      '/notifications': 'Notifications',
      '/change-password': 'Change Password',
      '/game-rates': 'Game Rates',
      '/howtoplay': 'How to Play',
      '/support': 'Support',
      '/withdraw': 'Withdraw',
      '/withdraw': 'Withdraw',
      '/galidesawar/game-rates': 'Game Rates',
      '/galidesawar/bidding-history': 'Bid History',
      '/galidesawar/win-history': 'Winning History',
      // Add more route titles as needed
    };

    const currentTitle = routeTitles[router.pathname] || 'ZARA777';
    dispatch(setHeaderTitle(currentTitle));
  }, [router.pathname, dispatch]);

  const checkUserToken = getSetData("token");
  const isLoggedIn = Boolean(checkUserToken);

  return (
    <>
      {active && <SideBar setActive={setActive} />}

      <nav className={`navbar navbar-expand-lg ${!isLoggedIn ? 'showbackgroundnl' : ''}`} style={{ backgroundColor: "#00659e" }}>
        <div className="container-fluid">
          {isLoggedIn &&(
          <button
            onClick={() => setActive(!active)}
            type="button"
            id="sidebarCollapse"
            className="btn menu-btn"
            title="Menu"
          >
            <SubjectIcon className="text-white" />
            <span>&nbsp;</span>
          </button>
          )}
          <Link
            href={"/"}
            style={{ fontWeight: 700, color: "white",  }}
            onClick={() => {
              dispatch(setHeaderTitle("ZARA777"));
            }}
          >
            {headerTitle || "ZARA777"}
            {/* <a className={styles.footer_rush_logo} href="/"> */}
              {/* <img
                loading="lazy"
                alt="logo"
                src="/img/zara_logo.png"
                style={{objectFit: "contain", height: "25px"}}
              /> */}
            {/* </a> */}
          </Link>

          {isClient && (
            isLoggedIn ? (
              <Link href="/wallet" className="ml-auto">
                <img src={walletIcon} style={{ maxWidth: "30px" }} alt="Wallet" />
                <span style={{color: 'white', marginLeft: '8px', verticalAlign: 'middle'}} className="walletamt">₹{amount}</span>
              </Link>
            ) : (
              <div className="d-flex gap-2">
              <Link href="login" style={{backgroundColor: "#fff"}} className="btn d-inline-block ml-auto" type="button">
                <span className="walletamt">Login</span>
              </Link>
              <Link href="signup" style={{backgroundColor: "#fff"}} className="btn d-inline-block ml-auto" type="button">
                <span className="walletamt">Register</span>
              </Link>
              </div>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;