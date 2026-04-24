# Arnold Feeds & Speeds — PWA

Shop reference app for machining feeds, speeds, drills, and form taps.
Installable on iPhone as a home screen app.

---

## First-Time Setup (one time, ~20 minutes)

### Step 1 — Create a GitHub account
1. Go to **github.com** and sign up for a free account
2. Click **New repository** (the green button)
3. Name it `arnold-feeds-speeds`
4. Leave it **Public** (required for free Vercel hosting)
5. Click **Create repository**

### Step 2 — Upload the project files
1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL files from this folder into the upload area
   - Make sure to include the `src/` folder and `public/` folder
3. Click **Commit changes**

### Step 3 — Create a Vercel account
1. Go to **vercel.com** and click **Sign Up**
2. Choose **Continue with GitHub** — this links them together
3. Click **Add New Project**
4. Select your `arnold-feeds-speeds` repository
5. Click **Deploy** — Vercel auto-detects Vite, no config needed
6. In ~30 seconds you'll get a live URL like `arnold-feeds-speeds.vercel.app`

### Step 4 — Install on your iPhone
1. Open the Vercel URL in **Safari** on your iPhone
2. Tap the **Share button** (box with arrow pointing up)
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add** — it now lives on your home screen like a real app

---

## Updating the App (ongoing)

When you need to change data or add features:

1. Send the updated `App.jsx` file (or describe the change to Claude)
2. On GitHub, navigate to `src/App.jsx`
3. Click the **pencil icon** (Edit file) in the top right
4. Paste in the new content
5. Click **Commit changes**

Vercel automatically detects the change and redeploys in ~30 seconds.
Everyone who has the app installed gets the update next time they open it.

---

## Project Structure

```
arnold-feeds-speeds/
├── index.html          ← App entry point (don't edit)
├── package.json        ← Dependencies (don't edit)
├── vite.config.js      ← Build config with PWA settings (don't edit)
├── public/
│   ├── favicon.svg     ← Browser tab icon
│   ├── pwa-192.png     ← App icon (small)
│   ├── pwa-512.png     ← App icon (large)
│   └── apple-touch-icon.png  ← iPhone home screen icon
└── src/
    ├── main.jsx        ← React bootstrap (don't edit)
    └── App.jsx         ← ⭐ ALL DATA AND UI LIVES HERE
```

**The only file you will ever need to update is `src/App.jsx`.**

---

## Replacing the App Icon

To use the Arnold logo as the home screen icon, replace the PNG files
in the `public/` folder with proper sized versions:
- `pwa-192.png` — 192×192 pixels
- `pwa-512.png` — 512×512 pixels  
- `apple-touch-icon.png` — 180×180 pixels
