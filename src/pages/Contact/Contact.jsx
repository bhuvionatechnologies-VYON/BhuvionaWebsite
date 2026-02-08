import React, { useState } from "react";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";
import SEO from "../../components/seo/SEO.jsx";

export default function Contact() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSubmitting(true);
    
    // TODO: Replace with actual form submission API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Bhuviona | Get in Touch"
        description="Contact Bhuviona Technologies for inquiries about VYON, partnerships, or support. Reach us via email or visit our office in Bangalore."
        url="https://www.bhuviona.com/contact"
      />

      <section className="section">
        <div className="container">
          <div className="h2">Contact Us</div>
          <div className="p-sm" style={{ marginTop: 6 }}>
            Get in touch with our team. We'd love to hear from you.
          </div>

          {/* CONTACT FORM - Commented out */}
          <div style={{ marginTop: 18 }} className="grid-2">
           {/* <Card>
              <div className="h3">Send us a message</div>
              
              {submitted && (
                <div className="alert alert-success" style={{ marginTop: 12 }}>
                  ✓ Thank you! We've received your message and will get back to you soon.
                </div>
              )}
              
              {errors.submit && (
                <div className="alert alert-error" style={{ marginTop: 12 }}>
                  {errors.submit}
                </div>
              )}
              
              <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
                <div className="formGroup">
                  <label htmlFor="name" className="formLabel">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`formInput ${errors.name ? 'error' : ''}`}
                    placeholder="Your full name"
                    disabled={submitting}
                  />
                  {errors.name && <span className="formError">{errors.name}</span>}
                </div>

                <div className="formGroup">
                  <label htmlFor="email" className="formLabel">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`formInput ${errors.email ? 'error' : ''}`}
                    placeholder="your.email@example.com"
                    disabled={submitting}
                  />
                  {errors.email && <span className="formError">{errors.email}</span>}
                </div>

                <div className="formGroup">
                  <label htmlFor="subject" className="formLabel">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="formInput"
                    placeholder="What is this about?"
                    disabled={submitting}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="message" className="formLabel">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`formInput formTextarea ${errors.message ? 'error' : ''}`}
                    rows="5"
                    placeholder="Tell us more..."
                    disabled={submitting}
                  />
                  {errors.message && <span className="formError">{errors.message}</span>}
                </div>

                <Button 
                  variant="solid" 
                  type="submit" 
                  disabled={submitting}
                  ariaLabel="Send message"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
            */}
            <Card>
              <div className="h3">Direct Contact</div>
              <div className="p" style={{ marginTop: 12 }}>
                Email us at{" "}
                <a 
                  style={{ color: "var(--aqua)", fontWeight: 700 }} 
                  href="mailto:info@bhuviona.com"
                >
                  info@bhuviona.com
                </a>
              </div>

              <div style={{ height: 16 }} />

              <div className="h3">Office Address</div>
              <div className="p-sm" style={{ marginTop: 8 }}>
                Bhuviona Technologies Pvt Ltd<br />
                Jayanagar, Shivamogga <br />
                Karnataka - 577201<br />
                India
              </div>

              <div style={{ height: 16 }} />

              <div className="h3">Business Hours</div>
              <div className="p-sm" style={{ marginTop: 8 }}>
                Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                Saturday and Sunday: Closed
              </div>

              <div style={{ height: 16 }} />

              <div className="h3">Connect With Us</div>
              <div style={{ marginTop: 8, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a 
                  href="https://www.linkedin.com/company/bhuviona" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: 12, padding: "8px 12px" }}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/bhuviona" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: 12, padding: "8px 12px" }}
                >
                  Twitter
                </a>
                <a 
                  href="https://www.youtube.com/@bhuviona" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: 12, padding: "8px 12px" }}
                >
                  YouTube
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
