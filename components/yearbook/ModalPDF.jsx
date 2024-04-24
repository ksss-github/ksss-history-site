import React from "react";
import { Document, Page } from "react-pdf";
import "./ModalPDF.css";

function ModalPDF({
  pdf,
  pageNumber,
  numPages,
  onCloseModal,
  onDocumentLoadSuccess,
  goToPreviousPage,
  goToNextPage,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onCloseModal}>
          Close
        </button>
        <Document
          className="pdf-box"
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} />
        </Document>
        <div className="navigation">
          <button
            className="navigation-button"
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
          >
            &lt;
          </button>
          <span className="number">
            Page {pageNumber} of {numPages}
          </span>
          <button
            className="navigation-button"
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
          >
            &gt;
          </button>
        </div>
        <a className="download" href={pdf} download>
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default ModalPDF;
