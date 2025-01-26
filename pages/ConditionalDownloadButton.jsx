import React, { useEffect, useState } from 'react';
import styles from "../styles/Home2.module.css"

const ConditionalDownloadButton = () => {
  const [isWebView, setIsWebView] = useState(false);

  useEffect(() => {
    // Check if the app is running in a WebView
    const checkWebView = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return userAgent.includes('wv') || (userAgent.includes('safari') && userAgent.includes('mobile') && userAgent.includes('Android'));
    };

    setIsWebView(checkWebView());
  }, []);

  if (isWebView) {
    return null; // Don't render anything in WebView
  }

  return (
    <div id="download-button">
      <a href="https://backend.zara777.in/logo/Jodi_Play.apk">
        <div className="d-flex align-items-center justify-content-center gap-2" style={{ flexWrap: 'wrap' }}>
          <img src="/img/download_gif.webp"  alt="Download" className={styles.download_gif} />
        </div>
      </a>
    </div>
  );
};

export default ConditionalDownloadButton;