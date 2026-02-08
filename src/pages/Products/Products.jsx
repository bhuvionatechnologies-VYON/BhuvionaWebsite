import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";
import SEO from "../../components/seo/SEO.jsx";
import { ProductSchema } from "../../components/seo/StructuredData.jsx";

export default function Products() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="VYON | Boundless Knowledge by Bhuviona"
        description="VYON is an intelligence layer that helps learners and institutions make better learning decisions through AI-powered adaptive learning and personalized pathways."
        url="https://www.bhuviona.com/products"
      />
      <ProductSchema />

      <section className="section">
        <div className="container">
          <div className="h2">Products</div>
          <div className="p-sm" style={{ marginTop: 6 }}>
            Our flagship product VYON helps teachers and students unlock boundless knowledge.
          </div>

          <div style={{ marginTop: 18 }} className="grid-2">
            <Card>
              <div className="h3" style={{ fontSize: 24, color: "var(--aqua)" }}>VYON — Boundless Knowledge</div>
              <div className="taglineGold" style={{ marginTop: 8 }}>
                An intelligence layer for better learning decisions
              </div>
              
              <div className="p" style={{ marginTop: 12 }}>
                To make every teacher extraordinary and every student unstoppable — transforming 
                education through intelligent, empathetic AI that amplifies human potential.
              </div>
              
              <div className="p-sm" style={{ marginTop: 8, fontWeight: 600 }}>
                Empowering teachers. Engaging students. Elevating learning.
              </div>

              <div style={{ height: 14 }} />

              <div className="h3">Key Features</div>
              <ul className="p" style={{ marginTop: 8, paddingLeft: 20 }}>
                <li>Adaptive learning paths personalized to each student</li>
                <li>AI-powered lesson generation for teachers</li>
                <li>Real-time classroom analytics and insights</li>
                <li>Mock test simulator with intelligent question selection</li>
                <li>Automated grading with semantic understanding</li>
                <li>Knowledge point dependency mapping</li>
              </ul>

              <div className="ctaRow" style={{ marginTop: 16 }}>
                {/*<Button 
                  variant="solid" 
                  onClick={() => navigate('/pricing')}
                >
                  Get Started
                </Button>*/}
                <Button 
                    variant="solid" 
                    onClick={() => navigate('/contact')}
                  >
                    Contact for Pricing
                  </Button>
                <Button onClick={() => window.open('https://www.youtube.com/@bhuviona', '_blank')}>
                  Watch Demo
                </Button>
              </div>
            </Card>

            <Card>
              <div className="h3">Customer Testimonials</div>
              
              <div style={{ marginTop: 12, padding: 12, background: "rgba(13, 110, 110, 0.05)", borderRadius: 8 }}>
                <div className="p-sm">
                  "VYON transformed the way I plan lessons. My students are more engaged and 
                  I save hours each week. The AI recommendations are incredibly accurate."
                </div>
                <div className="p-sm" style={{ fontWeight: 700, marginTop: 8, color: "var(--aqua)" }}>
                  — Navya S., Grade 8-10 Tuition Teacher
                </div>
              </div>

              <div style={{ marginTop: 12, padding: 12, background: "rgba(212, 175, 55, 0.05)", borderRadius: 8 }}>
                <div className="p-sm">
                  "The adaptive assessments pinpoint knowledge gaps quickly. This feature will significantly improve student pass rates 
                   It's like having a personal tutor for every student."
                </div>
                <div className="p-sm" style={{ fontWeight: 700, marginTop: 8, color: "var(--aqua)" }}>
                  — Sumalini R., Parent & Educator
                </div>
              </div>

              <div style={{ marginTop: 12, padding: 12, background: "rgba(13, 110, 110, 0.05)", borderRadius: 8 }}>
                <div className="p-sm">
                  "The mock test simulator will help my son identify my weak areas and improve systematically."             
                </div>
                <div className="p-sm" style={{ fontWeight: 700, marginTop: 8, color: "var(--aqua)" }}>
                  — Rahul M., Parent.
                </div>
              </div>
            </Card>
          </div>

          {/*<div style={{ marginTop: 18 }}>
            <Card>
              <div className="h3">Success Stories</div>
              <div className="p" style={{ marginTop: 8 }}>
                <strong style={{ color: "var(--aqua)" }}>Bangalore Public School</strong> — 
                Implemented VYON across 4 grades, achieving measurable uplift in engagement 
                and formative assessment scores within 12 weeks. Student participation increased 
                by 35% and teacher preparation time decreased by 40%.
              </div>
              <div className="p" style={{ marginTop: 12 }}>
                <strong style={{ color: "var(--aqua)" }}>National Academy of Learning</strong> — 
                Used VYON's adaptive testing to identify and address learning gaps, resulting in 
                a 28% improvement in board exam performance across all subjects.
              </div>
            </Card>
          </div>*/}
        </div>
      </section>
    </>
  );
}
