# PurrPoint — Landing Page

Marketing site for **PurrPoint**, a Mac-native PDF-to-PPTX converter built for consultants, educators, and AI power users.

**Live:** https://fychu-prog.github.io/landing_page_for_pdfToEdit

---

## What is PurrPoint?

PurrPoint converts PDF files into fully editable `.pptx` presentations — with every text box positioned exactly where it was in the original. Conversion runs 100% locally on your Mac using Apple Vision OCR, so no files leave your machine.

Designed for people who receive AI-generated or scanned PDFs and need to edit them without starting from scratch in PowerPoint.

---

## Tech

Static HTML with no build step.

- **Tailwind CSS** via CDN
- **Vanilla JS** — mobile menu, accordion FAQ, scroll reveal, waitlist form
- **i18n** — `?lang=en` switches to English; default is Traditional Chinese

---

## Local preview

Because `i18n.js` uses `fetch`, open via a local server rather than directly from the filesystem:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

---

## Project structure

```
index.html          Main landing page
privacy.html        Privacy policy
terms.html          Terms of use
translations/
  zh-TW.json        Traditional Chinese strings
  en.json           English strings
  i18n.js           Language switcher
```

---

## Contact

finleycatniplabs@gmail.com
