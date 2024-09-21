import React from "react";
import image1 from "../src/images/gray1.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Title and Subtitle */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Godlike
      </h1>
      <p className="text-lg mb-6 text-center">
        Discover amazing features and seamless experience
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mb-32">
        <button className="bg-gray-300 text-black px-6 py-3 rounded">
          Learn More
        </button>
        <button className="bg-black text-white px-6 py-3 rounded">
          Get Started
        </button>
      </div>

      {/* Images Side by Side */}
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-4/5 h-auto px-4">
        <img
          src={image1}
          alt="Image 1"
          className="w-full sm:w-1/2 h-48 sm:h-96 object-cover rounded-lg shadow-lg"
        />
        <img
          src={image1}
          alt="Image 2"
          className="w-full sm:w-1/2 h-48 sm:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
