# Tri's Portfolio Website

A stunning 6-section portfolio website featuring seamless scrolling, interactive showcases, and AI-powered chatbot integrations.

## 🌟 Features

- **Animated Vortex Background** - Dynamic particle system with spiral motion
- **Seamless Navigation** - Smooth scroll-snap between sections with vertical navigation dots
- **Interactive Project Showcases** - Photo sliders for program skills and design samples
- **AI Chatbot Q&A** - Answer questions about professional background
- **Emotional Drink Generator** - AI-powered personalized drink creation
- **Premium Design** - Glassmorphism effects, gradients, and smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile

## 📂 Project Structure

```
website/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling system
├── script.js           # Main JavaScript functionality
├── vortex.js          # Vortex background animation
├── assets/
│   ├── page3ref/      # Program showcase images
│   ├── page4ref/      # Design sample images
│   ├── drinks/        # Drink generator images
│   └── resumeref.txt  # Resume content for chatbot
└── README.md          # This file
```

## 🚀 Quick Start

1. **Open the website:**
   ```
   Simply open index.html in a modern web browser
   ```

2. **Set up API key for chatbot features:**
   - Open browser console (F12)
   - Run: `CONFIG.CHATBOT_API_KEY = 'your-anthropic-api-key'`

3. **Explore:**
   - Scroll through all 6 sections
   - Click navigation dots to jump between sections
   - Test the project sliders
   - Ask questions in the chatbot
   - Generate your emotional drink!

## 🎨 Sections Overview

### 1. Main Page
- Animated vortex background
- Portfolio title with gradient effect
- Scroll hint animation

### 2. About Me
- Professional summary
- Skill tags (IT Project Management, AI/LLM Integration, etc.)

### 3. Program Skills Showcase
- Music Sheets to MIDI
- MIDI Forger
- MIDI to Autoplay
- Gimmevid

### 4. Design Samples
- Brevvity UI (2025)
- ePharmacy Portal (2021)
- CLO3D patterns (2020)
- AI ImageGen models (2022)

### 5. Ask Me Anything!
- Interactive chatbot Q&A
- Powered by Anthropic Claude API
- Context-aware responses about professional background

### 6. Before You Leave...
- Emotional drink generator
- Random drink image selection
- AI-generated drink details (name, ingredients, description)

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern design system with custom properties
- **Vanilla JavaScript** - No framework dependencies
- **Anthropic Claude API** - AI chatbot integration

## 🎨 Design Features

- **Glassmorphism** - Backdrop blur effects
- **Gradient Text** - Linear gradients for titles
- **Smooth Animations** - CSS transitions and keyframes
- **Responsive Design** - Mobile-first approach
- **Custom Scrollbar** - Styled for chat interface

## 🔑 API Configuration

The chatbot features require an Anthropic API key:

```javascript
// In browser console:
CONFIG.CHATBOT_API_KEY = 'sk-ant-your-api-key-here'
```

**Note:** The API key is stored in memory and needs to be set again after page refresh.

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (modern versions)

## 🎯 Performance

- Smooth 60fps animations
- Optimized particle system
- Efficient rendering with requestAnimationFrame
- Fast load times with no external dependencies (except fonts)

## 📝 Customization

### Change Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --color-primary: #6366f1;
    --color-secondary: #ec4899;
    /* ... more variables */
}
```

### Add More Projects
Edit the project arrays in `script.js`:
```javascript
CONFIG.programProjects = [ /* add projects */ ];
CONFIG.designProjects = [ /* add projects */ ];
```

### Add More Drink Images
Place new images in `assets/drinks/` and update the array in `script.js`:
```javascript
CONFIG.drinkImages = [ /* add image paths */ ];
```

## 📄 License

Personal portfolio project for Tri.

## 🙏 Credits

- **Design & Development** - Created with Antigravity AI
- **Fonts** - Google Fonts (Inter, Playfair Display)
- **AI Integration** - Anthropic Claude API

---

**Enjoy exploring the portfolio! 🚀**
