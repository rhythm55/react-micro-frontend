import React from "react";
import ReactDOM from "react-dom";
import Contact from "./Contact";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Contact/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
