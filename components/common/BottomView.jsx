import React from "react";
import styles from "../../styles/Home2.module.css";

const BottomView = () => {
  return (
    <div>
      <div
        id="main_bottom_section"
        className={styles.main_bottom_section}
        style={{ display: "flex" }}
      >
        <div className={styles.banner}>
          <p>Download App & Get Surprise Bonus!</p>
        </div>
        <div className={styles.get_sms_form}>
          {/* <div className={styles.input_main_bg} style={{ background: "red" }}>
            <div className={styles.input_main}>
              <div className={styles.tel}>+91-</div>
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
            <button className={styles.download_link}> <img src="/img/giphy.webp" alt="zara777" style={{height: "20px"}}/> Download Mobile App <img src="/img/giphy.webp" alt="zara777" style={{height: "20px"}}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomView;
