[ English ](README_EN.md) | [ 繁體中文 ](README.md)

# 🔒 Local Privacy Toolkits

[cite_start]An ultra-fast, **100% client-side, offline-capable** web toolkit designed for personal and enterprise privacy. [cite_start]All file processing, conversion, and packaging are executed entirely within your local browser.

[cite_start]💡 **Privacy First Commitment**: Your confidential documents, personal data, and financial reports **NEVER leave your machine or upload to any server**. [cite_start]We do not and cannot collect any of your data.

[cite_start]🚀 **Live Demo**: [b200077.github.io/local-tools](https://b200077.github.io/local-tools/) 

---

## 🛠 Available Tools

### 1. 🖼 Image to PDF Converter
* [cite_start]**Description**: Fast batch conversion of JPG and PNG images into a single PDF file in the browser.
* [cite_start]**Tech**: Uses `pdf-lib` for async binary reading and PDF serialization.
* [cite_start]**Use Cases**: ID scans, contract packaging, and private album backups.

### 2. 📊 Excel Converter (XLSX to CSV/JSON)
* [cite_start]**Description**: Convert `.xlsx` or `.xls` files into raw CSV or structured JSON format. [cite_start]Supports multi-sheet workbook exporting.
* [cite_start]**Tech**: Powered by SheetJS with **UTF-8 BOM header** support to ensure proper character encoding when opened in MS Excel.

---

## ✨ Key Features

1. [cite_start]**Absolute Privacy**: No-backend architecture ensures files stay on your device.
2. [cite_start]**Lightning Fast**: Zero network latency; performance depends entirely on your local hardware[cite: 22].
3. [cite_start]**Offline Ready**: Works completely offline once loaded—perfect for air-gapped or high-security environments[cite: 22].
4. [cite_start]**Modern UI**: Dark mode design with drag-and-drop file support[cite: 22].

---

## 📦 Tech Stack

* [cite_start]**Frontend**: HTML5, CSS3, JavaScript (Vanilla ES6) [cite: 22]
* [cite_start]**Libraries**: [pdf-lib](https://github.com/Hopding/pdf-lib), [SheetJS](https://github.com/SheetJS/sheetjs) [cite: 22]
* [cite_start]**Hosting**: GitHub Pages [cite: 22]