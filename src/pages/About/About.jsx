import React from "react";
import Card from "../../components/ui/Card.jsx";
import SEO from "../../components/seo/SEO.jsx";

export default function About() {
  return (
    <>
      <SEO
        title="About Bhuviona | Our Vision, Mission & Team"
        description="Learn about Bhuviona's mission to expand intelligence through AI-powered education technology. Meet our team and discover our vision for the future of learning."
        url="https://www.bhuviona.com/about"
      />

      <section className="section">
        <div className="container">
          <div className="h2">About Bhuviona</div>
          <div className="p-sm" style={{ marginTop: 6 }}>
            A technology company building AI applications with human-first purpose.
          </div>

          <div style={{ marginTop: 18 }} className="grid-2">
            <Card>
              <div className="h3" style={{ color: "var(--aqua)" }}>Our Story</div>
              <div className="p" style={{ marginTop: 8 }}>
                Born from the Sanskrit roots "Bhuvi" (World, Intelligence) and "Onā" (growth, expansion), 
                Bhuviona symbolizes the expansion of intelligence. We believe that human potential is limitless 
                and that technology, when guided by empathy and wisdom, can help it flourish.
              </div>
              
              <div style={{ height: 14 }} />

              <div className="h3" style={{ color: "var(--aqua)" }}>Vision</div>
              <div className="p" style={{ marginTop: 8 }}>
                At Bhuviona, we're shaping a world where AI augments human intelligence, creating 
                technologies that help people learn faster, work smarter, and achieve greater impact.
              </div>

              <div style={{ height: 14 }} />

              <div className="h3" style={{ color: "var(--aqua)" }}>Mission</div>
              <div className="p" style={{ marginTop: 8 }}>
                Our mission is to design intelligent, adaptive technologies that simplify complexity, 
                enhance human capability, and deliver measurable value across education, healthcare, and enterprise.
              </div>
            </Card>

            <Card>
              <div className="h3" style={{ color: "var(--aqua)" }}>Founder's Desk</div>
              <div className="p-sm" style={{ marginTop: 8 }}>
                Every idea begins with a question. Mine was simple: <em>What if intelligence could expand not just compute?</em>
              </div>
              <div style={{ height: 12 }} />
              <div className="p" style={{ marginTop: 8 }}>
                    At Bhuviona, we believe that the next frontier of technology isn't just Artificial Intelligence, it is Augmented Wisdom. 
                    My journey over the last two decades across MedTech, SaaS, and Global Delivery has taught me one fundamental truth: Technology only succeeds when it honors the human element. <br/>
                
                    We built VYON not to replace the teacher or the learner, but to act as a boundless intelligence layer. 
                    It is designed to amplify human capability, transforming data into insight and questions into mastery. <br/>
                    <strong> At Bhuviona, we aren't just building a platform, we are architecting the future of how intelligence scales. </strong>  
              </div>
              <div style={{ marginTop: 14, fontWeight: 700, color: "var(--aqua)" }}>
                — Prashanth Kubsad, Founder & CEO
              </div>
            </Card>
          </div>

          <div style={{ marginTop: 18 }}>
            <Card>
              <div className="h3" style={{ color: "var(--gold)" }}>Leadership Team</div>
              <div className="grid-2" style={{ marginTop: 12, gap: 16 }}>
                <div>
                  <div className="p">
                    <strong style={{ color: "var(--aqua)" }}>Prashanth Kubsad</strong><br />
                    Founder & CEO
                  </div>
                  <div className="p-sm" style={{ marginTop: 4 }}>
                    Visionary leader with expertise in AI and educational technology. 
                    Passionate about leveraging technology to democratize quality education.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
