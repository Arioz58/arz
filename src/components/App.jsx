import "../styles/App.css";
import React from "react";
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import About from "./About.jsx"

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
    </div>
  );
}

export default App;
