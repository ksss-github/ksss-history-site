import { pdfjs } from "react-pdf"; // Configure PDF this is most add to make the pdf-reader work !
import BookCover from "./BookCover";

import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // this is most add to make the pdf-reader work
import "react-pdf/dist/esm/Page/TextLayer.css"; // this is most add to make the pdf-reader work

// Configure PDF worker source this is most add to make the pdf-reader work !
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function PDFBookViewer({ pdf, pdfyear }) {
  return (
    <>
      <BookCover pdfyear={pdfyear} pdfurl={pdf} />
    </>
  );
}

export default PDFBookViewer;
