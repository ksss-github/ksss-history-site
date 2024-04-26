import "./BookCover.css";

function BookCover({ pdfyear, onClick }) {
  return (
    <div>
      <div className="bookcover__book-cover" onClick={onClick}>
        <p className="bookcover__book-title">
          ÅRS
          <br />
          BOK
          <br />
          {pdfyear}
        </p>
      </div>
      <p className="bookcover__under-text">Årsbok {pdfyear}</p>
    </div>
  );
}

export default BookCover;
