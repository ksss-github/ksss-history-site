import "./BookCover.css";

function BookCover({ pdfyear, pdfurl }) {
  return (
    <a href={pdfurl} target="_blank">
      <div className="bookcover__book-cover">
        <p className="bookcover__book-title">
          ÅRS
          <br />
          BOK
          <br />
          {pdfyear}
        </p>
      </div>
      <p className="bookcover__under-text">Årsbok {pdfyear}</p>
    </a>
  );
}

export default BookCover;
