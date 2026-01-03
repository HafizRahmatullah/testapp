import React from "react";
import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <>
      {/* ---------- SEO META TAGS ---------- */}
      <Helmet>
        <title>Disclaimer | Independent USAT Preparation Resource</title>
        <meta
          name="description"
          content="This USAT preparation website is an independent educational resource and is not affiliated with NTS or any official testing authority."
        />
      </Helmet>

      {/* ---------- DISCLAIMER SECTION ---------- */}
      <section id="disclaimer" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="card space-y-6 shadow-lg rounded-lg p-8">
            
            {/* ---------- HEADING ---------- */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              ⚠️ Disclaimer
            </h1>

            {/* ---------- DESCRIPTION ---------- */}
            <p className="text-gray-700 text-lg leading-relaxed">
              This website is an independent educational resource and is not officially affiliated 
              with NTS or any university conducting the USAT exam.
            </p>

            {/* ---------- ACCURACY NOTE ---------- */}
            <p className="text-gray-700 text-lg leading-relaxed">
              While we strive to ensure accuracy, we do not guarantee that all content is error-free 
              or fully aligned with future exam changes. Students are advised to verify information 
              with official sources.
            </p>

            {/* ---------- USER RESPONSIBILITY ---------- */}
            <p className="text-gray-600 italic">
              Use of this website is entirely at your own discretion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
