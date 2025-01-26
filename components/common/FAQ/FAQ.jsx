import React, { useEffect, useRef, useState } from "react";
import Accordian, { AccordianItem } from "./Accordian";
import styles from "../../../styles/Home2.module.css";

function FAQ({ FaqRef }) {
  return (
    <div ref={FaqRef} className="px-4 xl:px-16  pt-28">
      <div className={styles.section_container}>
        <div className={styles.section_heading}>
          <h2>MORE QUESTIONS?</h2>
        </div>

        <div className={styles.section_sub_heading}>
          <h2>Here are our FAQ’s</h2>
        </div>
      </div>

      <div className="pt-16 lg:flex flex-wrap">
        <div>
          <div className="w-full faq_section">
            <Accordian>
              <AccordianItem
                value="1"
                style={{ color: "#fff" }}
                trigger="What is Zara777?"
              >
                Zara777 is an online platform for matka play, offering a variety
                of matka markets with 24/7 automated deposit and withdrawal
                services for a seamless gaming experience.
              </AccordianItem>
              <AccordianItem
                value="2"
                style={{ color: "#fff" }}
                trigger="How do I get started with matka play on Zara777?"
              >
                Simply sign up on our website, fund your account through our
                secure payment options, and select your preferred matka market
                to start playing.
              </AccordianItem>
              <AccordianItem
                value="3"
                style={{ color: "#fff" }}
                trigger="What types of matka markets are available on Zara777?"
              >
                Zara777 provides access to all popular matka markets, allowing
                users to choose the games they know and love.
              </AccordianItem>
              <AccordianItem
                value="4"
                style={{ color: "#fff" }}
                trigger="Is it safe to deposit and withdraw money on Zara777?"
              >
                Yes, Zara777 prioritizes user safety with secure payment
                gateways and 24/7 automated deposits and withdrawals, ensuring
                fast and safe transactions.
              </AccordianItem>
              <AccordianItem
                value="5"
                style={{ color: "#fff" }}
                trigger="How fast are deposits and withdrawals processed?"
              >
                All deposits and withdrawals are processed instantly, thanks to
                our automated system available around the clock.
              </AccordianItem>
              <AccordianItem
                value="6"
                style={{ color: "#fff" }}
                trigger="Can I play matka on Zara777 at any time?"
              >
                Yes, Zara777 operates 24/7, allowing you to access the platform
                and play whenever it’s convenient for you.
              </AccordianItem>
              <AccordianItem
                value="7"
                style={{ color: "#fff" }}
                trigger="What should I do if I encounter an issue with my account?"
              >
                If you have any account issues, please contact our support team
                through the "Contact Us" page. We’re here to help you resolve
                any problems.
              </AccordianItem>
              <AccordianItem
                value="8"
                style={{ color: "#fff" }}
                trigger="Is there a minimum or maximum limit for deposits and withdrawals?"
              >
                Yes, Zara777 may have specific limits depending on the payment
                method. Please refer to our payment policy section for detailed
                information.
              </AccordianItem>
            </Accordian>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
