import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
