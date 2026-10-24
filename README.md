# Piyush Singh — Portfolio Website

A static website (HTML, CSS, JavaScript). **No build step and no dependencies.**

## 1. Files included
```
piyush-portfolio/
├── index.html            main page (all metadata is in its <head>)
├── css/style.css         all styling
├── js/main.js            animations, project cards, menu
├── assets/
│   ├── hero-photo.jpg    your profile photo (hero)
│   ├── about-photo.jpg   photo in the About section
│   ├── favicon-32.png
│   └── apple-touch-icon.png
├── favicon.svg / favicon.ico
├── preview.png           1200x630 social share image (WhatsApp, LinkedIn etc.)
├── screenshots/          reference screenshots only (not used by the site)
├── vercel.json           Vercel settings
├── package.json          optional (only for `npm start`)
└── .gitignore
```

## 2. Upload to GitHub
1. Go to github.com > **New repository**. Name it `piyush-portfolio`, keep it **Public**.
2. Click **uploading an existing file**, drag in **everything inside the `piyush-portfolio` folder** (keep the folders `css`, `js`, `assets`, `screenshots`).
3. Click **Commit changes**.

## 3. Deploy on Vercel
1. Go to vercel.com > **Add New > Project** and pick your GitHub repo.
2. Leave all settings as they are (Framework: Other, no build command, no output directory).
3. Click **Deploy**. You get a link like `https://something.vercel.app`.

## 4. Update the production URL (IMPORTANT, do this once)
Open `index.html` and replace `https://YOUR-SITE-URL.vercel.app` with your real website address
(no slash at the end). It appears in **5 places**: canonical, og:url, og:image, twitter:image
(the comment in the `<head>` marks them). On GitHub: open `index.html` > pencil icon > Ctrl+F / Find and replace > Commit.
Vercel redeploys automatically.

## 5. Verify the preview image URL
Open `https://YOUR-REAL-SITE/preview.png` in your browser. You must see the preview image.
If you see a 404, the file was not uploaded to the top level of the repo.

WhatsApp previews: WhatsApp generates and caches previews itself, so a preview is not guaranteed
and an old preview can stay for a while. If it looks wrong after fixing the URL, send the link
in a new chat, or try Facebook's Sharing Debugger (developers.facebook.com/tools/debug) to refresh the cache.

## 6. Test the four contact buttons
On your phone, open the live site and tap each one:
- **Call Me** opens the dialer with +91 8787090913
- **Email Me** opens your email app addressed to piyushsinghra40@gmail.com
- **Instagram** opens instagram.com/thakur._piyush07 in a new tab
- **Chat on WhatsApp** (and the green floating button) opens a chat with +91 8787090913

## 7. Update the portfolio later
- Text: edit `index.html`.
- Projects: edit the `P` list at the top of `js/main.js` (title, description, tags, link).
- Photos: replace files in `assets/` keeping the same names.
- Add a YouTube link / resume later: ask for the change or add an `<a>` yourself.
- Always re-upload to GitHub; Vercel updates by itself.
