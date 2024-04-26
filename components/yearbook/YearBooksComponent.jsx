import React, { useState, useEffect } from "react";
import Link from "next/link";
import PDFBookViewer from "./PDFBookViewer";
import YearBookSubHeader from "./YearBookSubHeader";
import { getPdfYearBooks } from "../../sanity/sanity-utils"; // Import the function to fetch yearBooks from Sanity
import "./YearBooksComponent.css";

const YearBooksComponent = () => {
  const [yearBooks, setYearBooks] = useState([]); // State to hold yearBooks data

  const [showLogin, setShowLogin] = useState(true); // State to control login form visibility
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const [username, setUsername] = useState(""); // State to hold username input value
  const [password, setPassword] = useState(""); // State to hold password input value

  useEffect(() => {
    // Fetch yearBooks data from Sanity when the component mounts
    const fetchYearBooks = async () => {
      try {
        const yearBooksData = await getPdfYearBooks(); // Call the function to fetch yearBooks
        setYearBooks(yearBooksData); // Update component state with fetched data
      } catch (error) {
        console.error("Error fetching yearBooks:", error);
      }
    };

    // Function to handle login submission

    fetchYearBooks(); // Call the fetch function
  }, []); // Run this effect only once when the component mounts

  const handleLogin = () => {
    // Check if username and password match hard-coded values
    if (username === "KSSS" && password === "test") {
      setLoggedIn(true); // Set logged-in state to true
      setShowLogin(false); // Hide login form
    } else {
      alert("Invalid username or password");
    }
  };

  // Function to group years into decades
  const groupYearsIntoDecades = (pdfyears) => {
    // Create an empty object to store decades as keys and corresponding years as values
    const decades = {};
    // Iterate over each year in the provided array
    pdfyears.forEach((pdfyear) => {
      // Calculate the decade for the current year (e.g., 1970 -> 1970s)
      const decade = Math.floor(pdfyear.pdfyear / 10) * 10;
      // If the decade key does not exist in the decades object, create an empty array for it
      if (!decades[decade]) {
        decades[decade] = [];
      }
      // Push the current year into the array corresponding to its decade
      decades[decade].push(pdfyear);
    });

    // Sort years within each decade in ascending order
    Object.values(decades).forEach((decade) => {
      decade.sort((a, b) => a.pdfyear - b.pdfyear);
    });
    // Convert the object into an array of [decade, years] pairs and sort them by decade in reverse order
    return Object.entries(decades).sort((a, b) => b[0] - a[0]);
  };

  // Group the years from the fetched yearBooks array into decades
  const decades = groupYearsIntoDecades(yearBooks);

  return (
    <>
      <YearBookSubHeader />
      <div className="year-books-component__container">
        {/* Maps over each decade and render its corresponding years */}
        {decades.map(([decade, years]) => (
          <div key={decade}>
            <div className="year-books-component__decade-container">
              <h2 className="year-books-component__decades-text">{decade}</h2>
              {/* Maps over each year within the decade and render the PDFBookViewer component */}
              <div className="year-books-component__container-decades-books">
                {years.map((book) => (
                  <PDFBookViewer
                    key={book.pdfyear}
                    pdf={book.pdf}
                    pdfyear={book.pdfyear}
                  />
                ))}
              </div>
            </div>
            <div className="line"></div>
          </div>
        ))}
      </div>

      {/* Blurred overlay and login form */}
      {showLogin && (
        <div className="year-books-component__modal-overlay">
          <div className="year-books-component__login-form">
            <div>
              <h2 className="year-books-component__login-h2">LOGGA IN</h2>
              <p>
                För att ta del av KSSS årsböcker kräver det att du loggar in
              </p>
            </div>
            <input
              className="year-books-component__input"
              type="text"
              placeholder="Användarnamn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="year-books-component__input"
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="year-books-component__login-button"
              onClick={handleLogin}
            >
              LOGGA IN
            </button>
            <Link href="/">Ej Medlem</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default YearBooksComponent;
