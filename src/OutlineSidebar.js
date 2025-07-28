import React, { useEffect, useState } from 'react';

const OutlineSidebar = ({ pdfFile }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (pdfFile) {
      const filename = pdfFile.name.replace('.pdf', '.json');
      fetch(`/output/${filename}`)
        .then(res => res.json())
        .then(data => setHeadings(data.outline || []));
    }
  }, [pdfFile]);

  const scrollToPage = (page) => {
    window.AdobeDC.View.open({
      fileName: pdfFile.name,
      fileURL: URL.createObjectURL(pdfFile),
      pageNumber: page
    });
  };

  return (
    <div className="sidebar">
      <h3>Document Outline</h3>
      <ul>
        {headings.map((h, idx) => (
          <li key={idx} onClick={() => scrollToPage(h.page)}>
            [{h.level}] {h.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutlineSidebar;
