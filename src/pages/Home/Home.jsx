import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button.jsx";
import Logo from "../../components/ui/Logo.jsx";
import SEO from "../../components/seo/SEO.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Bhuviona Technologies | Expanding Intelligence"
        description="AI-powered education technology building VYON - An intelligence layer that helps learners and institutions make better learning decisions."
        url="https://www.bhuviona.com"
      />
      
      <section className="hero">
        <div className="heroBgGlow"></div>
        <div className="noise"></div>
        
        <div className="container">
          <div className="heroGrid">
            <div>
              <div className="h1" style={{ color: "var(--aqua)" }}>
                Bhuviona 
              </div>
              <div className="taglineGold">
                Expanding Intelligence
              </div>
              <div className="heroLead">
                Bhuviona builds AI applications with human-first purpose  
                transforming education through intelligent, adaptive technology 
                that amplifies human potential.
              </div>
              <div className="flagship">
                🚀 Flagship Product: <strong>VYON</strong> — Boundless Knowledge
              </div>
              <div className="ctaRow">
                <Button 
                  variant="solid" 
                  onClick={() => navigate('/products')}
                  ariaLabel="Explore VYON product"
                >
                  Explore VYON
                </Button>
                {/*<Button 
                  onClick={() => navigate('/pricing')}
                  ariaLabel="View pricing plans"
                >
                  View Pricing
                </Button>*/}
              </div>
            </div>
            
            <div className="heroOrbWrap">
              <div className="heroOrb">
                <div className="heroLogoFloat">
                  <img
                    src="/assets/images/bhuviona-infinity-logo.png"
                    alt="Bhuviona Infinity Logo"
                    style={{ width: 220, height: 220, objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section 
      <section className="section">
        <div className="container">
          <div className="kicker">Trusted By Educators Across India</div>
          <div className="tagRow">
            <span className="tag">200+ Teachers</span>
            <span className="tag">5,000+ Students</span>
            <span className="tag">15+ Institutions</span>
            <span className="tag">4.8★ Rating</span>
          </div>
        </div>
      </section>
        */}
      {/* Value Proposition */}
      <section className="section">
        <div className="container">
          <div className="h2 text-center">Why Bhuviona - VYON?</div>
          <div className="p text-center" style={{ marginTop: 8, maxWidth: 700, margin: "8px auto 0" }}>
            We combine cutting-edge AI with deep understanding of pedagogy to create tools that genuinely empower educators and learners.
          </div>
          
          <div style={{ marginTop: 24 }} className="grid-3">
            <div className="card">
              <div className="h3" style={{ fontSize: 18, color: "var(--aqua)" }}>🧭 Adaptive Mastery Pathways</div>
              <div className="p" style={{ marginTop: 8 }}>
                Personalized learning paths that adapt to each student's pace, 
                strengths, and areas for improvement using advanced AI algorithms.
              </div>
            </div>

            <div className="card">
              <div className="h3" style={{ fontSize: 18, color: "var(--aqua)" }}>📊 Actionable Insights</div>
              <div className="p" style={{ marginTop: 8 }}>
                Real-time analytics and dashboards that help teachers understand 
                student progress and make data-driven instructional decisions.
              </div>
            </div>

            <div className="card">
              <div className="h3" style={{ fontSize: 18, color: "var(--aqua)" }}>⚡Effortless Planning</div>
              <div className="p" style={{ marginTop: 8 }}>
                AI-powered lesson generation, assessment creation, and curriculum 
                alignment that saves hours of preparation time.
              </div>
            </div>
            <div className="card">
              <div className="h3" style={{ fontSize: 18, color: "var(--aqua)" }}> 🕸️ Knowledge Dependency Mapping</div>
              <div className="p" style={{ marginTop: 8 }}>
                Curriculum-linked knowledge graph identifying prerequisite structures 
                and learning progression risks.
              </div>
            </div>
              <div className="card">
              <div className="h3" style={{ fontSize: 18, color: "var(--aqua)" }}> 🎯 Exam Readiness Engine</div>
              <div className="p" style={{ marginTop: 8 }}>
                Mock test simulation powered by intelligent question selection 
                and difficulty calibration.
              </div>
            </div>
              <div className="card">
              <div className="h3" style={{ fontSize: 18, color: "var(--aqua)" }}> 🧠 Semantic Evaluation & Automated Grading</div>
              <div className="p" style={{ marginTop: 8 }}>
                Context-aware assessment that evaluates conceptual clarity,
                not just keyword matching.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
