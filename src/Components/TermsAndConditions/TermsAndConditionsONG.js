import React, { useState } from 'react';
import { Document, Page , pdfjs} from 'react-pdf';
import Loading from '../Common/Loading';
import './conditionsONG.css'
import { TermsAndConditions } from './pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const TermsAndConditionsONG = ()=>{
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
    <Document file={TermsAndConditions} onLoadSuccess={onDocumentLoadSuccess}>
      <Page height={1150} pageNumber={pageNumber} scale={0.55}/>
    </Document>
    <div className="content">
      <p>
        Página {pageNumber || (numPages ? 1 : <Loading />)} de {numPages || <Loading/>}
      </p>
      <button
        type="button"
        className="btn myButton"
        disabled={pageNumber <= 1}
        onClick={previousPage}
      >
        Anterior
      </button>
      <button
        type="button"
        className="btn myButton"
        disabled={pageNumber >= numPages}
        onClick={nextPage}
      >
        Siguiente
      </button>
    </div>
    </>
  );
}

export default TermsAndConditionsONG;