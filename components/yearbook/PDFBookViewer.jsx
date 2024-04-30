import BookCover from "./BookCover";

function PDFBookViewer({ pdf, pdfyear }) {
  return (
    <>
      <BookCover pdfyear={pdfyear} pdfurl={pdf} />
    </>
  );
}

export default PDFBookViewer;
