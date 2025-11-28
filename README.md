
# Jyot Harshadkumar Bhavsar - Professional Portfolio

A modern, responsive portfolio website showcasing expertise in Full Stack Development and Cybersecurity. Built with vanilla HTML, CSS, and JavaScript featuring a contemporary design with smooth animations and optimal performance.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Overview

This portfolio demonstrates proficiency in modern web development technologies and showcases a curated selection of projects. The website features a responsive design optimized for all devices, dynamic content loading, and integrated contact functionality.

## Key Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
- **Performance Optimized**: Fast loading times with minimal dependencies and optimized assets
- **Dynamic Content**: GitHub API integration for real-time project showcase
- **Contact Integration**: Secure email functionality using EmailJS service
- **Modern UI/UX**: Contemporary design with smooth animations and intuitive navigation
- **Accessibility Compliant**: Semantic HTML structure with keyboard navigation support
- **SEO Optimized**: Proper meta tags and structured content for search engine visibility

## Technology Stack

### Frontend
- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with Grid, Flexbox, and custom animations
- **JavaScript (ES6+)**: Modern JavaScript features and API integration

### Services & APIs
- **EmailJS**: Secure email service integration
- **GitHub REST API**: Dynamic repository data fetching
- **Font Awesome**: Professional iconography

### Deployment
- **Vercel**: Production deployment with automatic CI/CD
- **Environment Variables**: Secure credential management

## Project Architecture

```
portfolio/
├── index.html              # Main application entry point
├── styles.css              # Comprehensive styling and animations
├── script.js               # Core JavaScript functionality
├── config.js               # Environment configuration
├── favicon.svg             # Scalable vector favicon
├── favicon.png             # Fallback favicon
├── .env                    # Environment variables (local)
├── .gitignore              # Version control exclusions
└── README.md               # Project documentation
```

## Installation & Setup

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Git for version control
- Text editor or IDE

### Local Development

1. **Clone Repository**
   ```bash
   git clone https://github.com/Jybhavsar12/portfolio.git
   cd portfolio
   ```

2. **Environment Configuration**
   ```bash
   # Create environment file
   cp .env.example .env
   
   # Add your EmailJS credentials
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

3. **Local Server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or simply open index.html in browser
   ```

## Configuration

### EmailJS Integration
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Configure email service provider
3. Create email template
4. Update environment variables with credentials

### GitHub Integration
Update the GitHub username in `script.js` to display your repositories:
```javascript
const GITHUB_USERNAME = 'YourGitHubUsername';
```

### Customization
Modify the CSS custom properties in `styles.css` to adjust the color scheme:
```css
:root {
  --primary-cyan: #00f5ff;
  --primary-magenta: #ff00ff;
  --background-dark: #0a0a0a;
  --background-secondary: #111;
}
```

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to [Vercel](https://vercel.com)
2. Configure environment variables in dashboard
3. Deploy with automatic CI/CD pipeline

### Alternative Platforms
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Direct repository deployment
- **AWS S3**: Static website hosting

## Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 100KB total

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full Support |
| Firefox | 88+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 90+     | ✅ Full Support |

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhancement`)
3. Commit changes (`git commit -m 'Add enhancement'`)
4. Push to branch (`git push origin feature/enhancement`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact Information

**Jyot Harshadkumar Bhavsar**
- **Email**: [Jyotbhavsar2003@gmail.com](mailto:Jyotbhavsar2003@gmail.com)
- **LinkedIn**: [Professional Profile](https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profilee)
- **GitHub**: [@Jybhavsar12](https://github.com/Jybhavsar12)
- **Portfolio**: [Live Demo](https://portfolio-jybhavsar12.vercel.app)

## Acknowledgments

- **EmailJS** for reliable email service integration
- **GitHub API** for dynamic repository data
- **Font Awesome** for comprehensive icon library
- **Vercel** for seamless deployment platform

---

**Professional Portfolio** | **Full Stack Developer** | **Cybersecurity Enthusiast**

*Built with precision and attention to detail*
