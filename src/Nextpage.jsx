import React from "react";
import image1 from "../src/images/gray1.jpg";

const NextPage = () => {
  return (
    <div className="p-8">
      {/* Heading and Subheading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Top Heading</h1>
        <p className="text-lg text-gray-600">
          This is the subheading below the main heading
        </p>
      </div>

      {/* Cards Section */}
      <div className="space-y-8">
        {[1, 2, 3].map((card) => (
          <div
            key={card}
            className="flex flex-col md:flex-row items-center border w-full p-4 rounded-lg shadow-lg"
          >
            <img
              src={image1}
              alt={`Card Image ${card}`}
              className="w-full h-48 md:w-52 md:h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-bold mb-2">Title {card}</h2>
              <p className="text-gray-600 mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
                aperiam sequi, voluptatibus nobis laboriosam ipsa tempora
                commodi iure consectetur dolores quasi. <br /> Ea aliquam
                architecto quia. Ex ducimus nobis totam ipsa quis, repellat
                exercitationem atque placeat laudantium repellendus impedit
                expedita minus laboriosam odio <br /> neque harum vero officia
                sit natus quam
              </p>

              <button className="bg-black text-white px-4 py-2 w-full md:w-4/5 max-w-xs rounded-lg">
                Button
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextPage;
