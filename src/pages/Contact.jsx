import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      {/* ---------- SEO META TAGS ---------- */}
      <Helmet>
        <title>Contact Us | USAT Online Preparation Support</title>

<meta name="description" content="Need help with USAT preparation? Contact us for support, feedback, syllabus guidance & technical assistance. Prepare smarter with us."/>

      </Helmet>

      {/* ---------- CONTACT SECTION ---------- */}
      <section id="contact" className="py-16 bg-white">
  <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-4 items-start">

    {/* ---------- LEFT SIDE CONTENT ---------- */}
   <div className="space-y-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
    📞 Contact Us – USAT Online Preparation Support
  </h1>

  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
    If you have questions, suggestions, or feedback regarding our
    <strong> USAT online preparation</strong>, MCQs, mock tests, or
    USAT past papers PDF, feel free to contact us. We are here to support
    students with the best USAT exam preparation resources.
  </p>

  <div>
    <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3">
      You can contact us for:
    </h2>

    <ul className="list-disc list-inside text-gray-700 space-y-2">

      <li>
        Corrections or suggestions for
        <strong> USAT MCQs with answers</strong>
      </li>

      <li>
        Technical issues related to
        <strong> USAT online mock tests</strong>
      </li>

      <li>
        General inquiries about
        <strong> USAT exam preparation in Pakistan</strong>
      </li>

    </ul>
  </div>

  <p className="text-gray-600 italic">
    Our support team usually responds within
    <span className="font-semibold"> 24–48 hours</span>.
  </p>
</div>

    {/* ---------- RIGHT SIDE FORM ---------- */}
    <div className="space-y-6 shadow-lg rounded-lg p-6 bg-white">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900">
        Send Us a Message
      </h2>

      <form className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          aria-label="Your Name"
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          aria-label="Your Email"
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          aria-label="Your Message"
          placeholder="Message"
          rows={4}
          required
          className="sm:col-span-2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="sm:col-span-2 px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>

  </div>
</section>

    </>
  );
}
