import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      {/* ---------- SEO META TAGS ---------- */}
      <Helmet>
        <title>Contact Us | USAT Exam Preparation Support</title>
        <meta
          name="description"
          content="Contact us for USAT preparation support, feedback, or technical assistance. We are here to help you prepare better and smarter for your exam."
        />
      </Helmet>

      {/* ---------- CONTACT SECTION ---------- */}
      <section id="contact" className="py-16 bg-white">
  <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-4 items-start">

    {/* ---------- LEFT SIDE CONTENT ---------- */}
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
        📞 Get in Touch
      </h1>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        If you have questions, suggestions, or feedback regarding our USAT preparation resources,
        feel free to contact us. We value student input and aim to improve our platform based on
        real learner needs.
      </p>

      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3">
          You can contact us for:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Content corrections or suggestions</li>
          <li>Technical issues on the website</li>
          <li>General inquiries related to USAT preparation</li>
        </ul>
      </div>

      <p className="text-gray-600 italic">
        We usually respond within <span className="font-semibold">24–48 hours</span>.
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
