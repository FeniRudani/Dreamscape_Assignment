import React, { useState } from "react";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { text: "Home", isHovered: hoveredLink === "Home" },
    { text: "About", isHovered: hoveredLink === "About" },
    { text: "Key Feature", isHovered: hoveredLink === "Key Feature" },
    { text: "Benefits", isHovered: hoveredLink === "Benefits" },
    { text: "Partnerships", isHovered: hoveredLink === "Partnerships" },
    { text: "Contact Us", isHovered: hoveredLink === "Contact Us" },
  ];

  return (
    <nav className="">
      <div className="flex space-x-6">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-black relative"
            onMouseEnter={() => setHoveredLink(link.text)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.text}
            {link.isHovered && (
              <span className="absolute top-7 left-0 w-full h-1 bg-[#FFEC40]"></span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
