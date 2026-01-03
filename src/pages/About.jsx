import React from "react";
import { Helmet } from "react-helmet-async";
import aboutImg from "../assets/header.jpg"; // Ensure this image exists in your assets folder

export default function About() {
  return (
    <>
      {/* ---------- SEO META TAGS ---------- */}
      <Helmet>
        <title>About Us | USAT Preparation Platform for Students</title>
        <meta
          name="description"
          content="Learn about our USAT preparation platform designed to help students succeed with concept-based practice, exam-focused MCQs, and free learning resources."
        />
      </Helmet>

      {/* ---------- ABOUT SECTION ---------- */}
     <section id="about" className="py-16 bg-white">
  <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center px-4">

    {/* ---------- LEFT SIDE IMAGE ---------- */}
    <div>
      <img
        src={aboutImg}
        alt="Students preparing for USAT exam"
        className="w-full h-full object-cover rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>

    {/* ---------- RIGHT SIDE TEXT ---------- */}
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
        About Our USAT Preparation Platform
      </h1>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We are an independent educational platform created to support students preparing for the
        Undergraduate Studies Admission Test (USAT). Our goal is to simplify preparation by offering
        carefully organized subjects, exam-relevant practice material, and easy-to-understand study resources.
      </p>

      <div className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-800">
          We focus on:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Clear concepts instead of rote memorization</li>
          <li>Practice that matches actual USAT patterns</li>
          <li>Free and accessible learning for all students</li>
          <li>Continuous improvement to ensure accuracy, relevance, and student success</li>
        </ul>
      </div>
    </div>

  </div>
</section>

    </>
  );
}
