import React from "react";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";
import SEO from "../../components/seo/SEO.jsx";

export default function Pricing() {
  return (
    <>
      <SEO
        title="VYON Pricing | Flexible Plans for Students and Teachers"
        description="Explore Free, Student, and Teacher pricing plans for VYON, Bhuviona's AI-powered learning platform. Start with free access or choose a plan that fits your needs."
        url="https://www.bhuviona.com/pricing"
      />

      <section className="section">
        <div className="container">
          <div className="h2">VYON Pricing</div>
          <div className="p-sm" style={{ marginTop: 6 }}>
            Choose the plan that works best for you. All plans include core adaptive learning features.
          </div>

          <div style={{ marginTop: 18 }} className="grid-3">
            {/* Free Plan */}
            <Card>
              <div className="h3">Free</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8, color: "var(--aqua)" }}>
                ₹0
              </div>
              <div className="p-sm" style={{ marginTop: 4 }}>
                Perfect for trying out VYON
              </div>
              
              <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid var(--border)" }} />
              
              <ul className="p-sm" style={{ paddingLeft: 20, lineHeight: 1.8 }}>
                <li>Basic lesson planner</li>
                <li>Limited adaptive assessments (5/month)</li>
                <li>Community support</li>
                <li>Access to learning resources</li>
                <li>Progress tracking dashboard</li>
              </ul>
              
              <div style={{ marginTop: 20 }}>
                <Button style={{ width: "100%" }}>
                  Get Started Free
                </Button>
              </div>
            </Card>

            {/* Student Plan */}
            <Card className="mostPopular">
              <div className="badge">Most Popular</div>
              <div className="h3">Students</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8, color: "var(--aqua)" }}>
                ₹199<span style={{ fontSize: 14, fontWeight: 400 }}> / month</span>
              </div>
              <div className="p-sm" style={{ marginTop: 4 }}>
                Personalized learning for students
              </div>
              
              <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid var(--border)" }} />
              
              <ul className="p-sm" style={{ paddingLeft: 20, lineHeight: 1.8 }}>
                <li><strong>Unlimited adaptive practice</strong></li>
                <li>Personalized learning paths</li>
                <li>Mock test simulator (unlimited)</li>
                <li>Detailed progress reports</li>
                <li>Weak area identification</li>
                <li>Offline mode access</li>
                <li>Email support</li>
              </ul>
              
              <div style={{ marginTop: 20 }}>
                <Button variant="solid" style={{ width: "100%" }}>
                  Choose Student Plan
                </Button>
              </div>
            </Card>

            {/* Teacher Plan */}
            <Card>
              <div className="h3">Teachers</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8, color: "var(--aqua)" }}>
                ₹499<span style={{ fontSize: 14, fontWeight: 400 }}> / month</span>
              </div>
              <div className="p-sm" style={{ marginTop: 4 }}>
                Advanced tools for educators
              </div>
              
              <hr style={{ margin: "16px 0", border: "none", borderTop: "1px solid var(--border)" }} />
              
              <ul className="p-sm" style={{ paddingLeft: 20, lineHeight: 1.8 }}>
                <li><strong>AI-powered lesson generation</strong></li>
                <li>Classroom analytics dashboard</li>
                <li>Student clustering insights</li>
                <li>Automated question generation</li>
                <li>Assignment & quiz creator</li>
                <li>Parent communication tools</li>
                <li>Priority support</li>
                <li>Training & onboarding</li>
              </ul>
              
              <div style={{ marginTop: 20 }}>
                <Button variant="solid" style={{ width: "100%" }}>
                  Choose Teacher Plan
                </Button>
              </div>
            </Card>
          </div>

          {/* Institution Pricing */}
          <div style={{ marginTop: 24 }}>
            <Card style={{ textAlign: "center" }}>
              <div className="h3">Institutional Plans</div>
              <div className="p" style={{ marginTop: 8, maxWidth: 600, margin: "8px auto 0" }}>
                Looking for school or institution-wide deployment? We offer custom plans with 
                dedicated support, advanced analytics, and volume discounts.
              </div>
              <div style={{ marginTop: 16 }}>
                <Button variant="solid" onClick={() => window.location.href = '/contact'}>
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <div style={{ marginTop: 24 }}>
            <div className="h3 text-center">Frequently Asked Questions</div>
            <div className="grid-2" style={{ marginTop: 16 }}>
              <Card>
                <div className="h4">Can I switch plans later?</div>
                <div className="p-sm" style={{ marginTop: 6 }}>
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </div>
              </Card>

              <Card>
                <div className="h4">Is there a refund policy?</div>
                <div className="p-sm" style={{ marginTop: 6 }}>
                  We offer a 7-day money-back guarantee for all paid plans. No questions asked.
                </div>
              </Card>

              <Card>
                <div className="h4">What payment methods do you accept?</div>
                <div className="p-sm" style={{ marginTop: 6 }}>
                  We accept UPI, credit/debit cards, net banking, and digital wallets. All payments are secure.
                </div>
              </Card>

              <Card>
                <div className="h4">Do you offer student discounts?</div>
                <div className="p-sm" style={{ marginTop: 6 }}>
                  Yes! Students from economically weaker sections can apply for subsidized pricing. Contact us for details.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
