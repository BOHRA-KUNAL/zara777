import React from "react";
import { getSetData } from "@/utils";
import Link from "next/link";
import AccordionUsage from "./common/AccordionUsage";
// Assuming getSetData is a utility function you have to manage local storage or cookies
let isLoggedIn = !!getSetData("token"); // Check if the user is logged in

const Info = () => {
  return (
    <>
      {!isLoggedIn ? (
        <div className="">
        <div style={{color: '#000',fontSize: '14px',borderRadius: '0px',fontWeight: '700',padding: '15px',textAlign: 'center',border: 'GOLDENROD solid 3px',fontStyle: 'italic',marginTop: '10px',marginBottom: '10px'}} className="satta-matka-block bg-gray-100 p-6 rounded-lg shadow-md">
          <section className="text-center mb-8">
            <h2 className="h2-Info text-3xl font-bold text-gray-800">
            Introduction to ZARA777
            </h2>
            <p className="pinfo mt-4 text-gray-700">
            Welcome to ZARA777, the premier online platform for all your Satta Matka needs. We offer an extensive range of Satta Matka games, including Gali, Desawar, Kalyan, Milan, Rajdhani, and many more. Our site is designed to provide you with the latest results, expert tips, and comprehensive charts to help you enhance your gaming experience. Whether you're an experienced player or just starting, ZARA777 is your go-to source for all things Satta Matka.
            </p>
            <p className="pinfo mt-4 text-gray-700">
              Keywords: ZARA777, Satta Matka Online, Gali Matka, Desawar Matka, Kalyan Matka, Milan Matka, Rajdhani Matka, Satta Matka Charts
            </p>
          </section>
  
          <section className="text-center mb-8">
            <h2 className="h2-Info text-2xl font-semibold text-gray-800">
            What is Satta Matka?
            </h2>
            <p className="pinfo mt-4 text-gray-700">
             Satta Matka is a form of gambling that originated in India. It involves betting on numbers drawn from a pot, or 'Matka,' which is where the name comes from. Over the years, it has evolved into a sophisticated system with various types of games, each offering unique ways to place bets and win.
            </p>
          </section>
  
          <section className="mb-8">
            <h3 className="h2-Info text-xl font-semibold text-gray-800">
            The Origin of Satta Matka
            </h3>
            <p className="pinfo mt-4 text-gray-700">
            The game began in the 1960s and was initially a form of lottery based on the opening and closing rates of cotton traded on the New York Cotton Exchange. It has since evolved into a number-based game where players bet on various numbers drawn at random. The history of Satta Matka reflects its transformation from a physical lottery system to an online gaming sensation.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            History of Satta Matka, Satta Matka Evolution, Origin of Satta Matka, Indian Gambling History
            </p>
          </section>
  
          <section className="mb-8">
            <h3 className="h2-Info text-xl font-semibold text-gray-800">
              How Satta Matka Works
            </h3>
            <p className="pinfo mt-4 text-gray-700">
            In Satta Matka, players place bets on numbers drawn from a pot. The game typically involves selecting a number or a combination of numbers, and if these numbers match the drawn numbers, the player wins. The game is primarily based on luck, though some players use statistical analysis and prediction techniques to improve their chances.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: How Satta Matka Works, Satta Matka Rules, Satta Matka Betting, Online Satta Matka
            </p>
          </section>
  
          <section className="mb-8">
            <h3 className="h2-Info text-xl font-semibold text-gray-800">
              Types of Satta Matka Games on ZARA777
            </h3>
            <p className="pinfo mt-4 text-gray-700">
            ZARA777 features a variety of Satta Matka games to suit every player’s preferences. Here’s a detailed overview of the different types of games available:
            </p>
          </section>
  
          <section className="mb-8">
            <h4 className="h2-Info text-lg font-semibold text-gray-800">
              Gali Market Matka
            </h4>
            <p className="pinfo mt-4 text-gray-700">
            Gali Market Matka is one of the oldest and most popular forms of Satta Matka. Players bet on numbers drawn from a pot, and the results are typically announced multiple times throughout the day. Gali Matka/Gali Desawer is known for its frequent draws and wide betting options.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Gali Matka, Gali Matka Results, Gali Matka Betting, Gali Matka Game
            </p>
          </section>
        </div>
  
        <div style={{backgroundColor: 'white',color: '#000',paddingTop: '10px',paddingBottom: '10px',textAlign: 'center',borderWidth: '2px',borderStyle: 'solid',borderColor: 'black', marginBottom: '10px'}} className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8">
          <h4 style={{fontSize: '18px',color: 'indigo',margin: '0',padding: '5px',fontWeight: '600', borderColor: 'black'}} className="text-lg font-semibold text-gray-800">
            Desawar Matka
          </h4>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
            Desawar Matka is another well-known variant, named after the town of Desawar. It features a distinct set of rules and betting patterns. The game’s popularity stems from its straightforward approach and the potential for significant winnings.
          </p>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Keywords: Desawar Matka, Desawar Matka Results, Desawar Matka Betting, Desawar Matka Game
          </p>
        </div>
  
        <div style={{backgroundColor: 'white',color: '#000',paddingTop: '10px',paddingBottom: '10px',textAlign: 'center',borderWidth: '2px',borderStyle: 'solid',borderColor: 'black', marginBottom: '10px'}} className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8">
          <h4 style={{fontSize: '18px',color: 'indigo',margin: '0',padding: '5px',fontWeight: '600', borderColor: 'black'}} className="text-lg font-semibold text-gray-800">
          Kalyan Matka
          </h4>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Kalyan Matka is famous for its high stakes and substantial payouts. This game is played with a unique set of rules and offers various betting options, making it a favorite among experienced players.
          </p>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Keywords: Kalyan Matka, Kalyan Matka Results, Kalyan Matka Betting, Kalyan Matka Game
          </p>
        </div>
  
        <div style={{backgroundColor: 'white',color: '#000',paddingTop: '10px',paddingBottom: '10px',textAlign: 'center',borderWidth: '2px',borderStyle: 'solid',borderColor: 'black', marginBottom: '10px'}} className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8">
          <h4 style={{fontSize: '18px',color: 'indigo',margin: '0',padding: '5px',fontWeight: '600', borderColor: 'black'}} className="text-lg font-semibold text-gray-800">
          Milan Matka
          </h4>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Milan Matka involves betting on numbers drawn at specific times of the day. It’s known for its balanced odds and frequent draws, providing players with multiple opportunities to win.
          </p>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Keywords: Milan Matka, Milan Matka Results, Milan Matka Betting, Milan Matka Game
          </p>
        </div>

        <div style={{backgroundColor: 'white',color: '#000',paddingTop: '10px',paddingBottom: '10px',textAlign: 'center',borderWidth: '2px',borderStyle: 'solid',borderColor: 'black', marginBottom: '10px'}} className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8">
          <h4 style={{fontSize: '18px',color: 'indigo',margin: '0',padding: '5px',fontWeight: '600', borderColor: 'black'}} className="text-lg font-semibold text-gray-800">
          Rajdhani Matka
          </h4>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Rajdhani Matka is a prestigious game with high stakes. Players place bets on a range of numbers, and the results are announced at scheduled intervals. Rajdhani Matka is often associated with substantial rewards and is popular among high-stakes gamblers.
          </p>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Keywords: Rajdhani Matka, Rajdhani Matka Results, Rajdhani Matka Betting, Rajdhani Matka Game
          </p>
        </div>

        <div style={{backgroundColor: 'white',color: '#000',paddingTop: '10px',paddingBottom: '10px',textAlign: 'center',borderWidth: '2px',borderStyle: 'solid',borderColor: 'black', marginBottom: '10px'}} className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8">
          <h4 style={{fontSize: '18px',color: 'indigo',margin: '0',padding: '5px',fontWeight: '600', borderColor: 'black'}} className="text-lg font-semibold text-gray-800">
          Main Mumbai Matka
          </h4>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Main Mumbai Matka offers a traditional gaming experience with a modern twist. It’s played with a classic set of rules and has a loyal following among players who prefer a more traditional approach to Satta Matka.
          </p>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Keywords: Main Mumbai Matka, Main Mumbai Matka Results, Main Mumbai Matka Betting, Main Mumbai Matka Game
          </p>
        </div>

        <div style={{backgroundColor: 'white',color: '#000',paddingTop: '10px',paddingBottom: '10px',textAlign: 'center',borderWidth: '2px',borderStyle: 'solid',borderColor: 'black', marginBottom: '10px'}} className="blog-section bg-gray-50 p-6 rounded-lg shadow-md mt-8">
          <h4 style={{fontSize: '18px',color: 'indigo',margin: '0',padding: '5px',fontWeight: '600', borderColor: 'black'}} className="text-lg font-semibold text-gray-800">
          Mumbai Worli Matka
          </h4>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Mumbai Worli Matka is known for its unique betting patterns and frequent draws. This game is popular for its ease of play and the opportunity it provides for quick wins.
          </p>
          <p style={{color: '#000',margin: '1px',padding: '5px',fontSize: '14px',fontWeight: 700}} className="mt-4 text-gray-700">
          Keywords: Mumbai Worli Matka, Mumbai Worli Matka Results, Mumbai Worli Matka Betting, Mumbai Worli Matka Game
          </p>
        </div>

        <div style={{color: '#000',fontSize: '14px',borderRadius: '0px',fontWeight: '700',padding: '15px',textAlign: 'center',border: 'GOLDENROD solid 3px',fontStyle: 'italic',marginTop: '10px',marginBottom: '10px'}} className="satta-matka-block bg-gray-100 p-6 rounded-lg shadow-md">
          <section className="text-center mb-8">
            <h2 className="h2-Info text-3xl font-bold text-gray-800">
            How to Play Satta Matka on ZARA777
            </h2>
            <p className="pinfo mt-4 text-gray-700">
            Playing Satta Matka on ZARA777 is straightforward and user-friendly. Here’s a step-by-step guide to get you started:
            </p>
            <p className="pinfo mt-4 text-gray-700">
              Register and Create an Account
            </p>
            <p className="pinfo mt-4 text-gray-700">
            To begin, you need to register on our site and create an account. This involves providing basic information and setting up your profile.
            Keywords: Satta Matka Registration, Create Account on ZARA777, How to Register for Satta Matka
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Choose Your Game
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Select the Satta Matka game you want to play from our extensive list. Each game has its own set of rules and betting options.
            Keywords: Choose Satta Matka Game, Satta Matka Game Selection, Online Matka Games
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Place Your Bets
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Once you’ve chosen a game, place your bets on your selected numbers. You can choose from various betting options, including single numbers, combinations, and more.
            Keywords: Place Satta Matka Bets, Satta Matka Betting Options, How to Bet on Satta Matka
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Check Live Results
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Collect Your Winnings
            </p>
            <p className="pinfo mt-4 text-gray-700">
            If your numbers match the drawn numbers, you win! Collect your winnings through our secure payment system.
            Keywords: Collect Satta Matka Winnings, Satta Matka Payouts, Secure Payment for Satta Matka
            </p>
          </section>
  
          <section className="text-center mb-8">
            <h2 className="h2-Info text-2xl font-semibold text-gray-800">
            Understanding Satta Matka Charts and Trends
            </h2>
            <p className="pinfo mt-4 text-gray-700">
            Charts and trends play a crucial role in predicting outcomes in Satta Matka. Here’s how you can use them effectively:
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Importance of Charts
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Charts provide historical data on past results, helping players analyze patterns and trends. This information can be used to make more informed betting decisions.
            Keywords: Satta Matka Charts, Importance of Matka Charts, Analyzing Matka Trends
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Types of Charts
            </p>
            <p className="pinfo mt-4 text-gray-700">
            - Madhur Satta Chart
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Kalyan Matka Chart
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Milan Matka Chart
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Rajdhani Matka Chart
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Mumbai Matka Chart
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Time Bazar Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Kalyan Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Kalyan Night Panna Record

            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Main Bazar Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Madhur Morning Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">
              
            - Madhur Day Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Madhur Night Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Milan Day Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            » Milan Night Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            » Rajdhani Day Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            » Rajdhani Night Panna Record
            </p>
            <p className="pinfo mt-4 text-gray-700">

            Each chart provides data on specific games and helps in understanding the historical performance of numbers.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Madhur Satta Chart, Kalyan Chart, Milan Chart, Rajdhani Chart, Mumbai Chart

            </p>
          </section>
  
          <section className="mb-8">
            <h3 className="h2-Info text-xl font-semibold text-gray-800">
            How to Read Charts
            </h3>
            <p className="pinfo mt-4 text-gray-700">
            Understanding how to read and interpret charts is essential for effective betting. Our site offers guides and tips on how to analyze chart data and use it to your advantage.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: How to Read Satta Matka Charts, Interpreting Matka Charts, Matka Chart Analysis
            </p>
          </section>
  
          <section className="mb-8">
            <h3 className="h2-Info text-xl font-semibold text-gray-800">
            Expert Tips and Strategies
            </h3>
            <p className="pinfo mt-4 text-gray-700">
            Betting Strategies
            </p>
            <p className="pinfo mt-4 text-gray-700">
            - Fixed Numbers: Focus on a set of numbers that appear frequently.
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Pattern Recognition: Look for patterns in past results to inform your bets.
            </p>
            <p className="pinfo mt-4 text-gray-700">

            - Risk Management: Manage your betting budget to avoid significant losses.
            </p>

            <p className="pinfo mt-4 text-gray-700">

            Keywords: Satta Matka Betting Strategies, Fixed Numbers, Pattern Recognition, Risk Management
            </p>

            <p className="pinfo mt-4 text-gray-700">

            Common Mistakes to Avoid
            </p>

            <p className="pinfo mt-4 text-gray-700">

            Avoid common pitfalls such as betting impulsively, ignoring trends, or chasing losses. Our experts provide insights on how to steer clear of these mistakes.
            </p>

            <p className="pinfo mt-4 text-gray-700">

            Keywords: Common Satta Matka Mistakes, Avoiding Betting Pitfalls, Satta Matka Tips
            </p>

            <p className="pinfo mt-4 text-gray-700">

            Using Expert Predictions
            </p>

            <p className="pinfo mt-4 text-gray-700">

            Leverage predictions from our team of experts to guide your betting decisions. Our predictions are based on extensive analysis and historical data.
            </p>

            <p className="pinfo mt-4 text-gray-700">

            Keywords: Expert Satta Matka Predictions, Matka Betting Tips, Professional Betting Advice
            </p>

          </section>
  
          <section className="mb-8">
            <h3 className="h2-Info text-xl font-semibold text-gray-800">
            Live Satta Matka Results and Updates
            </h3>
            <p className="pinfo mt-4 text-gray-700">
            Stay updated with the latest Satta Matka results and announcements:
            </p>
          </section>

          <section className="mb-8">
            <h4 className="h2-Info text-lg font-semibold text-gray-800">
            Real-Time Updates
            </h4>
            <p className="pinfo mt-4 text-gray-700">
            Our site provides real-time updates for all Satta Matka games. You can check the latest results and get immediate information on game outcomes.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Real-Time Satta Matka Results, Live Matka Updates, Latest Satta Results
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Results Archive
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Access an archive of past results for all games. This feature helps in analyzing historical data and making informed predictions.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Satta Matka Results Archive, Past Matka Results, Historical Matka Data
            </p>
          </section>

          <section className="mb-8">
            <h4 className="h2-Info text-lg font-semibold text-gray-800">
            Why Choose ZARA777?
            </h4>
            <p className="pinfo mt-4 text-gray-700">
            Fast and Accurate Results
            </p>
            <p className="pinfo mt-4 text-gray-700">
            We ensure that you receive the fastest and most accurate results for all Satta Matka games. Our technology and infrastructure are designed to provide timely updates.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Fast Satta Matka Results, Accurate Matka Results, Reliable Matka Updates

            </p>
            <p className="pinfo mt-4 text-gray-700">
            User-Friendly Interface
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Our website is designed to be user-friendly, making it easy for you to navigate, place bets, and access information. Enjoy a seamless experience every time you visit.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: User-Friendly Satta Matka Site, Easy Navigation, Online Betting Experience
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Expert Support
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Our team of experts is available to provide support and answer any questions you may have. We are committed to helping you have the best gaming experience.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Satta Matka Support, Expert Assistance, Customer Service
            </p>
          </section>

          <section className="mb-8">
            <h4 className="h2-Info text-lg font-semibold text-gray-800">
            Legal and Responsible Gaming
            </h4>
            <p className="pinfo mt-4 text-gray-700">
            Satta Matka is a form of gambling and should be approached responsibly. Here’s what you need to know:
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Legal Considerations
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Ensure that you are aware of and comply with local laws and regulations related to gambling. The legality of Satta Matka varies by region, so it’s important to be informed.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Satta Matka Legality, Gambling Laws, Responsible Gaming
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Responsible Gaming Practices
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Set limits for your betting activities and never gamble more than you can afford to lose. Responsible gaming practices are essential for ensuring a safe and enjoyable experience.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Responsible Gambling, Betting Limits, Safe Gaming Practices
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Resources for Help
            </p>
            <p className="pinfo mt-4 text-gray-700">
            If you need assistance or support related to gambling issues, there are resources available to help. Our site provides information on how to access support services.
            </p>
            <p className="pinfo mt-4 text-gray-700">
            Keywords: Gambling Support Resources, Help for Gamblers, Responsible Gaming Resources
            </p>
          </section>
        </div>

        <div className="disclaimer bg-yellow-100 p-6 rounded-lg shadow-md mt-8 text-center">
          <p className="h2-Info">
            👉 Conclusion 👈
          </p>
          <p style={{color: '#fafafa'}} className="mt-2 text-gray-700">
          ZARA777 is your ultimate destination for Satta Matka gaming. With a wide range of games, real-time results, expert tips, and a user-friendly platform, we provide everything you need for an exceptional gaming experience. Play responsibly and enjoy the thrill of Satta Matka with us!
          </p>
          <p style={{color: '#fafafa', marginBottom: '0px'}} className="mt-2 text-gray-800 font-bold">
            zara777.com
          </p>
        </div>

          {/* faqs start */}
          <div className="pt-4">
          <AccordionUsage />
          </div>
          {/* faqs end */}

        <div className="container-keyword">
            <div className="widget-title text-large2 yellow-gradient mb-1 stol-500">Keywords</div>
            <ul className="new-footer-row">
            <li><a href="#">ZARA777 Satta Matka</a></li>
            <li><a href="#">Online Satta Matka Games</a></li>
            <li><a href="#">Responsible Gaming</a></li>
            <li><a href="#">Expert Satta Matka Tips</a></li>
            <li><a href="#">ZARA777 Satta Tips</a></li>
            <li><a href="#">Leak Jodi Matka</a></li>
            <li><a href="#">Satta Matka</a></li>
            <li><a href="#">Main Bazar</a></li>
            <li><a href="#">Kalyan Night</a></li>
            <li><a href="#">Kalyan Day Matka</a></li>
            <li><a href="#">Matka Games</a></li>
            <li><a href="#">Madhur Satta</a></li>
            <li><a href="#">Gali Matka</a></li>
            <li><a href="#">Desawar Matka</a></li>
            <li><a href="#">Milan Matka</a></li>
            <li><a href="#">Rajdhani Matka</a></li>
            <li><a href="#">Mumbai Matka</a></li>
            <li><a href="#">Gali Result</a></li>
            <li><a href="#">Kalyan Result</a></li>
            <li><a href="#">Madhur Result</a></li>
            <li><a href="#">Desawar Result</a></li>
            <li><a href="#">Milan Result</a></li>
            <li><a href="#">Rajdhani Result</a></li>
            <li><a href="#">Mumbai Result</a></li>
            <li><a href="#">Satta Matka Tips</a></li>
            <li><a href="#">Satta Matka Charts</a></li>
            <li><a href="#">Kalyan Matka Chart</a></li>
            <li><a href="#">Madhur Matka Chart</a></li>
            <li><a href="#">Milan Matka Chart</a></li>
            <li><a href="#">Rajdhani Matka Chart</a></li>
            <li><a href="#">Mumbai Matka Chart</a></li>
            <li><a href="#">Satta Matka Expert</a></li>
            <li><a href="#">Satta Matka Predictions</a></li>
            <li><a href="#">Kalyan Night Result</a></li>
            <li><a href="#">Kalyan Day Result</a></li>
            <li><a href="#">Madhur Day</a></li>
            <li><a href="#">Madhur Night</a></li>
            <li><a href="#">Milan Day</a></li>
            <li><a href="#">Milan Night</a></li>
            <li><a href="#">Rajdhani Day</a></li>
            <li><a href="#">Rajdhani Night</a></li>
            <li><a href="#">Mumbai Worli Matka</a></li>
            <li><a href="#">Main Mumbai Matka</a></li>
            <li><a href="#">Super Star Day</a></li>
            <li><a href="#">Bombay Bazar</a></li>
            <li><a href="#">Kalyan Matka Betting</a></li>
            <li><a href="#">Satta Matka Strategies</a></li>
            <li><a href="#">Satta Matka Jodi</a></li>
            <li><a href="#">Satta Matka Panna</a></li>
            <li><a href="#">Matka Guessing</a></li>
            <li><a href="#">Matka Fix Numbers</a></li>
            <li><a href="#">Satta Matka Live Updates</a></li>
            <li><a href="#">Kalyan Matka Live</a></li>
            <li><a href="#">Satta Matka Results</a></li>
            <li><a href="#">Madhur Bazar</a></li>
            <li><a href="#">Desawar Bazar</a></li>
            <li><a href="#">Milan Bazar</a></li>
            <li><a href="#">Rajdhani Bazar</a></li>
            <li><a href="#">Mumbai Bazar</a></li>
            <li><a href="#">Kalyan Matka Tips</a></li>
            <li><a href="#">Satta Matka Online</a></li>
            <li><a href="#">Matka Results Online</a></li>
            <li><a href="#">Madhur Matka Predictions</a></li>
            <li><a href="#">Gali Matka Results</a></li>
            <li><a href="#">Kalyan Night Tips</a></li>
            <li><a href="#">Kalyan Day Tips</a></li>
            <li><a href="#">Satta Matka Tricks</a></li>
            <li><a href="#">Satta Matka Online Results</a></li>
            <li><a href="#">Kalyan Matka Today</a></li>
            <li><a href="#">Madhur Matka Today</a></li>
            <li><a href="#">Milan Matka Today</a></li>
            <li><a href="#">Rajdhani Matka Today</a></li>
            <li><a href="#">Mumbai Matka Today</a></li>
            <li><a href="#">Super Star Matka</a></li>
            <li><a href="#">Time Bazar</a></li>
            <li><a href="#">Satta Bazar</a></li>
            <li><a href="#">Kalyan Satta Bazar</a></li>
            <li><a href="#">Madhur Satta Bazar</a></li>
            <li><a href="#">Milan Satta Bazar</a></li>
            <li><a href="#">Rajdhani Satta Bazar</a></li>
            <li><a href="#">Mumbai Satta Bazar</a></li>
            <li><a href="#">Kalyan Night Satta</a></li>
            <li><a href="#">Kalyan Day Satta</a></li>
            <li><a href="#">Satta Matka Boss</a></li>
            <li><a href="#">Matka Boss</a></li>
            <li><a href="#">Kalyan Boss</a></li>
            <li><a href="#">Madhur Boss</a></li>
            <li><a href="#">Milan Boss</a></li>
            <li><a href="#">Rajdhani Boss</a></li>
            <li><a href="#">Mumbai Boss</a></li>
            <li><a href="#">Satta Matka Fix</a></li>
            <li><a href="#">Satta Matka Numbers</a></li>
            <li><a href="#">Satta Matka Panel</a></li>
            <li><a href="#">Matka Panel</a></li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Info;
