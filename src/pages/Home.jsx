import React from "react";
import { Helmet } from "react-helmet-async";
import SubjectCard from "../components/SubjectCard";
import subjects from "../data/subjects";
import headerImg from "../assets/header.JPG";

export default function Home() {
  // Get unique categories dynamically from subjects
  const categories = [...new Set(subjects.map((s) => s.category))];

  return (
    <div>
      {/* ---------- SEO META TAGS ---------- */}
      <Helmet>
        <title>USAT Preparation Online 2026 | Free MCQs, Past Papers PDF & Mock Tests</title>

<meta name="description" content="Best USAT preparation online 2026. Free subject-wise MCQs with answers, USAT past papers PDF, mock tests & study material for Pre-Medical, Pre-Engineering & Arts students in Pakistan."/>


        {/* Open Graph */}
        <meta
          property="og:title"
          content="USAT Preparation Online – Free MCQs & Study PDFs"
        />
        <meta
          property="og:description"
          content="Prepare for the USAT exam with smart MCQs, free PDFs, and subject-wise practice for Pre-Engineering, Pre-Medical, and Arts students."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://testpoint2.com" />
        <meta property="og:image" content="https://testpoint2.com/og-image.jpg" />
        <meta property="og:site_name" content="USAT Preparation Platform" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="USAT Preparation Online – Free MCQs & PDFs"
        />
        <meta
          name="twitter:description"
          content="Ace your USAT exam with structured preparation, MCQs, and downloadable study material."
        />
        <meta
          name="twitter:image"
          content="https://testpoint2.com/og-image.jpg"
        />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "USAT Preparation Platform",
            url: "https://testpoint2.com",
            description:
              "Free USAT preparation platform with MCQs, PDFs, and subject-wise practice.",
          })}
        </script>
      </Helmet>

      {/* ---------- HERO SECTION ---------- */}
      <main className="flex-1" role="main">
   <section className="bg-blue-50 py-12 sm:py-16 lg:py-20">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 items-center">

    {/* -------- LEFT CONTENT -------- */}
    <div className="text-center lg:text-left">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                   font-bold text-blue-900 leading-tight"
      >
        USAT Exam Preparation Platform
      </h1>

      <p
        className="mt-4 text-gray-700
                   text-base sm:text-lg md:text-xl lg:text-2xl"
      >
        Study smarter with MCQs, guides, and free downloadable PDFs.
      </p>

      <div
        className="mt-6 flex flex-col sm:flex-row gap-4
                   justify-center lg:justify-start"
      >
        <a
          href="#subjects"
          className="px-6 py-3 bg-blue-600 text-white
                     rounded-lg shadow hover:bg-blue-700 transition
                     text-sm sm:text-base"
        >
          Browse Subjects
        </a>

        <a
          href="#about"
          className="px-6 py-3 border border-blue-600
                     rounded-lg text-blue-700
                     hover:bg-blue-100 transition
                     text-sm sm:text-base"
        >
          Learn More
        </a>
      </div>
    </div>

    {/* -------- RIGHT IMAGE -------- */}
    <div className="aspect-[16/9] w-full">
  <img
    src={headerImg}
    alt="Students preparing for USAT exam"
     className="w-full h-full object-cover rounded-xl shadow-lg"  
     loading="eager" 
     
  />
</div>


  </div>
  
<section className="mt-12 text-center px-5">
  <h2 className="text-4xl font-bold text-blue-900 mb-6">
    📖 Recommended USAT Preparation Books (Free PDF)
  </h2>

  <div className="grid grid-cols-1 gap-6">
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition text-center">
      <h3 className="text-lg font-semibold text-blue-700">
        Complete USAT Preparation Book PDF
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Best USAT study material free download. Covers syllabus, MCQs & practice tests.
      </p>
      <a
        href="/pdfs/USAT Book.pdf"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download USAT Book PDF
      </a>
    </div>
  </div>
</section>


<section className="mt-10 px-5">
  <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">
    📚 USAT Past Papers PDF Free Download
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700">
        USAT Past Paper 2019 (Pre-Medical)
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Download USAT 2019 past paper PDF with real exam questions.
      </p>
      <a
        href="/pdfs/Hec 2019 paper.pdf"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        View USAT 2019 Paper
      </a>
    </div>

    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700">
        USAT Past Paper 2020 (Chemistry)
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Solve USAT 2020 paper PDF for chemistry preparation.
      </p>
      <a
        href="/pdfs/HEC 2020 Paper(1).pdf"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        View USAT 2020 Paper
      </a>
    </div>

    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700">
        USAT Past Paper 2022 (Pre-Medical)
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Practice USAT 2022 MCQs from real exam.
      </p>
      <a
        href="/pdfs/Hec 2022 paper-2.pdf"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        View USAT 2022 Paper
      </a>
    </div>

    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700">
        USAT Past Paper 2023 (Pre-Medical)
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Download USAT 2023 complete paper PDF.
      </p>
      <a
        href="/pdfs/HEC Complete paper pre medical 2023.pdf"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        View USAT 2023 Paper
      </a>
    </div>

    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700">
        USAT All Past Papers PDF (Complete Set)
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Download all USAT previous papers PDF free.
      </p>
      <a
        href="/pdfs/Usat All previous past papers pdf .pdf"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Download All Papers
      </a>
    </div>

    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-700">
        USAT All Past Papers PDF (Alternate)
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        Free USAT past papers for online preparation.
      </p>
      <a
        href="/pdfs/Usat All previous past papers pdf 2.pdf"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Download Papers
      </a>
    </div>
  </div>
</section>


</section>




      {/* ---------- ABOUT SECTION ---------- */}
<section id="about" className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-bold text-blue-900 mb-6">
      Best USAT Online Preparation Platform in Pakistan
    </h2>

    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
      Our USAT preparation platform helps students with online mock tests, chapter-wise MCQs,
      free past papers PDF and smart study plans. Prepare for USAT 2026 with real exam style
      questions for Pre-Medical, Pre-Engineering & Arts students.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 text-left">

      <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
        <h3 className="font-semibold text-blue-800 mb-2">
          📘 Chapter-wise USAT MCQs with Answers
        </h3>
        <p className="text-gray-600">
          Practice USAT MCQs chapter wise with detailed explanations.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
        <h3 className="font-semibold text-blue-800 mb-2">
          📂 Free USAT Study Material PDF
        </h3>
        <p className="text-gray-600">
          Download free USAT notes, books & syllabus PDF.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
        <h3 className="font-semibold text-blue-800 mb-2">
          🎯 USAT Preparation by Category
        </h3>
        <p className="text-gray-600">
          Pre-Medical, Pre-Engineering & Arts USAT preparation.
        </p>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
        <h3 className="font-semibold text-blue-800 mb-2">
          ✨ USAT Online Mock Tests
        </h3>
        <p className="text-gray-600">
          Real exam pattern based online USAT mock tests.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ---------- CATEGORY SECTIONS ---------- */}
      {categories.map((cat) => {
        const catSubjects = subjects.filter((s) => s.category === cat);

        return (
          <section
            key={cat}
            className={`px-4 py-12 ${
              cat === "Pre-Engineering" || cat === "Arts & Humanities"
                ? "bg-blue-50"
                : ""
            }`}
          >
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                {`USAT ${cat}`}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {catSubjects.map((subject) => (
                  <SubjectCard key={subject.slug} subject={subject} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
  </main>

    </div>
    
  );
}