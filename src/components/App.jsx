import "../styles/App.css";
import React from "react";
import CustomCursor from "./CustomCursor.jsx";
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import About from "./About.jsx"
import Services from "./Services.jsx";
import Footer from "./Footer.jsx";
import {CobeDragToLocationDemo} from "./eldoraui/CobeDragToLocationDemo";

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Header />
      <Banner />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;