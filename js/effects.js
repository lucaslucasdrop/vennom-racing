/* =============================================
   VENNOM RACING - Efeitos Especiais
   Experiência Premium para o Cliente
   ============================================= */

// ===== LOADER ANIMADO =====
function createLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <img src="assets/logo.png" alt="VENNOM RACING">
            </div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
            <span class="loader-text">Carregando...</span>
        </div>
    `;
    document.body.prepend(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('loaded');
            setTimeout(() => loader.remove(), 500);
        }, 800);
    });
}

// ===== ANIMAÇÕES DE SCROLL (Reveal) =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Adiciona classe de animação aos elementos
    document.querySelectorAll('.product-card, .category-card, .benefit-item, .section-header, .brands-section, .newsletter-content').forEach((el, index) => {
        el.classList.add('reveal-element');
        el.style.transitionDelay = `${index % 4 * 0.1}s`;
        observer.observe(el);
    });
}

// ===== EFEITO PARALLAX NO HEADER =====
function initParallax() {
    const hero = document.querySelector('.hero-slider');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// ===== EFEITO 3D TILT NOS CARDS =====
function initTiltEffect() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===== CURSOR PERSONALIZADO =====
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Efeito hover em links e botões
    document.querySelectorAll('a, button, .product-card, .category-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });
}

// ===== BARRA DE PROGRESSO DO SCROLL =====
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// ===== EFEITO RIPPLE NOS BOTÕES =====
function initRippleEffect() {
    document.querySelectorAll('.btn-primary, .btn-add-cart, .search-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ===== NOTIFICAÇÕES DE COMPRA (Social Proof) =====
function initSocialProof() {
    // Nomes mais realistas e variados
    const buyers = [
        { name: 'Thiago R.', city: 'Cascavel - PR' },
        { name: 'Matheus', city: 'Francisco Beltrão - PR' },
        { name: 'Bruno S.', city: 'Chapecó - SC' },
        { name: 'Gabriel', city: 'Foz do Iguaçu - PR' },
        { name: 'Rodrigo M.', city: 'Pato Branco - PR' },
        { name: 'Felipe', city: 'Toledo - PR' },
        { name: 'André L.', city: 'Marechal C. Rondon - PR' },
        { name: 'Gustavo', city: 'Medianeira - PR' },
        { name: 'Daniel C.', city: 'Dois Vizinhos - PR' },
        { name: 'Leonardo', city: 'Palmas - PR' },
        { name: 'Vinícius', city: 'Xanxerê - SC' },
        { name: 'Caio R.', city: 'São Miguel do Oeste - SC' }
    ];

    // Produtos com imagens locais (capacetes ASW R3)
    const products = [
        { name: 'Capacete ASW R3 Laranja', img: 'assets/products/r3/r3-01.jpg' },
        { name: 'Capacete ASW R3 Vermelho', img: 'assets/products/r3/r3-02.jpg' },
        { name: 'Capacete ASW R3 Amarelo Neon', img: 'assets/products/r3/r3-03.jpg' },
        { name: 'Capacete ASW R3 Azul/Neon', img: 'assets/products/r3/r3-04.jpg' },
        { name: 'Capacete ASW R3 Preto/Dourado', img: 'assets/products/r3/r3-05.jpg' },
        { name: 'Capacete ASW R3 Preto Fosco', img: 'assets/products/r3/r3-06.jpg' },
        { name: 'Capacete ASW R3 Vermelho/Preto', img: 'assets/products/r3/r3-07.jpg' },
        { name: 'Capacete ASW R3 Neon/Cinza', img: 'assets/products/r3/r3-08.jpg' },
        { name: 'Capacete ASW R3 Verde', img: 'assets/products/r3/r3-16.jpg' },
        { name: 'Capacete ASW R3 Tricolor', img: 'assets/products/r3/r3-21.jpg' }
    ];

    let notificationCount = 0;
    const maxNotifications = 3;

    function showNotification() {
        if (notificationCount >= maxNotifications) return;
        notificationCount++;

        const buyer = buyers[Math.floor(Math.random() * buyers.length)];
        const product = products[Math.floor(Math.random() * products.length)];
        const minutes = Math.floor(Math.random() * 45) + 5;

        const notification = document.createElement('div');
        notification.className = 'social-proof-notification';
        notification.innerHTML = `
            <div class="spn-image">
                <img src="${product.img}" alt="${product.name}" onerror="this.parentElement.innerHTML='🛒'">
            </div>
            <div class="spn-content">
                <strong>${buyer.name}</strong>
                <span class="spn-city">de ${buyer.city}</span>
                <p>Comprou <span>${product.name}</span></p>
                <small>há ${minutes} minutos</small>
            </div>
            <button class="spn-close" aria-label="Fechar">×</button>
        `;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);

        notification.querySelector('.spn-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 6000);
    }

    // Primeira notificação após 8 segundos
    setTimeout(showNotification, 8000);
    // Depois a cada 25-45 segundos
    setInterval(() => {
        if (notificationCount < maxNotifications) {
            showNotification();
        }
    }, Math.random() * 20000 + 25000);
}

// ===== CONTADOR ANIMADO =====
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');

    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString('pt-BR');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString('pt-BR');
        }
    }, 30);
}

// ===== EFEITO MAGNÉTICO NOS BOTÕES =====
function initMagneticButtons() {
    document.querySelectorAll('.btn-primary, .view-all').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ===== TEXTO DIGITANDO NO SEARCH =====
function initTypingPlaceholder() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    const texts = [
        'Buscar capacetes...',
        'Buscar botas Alpinestars...',
        'Buscar equipamentos...',
        'Buscar óculos 100%...',
        'Buscar luvas...'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            searchInput.placeholder = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            searchInput.placeholder = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== EFEITO GLOW NA LOGO =====
function initLogoGlow() {
    const logo = document.querySelector('.logo-img');
    if (!logo) return;

    setInterval(() => {
        logo.classList.add('glow');
        setTimeout(() => logo.classList.remove('glow'), 1000);
    }, 3000);
}

// ===== PARTÍCULAS DE FUNDO =====
function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.className = 'particles-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.3 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(46, 204, 64, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== HEADER SHRINK ON SCROLL =====
function initHeaderShrink() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// ===== LAZY LOADING DE IMAGENS COM BLUR =====
function initLazyImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    createLoader();
    initScrollAnimations();
    initParallax();
    initTiltEffect();
    initScrollProgress();
    initRippleEffect();
    initSocialProof();
    initCounters();
    initMagneticButtons();
    initTypingPlaceholder();
    initSmoothScroll();
    initLogoGlow();
    initHeaderShrink();
    initLazyImages();

    // Cursor personalizado apenas em desktop
    if (window.innerWidth > 1024) {
        initCustomCursor();
        initParticles();
    }
});

// ===== TOAST MELHORADO =====
window.showNotification = function(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <div class="toast-icon">
            ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
        </div>
        <span>${message}</span>
        <div class="toast-progress"></div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};
