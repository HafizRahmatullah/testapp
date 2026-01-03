import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import subjects from "../data/subjects";
import SubjectCard from "../components/SubjectCard";

export default function SubjectDetails() {
  const { slug } = useParams();
  const subject = subjects.find((s) => s.slug === slug);

  if (!subject) {
    return (
      <div className="container py-12 text-center text-gray-600">
        Subject not found.
      </div>
    );
  }

  const pageTitle = `${subject.name} USAT Preparation | Free MCQs & PDF`;
  const pageDescription = `Prepare ${subject.name} for the USAT exam with free MCQs, practice questions, and downloadable PDFs. Improve your score with structured study material.`;
  const pageUrl = `https://yourdomain.com/subject/${slug}`;

  return (
    <div className="container mx-auto py-10 px-4 space-y-8">

      {/* ================= SEO META ================= */}
      <Helmet>
        {/* Basic SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="USAT Preparation Platform" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* ================= Schema Markup ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": `${subject.name} USAT Preparation`,
            "description": subject.desc,
            "provider": {
              "@type": "EducationalOrganization",
              "name": "USAT Preparation Platform",
              "url": "https://yourdomain.com"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yourdomain.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": subject.name,
                "item": pageUrl
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}

      {/* Subject Info */}
      <div className="space-y-4">
  {/* Heading */}
  <h1 className="text-3xl font-bold text-blue-900">
    {subject.name} – USAT Preparation
  </h1>

  {/* Description */}
  <p className="text-gray-700">{subject.desc}</p>

  {/* Buttons under heading */}
  <div className="flex gap-4 text-center">
    <Link
      to={`/subject/${slug}/mcqs`}
      className="px-5 py-3 bg-blue-600 text-white rounded-lg"
    >
      Practice MCQs
    </Link>

    {subject.pdfUrl && (
      <a
        href={subject.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 border rounded-lg text-blue-700"
      >
        Open PDF
      </a>
    )}
  </div>
</div>

      {/* Explore Other Subjects */}
      <div className="bg-white shadow p-6 rounded-xl">
        <h3 className="font-bold text-blue-900 mb-4">
          Explore Other Subjects
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects
            .filter(
              (s) => s.category === subject.category && s.slug !== slug
            )
            .slice(0, 6)
            .map((s) => (
              <SubjectCard key={s.slug} subject={s} />
            ))}
        </div>
      </div>
    </div>
  );
}
