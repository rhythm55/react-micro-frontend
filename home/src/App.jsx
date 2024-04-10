import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <h1 className="mt-4">Content will go here</h1>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
