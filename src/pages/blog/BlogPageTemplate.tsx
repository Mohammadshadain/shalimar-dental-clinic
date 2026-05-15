import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Clock, User, MessageSquare } from "lucide-react";
import SEO from "../../components/SEO";

interface BlogPageTemplateProps {
  title: string;
  seoTitle: string;
  seoDescription: string;
  path: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  content: React.ReactNode;
  faqs?: { q: string; a: string }[];
}

const BlogPageTemplate: React.FC<BlogPageTemplateProps> = ({
  title,
  seoTitle,
  seoDescription,
  path,
  image,
  date,
  author,
  readTime,
  content,
  faqs,
}) => {
  const schemaData: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": seoDescription,
      "image": image,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Shalimar Dental Clinic",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shalimardentalclinic.online/dental-logo1.png"
        }
      },
      "datePublished": date,
      "url": `https://shalimardentalclinic.online${path}`
    }
  ];

  if (faqs && faqs.length > 0) {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white min-h-screen overflow-hidden">
      <SEO 
        title={seoTitle} 
        description={seoDescription} 
        canonicalPath={path} 
        ogType="article"
        ogImage={image}
        schemaData={schemaData}
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm sm:text-base">Back to Blog</span>
        </Link>

        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-on-surface-variant mb-6 font-bold">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              {date}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-secondary" />
              {author}
            </span>
            <span className="flex items-center gap-2 uppercase tracking-widest text-[9px] sm:text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
              {readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-primary leading-[1.1] tracking-tight">
            {title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-10 sm:mb-12 aspect-[16/9] border border-surface-container">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content */}
        <div className="prose prose-slate lg:prose-lg max-w-none text-on-surface-variant leading-relaxed mb-12 px-1">
          {content}
        </div>

        {/* Blog FAQs */}
        {faqs && faqs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 font-headline">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-surface-container-low p-6 rounded-2xl border border-surface-container">
                  <h4 className="font-bold text-primary mb-3 text-lg">{faq.q}</h4>
                  <p className="text-on-surface-variant font-medium leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Footer */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-12 bg-surface-container-low rounded-3xl border border-surface-container text-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-headline">Have Questions About This?</h3>
          <p className="text-sm sm:text-base text-on-surface-variant mb-8 max-w-xl mx-auto font-medium">
            Our experts at Shalimar Dental Clinic Lucknow are here to help you understand your dental health better. Get personalized advice today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/919598112677" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md active:scale-95 text-base"
            >
              Consult Now <MessageSquare className="w-5 h-5" />
            </a>
            <Link 
              to="/appointment"
              className="px-8 py-4 border border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-all text-center active:scale-95 shadow-sm text-base"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPageTemplate;
