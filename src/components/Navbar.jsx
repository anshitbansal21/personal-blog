import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition">
            Anshit Bansal
          </Link>
          <div className="flex gap-6">
            <Link 
              to="/" 
              className="hover:text-gray-200 transition font-medium"
            >
              Home
            </Link>
            <a 
              href="https://github.com/anshitbansal21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
