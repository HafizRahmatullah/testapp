import React from "react";
import SubjectCard from "./SubjectCard.jsx";
import subjects from "../data/subjects.js";

export default function SubjectsSection() {
  return (
    <section id="subjects" className="py-12 bg-blue-100 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((s) => (
            <SubjectCard key={s.slug} subject={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
