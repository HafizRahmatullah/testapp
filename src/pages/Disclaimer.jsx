import React from "react";
import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <>
      {/* ---------- SEO META TAGS ---------- */}
      <Helmet>
        <title>Disclaimer | USAT Exam Preparation Website</title>

<meta name="description" content="Official privacy policy for USAT preparation online platform. Secure access to USAT mock tests, past papers & syllabus PDF."/>

      </Helmet>

      {/* ---------- DISCLAIMER SECTION ---------- */}
      <section id="disclaimer" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="card space-y-6 shadow-lg rounded-lg p-8">
            
  {/* ---------- HEADING ---------- */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
    ⚠️ Disclaimer – USAT Preparation Website
  </h1>

  {/* ---------- DESCRIPTION ---------- */}
  <p className="text-gray-700 text-lg leading-relaxed">
    This website is an independent <strong>USAT preparation platform</strong> and is not
    officially affiliated with NTS, HEC, or any university conducting the
    Undergraduate Studies Admission Test (USAT).
  </p>

  {/* ---------- ACCURACY NOTE ---------- */}
  <p className="text-gray-700 text-lg leading-relaxed">
    While we strive to provide accurate
    <strong> USAT study material</strong>, MCQs, online mock tests, and
    <strong> USAT past papers PDF</strong>, we do not guarantee that all content is
    error-free or fully aligned with future USAT exam pattern changes.
    Students are advised to verify information from official sources.
  </p>

  {/* ---------- USER RESPONSIBILITY ---------- */}
  <p className="text-gray-600 italic">
    Use of this <strong>USAT online preparation website</strong> is entirely at your own discretion.
  </p>

</div>

        </div>
      </section>
    </>
  );
}
