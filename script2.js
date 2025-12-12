/* ============================================
   PORTFOLIO YOUSSEF ABIDI - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    
    // ========== TRANSLATIONS ==========
    const translations = {
        fr: {
            nav_home: 'Accueil',
            nav_about: 'À propos',
            nav_skills: 'Compétences',
            nav_projects: 'Projets',
            nav_experience: 'Expérience',
            nav_contact: 'Contact',
            cv: 'Mon CV',
            hero_badge: 'Disponible pour opportunités',
            hero_greeting: 'Bonjour, je suis',
            hero_iam: 'Je suis ',
            hero_desc: 'Étudiant passionné en <span class="highlight">Informatique et Multimédia</span> à Sesame University, je crée des expériences digitales uniques en combinant créativité et expertise technique.',
            stat_years: "Années d'études",
            stat_projects: 'Projets réalisés',
            stat_tech: 'Technologies',
            btn_projects: 'Voir mes projets',
            btn_contact: 'Me contacter',
            about_title: 'Qui suis-je ?',
            about_lead: 'Je suis un <span class="text-gradient">développeur passionné</span> basé à Ben Arous, Tunisie, actuellement en 3ème année de Licence en Informatique et Multimédia.',
            skills_title: 'Mon Arsenal Technique',
            filter_all: 'Tout',
            filter_tools: 'Outils',
            methodologies: 'Méthodologies',
            projects_title: 'Mes Créations',
            experience_title: 'Mon Parcours',
            contact_title: 'Travaillons Ensemble',
            contact_subtitle: "Vous avez un projet en tête ? N'hésitez pas à me contacter. Je suis toujours ouvert à discuter de nouvelles opportunités.",
            typing_words: ['Développeur Web', 'Développeur Mobile', "Passionné d'Android", 'Étudiant Motivé', "Créateur d'Apps"]
        },
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_experience: 'Experience',
            nav_contact: 'Contact',
            cv: 'My CV',
            hero_badge: 'Available for opportunities',
            hero_greeting: 'Hello, I am',
            hero_iam: 'I am ',
            hero_desc: 'Passionate <span class="highlight">Computer Science & Multimedia</span> student at Sesame University, I create unique digital experiences by combining creativity and technical expertise.',
            stat_years: 'Years of study',
            stat_projects: 'Projects completed',
            stat_tech: 'Technologies',
            btn_projects: 'View my projects',
            btn_contact: 'Contact me',
            about_title: 'Who am I?',
            about_lead: 'I am a <span class="text-gradient">passionate developer</span> based in Ben Arous, Tunisia, currently in my 3rd year of Computer Science and Multimedia.',
            skills_title: 'My Technical Arsenal',
            filter_all: 'All',
            filter_tools: 'Tools',
            methodologies: 'Methodologies',
            projects_title: 'My Creations',
            experience_title: 'My Journey',
            contact_title: "Let's Work Together",
            contact_subtitle: "Have a project in mind? Don't hesitate to contact me. I'm always open to discussing new opportunities.",
            typing_words: ['Web Developer', 'Mobile Developer', 'Android Enthusiast', 'Motivated Student', 'App Creator']
        }
    };

    let currentLang = localStorage.getItem('portfolio-lang') || 'fr';
    let phrases = translations[currentLang].typing_words;
    let phraseIndex = 0;
    let charIndex = 0;
    
    // ========== THEME TOGGLE ==========
    const themeToggle = document.getElementById('themeToggle');
    let currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
        localStorage.setItem('portfolio-theme', theme);
        currentTheme = theme;
    }
    
    applyTheme(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 400);
        });
    }

    // ========== LANGUAGE TOGGLE ==========
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle?.querySelector('.lang-text');
    
    function applyLanguage(lang) {
        const t = translations[lang];
        if (!t) return;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (key === 'hero_desc' || key === 'about_lead') {
                    el.innerHTML = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });
        
        if (langText) {
            langText.textContent = lang === 'fr' ? 'EN' : 'FR';
        }
        
        localStorage.setItem('portfolio-lang', lang);
        currentLang = lang;
        
        // Update typing words
        phrases = t.typing_words;
        phraseIndex = 0;
        charIndex = 0;
    }
    
    applyLanguage(currentLang);
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            applyLanguage(newLang);
            
            langToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                langToggle.style.transform = '';
            }, 200);
        });
    }

    // ========== LOADER ==========
    const loader = document.getElementById('loader');
    setTimeout(() => {
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 800);

    // ========== CUSTOM CURSOR ==========
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');
    
    if (cursor && cursorFollower && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        
        document.querySelectorAll('a, button, .skill-card, .project-card, .info-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });
    }

    // ========== INIT ==========
    initAnimations();

    // ========== NAVIGATION ==========
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const progressBar = document.getElementById('progressBar');
    const sections = document.querySelectorAll('section[id]');

    // Scroll effect for navbar
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Add scrolled class
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Progress bar
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollY / docHeight) * 100;
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
        
        // Active nav link
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
        
        lastScrollY = scrollY;
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ========== TYPING EFFECT ==========
    const typingText = document.getElementById('typingText');
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        if (!typingText || !phrases || phrases.length === 0) return;
        
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    setTimeout(typeEffect, 2500);

    // ========== COUNTER ANIMATION ==========
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }

    // ========== SCROLL ANIMATIONS ==========
    function initAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate skill bars when visible
                    if (entry.target.classList.contains('skill-card') || 
                        entry.target.classList.contains('info-card')) {
                        animateSkillBars(entry.target);
                    }
                    
                    // Animate counters when hero is visible
                    if (entry.target.id === 'hero') {
                        animateCounters();
                    }
                }
            });
        }, observerOptions);
        
        // Observe sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });
        
        // Observe cards
        document.querySelectorAll('.skill-card, .info-card, .project-item, .experience-item').forEach(card => {
            card.classList.add('animate-on-scroll');
            observer.observe(card);
        });
        
        // Observe hero
        const hero = document.getElementById('hero');
        if (hero) {
            observer.observe(hero);
        }
    }

    function animateSkillBars(container) {
        const bars = container.querySelectorAll('.level-fill, .lang-progress');
        bars.forEach(bar => {
            const level = bar.style.getPropertyValue('--level') || bar.style.getPropertyValue('--progress');
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = level;
            }, 100);
        });
    }

    // ========== SKILLS FILTER WITH ANIMATIONS ==========
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.getAttribute('data-category');
            let visibleIndex = 0;
            
            skillCards.forEach((card, index) => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px) scale(0.9)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, visibleIndex * 80);
                    
                    visibleIndex++;
                } else {
                    card.style.transition = 'all 0.3s ease-out';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px) scale(0.9)';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });

    // ========== SKILL CARD HOVER PARTICLES ==========
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const particles = card.querySelector('.skill-particles');
            if (particles) {
                for (let i = 0; i < 5; i++) {
                    const particle = document.createElement('span');
                    particle.className = 'floating-particle';
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.animationDelay = (Math.random() * 0.5) + 's';
                    particle.style.animationDuration = (1 + Math.random()) + 's';
                    particles.appendChild(particle);
                    
                    setTimeout(() => particle.remove(), 2000);
                }
            }
        });
    });

    // ========== CV MODAL ==========
    const cvButton = document.getElementById('cvButton');
    const cvModal = document.getElementById('cvModal');
    const cvClose = document.getElementById('cvClose');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (cvButton && cvModal) {
        cvButton.addEventListener('click', () => {
            cvModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
        
        const closeModal = () => {
            cvModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        };
        
        cvClose?.addEventListener('click', closeModal);
        modalOverlay?.addEventListener('click', closeModal);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cvModal.getAttribute('aria-hidden') === 'false') {
                closeModal();
            }
        });
    }

    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject')?.value.trim() || '';
            const message = document.getElementById('message').value.trim();
            
            // Validation
            if (!name || !email || !message) {
                formStatus.textContent = '⚠️ Veuillez remplir tous les champs obligatoires.';
                formStatus.className = 'form-status error';
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formStatus.textContent = '⚠️ Veuillez entrer une adresse email valide.';
                formStatus.className = 'form-status error';
                return;
            }
            
            // Mailto fallback
            const subjectLine = encodeURIComponent(subject || `Contact Portfolio — ${name}`);
            const body = encodeURIComponent(`${message}\n\n---\n${name}\n${email}`);
            window.location.href = `mailto:youssef.abidi200419@gmail.com?subject=${subjectLine}&body=${body}`;
            
            formStatus.textContent = '📧 Ouverture de votre client mail...';
            formStatus.className = 'form-status success';
            
            setTimeout(() => {
                contactForm.reset();
                formStatus.textContent = '';
            }, 3000);
        });
    }

    // ========== BACK TO TOP ==========
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== PARALLAX EFFECT ON SCROLL ==========
    const heroVisual = document.querySelector('.hero-visual');
    const floatingIcons = document.querySelectorAll('.float-icon');
    
    if (heroVisual && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                heroVisual.style.transform = `translateY(${scrollY * 0.2}px)`;
                
                floatingIcons.forEach((icon, index) => {
                    const speed = 0.1 + (index * 0.05);
                    icon.style.transform = `translateY(${scrollY * speed}px)`;
                });
            }
        });
    }

    // ========== MAGNETIC BUTTON EFFECT ==========
    const magneticButtons = document.querySelectorAll('.btn-primary, .social-link, .social-btn');
    
    if (window.innerWidth > 768) {
        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

    // ========== PROJECT CARDS TILT EFFECT ==========
    const projectCards = document.querySelectorAll('.project-mockup');
    
    if (window.innerWidth > 768) {
        projectCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                const rotateX = (y - 0.5) * 10;
                const rotateY = (x - 0.5) * -10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // ========== LAZY LOADING IMAGES ==========
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========== KONAMI CODE EASTER EGG ==========
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.animation = 'rainbow 2s linear infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 5000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Add rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    console.log('%c 🚀 Portfolio Youssef Abidi ', 'background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: bold;');
    console.log('%c Développé avec passion ❤️ ', 'color: #8b5cf6; font-size: 12px;');
});
