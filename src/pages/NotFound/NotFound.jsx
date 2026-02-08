import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import SEO from "../../components/seo/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Bhuviona"
        description="The page you're looking for doesn't exist or has been moved."
        url="https://www.bhuviona.com/404"
      />

      <section className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <Card>
            <div className="h1" style={{ color: "var(--aqua)", fontSize: 72 }}>404</div>
            <div className="h2" style={{ marginTop: 12 }}>Page Not Found</div>
            <div className="p" style={{ marginTop: 12 }}>
              The page you're looking for doesn't exist or has been moved.
            </div>
            <div className="p-sm" style={{ marginTop: 8 }}>
              Let's get you back on track.
            </div>
            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/">
                <Button variant="solid">Return Home</Button>
              </Link>
              <Link to="/products">
                <Button>Explore VYON</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
