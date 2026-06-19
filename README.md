# QR-Code-Generator

## Description:
 A simple,punch web that turns any text or link into scannable QR Code on one click. It has A Bold & Neo Vibe.

## Why i built this: 
 i built this as personal challange to sharpen my front-end skills. instead of just watching tutorials i wanted to actually get my hands on Javascript,DOM Manipulation, and working with external API's. it was
 perfect project to handle user input and build something functional without relying on heavy frameworks.

## How it works:
 This runs entirely in browser using Javascript.
 when you type something and hit generate, the script grabs the text,remove any extra spaces, and check the URL If it doesnt break, then, it passes the text straight into the free goqr.me API, give a new image tag out of nowhere, and shows on screen at the exact moment it finishes loading.

## Tech Stack:
 1. HTML: Structured the semantic layouts and data inputs.
 2. CSS: styled with raw, high contrast NEO Design (thick borders, shadows, sharp edges)
 3. Javascript: Handled the DOM Manipulation,input cleaning etc.
 4. goqr.me API: A fast, free external API used to generate the QR Code images.

## How to contribute:
 * Things to add:
  1. A Download button: so the user can download png of the QR Code
  2. Color Picker: User can select custom color for the qr code
  3. copy to clipboard option
 * How to Do it:
  1. Fork the repo and clone it locally.
  2. Create a new branch for changes. (git checkout -b feature/cool-new-feature)
  3. open index.html in browser, test your changes/
  4. Commit your work and push it: ```bash git commit -m "ETC" 
  gitpush origin feature
