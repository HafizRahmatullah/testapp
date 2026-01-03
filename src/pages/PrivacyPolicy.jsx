import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
    <Helmet>
  <title>Privacy Policy | USAT Preparation Website</title>
  <meta
    name="description"
    content="Read our privacy policy to understand how we protect your data and ensure a safe, secure learning experience on our USAT preparation website."
  />
</Helmet>

    <section id="privacy" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="card space-y-6 shadow-lg rounded-lg p-8">
          {/* ---------- HEADING ---------- */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
            🔐 Privacy Policy
          </h1>

          {/* ---------- DESCRIPTION ---------- */}
          <p className="text-gray-700 text-lg leading-relaxed">
            We respect your privacy and are committed to protecting your personal information. 
            Our website does not collect sensitive personal data without user consent.
          </p>

          {/* ---------- KEY POINTS ---------- */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">Key Points</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We do not sell or share user data with third parties</li>
              <li>No login is required to access study material</li>
              <li>Basic analytics may be used to improve website performance</li>
            </ul>
          </div>

          {/* ---------- AGREEMENT NOTE ---------- */}
          <p className="text-gray-600 italic">
            By using this website, you agree to our privacy practices.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
