import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/Home2.module.css";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        // slidesPerView={2}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}

        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.user_review_item}>
            <div className={styles.user_review}>
              <p>
              Zara777 has completely changed my matka experience! The platform is super reliable, and I love that deposits and withdrawals are instant. Definitely my go-to for online matka!
              </p>
            </div>

            <div className={styles.user_profile}>
              <div className={styles.user_info}>
                <div className={styles.user_name}>
                  <p>Rahul S.</p>

                  <Image src={require("../../public/img/ratings/verify.png")} />
                </div>

                <p className={styles.user_winning}>Won ₹3,12,856</p>

                
              </div>

              <div className={styles.user_img}>
                <Image src={require("../../public/img/ratings/user_7.png")} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.user_review_item}>
            <div className={styles.user_review}>
              <p>
              I was a bit skeptical at first, but Zara777 has proven to be 100% trustworthy. Great games, easy navigation, and no waiting for payouts. Highly recommended!.
              </p>
            </div>

            <div className={styles.user_profile}>
              <div className={styles.user_info}>
                <div className={styles.user_name}>
                  <p>Anjali P.</p>

                  <Image src={require("../../public/img/ratings/verify.png")} />
                </div>

                <p className={styles.user_winning}>Won ₹3,12,856</p>

               
              </div>

              <div className={styles.user_img}>
                <Image src={require("../../public/img/ratings/user_5.png")} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.user_review_item}>
            <div className={styles.user_review}>
              <p>
              The best part about Zara777 is the 24/7 access. I can play anytime, and I always get my winnings instantly. It’s safe, fun, and rewarding!.
              </p>
            </div>

            <div className={styles.user_profile}>
              <div className={styles.user_info}>
                <div className={styles.user_name}>
                  <p>Vikram M</p>

                  <Image src={require("../../public/img/ratings/verify.png")} />
                </div>

                <p className={styles.user_winning}>Won ₹3,12,856</p>

               
              </div>

              <div className={styles.user_img}>
                <Image src={require("../../public/img/ratings/user_1.png")} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.user_review_item}>
            <div className={styles.user_review}>
              <p>
              Zara777 is a fantastic platform! Their customer support is very responsive, and I’ve never had any issues with payments. Earning real money has never been this easy!
              </p>
            </div>

            <div className={styles.user_profile}>
              <div className={styles.user_info}>
                <div className={styles.user_name}>
                  <p>Priya R</p>

                  <Image src={require("../../public/img/ratings/verify.png")} />
                </div>

                <p className={styles.user_winning}>Won ₹3,12,856</p>

                {/* <p className={styles.user_state}>Bhadohi, Uttar Pradesh</p> */}
              </div>

              <div className={styles.user_img}>
                <Image src={require("../../public/img/ratings/user_3.png")} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.user_review_item}>
            <div className={styles.user_review}>
              <p>
              I love how simple and secure Zara777 is to use. The variety of markets is amazing, and the instant payouts make it even better. I feel safe playing here and enjoy every moment!
              </p>
            </div>

            <div className={styles.user_profile}>
              <div className={styles.user_info}>
                <div className={styles.user_name}>
                  <p>Sandeep K.</p>

                  <Image src={require("../../public/img/ratings/verify.png")} />
                </div>

                <p className={styles.user_winning}>Won ₹3,12,856</p>

                
              </div>

              <div className={styles.user_img}>
                <Image src={require("../../public/img/ratings/user_2.png")} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
