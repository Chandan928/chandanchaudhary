// JSON-LD Schema templates for structured data
import { siteConfig } from "./metadata";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "SEO Consultant",
    description:
      "SEO Consultant with 9+ years of experience. Expert in GEO, AEO, Semantic SEO, Technical SEO, Local SEO and AI Automation.",
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: "https://chandanchaudhary.com/chandan-chaudhary.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/imchandanchaudhary/",
      "https://x.com/theseoarchitect",
      "https://www.facebook.com/akachandanchaudhary/",
      "https://github.com/Chandan928",
    ],
    knowsAbout: [
      "SEO",
      "Search Engine Optimization",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Technical SEO",
      "Semantic SEO",
      "Local SEO",
      "AI Automation",
      "Content Strategy",
      "Topical Authority",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Semantic SEO Certification",
        credentialCategory: "certification",
        recognizedBy: { "@type": "Organization", name: "Koray Tugberk Gubur" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "SEO MBA",
        credentialCategory: "certification",
        recognizedBy: { "@type": "Organization", name: "Tom Critchlow" },
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Chandan Chaudhary",
    url: "https://chandanchaudhary.com",
    description:
      "Official website of Chandan Chaudhary — SEO Consultant specializing in GEO, AEO, Semantic SEO, and AI Automation.",
    author: {
      "@type": "Person",
      name: "Chandan Chaudhary",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://chandanchaudhary.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Person",
      name: "Chandan Chaudhary",
      url: "https://chandanchaudhary.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "SEO Consulting",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostSchema(post: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    url: post.url,
    image: post.image,
    author: {
      "@type": "Person",
      name: "Chandan Chaudhary",
      url: "https://chandanchaudhary.com",
    },
    publisher: {
      "@type": "Person",
      name: "Chandan Chaudhary",
      url: "https://chandanchaudhary.com",
    },
  };
}
