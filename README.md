# 🚀 Jyot Harshadkumar Bhavsar - Developer Portfolio

A modern, responsive portfolio website showcasing my skills as a Full Stack Developer and Cybersecurity Enthusiast. Built with vanilla HTML, CSS, and JavaScript featuring a sleek cyberpunk design with neon effects and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **🎨 Modern Design**: Cyberpunk-inspired theme with neon gradients and glassmorphism effects
- **📱 Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **⚡ Smooth Animations**: CSS animations and hover effects throughout
- **📧 Contact Form**: Functional email form using EmailJS
- **🔗 GitHub Integration**: Dynamically fetches and displays starred repositories
- **🚀 Fast Loading**: Optimized performance with minimal dependencies
- **♿ Accessible**: Semantic HTML and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid & Flexbox
- **Icons**: Font Awesome 6
- **Email Service**: EmailJS
- **API**: GitHub REST API
- **Deployment**: Ready for Netlify, Vercel, or GitHub Pages

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── favicon.svg         # Custom SVG favicon
├── favicon.png         # PNG fallback favicon
└── README.md           # Project documentation
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jybhavsar12/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or use a local server
   python -m http.server 8000
   ```

3. **Customize**
   - Update personal information in `index.html`
   - Modify colors and styles in `styles.css`
   - Configure EmailJS credentials in `script.js`

## ⚙️ Configuration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Add your email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update credentials in `script.js`:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...});
   ```

### GitHub Integration
The portfolio automatically fetches your starred repositories. Update the username in `script.js`:
```javascript
const GITHUB_USERNAME = 'YourGitHubUsername';
```

## 🎨 Customization

### Colors
The main color scheme uses CSS custom properties:
```css
:root {
  --primary-cyan: #00f5ff;
  --primary-magenta: #ff00ff;
  --background-dark: #0a0a0a;
  --background-secondary: #111;
}
```

### Sections
- **Hero**: Introduction and call-to-action
- **About**: Skills, technologies, and statistics
- **Projects**: Dynamically loaded GitHub repositories
- **Contact**: Contact form and social links

## 📱 Responsive Design

- **Desktop**: Full layout with sidebar navigation
- **Tablet**: Adapted grid layouts
- **Mobile**: Stacked layout with hamburger menu

## 🚀 Deployment

### Netlify (Recommended)
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Get instant deployment with custom URL

### GitHub Pages
1. Push code to GitHub repository
2. Enable Pages in repository settings
3. Deploy from main branch

### Vercel
1. Connect GitHub repository to [Vercel](https://vercel.com)
2. Auto-deploy on every push

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Load Time**: < 2 seconds
- **Bundle Size**: < 100KB total
- **No Framework Dependencies**: Pure vanilla JavaScript

## 🔧 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Jybhavsar12/portfolio/issues).

## 📞 Contact

- **Email**: [Jyotbhavsar2003@gmail.com](mailto:Jyotbhavsar2003@gmail.com)
- **LinkedIn**: [View Profile](https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profilee)
- **GitHub**: [@Jybhavsar12](https://github.com/Jybhavsar12)

## 🙏 Acknowledgments

- Font Awesome for icons
- EmailJS for email functionality
- GitHub API for repository data
- Inspiration from modern web design trends

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Jyot Harshadkumar Bhavsar](https://github.com/Jybhavsar12)