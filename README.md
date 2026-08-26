# Abdul Rahman — Portfolio

Personal portfolio website showcasing my software engineering experience,
backend-focused projects, technical skills, and professional background.

Built with Next.js, React, TypeScript, and Tailwind CSS with a responsive,
accessibility-focused design.

## 🌐 Live Website

https://portfolio.icqs.fyi/

## ✨ Features

- Responsive dark-themed portfolio
- Mobile-friendly navigation
- Downloadable resume
- Featured projects with live demos and GitHub links
- Core technology stack
- Professional experience and certifications
- Formspree-powered contact form
- GitHub, LinkedIn, and email links
- SEO metadata and Open Graph social sharing
- Sitemap and robots configuration
- Responsive and accessible UI

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Libraries & Services

- Lucide React
- React Icons
- Formspree

### Technologies Showcased

- Python
- FastAPI
- PostgreSQL
- MongoDB
- SQLAlchemy
- Pydantic
- Docker
- GitHub Actions
- Pytest
- Pandas
- Angular
- TypeScript
- Git
- Linux
- AWS

## 🚀 Featured Projects

### FocusSprint

Full-stack task management platform built with Angular, FastAPI, and
PostgreSQL.

**Highlights:**

- JWT authentication
- Role-based access control
- 17+ RESTful API endpoints
- 27+ automated tests
- Dockerized deployment
- GitHub Actions CI/CD

**Live:** https://focussprint.in/

**Source:** https://github.com/abdulrahmanm-in/focussprint-fastapi

### RoleLens

Job-market ETL and analytics platform built with FastAPI, Pandas,
APScheduler, and MongoDB.

**Highlights:**

- Job listing data ingestion
- Pandas ETL pipelines
- Scheduled data processing
- MongoDB Atlas
- Dockerized services
- Automated testing

**API Docs:**  
https://external-lusa-rahmandev-d415ed9a.koyeb.app/docs

## 📄 Resume

The portfolio includes a downloadable resume.

Place the resume at:

```text
public/Abdul_Rahman_Resume.pdf
```

## 📬 Contact

The portfolio includes a contact form powered by Formspree, so no custom
backend is required for contact submissions.

### Formspree Configuration

The Formspree form ID is configured through an environment variable so the
repository can be reused without changing the source code.

For local development, create:

```text
.env.local
```

Add:

```env
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

Make sure `.env.local` is included in `.gitignore` and is never committed
to the repository.

For Netlify, add the following environment variable under your site's
environment variables:

```text
NEXT_PUBLIC_FORMSPREE_FORM_ID
```
Set its value to your own Formspree form ID.


You can also connect with me through:

- GitHub: https://github.com/abdulrahmanm-in
- LinkedIn: https://www.linkedin.com/in/abdul-rahman-m-660158206
- Email: indmabdulrahman@gmail.com

## 🚀 Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
cd <your-repository-name>
```

Install dependencies:

```bash
npm install
```

Create `.env.local` and add your Formspree form ID:

```env
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 🌍 Deployment

The portfolio is deployed using **Netlify** with the custom domain managed
through **Cloudflare**.

The application can also be deployed to other Next.js-compatible hosting
platforms.

Before deploying, configure:

```text
NEXT_PUBLIC_FORMSPREE_FORM_ID
```

in the hosting provider's environment variables.

## 📁 Assets

Static assets are stored in the `public` directory, including:

- Resume
- Favicon
- Project icons
- Open Graph image

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE)
file for details.

The MIT License applies to the project source code. Personal information,
resume content, branding, profile links, project descriptions, and personal
assets should not be reused as someone else's.

---

Built by **Abdul Rahman**
