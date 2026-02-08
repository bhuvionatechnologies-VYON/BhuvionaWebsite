import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "../components/navigation/Header.jsx";
import Footer from "../components/navigation/Footer.jsx";
import AppRoutes from "./routes.jsx";
import { OrganizationSchema } from "../components/seo/StructuredData.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <OrganizationSchema />
        <ScrollToTop />
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
