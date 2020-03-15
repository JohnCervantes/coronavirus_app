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

// https://www.heraldsun.com.au/lifestyle/health/coronavirus-survival-guide-how-to-protect-yourself/news-story/2cdefa3c0ccdf5e4972c44177c925505
// https://www.who.int/emergencies/diseases/novel-coronavirus-2019
// https://people.com/health/coronavirus-ways-to-help-your-community/