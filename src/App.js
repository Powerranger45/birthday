import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Tailwind CSS styles
import Confetti from "react-confetti";

function Ella() {
  const [showWish, setShowWish] = useState(false);

  // Dimensions for the confetti effect
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Adjust window size when resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWishClick = () => {
    setShowWish(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden">
      {showWish && (
        <Confetti
          width={windowWidth}
          height={windowHeight}
          recycle={false}
          numberOfPieces={300}
        />
      )}
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source src="https://i.imgur.com/29vVhDM.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-center p-8 rounded-lg shadow-xl bg-white bg-opacity-80 max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate__animated animate__bounceIn">Happy Birthday, Ella! 🎉</h1>
        <p className="text-lg text-gray-600 mb-6">
        Happy Birthday, Ella! 🎉
Today, we celebrate not just your special day, but the incredible person you are. From the laughter we share to the memories we create, your presence lights up the lives of everyone around you. I’m so grateful for every moment we’ve shared, and I can’t wait for all the beautiful moments still to come. May this year be filled with boundless joy, new adventures, and all the love your heart can hold. Cheers to you and the amazing person you’ve become—here’s to making today and every day unforgettable! 🥂💖

Wishing you a year as wonderful as you are. Happy birthday, my friend!
        </p>
        <p className="text-lg text-gray-600 mb-6">
          I hope your day is as amazing and wonderful as you are. Let’s celebrate you today and always! 🥳
        </p>
        <button
          className="mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 hover:scale-105 transform transition"
          onClick={handleWishClick}
        >
          A Special Wish 🎁
        </button>
      </div>
    </div>
  );
}

// Render the Ella component to the root div
ReactDOM.render(<Ella />, document.getElementById("root"));

export default Ella;
