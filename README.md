# Gleamer - Premium Cleaning Services Website

A modern, responsive landing page for a premium cleaning services company. This project features a clean design with interactive elements, dark mode support, and a fully functional contact section.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [File Documentation](#file-documentation)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Credits](#credits)
- [License](#license)

## 🔍 Overview

Gleamer is a premium cleaning services website designed to showcase professional residential and commercial cleaning services. The website features a modern, user-friendly interface with interactive elements including:

- Dynamic service carousel
- Sign-in/Sign-up modal
- Services popup
- Dark/Light theme toggle
- Fully functional contact form
- Responsive design for all devices

## ✨ Features

### Core Features
- **Responsive Design**: Optimized for all screen sizes (desktop, tablet, mobile)
- **Dark/Light Mode**: User preference-based theme switching with localStorage persistence
- **Interactive Carousel**: Auto-sliding service showcase with manual controls
- **Modal Dialogs**: 
  - Sign-in/Sign-up modal with form switching
  - Services overview popup
- **Contact Section**: 
  - Contact form with validation
  - Business hours and location information
- **Navigation**: 
  - Sticky navbar with smooth scrolling
  - Mobile hamburger menu
  - Active link highlighting on scroll
- **Forms**: 
  - Quote request form
  - Newsletter subscription
  - Contact form

### Design Elements
- Modern, clean aesthetic with brand colors
- Google Fonts integration (Inter)
- Font Awesome icon library
- Smooth animations and transitions
- Custom CSS variables for easy theming

## 📁 Project Structure

```
gleamer-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # All JavaScript functionality
├── README.md           # Project documentation
│
└── assets/             # (Optional) Image and asset directory
    └── images/         # Place your custom images here
```

## 🚀 Installation

### Option 1: Direct Download
1. Download all three files (`index.html`, `styles.css`, `script.js`)
2. Place them in the same directory
3. Open `index.html` in your browser

### Option 2: Clone Repository
```bash
git clone https://github.com/yourusername/gleamer-website.git
cd gleamer-website
```

### Option 3: Using with a Server
For local development with live reload:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

## 💻 Usage

### Basic Usage
Simply open `index.html` in any modern web browser. All files are linked locally, so no internet connection is required after the initial load (except for Google Fonts and Font Awesome CDN).

### File Dependencies
The HTML file expects:
- `styles.css` in the same directory
- `script.js` in the same directory

### CDN Dependencies
- Google Fonts (Inter font family)
- Font Awesome 6.5.0 (icon library)

## 📄 File Documentation

### index.html
The main HTML file containing the complete website structure:

**Sections:**
- Top header (contact info, social links, theme toggle)
- Navigation bar (logo, links, CTA buttons)
- Hero section (headline, CTA, quote form)
- Announcement bar (scrolling promotions)
- Services carousel (featured services)
- Highlights (about section)
- Why choose us (benefits grid)
- Testimonials (customer feedback)
- Pricing (service packages)
- Impact banner (statistics)
- Contact section (form and contact details)
- Footer (brand info, links, newsletter)

### styles.css
Complete styling file with:

**CSS Architecture:**
- CSS Variables for theming (`:root` and `.dark`)
- Component-based styling
- Responsive breakpoints
- Custom animations

**Key Style Groups:**
- Global reset and base styles
- Component styles (buttons, badges, cards)
- Layout styles (grid, flexbox)
- Section-specific styles
- Dark mode overrides
- Responsive media queries

### script.js
JavaScript functionality including:

**Features:**
- Mobile navigation toggle
- Dark mode toggle with localStorage
- Modal management (sign-in/sign-up)
- Services popup control
- Carousel with auto-play
- Form submissions with feedback
- Smooth scrolling
- Active nav link tracking

## 🎨 Customization

### Colors
Edit CSS variables in the `:root` selector in `styles.css`:

```css
:root {
  --primary: #0F766E;        /* Main brand color */
  --primary-dark: #0A5C55;   /* Darker variant */
  --secondary: #14B8A6;      /* Accent color */
  --accent: #F59E0B;         /* Highlight color */
  /* ... other variables */
}
```

### Typography
Change the font family in CSS variables:
```css
:root {
  --font-family: 'Inter', -apple-system, system-ui, sans-serif;
}
```

### Content
Update text content directly in `index.html`. Key areas:
- Company name and tagline
- Service descriptions
- Pricing information
- Contact details
- Testimonials

### Images
Replace Unsplash URLs in `index.html` with your own images:
- Hero background: `.hero-bg` background-image
- Service cards: `img` src attributes in carousel
- Testimonials: `img` src attributes
- Highlights image: `.highlights-image img`

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 60+     | ✅ Full |
| Firefox | 55+     | ✅ Full |
| Safari  | 12+     | ✅ Full |
| Edge    | 79+     | ✅ Full |
| Opera   | 47+     | ✅ Full |
| IE      | 11      | ❌ Not supported |

## 🙏 Credits

### Resources Used
- **Google Fonts**: [Inter](https://fonts.google.com/specimen/Inter)
- **Font Awesome**: [Icons](https://fontawesome.com)
- **Unsplash**: [Stock Photos](https://unsplash.com)
- **Design Inspiration**: Modern SaaS and service landing pages

### Developers
- Initial development and design: [Festus k.]

### Terms of Use
- ❌ Not for resale or redistribution as a template/product


### Guidelines
- Follow the existing code style
- Test your changes across different browsers
- Update documentation as needed
- Keep commits focused and descriptive

## 📞 Support

For support, questions, or suggestions:
- 📧 Email: jubileefestus@gmail.com
- 📖 Documentation: Refer to this README

## 🚀 Future Enhancements

Planned features for future releases:
- [ ] Backend integration for form submissions
- [ ] User authentication system
- [ ] Online booking system
- [ ] Service pricing calculator
- [ ] Customer review system
- [ ] Multi-language support
- [ ] Performance optimization (lazy loading, image optimization)

---

**Built with ❤️ for Gleamer - Premium Cleaning Services**
