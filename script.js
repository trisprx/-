// ===== Configuration =====
const CONFIG = {
    // Project data
    programProjects: [
        {
            title: 'NGEMR (Next Generation Electronic Medical Record)',
            images: ['assets/page3ref/ngemrlogo.jpg', 'assets/page3ref/ngemr2.jpg', 'assets/page3ref/ngemr3.jpg'],
            description: "Singapore's nationwide $1.5B project to unify patient records across public healthcare clusters.\nLarge scale project supporting over Singapore's 6+ million population. \nIntegration with other 3rd party systems eg. NBS, NHIPS, Imaging softwares.\nSupported Implementation and operational rollout, Assisted in system configuration, testing, validation, user support, 3rd party integrations, AI related system reviews and workflow improvisations"
        },
        {
            title: 'NHG Health (Mobile App)',
            images: ['assets/page3ref/healthapp.jpg'],
            description: 'Mobile app brought to you by NHG Health as a digital tool providing various services, educational materials and clinical programmes to support a healthier lifestyle.\nSupported end-to-end RFP process, prototyping of UI/UX interfaces and functions, API Integration, requirements gathering, project management and coordination of multiple stakeholders'
        }
    ],

    designProjects: [
        {
            title: 'Pinkbook',
            year: 2026,
            images: ['assets/page4ref/page4pinkbook.jpg'],
            description: 'An album import / catalogue application built on SQL database and PIL.\nMultilanguage support in Chinese, English, Japanese.\nIncludes automated steps to capture screen and retrieve code using image recognition OpenCV, pyautogui.\nSolves the problem of managing, cataloguing, and sharing screenshots by combining a rich image gallery with automation.'
        },
        {
            title: 'MIDI to Autoplay',
            year: 2025,
            images: ['assets/page4ref/page3midiplay.jpg'],
            description: 'An application that reads MIDI files and automatically triggers specific keyboard keys to match the notes and rhythm. Plays 48–83 MIDI notes, converts sharps/flats to naturals, implements custom logic to fit keys within 3-octave range. Includes customizable key bindings and wait time, displays pressed key, and counts in-tune vs out-of-tune notes. Created to autoplay music in application.'
        },
        {
            title: 'CLO3D patterns',
            year: 2020,
            images: ['assets/page4ref/page4marvelous1.jpg', 'assets/page4ref/page4marvelous2.jpg'],
            description: 'Clothing pattern designs in CLO3D / Marvelous Designer. Rendered in both native application or Blender for more complex scene renders.'
        },
        {
            title: 'AI ImageGen models',
            year: 2022,
            images: ['assets/page4ref/page4sd2.jpg'],
            description: 'Trained AI Image generation model (Stable diffusion). Published on multiple image generation model sharing platforms with more than 30,000 runs. Aimed for a 2.5D style with both the details of real-scenes but also drawing like.'
        },
        {
            title: 'Other small projects',
            year: 2025,
            images: ['assets/page4ref/combi.jpg'],
            description: 'Other misc projects sample:\n\nHTML to MP4 format converter (headless)\nPinkbook gallery click in details (placeholder!)\nMIDI editor (MIDI editor interface - Tablet/Web)\nJianpu (AI Image recognition with Gemini Flash)'
        }
    ],

    drinkImages: [
        'assets/drinks/1.png',
        'assets/drinks/2.png',
        'assets/drinks/3.png',
        'assets/drinks/4.png',
        'assets/drinks/5.png',
        'assets/drinks/6.png',
        'assets/drinks/7.png',
        'assets/drinks/8、.png'
    ],

    predefinedDrinks: {
        happy: [
            {
                name: "Sunshine Burst",
                ingredients: ["Citrus", "Mango", "Sparkling Water", "Mint Sprig"],
                description: "A bright and bubbly mix that dances on your taste buds, matching your radiant mood. The vibrant blend of ripe mangoes and zesty citrus instantly lifts your spirit to new heights, while the effervescent sparkling water provides a refreshing finish that keeps the good times rolling."
            },
            {
                name: "Golden Hour Fizz",
                ingredients: ["Peach Nectar", "Ginger Ale", "Lemon Juice", "Edible Gold Flakes"],
                description: "This effervescent creation captures the warmth and joy of a perfect summer evening. The juicy sweetness of peach nectar perfectly complements the spice of ginger ale, creating an uplifting symphony of flavors designed to mirror your inner happiness."
            },
            {
                name: "Jubilee Punch",
                ingredients: ["Pineapple Juice", "Coconut Water", "Grenadine", "Cherry"],
                description: "A tropical celebration in a glass that immediately transports you to paradise! Let the bright, sunny flavors of pineapple and coconut water harmonize perfectly to extend your joyous mood and fill your day with sweet, lingering bliss."
            },
            {
                name: "Berry Delight Spritz",
                ingredients: ["Mixed Berries", "Lemonade", "Club Soda", "A Slice of Lime"],
                description: "Bursting with the joyful essence of freshly picked summer berries, this refreshing delight sparkles with an infectious energy. It's a crisp, fruity concoction that serves as a playful toast to all the fantastic things happening in your life right now."
            },
            {
                name: "Euphoria Nectar",
                ingredients: ["Passionfruit", "Orange Juice", "Vanilla Syrup", "Ice"],
                description: "Indulge in an exotic blend of tart passionfruit and smooth, sweet vanilla that creates a cascade of wonderful flavors. Every sip of this delightful nectar feels like a lively dance party for your senses, celebrating the sheer joy of living."
            }
        ],
        sad: [
            {
                name: "Comfort Cocoa",
                ingredients: ["Hot Chocolate", "Marshmallow", "Cinnamon", "A dash of Nutmeg"],
                description: "A warm, soothing hug in a mug to wrap you in comfort and gently lift your spirits. The rich, velvety chocolate and melting marshmallows bring a wave of nostalgic warmth, reminding you that it's perfectly okay to take a moment and just breathe."
            },
            {
                name: "Velvet Melancholy",
                ingredients: ["Earl Grey Tea", "Steamed Milk", "Lavender Syrup", "Vanilla"],
                description: "An elegant, comforting classic crafted to slowly melt away the blues. The gentle bergamot notes of the tea meld harmoniously with soothing lavender and warm milk, offering you a quiet, peaceful respite when the world feels too loud."
            },
            {
                name: "Gentle Embrace",
                ingredients: ["Chamomile Tea", "Honey", "Lemon Slice", "Ginger Slice"],
                description: "This tender, golden elixir is formulated to warm you from the inside out. With the delicate, calming properties of chamomile and the soothing touch of honey, it acts as a soft blanket for your soul on a difficult day."
            },
            {
                name: "Warm Hug Cider",
                ingredients: ["Apple Cider", "Cinnamon Stick", "Cloves", "Star Anise"],
                description: "A deeply comforting spiced beverage that brings back fond memories of cozy autumn evenings. The rich, aromatic spices gently elevate your mood, providing a reassuring sense of grounded peace and a gentle nudge toward brighter days."
            },
            {
                name: "Solace Sweetness",
                ingredients: ["Warm Vanilla Milk", "Caramel Drizzle", "Pinch of Sea Salt"],
                description: "A simple, uncomplicated drink designed for days when everything else feels overwhelming. The creamy richness of warm milk combined with indulgent sweet caramel provides a quiet moment of profound, simple comfort."
            }
        ],
        stressed: [
            {
                name: "Zen Garden Tea",
                ingredients: ["Chamomile", "Lavender", "Honey"],
                description: "A calming botanical blend designed to quiet the mind and melt away tension. Allow the fragrant floral notes to guide you into a state of serene tranquility, helping your shoulders drop away from your ears with every slow, mindful sip."
            },
            {
                name: "Tranquility Tonic",
                ingredients: ["Green Tea", "Cucumber Slices", "Mint", "Aloe Vera Juice"],
                description: "A profoundly refreshing, crisp beverage that clears the mental fog and washes away anxiety. It is carefully infused with cooling cucumber and refreshing mint to hit the reset button on a chaotic, overwhelming day."
            },
            {
                name: "The Decompress",
                ingredients: ["Tart Cherry Juice", "Magnesium Powder", "Sparkling Water"],
                description: "A relaxing, fizzy concoction specifically crafted to help you unwind and let go of mounting pressures. It actively works to ease tense muscles and slow down racing thoughts, allowing you to gradually return to a calmer baseline."
            },
            {
                name: "Breathe Deep Elixir",
                ingredients: ["Peppermint Tea", "Lemon Balm", "A drop of CBD Oil (optional)"],
                description: "This highly aromatic, cooling brew acts as an instant breath of fresh air for your worried mind. It encourages taking deep, grounding breaths, gently carrying away the heavy burden of your stressful responsibilities."
            },
            {
                name: "Serenity Smoothie",
                ingredients: ["Blueberries", "Almond Milk", "Ashwagandha", "Banana"],
                description: "A nutrient-dense, restorative blend full of calming adaptogens to fortify your overwhelmed nervous system. It's a deliciously thick, creamy escape that gently recharges your inner batteries and restores your mental equilibrium."
            }
        ],
        creative: [
            {
                name: "Brainstorm Elixir",
                ingredients: ["Matcha", "Mint", "Lemon"],
                description: "An invigorating emerald potion that sparks imagination and brings sharp focus to your ideas. The clean, sustained energy from the matcha combined with refreshing mint clears the cobwebs and prepares your mind for its next great masterpiece."
            },
            {
                name: "The Muse's Kiss",
                ingredients: ["Espresso Shot", "Dark Chocolate", "Chili Powder", "Oat Milk"],
                description: "A bold, slightly spicy concoction that awakens the senses and ignites a fiery passion for your artistic endeavors. The sharp kick of espresso and hint of chili completely shake up your routine and push you out of any lingering creative rut."
            },
            {
                name: "Dreamweaver Delight",
                ingredients: ["Butterfly Pea Tea", "Lemon Juice", "Rosemary Sprig", "Agave"],
                description: "A magically color-changing beverage that shifts from deep blue to vibrant purple right before your eyes! Its whimsical appearance and earthy, herbaceous flavor are specifically designed to inspire out-of-the-box, unconventional thinking."
            },
            {
                name: "Liquid Inspiration",
                ingredients: ["Kombucha", "Fresh Ginger", "Pomegranate Seeds", "Lime"],
                description: "A tangy, probiotic-rich spark plug for your brain that constantly fizzes with untapped potential. The lively carbonation and sharp ginger bite will immediately jumpstart your cognitive engines and get those brilliant creative juices flowing."
            },
            {
                name: "Visionary Vortex",
                ingredients: ["Cold Brew Coffee", "Coconut Cream", "Cinnamon", "Vanilla Extract"],
                description: "A deeply complex, smooth blend that fuels endurance for those long, intense creative sessions. The rich, luxurious texture and deep coffee notes provide the exact kind of sustained motivation needed to bring your boldest visions to life."
            }
        ]
    }
};

