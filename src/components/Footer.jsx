import { Link } from "react-router-dom";

export default function Footer() 
{ return ( 
    <footer className="bg-blue-50 border-t mt-8 min-h-[140px] h-auto"> 
    <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-blue-900">USAT Prep</h4>
            <p className="text-gray-500 text-sm">© 2025 USAT Prep</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm justify-center sm:justify-start">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms</Link>
            <Link to="/disclaimer" className="text-gray-600 hover:text-blue-600">Disclaimer</Link>
          </div>

         <div className="flex justify-end gap-4 mr-10">
  <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
  <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
  <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
</div>

        </div>
      </div>
    </footer>
  );
}
