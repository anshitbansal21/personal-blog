# GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. Create GitHub Repository

Go to [GitHub](https://github.com/new) and create a new repository.

**Important**: Remember your repository name - you'll need it!

### 2. Update Vite Configuration

Open `vite.config.js` and update the `base` path:

```js
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  base: '/YOUR_REPO_NAME/', // Replace with your actual repo name
})
```

**Example**: If your repo is named `my-blog`, use:
```js
base: '/my-blog/',
```

### 3. Initialize Git and Push

Run these commands in your terminal:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: React blog with Tailwind CSS"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your site (`npm run build`)
2. Create a `gh-pages` branch
3. Push the built site to that branch

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top navigation)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**:
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
5. Click **Save**

### 6. Wait and Visit

GitHub will take 1-2 minutes to deploy. Once ready, your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## Future Updates

Whenever you make changes:

```bash
# Make your changes to the code

# Add and commit changes
git add .
git commit -m "Describe your changes"

# Push to GitHub
git push origin main

# Deploy updated version
npm run deploy
```

## Troubleshooting

### White Screen or 404 Errors

**Problem**: Site loads but shows white screen or 404 on refresh.

**Solution**: This happens with client-side routing. For GitHub Pages with a custom repo name, you need to handle this.

Add a `404.html` file to `public/` folder:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/YOUR_REPO_NAME/'">
  </head>
  <body></body>
</html>
```

Then update `src/main.jsx` to handle the redirect:

```js
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  history.replaceState(null, null, redirect);
}
```

### Images Not Loading

**Problem**: Images show in dev but not in production.

**Solution**: Make sure:
1. Images are in the `public/` folder
2. You reference them with `/YOUR_REPO_NAME/image.png` (with the base path)

Or use Vite's asset imports:
```js
import myImage from './assets/image.png'
```

### CSS Not Loading

**Problem**: Styles don't appear in production.

**Solution**: Check that `base` path in `vite.config.js` matches your repo name exactly (including case sensitivity).

## Using a Custom Domain

Want to use your own domain like `blog.yourdomain.com`?

1. Add a `CNAME` file to `public/` folder with your domain:
   ```
   blog.yourdomain.com
   ```

2. In your domain registrar, add a CNAME record:
   - Type: CNAME
   - Name: blog (or @)
   - Value: YOUR_USERNAME.github.io

3. Update `vite.config.js`:
   ```js
   base: '/', // Change back to root
   ```

4. Deploy again: `npm run deploy`

5. In GitHub Settings → Pages, add your custom domain

## Alternative: GitHub Pages with Custom Domain (No Base Path)

If you're using `username.github.io` as the repository name:

1. Repo name must be: `YOUR_USERNAME.github.io`
2. In `vite.config.js`: `base: '/'`
3. Site will be at: `https://YOUR_USERNAME.github.io/`

This is simpler as you don't need the repo name in the path!

## Checking Build Locally

Before deploying, test the production build locally:

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

Visit `http://localhost:4173` to see how it will look in production.

---

**Need Help?**

- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- Check that `base` path matches your repo name!
