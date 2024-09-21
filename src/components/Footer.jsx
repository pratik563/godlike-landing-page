import React from "react";

const footer = () => {
  return (
    <footer className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* First Column: Company Logo and Social Media Links */}
        <div className="flex flex-col items-start">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Godlike</h1>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-black"
            >
              <i className="fab fa-youtube fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Second Column: Use Cases */}
        <div className="flex text-left flex-col items-center">
          <a href="#" className="font-bold mb-4">
            Use Cases
          </a>
          <a href="#" className="mb-2">
            UI design
          </a>
          <a href="#" className="mb-2">
            UX design
          </a>
          <a href="#" className="mb-2">
            Wireframing
          </a>
          <a href="#" className="mb-2">
            Diagramming
          </a>
          <a href="#" className="mb-2">
            Brainstroming
          </a>
          <a href="#" className="mb-2">
            Online whiteboard
          </a>
          <a href="#">Team collaboration</a>
        </div>

        {/* Third Column: Use Cases */}
        <div className="flex text-center flex-col items-center">
          <a href="#" className="font-bold mb-4">
            Explore
          </a>
          <a href="#" className="mb-2">
            Design
          </a>
          <a href="#" className="mb-2">
            Prototyping
          </a>
          <a href="#" className="mb-2">
            Development features
          </a>
          <a href="#" className="mb-2">
            Design systems
          </a>
          <a href="#" className="mb-2">
            Collaboration features
          </a>
          <a href="#" className="mb-2">
            Design process
          </a>
          <a href="#">FigJam</a>
        </div>

        {/* Fourth Column: Use Cases */}
        <div className="flex flex-col items-center">
          <a href="#" className="font-bold mb-4">
            Resources
          </a>
          <a href="#" className="mb-2">
            Blog
          </a>
          <a href="#" className="mb-2">
            Best practices
          </a>
          <a href="#" className="mb-2">
            Colors
          </a>
          <a href="#" className="mb-2">
            Color wheel
          </a>
          <a href="#" className="mb-2">
            Support
          </a>
          <a href="#" className="mb-2">
            Developers
          </a>
          <a href="#">Resource library</a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
