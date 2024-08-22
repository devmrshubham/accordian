import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);


// step 1: create-react-app
// step 2: create github repo
// step 3: $ npm install --save gh-pages
// step 4:  "homepage": "http://gagandatt.github.io/my-app", 
//               "scripts": {
//                  "predeploy": "npm run build",
//                 "deploy": "gh-pages -d build",
//               } 
// step 5: git init & git remote
// step 6 : npm run deploy