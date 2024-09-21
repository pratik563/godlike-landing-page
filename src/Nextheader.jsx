import React from "react";
import image1 from "../src/images/gray1.jpg";

const Nextheader = () => {
  return (
    <div className="p-6 sm:p-8 flex flex-col items-start max-w-5xl mx-auto w-full">
      {/* Heading and Subheading */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Top Heading</h1>
        <p className="text-base sm:text-lg text-gray-600">
          This is the subheading below the main heading
        </p>
      </div>

      {/* Cards Section in Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <div
            key={card}
            className="border p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            {/* Square Image */}
            <img
              src={image1}
              alt={`Card Image ${card}`}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mb-4"
            />

            {/* Card Content */}
            <div className="text-center">
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                Card Title {card}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                This is the first line of the paragraph.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                This is the second line of the paragraph.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nextheader;
