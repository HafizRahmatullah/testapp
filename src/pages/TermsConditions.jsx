import React from "react";
import { Helmet } from "react-helmet-async";

export default function TermsConditions() {
  const pageTitle = "Terms & Conditions | USAT Preparation Platform";
  const pageDescription =
    "Read the terms and conditions for using the USAT Preparation Platform. Learn about content usage, responsibilities, limitations, and user guidelines.";
  const pageUrl = "https://yourdomain.com/terms-conditions";

  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      {/* ================= CONTENT ================= */}
      <section id="terms" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-6 shadow-lg rounded-lg p-8 bg-white">
            
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              📜 Terms & Conditions
            </h1>

            {/* Intro */}
            <p className="text-gray-700 text-lg leading-relaxed">
              By accessing and using the USAT Preparation Platform, you agree to
              comply with the following terms and conditions. These terms are
              designed to ensure a safe and productive learning environment.
            </p>

            {/* Usage */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                Use of Content
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All study materials, MCQs, and PDFs provided on this website are
                for educational and exam preparation purposes only.
                Unauthorized copying, reproduction, or redistribution of content
                is strictly prohibited.
              </p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                User Responsibilities
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Do not misuse or attempt to harm the website</li>
                <li>Do not use the platform for illegal or unethical activities</li>
                <li>Verify information independently before relying on it</li>
              </ul>
            </div>

            {/* Limitation */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not guarantee exam results or accuracy of all materials.
                The use of this website is at your own risk.
              </p>
            </div>

            {/* Updates */}
            <p className="text-gray-600 italic">
              These terms may be updated periodically without prior notice.
              Continued use of the website indicates acceptance of the revised
              terms.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
