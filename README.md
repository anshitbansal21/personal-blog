# Personal Blog Site

A modern, responsive personal blog built with React, Tailwind CSS, and markdown content. Designed for easy content management and GitHub Pages deployment.

## 🚀 Features

- ✨ Clean, modern UI with Tailwind CSS
- 📝 Markdown-based blog posts with frontmatter
- 🎨 Responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🔄 Client-side routing with React Router
- 🚢 Easy deployment to GitHub Pages

## 📦 Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **gray-matter** - Parse markdown frontmatter
- **react-markdown** - Render markdown content

## 🛠️ Local Development

### Prerequisites

- Node.js (v20.17.0 or higher)
- npm (v10.8.2 or higher)

### Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   
   Navigate to `http://localhost:5173`

## ✍️ Adding New Blog Posts

1. **Create a new markdown file** in `src/content/posts/`
   
   Example: `my-new-post.md`

2. **Add frontmatter** at the top of the file:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2026-02-06"
   excerpt: "A short description of your post (150 chars max)"
   slug: "your-post-slug"
   ---
   
   # Your Content Here
   
   Start writing your blog post content...
   ```

3. **Import the post** in `src/pages/Home.jsx` and `src/pages/BlogPost.jsx`:
   
   In `Home.jsx`:
   ```jsx
   import myNewPostRaw from '../content/posts/my-new-post.md?raw';
   
   const posts = [
     { raw: welcomeRaw },
     { raw: reactRaw },
     { raw: tailwindRaw },
     { raw: myNewPostRaw }, // Add this line
   ].map(...)
   ```
   
   In `BlogPost.jsx`:
   ```jsx
   const postsMap = {
     'welcome-to-my-blog': welcomeRaw,
     'getting-started-with-react': reactRaw,
     'tailwind-css-utility-first': tailwindRaw,
     'your-post-slug': myNewPostRaw, // Add this line
   };
   ```

4. **Preview your post** - it will appear on the home page and be accessible via its slug

## 🎨 Customization

### Colors and Styling

Edit `src/components/Navbar.jsx` to change the header gradient:
```jsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
// Change to your preferred colors
```

### Layout

Modify `src/components/Layout.jsx` to adjust:
- Max width: `max-w-6xl`
- Padding: `px-4 py-8`
- Footer content

### Home Page

Edit `src/pages/Home.jsx` to customize:
- Hero section heading
- Grid layout (currently `md:grid-cols-2 lg:grid-cols-3`)
- Blog card styling

## 🚢 Deployment to GitHub Pages

### First-Time Setup

1. **Create a GitHub repository** for your blog

2. **Initialize git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

4. **Update `vite.config.js`** with your repository name:
   ```js
   export default defineConfig({
     plugins: [react()],
     assetsInclude: ['**/*.md'],
     base: '/YOUR_REPO_NAME/', // Change this!
   })
   ```

5. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select the `gh-pages` branch
   - Click "Save"

7. **Visit your site**:
   
   Your blog will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Updating Your Blog

After making changes:
```bash
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy
```

## 📁 Project Structure

```
blog-site/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── BlogCard.jsx     # Blog post preview card
│   │   └── Layout.jsx       # Page layout wrapper
│   ├── pages/
│   │   ├── Home.jsx         # Home page with post list
│   │   └── BlogPost.jsx     # Individual post page
│   ├── content/
│   │   └── posts/           # Markdown blog posts
│   │       ├── welcome-to-my-blog.md
│   │       ├── getting-started-with-react.md
│   │       └── tailwind-css-utility-first.md
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles + Tailwind directives
├── public/                  # Static assets
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎓 Learning Tailwind CSS

### Key Concepts Used in This Project

**Spacing:**
- `p-4` = padding: 1rem
- `px-6` = horizontal padding
- `py-3` = vertical padding
- `m-4` = margin: 1rem
- `mb-8` = margin-bottom: 2rem

**Colors:**
- `bg-blue-600` = blue background (600 shade)
- `text-gray-700` = gray text
- `hover:text-blue-700` = change text color on hover

**Layout:**
- `flex` = display: flex
- `justify-between` = space-between
- `items-center` = align items center
- `grid` = CSS grid
- `gap-6` = gap between grid items

**Responsive Design:**
- `md:grid-cols-2` = 2 columns on medium screens+
- `lg:text-lg` = large text on large screens+

**Effects:**
- `shadow-md` = medium box shadow
- `hover:shadow-xl` = extra large shadow on hover
- `transition` = smooth transitions
- `rounded-lg` = large border radius

### Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind Play](https://play.tailwindcss.com) - Interactive playground
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

## 🔮 Future Enhancements

- [ ] Add tag/category filtering
- [ ] Implement search functionality
- [ ] Add dark mode
- [ ] Syntax highlighting for code blocks
- [ ] Reading time estimates
- [ ] RSS feed
- [ ] SEO optimization
- [ ] Comments system (e.g., Giscus)

## 📄 License

MIT - Feel free to use this as a template for your own blog!

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome. Feel free to open an issue or pull request.

---

**Happy blogging!** 🎉
# personal-blog
