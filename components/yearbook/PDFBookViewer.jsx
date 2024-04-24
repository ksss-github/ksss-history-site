import React, { useState } from "react";
import { pdfjs } from "react-pdf"; // Configure PDF this is most add to make the pdf-reader work !
import BookSpine from "./BookCover";
import ModalPDF from "./ModalPDF";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // this is most add to make the pdf-reader work
import "react-pdf/dist/esm/Page/TextLayer.css"; // this is most add to make the pdf-reader work

// Configure PDF worker source this is most add to make the pdf-reader work !
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function PDFBookViewer({ pdf, year }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPreviousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  // Function to open the modal when the book spine is clicked
  function handleBookClickOpenPDF() {
    setIsModalOpen(true);
  }

  return (
    <>
      <BookSpine year={year} onClick={handleBookClickOpenPDF} />
      {isModalOpen && (
        <ModalPDF
          pdf={pdf}
          pageNumber={pageNumber}
          numPages={numPages}
          onCloseModal={closeModal}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
      )}
    </>
  );
}

export default PDFBookViewer;
