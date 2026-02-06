import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Layout from '../components/Layout';

// Import all markdown files
import beginningsRaw from '../content/posts/the-beginning.md?raw';

function BlogPost() {
  const { slug } = useParams();
  
  // Map of slug to raw content
  const postsMap = {
    'the-beginning': beginningsRaw,
  };

  const raw = postsMap[slug];
  
  if (!raw) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, this blog post doesn't exist.</p>
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  const { data: frontmatter, content } = matter(raw);

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center mb-8"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back to Home
        </Link>

        <header className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-gray-500 text-lg">{frontmatter.date}</p>
        </header>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6" {...props} />,
              h4: ({ node, ...props }) => <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4" {...props} />,
              p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />,
              li: ({ node, ...props }) => <li className="ml-4" {...props} />,
              code: ({ node, inline, ...props }) => 
                inline 
                  ? <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono" {...props} />
                  : <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm" {...props} />,
              pre: ({ node, ...props }) => <pre className="mb-4" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4" {...props} />,
              a: ({ node, ...props }) => <a className="text-blue-600 hover:text-blue-700 underline" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-bold text-gray-900" {...props} />,
              em: ({ node, ...props }) => <em className="italic" {...props} />,
              hr: ({ node, ...props }) => <hr className="my-8 border-gray-300" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
}

export default BlogPost;
