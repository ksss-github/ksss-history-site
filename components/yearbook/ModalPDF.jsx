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
    <div className="modalpdf__modal-overlay">
      <div className="modalpdf__modal-content">
        <button className="modalpdf__close-button" onClick={onCloseModal}>
          X
        </button>
        <Document
          className="modalpdf__pdf-box"
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} />
        </Document>
        <div className="modalpdf__navigation">
          <button
            className="modalpdf__navigation-button"
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
          >
            &lt;
          </button>
          <span className="modalpdf__number">
            Page {pageNumber} of {numPages}
          </span>
          <button
            className="modalpdf__navigation-button"
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
          >
            &gt;
          </button>
        </div>
        <a className="modalpdf__download" href={pdf} download>
          Ladda ner
        </a>
      </div>
    </div>
  );
}

export default ModalPDF;
