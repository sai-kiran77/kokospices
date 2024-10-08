import { Outlet } from "react-router-dom";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
function Layout() {
  return (
    <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <div className="border footer-top-border"></div>
        <Footer />
    </div>
  );
}

export default Layout;
