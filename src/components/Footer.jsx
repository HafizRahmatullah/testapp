import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t mt-8 min-h-[140px] h-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">

          {/* Brand & Info */}
          <div>
            <h4 className="font-bold text-blue-900">
              USAT Prep – Online Preparation Platform
            </h4>
            <p className="text-gray-500 text-sm">
              Free USAT past papers PDF, solved MCQs, online mock tests & study guides © 2025 USAT Prep
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 text-sm justify-center sm:justify-start">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home – USAT Preparation
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">
              About USAT Prep
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">
              Contact – USAT Support
            </Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600">
              Privacy Policy – USAT Study Material
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-blue-600">
              Terms & Conditions – USAT Platform
            </Link>
            <Link to="/disclaimer" className="text-gray-600 hover:text-blue-600">
              Disclaimer – USAT Prep
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-end gap-4 mr-10">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Twitter – USAT Prep
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Facebook – USAT Exam Prep
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              LinkedIn – USAT Online Tests
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
