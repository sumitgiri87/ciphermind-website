# CipherMind — ciphermind.ca

> Proactive cybersecurity for AI systems and post-quantum infrastructure.

## Overview

This is the official website for **CipherMind**, a cybersecurity firm specializing in AI security, post-quantum cryptography, and security audits. Built with Next.js 15 (App Router) and Tailwind CSS, deployed on Vercel.

**Live site:** [ciphermind.ca](https://ciphermind.ca)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Fonts | Space Mono + DM Sans (Google Fonts) |
| Contact Form | Formspree |
| Deployment | Vercel |
| DNS | Hostinger → Vercel |

---

## Project Structure

```
/app
  /components
    Navbar.tsx        # Fixed top nav, mobile responsive
    Footer.tsx        # Site footer
  /sections
    HeroSection.tsx   # Landing hero, two-column layout
    ServicesSection.tsx  # 3 service cards
    AboutSection.tsx  # Company principles
    ContactSection.tsx   # Formspree contact form
  globals.css         # Design tokens, Tailwind base
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Single page — composes all sections
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file in the project root (never commit this):

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

Also add this variable in **Vercel → Project → Settings → Environment Variables** for the live site.

---

## Deployment

Deployment is automatic via Vercel on every push to `main`:

```
git push origin main
# → Vercel auto-deploys to ciphermind.ca
```

Manual redeploy if needed:
```bash
git commit --allow-empty -m "chore: trigger redeploy"
git push
```

---

## DNS Configuration (Hostinger)

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

---

## Services Covered

- **AI Security & Threat Detection** — NIST AI RMF, OWASP LLM Top 10, pipeline threat modeling
- **Cryptography & Post-Quantum Security** — CBOM generation, NIST FIPS 203/204/205 migration
- **Security Audits & Consulting** — architecture review, risk quantification, remediation

---

## Future Roadmap

- Blog / Insights section
- AI-powered security tools
- Client dashboards
- API integrations
- Lead capture / CRM

---

## Contact

- **info@ciphermind.ca**
- [linkedin.com/company/ciphermind-ca](https://linkedin.com/company/ciphermind-ca)
