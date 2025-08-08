# Samuel Ogunware - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript. Features a beautiful dark theme with smooth animations and interactive components.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Animated sections, modals, and forms
- **Email Integration**: Contact form with Resend email service
- **Project Showcase**: Detailed case studies and project presentations
- **Download Requests**: Secure dissertation request system
- **Performance Optimized**: Fast loading with Next.js optimizations

## 📋 Projects Featured

1. **Resume Scanner** - React + Node.js web application for resume analysis
2. **AI Train Chatbot** - Python-based chatbot for UK train ticket optimization
3. **Cryptocurrency Research** - First-Class dissertation on blockchain optimization

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, Lucide React Icons
- **Email Service**: Resend
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

   **To get a Resend API key:**
   1. Sign up at [resend.com](https://resend.com)
   2. Create a new API key
   3. Replace `your_resend_api_key_here` with your actual API key

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The portfolio includes two email functionalities:

### Contact Form
- Sends messages directly to your email
- Uses Resend for automated delivery
- Falls back to mailto if Resend is unavailable

### Dissertation Request
- Secure request system for academic documents
- Automated email notifications
- Professional email templates

### Email Setup Steps

1. **Get Resend API Key**
   - Sign up at [resend.com](https://resend.com)
   - Create a new API key
   - Add to `.env.local` file

2. **Update Email Addresses**
   - Open `app/api/contact/route.ts`
   - Change `samuelogunware@gmail.com` to your email
   - Open `app/api/dissertation-request/route.ts`
   - Change `samuelogunware@gmail.com` to your email

3. **Test Email Functionality**
   - Fill out the contact form
   - Request the dissertation
   - Check your email for notifications

## 🎨 Customization

### Colors and Theme
- Primary color: `#007BFF` (blue)
- Background: `#1A1A1A` (dark)
- Text: `#F5F5F5` (light)

### Personal Information
Update the following files with your information:
- `components/hero-section.tsx` - Name, title, description
- `components/about-section.tsx` - About content
- `components/contact-section.tsx` - Contact links
- `components/projects-section.tsx` - Project details
- `components/detailed-projects-section.tsx` - Case studies

### Images
- Profile photo: `public/images/samuel-profile.png`
- Project images: `public/images/` directory
- Replace with your own images

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form API
│   │   └── dissertation-request/ # Dissertation request API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   ├── projects-section.tsx # Projects showcase
│   ├── contact-section.tsx # Contact form
│   └── ...               # Other sections
├── public/               # Static assets
│   └── images/           # Images and icons
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── styles/               # Additional styles
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically

### Environment Variables for Production

Add these to your Vercel environment variables:
```
RESEND_API_KEY=your_resend_api_key_here
```

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Projects

1. **Update Projects Section**
   - Edit `components/projects-section.tsx`
   - Add project to `projects` array

2. **Add Case Study**
   - Edit `components/detailed-projects-section.tsx`
   - Add project to `detailedProjects` array

3. **Add Project Image**
   - Place image in `public/images/`
   - Update image path in component

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js
- **Images**: Optimized and responsive

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help:
- Email: samuelogunware@gmail.com
- LinkedIn: [samuel-ogunware](https://www.linkedin.com/in/samuel-ogunware-74b6b1355)
- GitHub: [samuelogunware](https://github.com/samuelogunware)

---

**Built with ❤️ using Next.js, React, and TypeScript** 