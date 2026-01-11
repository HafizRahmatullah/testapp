const subjects = [
  // Pre-Medical
  { name: "Biology", slug: "biology", desc: "Study of living organisms with USAT solved MCQs and past papers PDF for Pre-Medical preparation 2026.", pdfUrl: "/pdfs/biology.pdf", category: "Pre-Medical" },
  { name: "Chemistry", slug: "chemistry", desc: "Chemical reactions & experiments with USAT preparation guide, solved MCQs, and downloadable PDF.", pdfUrl: "/pdfs/chemistry.pdf", category: "Pre-Medical" },
  { name: "Physics", slug: "physics", desc: "Scientific principles and concepts for USAT Pre-Medical with mock tests and past papers PDF.", pdfUrl: "/pdfs/physics.pdf", category: "Pre-Medical" },
  { name: "English", slug: "english", desc: "Grammar, writing, comprehension with USAT solved MCQs and online practice tests.", pdfUrl: "/pdfs/english.pdf", category: "Pre-Medical" },
  { name: "Verbal Reasoning", slug: "verbal-reasoning", desc: "Problem-solving and reasoning skills with USAT mock tests and past papers PDF.", pdfUrl: "/pdfs/logical-reasoning.pdf", category: "Pre-Medical" },
  { name: "Quantitative Reasoning", slug: "quantitative-reasoning", desc: "Numerical reasoning skills for USAT preparation 2026, including solved MCQs and PDFs.", pdfUrl: "/pdfs/Quantitative Reasoning.pdf", category: "Pre-Medical" },

  // Pre-Engineering
  { name: "Mathematics", slug: "mathematics", desc: "Math fundamentals with USAT solved MCQs, past papers, and online test practice.", pdfUrl: "/pdfs/mathematics.pdf", category: "Pre-Engineering" },
  { name: "Physics (Eng)", slug: "physics-eng", desc: "Physics for engineers with USAT online mock tests and past papers PDF.", pdfUrl: "/pdfs/physics.pdf", category: "Pre-Engineering" },
  { name: "Chemistry (Eng)", slug: "chemistry-eng", desc: "Chemistry for engineers with USAT solved MCQs, PDFs, and exam preparation guide.", pdfUrl: "/pdfs/chemistry.pdf", category: "Pre-Engineering" },
  { name: "English (Eng)", slug: "english-eng", desc: "English for engineers with USAT practice MCQs, past papers, and online tests.", pdfUrl: "/pdfs/english.pdf", category: "Pre-Engineering" },
  { name: "Verbal Reasoning (Eng)", slug: "Verbal-reasoning-eng", desc: "Problem-solving for engineers with USAT solved MCQs and PDF resources.", pdfUrl: "/pdfs/logical-reasoning.pdf", category: "Pre-Engineering" },
  { name: "Quantitative Reasoning (Eng)", slug: "quantitative-reasoning-eng", desc: "Numerical skills for USAT preparation with mock tests and solved MCQs.", pdfUrl: "/pdfs/Quantitative Reasoning.pdf", category: "Pre-Engineering" },

  // Computer Science
  {name: "Computer Science",slug: "computer-science",desc: "Programming fundamentals, algorithms, and problem solving for USAT online test and past papers.",pdfUrl: "/pdfs/computer-science.pdf",category: "Computer Science"},
  {name: "Mathematics (CS)",slug: "mathematics-cs",desc: "Mathematics for computer science students with USAT solved MCQs and practice PDFs.",pdfUrl: "/pdfs/mathematics.pdf",category: "Computer Science"},
  {name: "Physics (CS)",slug: "physics-cs",desc: "Physics basics for computer science with USAT exam preparation guide and mock tests.",pdfUrl: "/pdfs/physics.pdf",category: "Computer Science"},
  {name: "English (CS)",slug: "english-cs",desc: "English comprehension and writing for USAT preparation 2026 with solved MCQs.",pdfUrl: "/pdfs/english.pdf",category: "Computer Science"},
  {name: "Verbal Reasoning (CS)",slug: "verbal-reasoning-cs",desc: "Logical and analytical reasoning skills with USAT past papers PDF and online tests.",pdfUrl: "/pdfs/logical-reasoning.pdf",category: "Computer Science"},
  {name: "Quantitative Reasoning (CS)",slug: "quantitative-reasoning-cs",desc: "Numerical and quantitative skills with USAT solved MCQs and mock tests.",pdfUrl: "/pdfs/Quantitative Reasoning.pdf",category: "Computer Science"},

  // Arts & Humanities
  { name: "General Knowledge", slug: "general-knowledge", desc: "World and current affairs with USAT preparation guide, solved MCQs and online tests.", pdfUrl: "/pdfs/general-knowledge.pdf", category: "Arts & Humanities" },
  { name: "Pakistan Affairs", slug: "pakistan-affairs", desc: "History and society of Pakistan with USAT solved MCQs and past papers PDF.", pdfUrl: "/pdfs/PakStudy.pdf", category: "Arts & Humanities" },
  { name: "Islamic Studies", slug: "islamic-studies", desc: "Islamic principles and civics with USAT online mock tests and solved MCQs.", pdfUrl: "/pdfs/Islamiat-MCQs_copy.pdf", category: "Arts & Humanities" },
  { name: "Civics", slug: "civics", desc: "Civic knowledge with USAT past papers PDF and preparation resources.", pdfUrl: "/pdfs/civics.pdf", category: "Arts & Humanities" },
  { name: "Basic Math", slug: "basic-math", desc: "Math fundamentals for arts students with USAT solved MCQs and practice tests.", pdfUrl: "/pdfs/basic-math.pdf", category: "Arts & Humanities" },

  // Economics
  { name: "Microeconomics (Basics)", slug: "microeconomics", desc: "Basics of microeconomics with USAT exam preparation guide and solved MCQs.", pdfUrl: "/pdfs/microeconomics.pdf", category: "Economics" },
  { name: "Macroeconomics (Basics)", slug: "macroeconomics", desc: "Basics of macroeconomics with USAT past papers PDF and online practice tests.", pdfUrl: "/pdfs/macroeconomics.pdf", category: "Economics" },
  { name: "Mathematics (Econ)", slug: "math-econ", desc: "Math for economics with USAT solved MCQs and mock tests.", pdfUrl: "/pdfs/mathematics.pdf", category: "Economics" },
  { name: "English (Econ)", slug: "english-econ", desc: "English for economics with USAT online test and solved MCQs.", pdfUrl: "/pdfs/english.pdf", category: "Economics" },
  { name: "Statistics", slug: "statistics", desc: "Statistics for economics with USAT preparation 2026 guide, solved MCQs and PDFs.", pdfUrl: "/pdfs/statistics.pdf", category: "Economics" },
  { name: "Verbal Reasoning (Econ)", slug: "Verbal-reasoning-econ", desc: "Analytical skills for economics with USAT past papers PDF and online mock tests.", pdfUrl: "/pdfs/logical-reasoning.pdf", category: "Economics" },
];

export default subjects;
