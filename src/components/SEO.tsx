import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schemaData?: object;
}

const SEO = ({
  title,
  description,
  keywords = "Best Dentist in Lucknow, Dental Clinic in Lucknow, Root Canal Treatment Lucknow, Teeth Cleaning Lucknow, Dental Implant Lucknow, Kids Dentist Lucknow, Tooth Extraction Lucknow, Dentist Near Me, Best Dental Clinic Near Me, Dental Clinic Dubagga",
  canonicalPath = "",
  ogImage = "https://images.unsplash.com/photo-1629909613654-28a3a7c4bc42?q=80&w=1200&auto=format&fit=crop",
  ogType = "website",
  schemaData,
}: SEOProps) => {
  const baseUrl = "https://shalimardentalclinic.online";
  const fullCanonicalUrl = `${baseUrl}${canonicalPath}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
