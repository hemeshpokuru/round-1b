import React, { useState } from 'react';
import PdfViewer from './PdfViewer';
import OutlineSidebar from './OutlineSidebar';
import PersonaSelector from './PersonaSelector';
import './App.css';

function App() {
  const [persona, setPersona] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  return (
    <div className="app-container">
      <div>
        <PersonaSelector persona={persona} setPersona={setPersona} />
        <OutlineSidebar pdfFile={pdfFile} />
      </div>
      <PdfViewer pdfFile={pdfFile} setPdfFile={setPdfFile} />
    </div>
  );
}

export default App;