import React from "react";
import "./App.css";
import Homepage from "./containers/Homepage";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App Site">
      <div className="Site-content">
        <Header></Header>
        <Homepage></Homepage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

