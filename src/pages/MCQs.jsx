import { useParams } from "react-router-dom";
import subjects from "../data/subjects";
import { mcqsBySubject } from "../data/mcqs";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function MCQs() {
  const { slug } = useParams();
  const subject = subjects.find((s) => s.slug === slug);
  const questions = mcqsBySubject(subject?.name);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (id, optionIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: optionIndex }));
  };

  // Count correct answers
  const correct = Object.entries(answers).filter(([id, idx]) => {
    const q = questions.find((x) => x.id === Number(id));
    return q?.answerIndex === idx;
  }).length;

  const wrong = Object.entries(answers).filter(([id, idx]) => {
    const q = questions.find((x) => x.id === Number(id));
    return q?.answerIndex !== idx;
  }).length;

  const unanswered = questions.length - Object.keys(answers).length;

  const mistakes = questions.filter((q) => {
    const selected = answers[q.id];
    return selected !== undefined && selected !== q.answerIndex;
  });

  const getOptionClasses = (q, idx) => {
    if (!submitted) {
      return answers[q.id] === idx
        ? "border-blue-600 bg-blue-50"
        : "border-gray-200";
    }

    // After submit:
    if (idx === q.answerIndex) return "border-green-600 bg-green-50"; // Correct
    if (answers[q.id] === idx && idx !== q.answerIndex)
      return "border-red-600 bg-red-50"; // Incorrect choice

    return "border-gray-200";
  };

  return (
    <>
      <Helmet>
        <title>{`${subject?.name} MCQs | USAT Practice Questions`}</title>
        <meta
          name="description"
          content={`Practice ${subject?.name} MCQs for USAT exam. Instant results, correct answers, and explanations.`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": `${subject?.name} USAT MCQs`,
            "about": subject?.name,
          })}
        </script>
      </Helmet>

      <div className="space-y-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-blue-900">
          {subject?.name} – MCQs
        </h1>

        {/* MAIN QUIZ */}
        {!submitted ? (
          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="bg-white rounded-xl p-6 shadow">
                <p className="font-medium">{q.question}</p>

                <ul className="mt-3 space-y-2">
                  {q.options.map((opt, idx) => (
                    <li key={idx}>
                      <button
                        className={`w-full p-3 rounded border transition ${getOptionClasses(
                          q,
                          idx
                        )}`}
                        onClick={() => handleSelect(q.id, idx)}
                      >
                        {opt}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* RESULT SUMMARY */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-blue-700 text-center">
                Your Score: {correct}/{questions.length}
              </h2>

              <div className="grid grid-cols-3 text-center mt-6">
                <div>
                  <p className="text-green-600 text-lg font-bold">Correct</p>
                  <p className="text-xl">{correct}</p>
                </div>

                <div>
                  <p className="text-red-600 text-lg font-bold">Wrong</p>
                  <p className="text-xl">{wrong}</p>
                </div>

                <div>
                  <p className="text-gray-600 text-lg font-bold">Unanswered</p>
                  <p className="text-xl">{unanswered}</p>
                </div>
              </div>
            </div>

            {/* MISTAKES LIST */}
            {mistakes.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow mt-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  ❌ Mistakes ({mistakes.length})
                </h3>

                <ul className="space-y-4">
                  {mistakes.map((q) => (
                    <li
                      key={q.id}
                      className="bg-red-50 p-4 rounded border border-red-200"
                    >
                      <p className="font-semibold">{q.question}</p>

                      <p className="mt-2 text-sm text-red-700">
                        ❌ Your Answer:{" "}
                        <span className="font-medium">
                          {q.options[answers[q.id]]}
                        </span>
                      </p>

                      <p className="mt-1 text-sm text-green-700">
                        ✔ Correct Answer:{" "}
                        <span className="font-medium">
                          {q.options[q.answerIndex]}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow"
            onClick={() => {
              if (submitted) {
                setSubmitted(false);
                setAnswers({});
              } else {
                setSubmitted(true);
              }
            }}
          >
            {submitted ? "Retry" : "Submit Answers"}
          </button>
        </div>
      </div>
    </>
  );
}
