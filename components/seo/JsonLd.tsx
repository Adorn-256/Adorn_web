export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://adornsoft.tech/#organization",
    name: "Adorn Soft Technologies",
    alternateName: "Adorn Soft",
    url: "https://adornsoft.tech",
    logo: "https://adornsoft.tech/adornsoft-logo.png",
    image: "https://adornsoft.tech/og-image.png",
    description:
      "Leading provider of website development, software systems, CCTV installation, and networking solutions in Fort Portal, Uganda.",
    telephone: "+256 700 123 456",
    email: "info@adornsofttech.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Portal",
      addressRegion: "Western Region",
      addressCountry: "UG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0.6545,
      longitude: 30.2744,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "UGX, USD",
    paymentAccepted: "Cash, Mobile Money, Bank Transfer",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Fort Portal",
      },
      {
        "@type": "Country",
        name: "Uganda",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Mugera Swabri",
      jobTitle: "Team Leader & Lead Solutions Architect",
    },
    knowsAbout: [
      "Website Development",
      "Custom Software Development",
      "CCTV Installation & Surveillance",
      "Computer Networking & Infrastructure",
      "AI & Digital Solutions",
      "Cloud Solutions & E-Commerce",
      "IT Consultancy",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Adorn Soft Tech Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description:
              "Professional, responsive websites that drive results and online engagement.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Tailored software solutions and management systems to solve business challenges.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CCTV Installation & Security",
            description:
              "Professional surveillance camera systems and setup for business and residential security.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Network Installation & IT Solutions",
            description:
              "Reliable enterprise networking infrastructure, cabling, and technical setup.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Digital Solutions",
            description:
              "Smart AI chatbots, automated business workflows, and modern web apps.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://adornsoft.tech/#website",
    url: "https://adornsoft.tech",
    name: "Adorn Soft Technologies",
    alternateName: "Adorn Soft Tech",
    description:
      "Digital Solutions Provider in Fort Portal, Uganda - Web Development, IT Support, Systems & CCTV",
    publisher: {
      "@id": "https://adornsoft.tech/#organization",
    },
    inLanguage: "en-US",
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://adornsoft.tech/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://adornsoft.tech/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: "https://adornsoft.tech/#services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Portfolio",
        item: "https://adornsoft.tech/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://adornsoft.tech/#contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  );
}
