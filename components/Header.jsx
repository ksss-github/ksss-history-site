import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";

const Header = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle link click and set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header
      className={`header ${isLargeScreen ? "large-screen" : "small-screen"}`}
    >
      <div>
        <Image
          className="ksss-logo"
          src="/logo.png"
          alt="KSSS Logo"
          width={90}
          height={90}
        />
      </div>
      {isLargeScreen ? (
        <nav>
          <ul>
            <li
              className={`navbar-links ${
                activeLink === "home" ? "active" : ""
              }`}
            >
              <Link href="/" onClick={() => handleLinkClick("home")}>
                HEMSIDAN
              </Link>
            </li>
            <li
              className={`navbar-links ${
                activeLink === "timeline" ? "active" : ""
              }`}
            >
              <Link
                href="/timeline"
                onClick={() => handleLinkClick("timeline")}
              >
                HISTORISK TIDSLINJEN
              </Link>
            </li>
            <li
              className={`navbar-links ${
                activeLink === "books" ? "active" : ""
              }`}
            >
              <Link href="/" onClick={() => handleLinkClick("books")}>
                ÅRSBOCKERNA
              </Link>
            </li>
            <li
              className={`navbar-links ${
                activeLink === "about" ? "active" : ""
              }`}
            >
              <Link href="/" onClick={() => handleLinkClick("about")}>
                OM KSSS
              </Link>
            </li>
            <li className="navbar-links">
              <IoSearch className="search-icon" style={{ fontSize: "24px" }} />
              <Image
                className="swedish-flag"
                src="/Flag-Sweden.webp"
                alt="KSSS Logo"
                width={25}
                height={30}
              />
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <div className="menu-toggle" onClick={toggleMenu}>
            {showMenu ? <IoClose /> : <IoMenu />}
          </div>
          {showMenu && (
            <div className={`menu ${showMenu ? "open" : ""}`}>
              <IoClose className="close-icon" onClick={toggleMenu} />
              <nav>
                <ul>
                  <li className="menu-links">
                    <Link href="/">Hemsidan</Link>
                  </li>
                  <li className="menu-links">
                    <Link href="/timeline">Historisk tidslinjen</Link>
                  </li>
                  <li className="menu-links">
                    <Link href="/">Årsbockerna</Link>
                  </li>
                  <li className="menu-links">
                    <Link href="/">Om KSSS</Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