// ===== Navigation Dots =====
class NavigationDots {
    constructor() {
        this.dots = document.querySelectorAll('.nav-dot');
        this.sections = document.querySelectorAll('.section');
        this.currentSection = 0;

        this.init();
    }

    init() {
        // Click handlers
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.scrollToSection(index));
        });

        // Scroll detection
        window.addEventListener('scroll', () => this.updateActiveSection());

        // Initial update
        this.updateActiveSection();
    }

    scrollToSection(index) {
        this.sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    updateActiveSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        this.sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                this.currentSection = index;
            }
        });

        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSection);
        });
    }
}

// ===== Slider =====
class Slider {
    constructor(sliderId, projects, hasYear = false) {
        this.container = document.getElementById(sliderId);
        this.projects = projects;
        this.hasYear = hasYear;
        this.currentIndex = 0;
        this.currentImageIndex = 0;

        this.init();
    }

    init() {
        this.render();
        this.setupIndicators();
    }

    render() {
        this.container.innerHTML = '';
        let slideIndex = 0;

        // Create separate slides for each image
        this.projects.forEach((project) => {
            project.images.forEach((imageSrc, imageIndex) => {
                const slide = document.createElement('div');
                slide.className = `slide ${slideIndex === 0 ? 'active' : ''}`;

                const slideContent = document.createElement('div');
                slideContent.className = 'slide-content';

                // LEFT COLUMN - Image with navigation buttons inside
                const slideLeft = document.createElement('div');
                slideLeft.className = 'slide-left';

                // Image container
                const imageContainer = document.createElement('div');
                imageContainer.className = 'slide-image-container';

                const img = document.createElement('img');
                img.className = 'slide-image';
                img.src = imageSrc;
                img.alt = `${project.title} ${imageIndex + 1}`;

                imageContainer.appendChild(img);

                // Navigation buttons INSIDE the image container
                const prevBtn = document.createElement('button');
                prevBtn.className = 'slider-btn prev';
                prevBtn.setAttribute('aria-label', 'Previous image');
                prevBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>`;
                prevBtn.addEventListener('click', () => this.prev());

                const nextBtn = document.createElement('button');
                nextBtn.className = 'slider-btn next';
                nextBtn.setAttribute('aria-label', 'Next image');
                nextBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`;
                nextBtn.addEventListener('click', () => this.next());

                imageContainer.appendChild(prevBtn);
                imageContainer.appendChild(nextBtn);

                slideLeft.appendChild(imageContainer);
                slideContent.appendChild(slideLeft);

                // RIGHT COLUMN - Year badge, Title, Description
                const slideRight = document.createElement('div');
                slideRight.className = 'slide-right';

                // Add year badge if applicable (top right of right column)
                if (this.hasYear && project.year) {
                    const yearBadge = document.createElement('div');
                    yearBadge.className = 'project-year';
                    yearBadge.textContent = project.year;
                    slideRight.appendChild(yearBadge);
                }

                // Title
                const title = document.createElement('h3');
                title.className = 'slide-title';
                title.textContent = project.title;
                slideRight.appendChild(title);

                // Description
                const description = document.createElement('p');
                description.className = 'slide-description';
                description.innerHTML = project.description.replace(/\n/g, '<br>');
                slideRight.appendChild(description);

                slideContent.appendChild(slideRight);

                slide.appendChild(slideContent);
                this.container.appendChild(slide);

                slideIndex++;
            });
        });
    }

