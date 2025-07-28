# Adobe India Hackathon 2025 - Round 1B Submission

## 💡 Objective
Build a PDF viewer web app with persona-based highlighting and document outline support using the Adobe PDF Embed API.

## 📂 Features
- Upload any PDF
- Extract and display dynamic heading outline
- Navigate pages via sidebar
- Select personas for different user views

## 📝 Setup Instructions

1. Clone this repo
2. Add your Adobe API Key in `PdfViewer.js`
3. Install dependencies:
```bash
npm install
```
4. Run the app:
```bash
npm start
```

## 💼 Folder Structure
```
src/
├── App.js
├── PdfViewer.js
├── OutlineSidebar.js
├── PersonaSelector.js
```

## ✅ Notes
- Adobe PDF Embed API must have localhost:3000 in its allowed domains
- Ensure JSON is pre-generated in `/output/` via Round 1A
