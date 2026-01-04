# Nitish Kumar - Fullstack Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features dark/light theme, smooth animations, and a fully responsive design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between themes with persistent preference using next-themes
- **Smooth Animations**: Framer Motion for engaging animations and transitions
- **Interactive Elements**: Hover effects, typing animation, and smooth scrolling
- **Contact Form**: Functional contact form with validation and loading states
- **Modern UI/UX**: Clean, professional design with gradient accents
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Meta tags, Open Graph, and Twitter Card support

## 🛠️ Technologies Used

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **next-themes**: Theme management

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills section
│   │   ├── Projects.tsx     # Projects section
│   │   ├── Experience.tsx   # Experience section
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Footer.tsx       # Footer
│   │   ├── ThemeProvider.tsx # Theme provider
│   │   └── ThemeToggle.tsx  # Theme toggle button
│   ├── data/                # Data files
│   │   └── personal.ts      # Personal information
│   └── types/               # TypeScript types
│       └── index.ts         # Type definitions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Guide

### Personal Information
Update the following files with your information:

1. **`src/data/personal.ts`**: Update all personal information, projects, experience, and skills
2. **`src/app/layout.tsx`**: Update metadata (title, description, social media links)
3. **`src/components/`**: Customize individual components as needed

### Styling Customization

1. **Colors**: Update the color palette in `tailwind.config.ts`
2. **Fonts**: Modify font imports in `src/app/layout.tsx`
3. **Animations**: Adjust Framer Motion animations in components

### Adding Your Photo

1. Add your photo to the `public/` folder
2. Update the profile image in `src/components/Hero.tsx`:
   ```tsx
   <img 
     src="/your-photo.jpg" 
     alt="Your Name" 
     className="w-32 h-32 rounded-full object-cover"
   />
   ```

### Social Media Links

Update social media links in `src/data/personal.ts`:
```typescript
socialLinks: [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github"
  },
  // ... other links
]
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Next.js Optimizations**: Automatic code splitting, image optimization
- **Tailwind CSS**: Utility-first approach for minimal CSS
- **Framer Motion**: Optimized animations with reduced motion support
- **TypeScript**: Compile-time error checking
- **ESLint**: Code quality and consistency

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS Amplify**: Connect your repository
- **Railway**: Deploy directly from GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back with the community!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: knitish899@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Happy Coding! 🚀**

*Built with ❤️ by Nitish Kumar using Next.js & Tailwind CSS*