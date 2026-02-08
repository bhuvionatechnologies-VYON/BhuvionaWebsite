import { Helmet } from "react-helmet-async";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bhuviona Technologies Pvt Ltd",
    "alternateName": "Bhuviona",
    "url": "https://www.bhuviona.com",
    "logo": "https://www.bhuviona.com/assets/images/bhuviona-infinity-logo.png",
    "description": "AI-powered education technology company building VYON - An intelligence layer that helps learners and institutions make better learning decisions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN",
      "postalCode": "560078"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@bhuviona.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bhuviona",
      "https://twitter.com/bhuviona",
      "https://www.youtube.com/@bhuviona"
    ],
    "founder": {
      "@type": "Person",
      "name": "Prashanth Kubsad",
      "jobTitle": "Founder & CEO"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VYON",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "description": "An intelligence layer that helps learners and institutions make better learning decisions through AI-powered adaptive learning.",
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "name": "Free Plan",
        "description": "Core features with limited AI recommendations"
      },
      {
        "@type": "Offer",
        "price": "199",
        "priceCurrency": "INR",
        "name": "Student Plan",
        "description": "Personalized learning pathways for students"
      },
      {
        "@type": "Offer",
        "price": "499",
        "priceCurrency": "INR",
        "name": "Teacher Plan",
        "description": "Advanced tools for planning and classroom insights"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "215"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
