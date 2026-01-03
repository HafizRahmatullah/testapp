import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const SubjectDetails = lazy(() => import("./pages/SubjectDetails"));
const MCQs = lazy(() => import("./pages/MCQs"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
          <Route path="/privacy-policy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={<div>Loading...</div>}><TermsConditions /></Suspense>} />
          <Route path="/disclaimer" element={<Suspense fallback={<div>Loading...</div>}><Disclaimer /></Suspense>} />
          <Route path="/subject/:slug" element={<Suspense fallback={<div>Loading...</div>}><SubjectDetails /></Suspense>} />
          <Route path="/subject/:slug/mcqs" element={<Suspense fallback={<div>Loading...</div>}><MCQs /></Suspense>} />
        </Routes>
      

      <Footer />
    </BrowserRouter>
  );
}
