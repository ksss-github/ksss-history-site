"use client";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";

/**
 * Header component for the application.
 */
const Header = () => {
  /**
   * State to track if the screen is large.
   * @type {boolean}
   */
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  /**
   * State to track if the menu is shown.
   * @type {boolean}
   */
  const [showMenu, setShowMenu] = useState(false);

  /**
   * State to track the active link.
   * @type {string}
   */
  const [activeLink, setActiveLink] = useState(""); 

  /**
   * Effect hook to handle window resize events.
   */
  useEffect(() => {
    /**
     * Handler for window resize events.
     * Sets isLargeScreen state based on window width.
     */
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 904);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Function to toggle the visibility of the menu.
   */
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
      <div className="header-logo-container">
        <Image
          className="navbar__ksss-logo"
          src="/logo.png"
          alt="KSSS Logo"
          width={65}
          height={65}
        />
      </div>
      {isLargeScreen ? (
        <nav className="header-navbar">
          <ul className="header-navbar-list">
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
              <Link href="/yearbook" onClick={() => handleLinkClick("books")}>
                ÅRSBOCKERNA
              </Link>
            </li>
            <li
              className={`navbar-links ${
                activeLink === "about" ? "active" : ""
              }`}
            >
              <Link href="/about-us" onClick={() => handleLinkClick("about")}>
                OM KSSS
              </Link>
            </li>
            <li className="navbar-links">
              <button className="language-button">
                <Image
                  className="swedish-flag"
                  src="/Flag-Sweden.webp"
                  alt="swedish-flag"
                  width={25}
                  height={30}
                />
              </button>
              <div className="dropdown-content">
                <a href="#" className="language-option">
                  <Image
                    className="swedish-flag__dropdown"
                    src="/Flag-Sweden.webp"
                    alt="swedish-flag"
                    width={24}
                    height={15}
                  />
                  SVENSKA
                </a>
                <a href="#" className="language-option">
                  <Image
                    className="english-flag__dropdown"
                    src="/british-flag.jpg"
                    alt="british-flag"
                    width={24}
                    height={15}
                  />
                  ENGELSKA
                </a>
                <a href="#" className="language-option">
                  <Image
                    className="german-flag__dropdown"
                    src="/german-flag.webp"
                    alt="german-flag"
                    width={24}
                    height={15}
                  />
                  TYSKA
                </a>
              </div>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <div className="navbar__menu-toggle" onClick={toggleMenu}>
            {showMenu ? <IoClose /> : <IoMenu className="navbar__menu-icon" />}
          </div>
          {showMenu && (
            <div className={`navbar__menu ${showMenu ? "open" : ""}`}>
              <IoClose className="close-icon" onClick={toggleMenu} />
              <nav >
                <ul className="header-hamburger-list">
                  <li className="menu-links">
                    <Link href="/">HEMSIDAN</Link>
                  </li>
                  <li className="menu-links">
                    <Link href="/timeline">HISTORISK TIDSLINJEN</Link>
                  </li>
                  <li className="menu-links">
                    <Link href="/">ÅRSBÖCKER</Link>
                  </li>
                  <li className="menu-links">
                    <Link href="/">OM KSSS</Link>
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
