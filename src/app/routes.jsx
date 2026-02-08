import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load all pages for better performance
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));
const Products = lazy(() => import("../pages/Products/Products.jsx"));
const Pricing = lazy(() => import("../pages/Pricing/Pricing.jsx"));
const Blog = lazy(() => import("../pages/Blog/Blog.jsx"));
const Contact = lazy(() => import("../pages/Contact/Contact.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    minHeight: "60vh",
    color: "var(--muted)" 
  }}>
    <div className="p">Loading...</div>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
