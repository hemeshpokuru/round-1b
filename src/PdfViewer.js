import React, { useEffect, useRef } from 'react';

const PdfViewer = ({ pdfFile, setPdfFile }) => {
  const viewerRef = useRef();

  useEffect(() => {
    if (pdfFile) {
      const adobeDCView = new window.AdobeDC.View({
        clientId: "4c9fb13580e3496db2eb7faee352be41",
        divId: "adobe-dc-view"
      });

      adobeDCView.previewFile({
        content: { location: { url: URL.createObjectURL(pdfFile) } },
        metaData: { fileName: pdfFile.name }
      });
    }
  }, [pdfFile]);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <div id="adobe-dc-view" style={{ height: '800px' }} ref={viewerRef}></div>
    </div>
  );
};

export default PdfViewer;