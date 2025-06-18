# QR-Code-Generator

This is a simple **Node.js CLI application** that generates a QR code from a user-provided URL or link.  
It also saves the entered link in a `.txt` file for record keeping.

---

## 📦 Features

- Takes user input using [`inquirer`](https://www.npmjs.com/package/inquirer)
- Generates a QR code using [`qr-image`](https://www.npmjs.com/package/qr-image)
- Saves:
  - The QR code as `qr_img.png`
  - The entered URL to `user-inputs.txt`

---

## 🛠️ Installation

Make sure you have **Node.js** installed.  
Then follow these steps:

```bash
# Clone the repo
git clone https://github.com/your-username/qr-code-generator.git

# Navigate into the folder
cd qr-code-generator

# Install dependencies
npm install
