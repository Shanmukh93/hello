import React, { useRef, useEffect, useState } from "react";
import Confetti from "react-confetti"; // 🎊 Add this
import './Home.css';

function Home() {
  const landingRef = useRef(null);
  const wishRef = useRef(null);
  const buttonRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false); // 🎊

  useEffect(() => {
    const button = buttonRef.current;
    const landing = landingRef.current;
    const wishPage = wishRef.current;

    const handleClick = () => {
      landing.classList.add("hidden");

      setTimeout(() => {
        landing.style.display = "none";
        wishPage.style.display = "flex";
        setShowConfetti(true); // 🎊 show confetti
      }, 1000);
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      {/* 🎊 Show confetti if state is true */}
      {showConfetti && <Confetti />}

      {/* Landing Page */}
      <div id="landingPage" className="centered" ref={landingRef}>
        <h1>🎉 For Special One!</h1>
        <button id="surpriseButton" ref={buttonRef}>🎁 Open Surprise</button>
      </div>

      {/* Birthday Wish Page */}
      <div id="wishPage" className="centered" ref={wishRef} style={{ display: 'none' }}>
        <h1 style={{ color:"#fff"}}>🎂 Happy Birthday!</h1>
        <p style={{ color:"#fff"}}>
          Wishing you a whole year filled with love, laughter, cake, and wonderful surprises.
          May all your dreams come true today and always!.
          Enjoy every moment with your Favourite BTS Songs.
        </p>
        <div style={{ padding: "0px", textAlign: "center", backgroundColor:"White", width: "100%", alignItems:"center" }}>
          <p style={{ marginLeft:"0px",textAlign:"center" }}>After Click on Categories</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
