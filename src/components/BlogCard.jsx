import { Link } from 'react-router-dom';

function BlogCard({ title, date, excerpt, slug }) {
  return (
    <Link to={`/post/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 h-full border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-3">{date}</p>
        <p className="text-gray-700 leading-relaxed">{excerpt}</p>
        <div className="mt-4 text-blue-600 font-medium flex items-center">
          Read more 
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
