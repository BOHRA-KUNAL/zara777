import { getSetData } from "@/utils";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  let title = getSetData("docTitle");

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "ZARA777",
    url: "https://zara777.in/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const appSchemaData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "ZARA777 - Online Matka Play App",
    operatingSystem: "iOS, Android",
    applicationCategory: "Game",
    url: "https://zara777.in/",
    downloadUrl: "https://backend.jodiplay.com/logo/Jodi_Play.apk",
    description:
      "The trusted online matka app in India with fast results. Play now and enjoy quick wins and exciting games like Madhur Matka, Milan Matka, Gali Matka and more!",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "2000",
    },
    screenshot: [
      "https://drive.google.com/uc?id=1b7NdoKNGDeqpfppQCnd8r4NBjny0Yj0g",
      "https://drive.google.com/uc?id=1pram2JuXaerD8bCDHN71XgSezPk0N5Tk",
    ],
    applicationSubCategory: "BettingGame",
    softwareVersion: "1.0",
    inLanguage: "en",
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Zara777?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zara777 is an online platform for matka play, offering a variety of matka markets with 24/7 automated deposit and withdrawal services for a seamless gaming experience.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with matka play on Zara777?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply sign up on our website, fund your account through our secure payment options, and select your preferred matka market to start playing.",
        },
      },
      {
        "@type": "Question",
        name: "What types of matka markets are available on Zara777?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zara777 provides access to all popular matka markets, allowing users to choose the games they know and love.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to deposit and withdraw money on Zara777?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Zara777 prioritizes user safety with secure payment gateways and 24/7 automated deposits and withdrawals, ensuring fast and safe transactions.",
        },
      },
      {
        "@type": "Question",
        name: "How fast are deposits and withdrawals processed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All deposits and withdrawals are processed instantly, thanks to our automated system available around the clock.",
        },
      },
      {
        "@type": "Question",
        name: "Can I play matka on Zara777 at any time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Zara777 operates 24/7, allowing you to access the platform and play whenever it’s convenient for you.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I encounter an issue with my account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'If you have any account issues, please contact our support team through the "Contact Us" page. We’re here to help you resolve any problems.',
        },
      },
      {
        "@type": "Question",
        name: "Is there a minimum or maximum limit for deposits and withdrawals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Zara777 may have specific limits depending on the payment method. Please refer to our payment policy section for detailed information.",
        },
      },
    ],
  };

  return (
    <Html lang="en">
      <Head>
        <title>
          ZARA777 | The Best Online Satta Matka App for Fun and Wins
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Join ZARA777 for the ultimate online Satta Matka experience! Enjoy fast results, exciting games, and a friendly community. Start playing today!"
        />
        <meta
          name="keywords"
          content="online matka app, online matka play, matka app, online matka play app, online satta play, trusted online matka app, best online satta app"
        />
        <meta
          property="og:title"
          content="Play Satta Matka and Win Big on ZARA777"
        />
        <meta
          property="og:description"
          content="The trusted online matka app in India with fast results. Play now and enjoy quick wins and exciting games like Madhur Matka, Milan Matka, Gali Matka and more!
"
        />
        <meta
          property="og:image"
          content="https://zara777.in/img/zara_header_image.png"
        />
        <meta property="og:url" content="https://zara777.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ZARA777" />

        <link rel="canonical" href="https://zara777.in/" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchemaData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRZWVP7R')

          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRZWVP7R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
