import Head from "next/head";

const AnalyticsScripts = () => {
  return (
    <Head>
      {/* Meta Pixel Code */}
    
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=536078485927864&ev=PageView&noscript=1"
        />
      </noscript>

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8G2WC36RHT"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
             window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8G2WC36RHT');
          `,
        }}
      />
    </Head>
  );
};

export default AnalyticsScripts;
