# Deployment Guide

The Solo Solution landing page is a robust, static frontend application (HTML, CSS, JS). It does not require a Node.js server to run since the form logic relies on client-side fetching to a Google Apps Script webhook.

Because it's a static site, you can host it for free, incredibly fast, on global CDNs.

## Option A: Deploying with Netlify (Recommended)

### Method 1: Drag and Drop (No Git required)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag the entire `solo solution demo` folder from your desktop onto the browser window.
3. Netlify will instantly deploy the site and give you a live URL.
4. (Optional) Create a free Netlify account to claim the site, change the domain name, or attach a custom domain.

### Method 2: Git Repository (Best for ongoing updates)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log into [Netlify](https://www.netlify.com/).
3. Click "Add new site" > "Import an existing project".
4. Connect your Git provider and select the repository.
5. Leave the "Build command" and "Publish directory" fields **blank**.
6. Click **Deploy site**.

---

## Option B: Deploying with Vercel

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log into [Vercel](https://vercel.com/dashboard).
3. Click "Add New" > "Project".
4. Import your Git repository.
5. Vercel will automatically detect that it's a static HTML project. Ensure the framework preset is set to "Other".
6. Click **Deploy**.
7. Vercel will provide a live URL and automatically configure SSL certificates.

## Pre-Launch Checklist
- [ ] Connect the Google Apps Script URL in `js/formHandler.js`.
- [ ] Test the form locally.
- [ ] Verify favicon strategy (you may want to add `<link rel="icon" href="...">` to the `index.html` head).
- [ ] Ensure all mock text and placeholder fields are accurate for launch.
