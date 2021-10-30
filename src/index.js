import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://github.com/Momadeen?tab=repositories" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Mohammed Hassanien
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>League of Legends —</div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
