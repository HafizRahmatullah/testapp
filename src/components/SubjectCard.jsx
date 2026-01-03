import { Link } from "react-router-dom";
import { FaBookOpen, FaFlask, FaAtom, FaLeaf, FaLaptopCode, FaGlobeAsia, FaPenFancy, FaMosque, FaChartLine, FaBrain } from "react-icons/fa";

// Mapping of subjects to icons
const iconMap = {
  Mathematics: <FaBookOpen className="text-blue-600 text-4xl mb-2" />,
  Physics: <FaAtom className="text-blue-600 text-4xl mb-2" />,
  Chemistry: <FaFlask className="text-blue-600 text-4xl mb-2" />,
  Biology: <FaLeaf className="text-blue-600 text-4xl mb-2" />,
  English: <FaPenFancy className="text-blue-600 text-4xl mb-2" />,
  "Logical Reasoning": <FaBrain className="text-blue-600 text-4xl mb-2" />,
  "Computer Science": <FaLaptopCode className="text-blue-600 text-4xl mb-2" />,
  "Pakistan Affairs": <FaGlobeAsia className="text-blue-600 text-4xl mb-2" />,
  "Islamic Studies": <FaMosque className="text-blue-600 text-4xl mb-2" />,
  Statistics: <FaChartLine className="text-blue-600 text-4xl mb-2" />,
};

export default function SubjectCard({ subject }) {
  // Clean the subject name to remove (CS) or extra text
  const cleanName = subject.name.replace(/\s*\(.*\)/, ""); // removes anything like " (CS)"
  const icon = iconMap[cleanName] || <FaBookOpen className="text-blue-600 text-4xl mb-2" />;

  return (
    <Link
      to={`/subject/${subject.slug}`}
      className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition flex flex-col items-center justify-center"
    >
      <div className="text-blue-600 text-6xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{subject.name}</h3>
      <p className="text-gray-600 text-sm">{subject.desc}</p>
    </Link>
  );
}