    setupIndicators() {
        const indicatorsContainer = this.container.parentElement.parentElement.querySelector('.slider-indicators');
        indicatorsContainer.innerHTML = '';

        // Count total number of slides (images)
        const totalSlides = this.container.querySelectorAll('.slide').length;

        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `indicator ${i === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goTo(i));
            indicatorsContainer.appendChild(indicator);
        }
    }

    prev() {
        this.goTo(this.currentIndex - 1);
    }

    next() {
        this.goTo(this.currentIndex + 1);
    }

    goTo(index) {
        const slides = this.container.querySelectorAll('.slide');
        const totalSlides = slides.length;

        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        const indicators = this.container.parentElement.parentElement.querySelectorAll('.indicator');

        slides[this.currentIndex].classList.remove('active');
        indicators[this.currentIndex].classList.remove('active');

        this.currentIndex = index;

        slides[this.currentIndex].classList.add('active');
        indicators[this.currentIndex].classList.add('active');
    }
}

// ===== Drink Generator =====
class DrinkGenerator {
    constructor() {
        this.buttons = document.querySelectorAll('.emotion-btn');
        this.resultContainer = document.getElementById('drink-result');
        this.drinkImage = document.getElementById('drink-image');
        this.drinkName = document.getElementById('drink-name');
        this.drinkIngredients = document.getElementById('drink-ingredients');
        this.drinkDescription = document.getElementById('drink-description');
        this.progressContainer = document.getElementById('brew-progress-container');
        this.progressFill = document.getElementById('brew-progress-fill');

        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => this.generateDrink(e.target.dataset.feeling));
        });
    }

    generateDrink(feeling) {
        if (!feeling) return;

        this.resultContainer.classList.add('hidden');
        this.progressContainer.classList.remove('hidden');

        // Disable buttons
        this.buttons.forEach(btn => btn.disabled = true);

        // Animate progress bar (2 seconds)
        let progress = 0;
        this.progressFill.style.width = '0%';

        const interval = setInterval(() => {
            progress += 5; // 5% every 100ms
            this.progressFill.style.width = `${progress}%`;

            if (progress >= 100) {
                clearInterval(interval);
                this.progressContainer.classList.add('hidden');
                this.showResult(feeling);
                // Re-enable buttons
                this.buttons.forEach(btn => btn.disabled = false);
            }
        }, 100);
    }

    showResult(feeling) {
        const randomImage = CONFIG.drinkImages[Math.floor(Math.random() * CONFIG.drinkImages.length)];
        this.drinkImage.src = randomImage;

        const drinksList = CONFIG.predefinedDrinks[feeling];
        if (drinksList && drinksList.length > 0) {
            const drinkDetails = drinksList[Math.floor(Math.random() * drinksList.length)];
            this.displayDrink(drinkDetails);
        }
    }

    displayDrink(details) {
        this.drinkName.textContent = details.name;

        this.drinkIngredients.innerHTML = '<h4>Ingredients:</h4><ul>' +
            details.ingredients.map(ing => `<li>${ing}</li>`).join('') +
            '</ul>';

        this.drinkDescription.textContent = details.description;

        this.resultContainer.classList.remove('hidden');
    }
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    new NavigationDots();

    // Sliders
    new Slider('prog-slider', CONFIG.programProjects, false);
    new Slider('design-slider', CONFIG.designProjects, true);

    // Drink Generator
    new DrinkGenerator();

    console.log('%c Portfolio Website Loaded! ', 'background: #6366f1; color: white; font-size: 16px; padding: 10px;');
});
