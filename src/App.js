import React from "react";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Space from "./components/Space";
import Routes from "./routes.js";

//Styles
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header title="Relógio" />
      <Space direction="top" />
      <Routes />
      <Space direction="button" />
      <Footer />
    </div>
  );
}

export default App;
