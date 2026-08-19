# Subhash Dubey — Premium Portfolio

> The site is designed to work by opening `index.html` directly. If your browser blocks local JavaScript, use GitHub Pages or a simple local server; the visible layout still has fallbacks.

Static GitHub Pages portfolio for **Subhash Dubey — Senior Motion Graphics Designer | Video Editor | Graphic Designer | AI Creative Expert**.

## Files

- `index.html` — website structure
- `style.css` — premium responsive visual design
- `main.js` — interactions, filters, project viewer, lazy video previews
- `config.js` — contact, Behance, LinkedIn, resume and showreel settings
- `projects.js` — **the only portfolio data file you need to edit**
- `assets/images/` — project thumbnails/gallery images
- `assets/videos/` — project videos
- `assets/Subhash-Dubey-Resume.pdf` — add your real PDF here

## Add your work

Open `projects.js`. There are exactly 20 project slots. Each slot supports:

- thumbnail
- main video
- multiple gallery images
- multiple additional videos
- category
- year
- role
- tools
- description
- creative approach

The approved project data uses only the confirmed toolset in the supplied file.

Example media paths:

`assets/images/project-01.webp`

`assets/videos/project-01.mp4`

If a media file does not exist, the website falls back gracefully.

## Add your showreel

Open `config.js` and change:

```js
showreel: "assets/videos/showreel.mp4",
showreelPoster: "assets/images/showreel-poster.webp"
```

## Add your resume

Put your real PDF at:

`assets/Subhash-Dubey-Resume.pdf`

The Resume button will then open/download that file.

## Add contact links

Edit `config.js`:

```js
email: "your-real-email@example.com",
linkedin: "https://www.linkedin.com/in/your-profile/"
```

Behance is already set to the supplied profile.

## GitHub Pages

1. Create a repository named `YOUR-USERNAME.github.io` (replace YOUR-USERNAME with your GitHub username).
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under Build and deployment choose **Deploy from a branch**.
5. Choose `main` and `/ (root)`.
6. Save.
7. Wait for GitHub Pages to publish.

## Important for many videos

Do not put dozens of large raw videos into the initial page load. The code uses poster images, lazy preview loading and viewport pausing. For a large portfolio, keep video files compressed and consider a video/CDN host later. The project data can still point to hosted MP4 URLs if needed.

## Design

- Poppins
- dark cinematic UI
- warm orange accent
- responsive desktop/mobile
- project filters
- fullscreen project viewer
- keyboard navigation
- reduced-motion support
- accessible project cards


## Resume integration
The portfolio now includes the supplied Subhash Dubey resume PDF at:
`assets/Subhash-Dubey-Resume.pdf`

The website Resume and Contact sections were populated from the supplied resume, including education, experience, skills, software, languages and contact/portfolio details. The source resume is one page and contains the career information shown in the site.
