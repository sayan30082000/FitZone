# FitZone Studio

The FitZone Studio funnel page, rebuilt with **Next.js, React, JavaScript and Tailwind CSS**.

**Live site:** https://fitzone-studio.netlify.app

## What's on the page

- **Hero:** "Transform Your Body, Transform Your Life", a free-trial call to action and rating / classes / members stats
- **Programs:** personal training, group classes, nutrition coaching, strength zone, recovery suite and the member app
- **Reviews:** member testimonials
- **Pricing:** Basic ($49), Premium ($89, most popular) and Elite ($149). Each "Get Started" button picks that plan in the sign-up form and scrolls to it.
- **Free-trial sign-up:** name, email, phone, plan and goal. Submissions go to **Netlify Forms** and show up in the Netlify dashboard under *Forms*, where email notifications can be turned on.
- Sticky navigation with in-page links and a mobile menu, responsive from phone to desktop, keyboard-accessible, and reduced-motion friendly

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router), React 19, JavaScript |
| Styling | Tailwind CSS 4 (colours and fonts defined in `src/app/globals.css`) |
| Fonts | Barlow, Barlow Condensed and Inter via `next/font` |
| Icons | lucide-react |
| Hosting | Netlify (static export, auto-deploys on every push to `main`) |

## Run it locally

```bash
git clone https://github.com/sayan30082000/FitZone-Studio.git
cd FitZone-Studio
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```

In `npm run dev` the sign-up form doesn't send anything. It logs to the browser console instead, because Netlify Forms only exists on the deployed site.

## Project structure

```text
├── netlify.toml               build command + publish folder (out/)
├── next.config.mjs            output: "export" (plain static site)
├── public/__forms.html        form definition Netlify reads at deploy time
└── src/
    ├── app/                   layout (fonts, metadata), page, global styles
    ├── components/            Nav, Hero, Features, Testimonials, Pricing, JoinCTA, Footer
    └── data/content.js        all copy: stats, programs, reviews, plans, goals
```

## Editing

- **Text, prices and plans:** `src/data/content.js`
- **Colours and fonts:** `src/app/globals.css` and `src/app/layout.js`
- **Sign-up fields:** if you add a field to `src/components/JoinCTA.js`, add the same `name` to `public/__forms.html`, otherwise Netlify will drop it.
