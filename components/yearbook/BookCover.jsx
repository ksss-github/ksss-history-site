import "./BookCover.css";

function BookCover({ year, onClick }) {
  return (
    <div>
      <div className="bookcover__book-cover" onClick={onClick}>
        <p className="bookcover__book-title">
          ÅRS
          <br />
          BOK
          <br />
          {year}
        </p>
      </div>
      <p className="bookcover__under-text">Årsbok {year}</p>
    </div>
  );
}

export default BookCover;
