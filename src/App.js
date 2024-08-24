import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Orlando" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nicky-stevens-ba763a8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nicky Stevens
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/NicStevens/react-weather-application-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://reactweatherappnickystevens.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
