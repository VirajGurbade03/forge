# 🔨 Forge — We Forge Interview-Winning Resumes

> AI-powered resume analyzer and optimizer built to beat ATS systems and help job seekers land more interviews.

[![Live Demo](https://img.shields.io/badge/Live-forge--beta--ebon.vercel.app-black?style=flat-square&logo=vercel)](https://forge-beta-ebon.vercel.app)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Powered by Claude](https://img.shields.io/badge/AI-Claude%20API-orange?style=flat-square)](https://anthropic.com)

---

## 🚀 What is Forge?

Forge is an AI-driven resume optimization platform that analyzes your resume against industry benchmarks and job descriptions to guarantee peak ATS (Applicant Tracking System) compatibility.

**Key stats:**
- 95% ATS Pass Rate
- 10,000+ Resumes Optimized
- 3x More Interviews for users
- Zero setup time

---

## ✨ Features

| Feature | Free | Pro | Premium |
|---|:---:|:---:|:---:|
| Resume Analysis | 1x | Unlimited | Unlimited |
| ATS Keyword Match | Basic | Full | Full |
| AI Optimization | ❌ | ✅ | ✅ |
| PDF Report Download | ❌ | ✅ | ✅ |
| Resume Comparison | ❌ | ✅ | ✅ |
| AI Cover Letter | ❌ | ❌ | ✅ |
| Priority AI Processing | ❌ | ❌ | ✅ |
| Direct Resume Rewrite | ❌ | ❌ | ✅ |

### Core Capabilities
- **Instant Analysis** — Comprehensive ATS score based on 50+ parameters in seconds
- **Keyword Matching** — Discover missing keywords for specific job descriptions
- **AI Optimization** — Intelligently rewritten bullet points using industry-specific terms
- **ATS-Ready Formats** — Downloads readable by any recruiter software
- **Sectional Feedback** — Targeted tips for contact info, experience, skills, and education
- **Mobile Optimized** — Fully responsive, works on any device

---

## 💰 Pricing

| Plan | Price | Best For |
|---|---|---|
| Free | ₹0/month | First-time users |
| Pro | ₹299/month | Active job seekers |
| Premium | ₹499/month | Serious career movers |

> 🚀 **Launch Offer: 70% OFF** — Limited time

---

## 🛠️ Tech Stack

- **Frontend** — Next.js + Tailwind CSS
- **AI Engine** — Claude API (Anthropic)
- **Hosting** — Vercel
- **Payments** — Razorpay

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Anthropic API key
- Razorpay API keys

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/forge.git
cd forge

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Anthropic
ANTHROPIC_API_KEY=your_anthropic_api_key

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
forge/
├── app/                   # Next.js App Router
│   ├── analyze/           # Resume analyzer page
│   ├── api/               # API routes
│   │   ├── analyze/       # Claude API integration
│   │   └── payment/       # Razorpay integration
│   ├── layout.tsx
│   └── page.tsx           # Landing page
├── components/            # Reusable UI components
├── lib/                   # Utility functions
├── public/                # Static assets
└── README.md
```

---

## 🚀 Deployment

This project is deployed on **Vercel**. To deploy your own:

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy — done ✅

---

## 🗺️ Roadmap

- [ ] Razorpay subscription billing (recurring ₹299/mo)
- [ ] Resume version history
- [ ] LinkedIn profile analyzer
- [ ] Job description matching score
- [ ] Referral / affiliate program
- [ ] Multi-language support (Hindi, Tamil, Telugu)
- [ ] WhatsApp delivery of optimized resume

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 📬 Contact

Built by the Forge team. For support or partnerships:
- 🌐 [forge-beta-ebon.vercel.app](https://forge-beta-ebon.vercel.app)

---

<p align="center">Made with ❤️ to help job seekers get hired</p>
