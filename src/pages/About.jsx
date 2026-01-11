import React from "react";
import { Helmet } from "react-helmet-async";
import aboutImg from "../assets/header.JPG";

export default function About() {
  return (
    <>
      {/* ---------- SEO META TAGS ---------- */}
      <Helmet>
        <title>About Us | Best USAT Preparation Platform in Pakistan</title>

<meta name="description" content="Learn about Pakistan's trusted USAT preparation platform. We provide free MCQs, mock tests, past papers PDF & exam-focused study resources."/>

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
    About Our USAT Online Preparation Platform
  </h1>

  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
    We are an independent educational platform created to support students preparing for the
    Undergraduate Studies Admission Test (USAT). Our mission is to provide the best
    USAT preparation online with free study material, chapter-wise MCQs with answers,
    online mock tests, and USAT past papers PDF to help students succeed.
  </p>

  <div className="space-y-3">
    <h2 className="text-xl sm:text-2xl font-semibold text-blue-800">
      We focus on:
    </h2>

    <ul className="list-disc list-inside text-gray-700 space-y-2">

      <li>
        Clear concepts instead of rote memorization for effective
        <strong> USAT exam preparation</strong>
      </li>

      <li>
        Practice that matches actual <strong>USAT exam pattern</strong> with
        real exam style questions
      </li>

      <li>
        Free and accessible learning through
        <strong> free USAT study material PDF</strong>
      </li>

      <li>
        Continuous improvement with accurate
        <strong> USAT mock tests online</strong> and updated resources
      </li>

    </ul>
  </div>
</div>

    </div>
</section>

    </>
  );
}
