# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional layout with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js for optimal performance and SEO
- **Animations**: Smooth scrolling and hover effects
- **Sections**:
  - Hero section with introduction
  - About section with skills and experience
  - Projects showcase with live demos and code links
  - Contact section with social links
  - Fixed navigation with smooth scrolling

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📝 Customization

To customize this portfolio for your own use:

1. **Update personal information** in `app/page.tsx`:
   - Replace "Your Name" with your actual name
   - Update the hero section description
   - Modify the about section content
   - Add your real projects
   - Update contact links

2. **Update metadata** in `app/layout.tsx`:
   - Change the title and description
   - Update Open Graph tags

3. **Add your projects**:
   - Replace the example projects with your real work
   - Add project images to the `public` folder
   - Update project links and descriptions

4. **Customize styling**:
   - Modify colors in `app/globals.css`
   - Adjust spacing and layout in components
   - Add custom animations if desired

## 📁 Project Structure

```
my-app/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── public/                  # Static assets
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎨 Sections Overview

- **Navigation**: Fixed header with smooth scroll navigation
- **Hero**: Introduction with call-to-action buttons
- **About**: Skills, technologies, and work experience
- **Projects**: Showcase of your best work with links
- **Contact**: Ways to get in touch with social links
- **Footer**: Simple footer with copyright

## 🚀 Deployment

This portfolio can be easily deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The built static files can be deployed to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your portfolio.
