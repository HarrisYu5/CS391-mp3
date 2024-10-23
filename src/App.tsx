import React from "react";
import { createBrowserRouter, RouterProvider, Route, Router, Outlet } from "react-router-dom";
//import { Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Employment from "./components/Employment";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import "./App.css";
import Credit from "./components/Credit";

const AppExport: React.FC = () => (
  <div className="App">
    <Header />
    <Nav />
    <Outlet /> 
    <Footer />
  </div>
);



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppExport />, 
    children: [
      { path: "/", element: <Main /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "education", element: <Education /> },
      { path: "employment", element: <Employment /> },
      { path: "projects", element: <Projects /> },
      { path: "credit", element: <Credit /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
