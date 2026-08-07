import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Result from "./pages/Result";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";
import Video from "./pages/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Home page
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "testimonial",
        element: <Testimonial />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "video",
        element: <Video />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
