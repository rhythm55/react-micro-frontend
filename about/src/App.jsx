import React, { createContext, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import About from "./About";

import Header from "home/Header";
import Footer from "home/Footer";
const Contact = lazy(() => import("contact/Contact"));

import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const [context, setContext] = useState({
    footerMessage: " copyright microfrontend",
  });
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header message="a Micro Frontend app" />
      <About />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <Contact />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter} />);
// ReactDOM.render(<RouterProvider appRouter={appRouter}/>, document.getElementById("app"));
