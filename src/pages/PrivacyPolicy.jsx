import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
    <Helmet>
  <title>Privacy Policy | USAT Online Preparation Platform</title>

<meta name="description" content="Read our privacy policy to learn how we protect your data and provide a secure USAT preparation experience."/>

</Helmet>

    <section id="privacy" className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    <div className="card space-y-6 shadow-lg rounded-lg p-8">

      {/* ---------- HEADING ---------- */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
        🔐 Privacy Policy – USAT Online Preparation Platform
      </h1>

      {/* ---------- DESCRIPTION ---------- */}
      <p className="text-gray-700 text-lg leading-relaxed">
        We respect your privacy and are committed to protecting your personal information
        while using our <strong>USAT online preparation website</strong>.
        Our platform provides free USAT MCQs, online mock tests and
        USAT past papers PDF without collecting sensitive personal data.
      </p>

      {/* ---------- KEY POINTS ---------- */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Key Privacy Points
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">

          <li>
            We do not sell or share user data on our
            <strong> USAT preparation platform</strong>
          </li>

          <li>
            No login is required to access
            <strong> free USAT study material PDF</strong>
          </li>

          <li>
            Basic analytics are used to improve
            <strong> USAT online preparation experience</strong>
          </li>

        </ul>
      </div>

      {/* ---------- AGREEMENT NOTE ---------- */}
      <p className="text-gray-600 italic">
        By using this <strong>USAT exam preparation website</strong>,
        you agree to our privacy practices.
      </p>

    </div>
  </div>
</section>

    </>
  );
}
