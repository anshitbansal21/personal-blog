import BlogCard from '../components/BlogCard';
import Layout from '../components/Layout';
import matter from 'gray-matter';

// Import all markdown files
import welcomeRaw from '../content/posts/the-beginning.md?raw';

function Home() {
  // Parse markdown files
  const posts = [
    { raw: welcomeRaw },
  ].map(({ raw }) => {
    const { data } = matter(raw);
    return data;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          learnings, technology, travel and my experiences as I go tinkering around...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
