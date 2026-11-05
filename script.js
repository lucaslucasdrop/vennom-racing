/* =============================================
   VENNOM RACING - JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {

    // =============================================
    // SLIDER PRINCIPAL
    // =============================================
    const slider = {
        slides: document.querySelectorAll('.slide'),
        dots: document.querySelectorAll('.dot'),
        prevBtn: document.querySelector('.slider-btn.prev'),
        nextBtn: document.querySelector('.slider-btn.next'),
        currentSlide: 0,
        autoPlayInterval: null,
        autoPlayDelay: 5000,

        init() {
            if (!this.slides.length) return;

            this.prevBtn?.addEventListener('click', () => this.prev());
            this.nextBtn?.addEventListener('click', () => this.next());

            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goTo(index));
            });

            this.startAutoPlay();

            // Pause on hover
            const sliderContainer = document.querySelector('.hero-slider');
            sliderContainer?.addEventListener('mouseenter', () => this.stopAutoPlay());
            sliderContainer?.addEventListener('mouseleave', () => this.startAutoPlay());
        },

        goTo(index) {
            this.slides[this.currentSlide].classList.remove('active');
            this.dots[this.currentSlide]?.classList.remove('active');

            this.currentSlide = index;

            if (this.currentSlide >= this.slides.length) this.currentSlide = 0;
            if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1;

            this.slides[this.currentSlide].classList.add('active');
            this.dots[this.currentSlide]?.classList.add('active');
        },

        next() {
            this.goTo(this.currentSlide + 1);
        },

        prev() {
            this.goTo(this.currentSlide - 1);
        },

        startAutoPlay() {
            this.stopAutoPlay();
            this.autoPlayInterval = setInterval(() => this.next(), this.autoPlayDelay);
        },

        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
    };

    slider.init();

    // =============================================
    // CARRINHO DE COMPRAS
    // =============================================
    const cart = {
        items: JSON.parse(localStorage.getItem('vennom_cart') || '[]'),

        init() {
            this.updateUI();
            this.bindEvents();
        },

        bindEvents() {
            document.querySelectorAll('.btn-add-cart').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const card = btn.closest('.product-card');
                    const product = this.extractProductData(card);
                    this.add(product);
                    this.showNotification('Produto adicionado ao carrinho!');
                });
            });

            document.querySelectorAll('.btn-quick-buy').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const card = btn.closest('.product-card');
                    const product = this.extractProductData(card);
                    this.add(product);
                    // Redirecionar para checkout
                    // window.location.href = '/checkout';
                    this.showNotification('Redirecionando para o checkout...');
                });
            });
        },

        extractProductData(card) {
            return {
                id: Date.now(), // Substituir por ID real
                name: card.querySelector('.product-name')?.textContent || 'Produto',
                brand: card.querySelector('.product-brand')?.textContent || '',
                price: this.parsePrice(card.querySelector('.price-current')?.textContent),
                image: card.querySelector('.product-image img')?.src || '',
                quantity: 1
            };
        },

        parsePrice(priceStr) {
            if (!priceStr) return 0;
            return parseFloat(priceStr.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
        },

        add(product) {
            const existingIndex = this.items.findIndex(item => item.id === product.id);

            if (existingIndex > -1) {
                this.items[existingIndex].quantity++;
            } else {
                this.items.push(product);
            }

            this.save();
            this.updateUI();
        },

        remove(productId) {
            this.items = this.items.filter(item => item.id !== productId);
            this.save();
            this.updateUI();
        },

        updateQuantity(productId, quantity) {
            const item = this.items.find(item => item.id === productId);
            if (item) {
                item.quantity = Math.max(1, quantity);
                this.save();
                this.updateUI();
            }
        },

        getTotal() {
            return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        getItemCount() {
            return this.items.reduce((count, item) => count + item.quantity, 0);
        },

        save() {
            localStorage.setItem('vennom_cart', JSON.stringify(this.items));
        },

        updateUI() {
            const countEl = document.querySelector('.cart-count');
            const totalEl = document.querySelector('.cart-total');

            if (countEl) {
                countEl.textContent = this.getItemCount();
            }

            if (totalEl) {
                totalEl.textContent = this.formatPrice(this.getTotal());
            }
        },

        formatPrice(value) {
            return 'R$ ' + value.toFixed(2).replace('.', ',');
        },

        showNotification(message) {
            // Criar notificação toast
            const toast = document.createElement('div');
            toast.className = 'toast-notification';
            toast.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>${message}</span>
            `;

            document.body.appendChild(toast);

            // Adicionar estilos inline se não existirem
            if (!document.querySelector('#toast-styles')) {
                const style = document.createElement('style');
                style.id = 'toast-styles';
                style.textContent = `
                    .toast-notification {
                        position: fixed;
                        bottom: 100px;
                        right: 24px;
                        background: #39FF14;
                        color: #0a0a0a;
                        padding: 16px 24px;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        font-weight: 600;
                        font-size: 14px;
                        box-shadow: 0 4px 20px rgba(57, 255, 20, 0.4);
                        animation: slideInToast 0.3s ease, fadeOutToast 0.3s ease 2.7s forwards;
                        z-index: 9999;
                    }
                    @keyframes slideInToast {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes fadeOutToast {
                        from { transform: translateX(0); opacity: 1; }
                        to { transform: translateX(100%); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }

            setTimeout(() => toast.remove(), 3000);
        }
    };

    cart.init();

    // =============================================
    // WISHLIST (Lista de Desejos)
    // =============================================
    const wishlist = {
        items: JSON.parse(localStorage.getItem('vennom_wishlist') || '[]'),

        init() {
            this.updateUI();
            this.bindEvents();
        },

        bindEvents() {
            document.querySelectorAll('.btn-wishlist').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const card = btn.closest('.product-card');
                    const productId = card.dataset.productId || Date.now().toString();

                    if (this.has(productId)) {
                        this.remove(productId);
                        btn.classList.remove('active');
                        cart.showNotification('Removido da lista de desejos');
                    } else {
                        this.add(productId);
                        btn.classList.add('active');
                        cart.showNotification('Adicionado à lista de desejos');
                    }
                });
            });
        },

        has(productId) {
            return this.items.includes(productId);
        },

        add(productId) {
            if (!this.has(productId)) {
                this.items.push(productId);
                this.save();
                this.updateUI();
            }
        },

        remove(productId) {
            this.items = this.items.filter(id => id !== productId);
            this.save();
            this.updateUI();
        },

        save() {
            localStorage.setItem('vennom_wishlist', JSON.stringify(this.items));
        },

        updateUI() {
            const badge = document.querySelector('.wishlist .badge');
            if (badge) {
                badge.textContent = this.items.length;
            }
        }
    };

    wishlist.init();

    // =============================================
    // SEARCH
    // =============================================
    const search = {
        input: document.querySelector('.search-input'),
        btn: document.querySelector('.search-btn'),

        init() {
            if (!this.input) return;

            this.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.perform();
                }
            });

            this.btn?.addEventListener('click', () => this.perform());
        },

        perform() {
            const query = this.input.value.trim();
            if (query) {
                // Redirecionar para página de busca
                // window.location.href = `/busca?q=${encodeURIComponent(query)}`;
                console.log('Buscando:', query);
                cart.showNotification(`Buscando por "${query}"...`);
            }
        }
    };

    search.init();

    // =============================================
    // HEADER SCROLL EFFECT
    // =============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Adicionar estilo para header scrolled
    if (!document.querySelector('#scroll-styles')) {
        const style = document.createElement('style');
        style.id = 'scroll-styles';
        style.textContent = `
            .header.scrolled {
                padding: 10px 0;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
            }
        `;
        document.head.appendChild(style);
    }

    // =============================================
    // LAZY LOADING IMAGES
    // =============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // =============================================
    // MOBILE MENU TOGGLE
    // =============================================
    const mobileMenu = {
        init() {
            // Criar botão de menu mobile se não existir
            this.createMenuButton();
        },

        createMenuButton() {
            const header = document.querySelector('.header-content');
            if (!header) return;

            // Verificar se já existe
            if (document.querySelector('.mobile-menu-btn')) return;

            const btn = document.createElement('button');
            btn.className = 'mobile-menu-btn';
            btn.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
            `;

            btn.addEventListener('click', () => this.toggle());

            // Adicionar estilos
            const style = document.createElement('style');
            style.textContent = `
                .mobile-menu-btn {
                    display: none;
                    width: 44px;
                    height: 44px;
                    align-items: center;
                    justify-content: center;
                    background: var(--bg-card);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    color: var(--text-primary);
                }

                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: flex;
                    }

                    .main-nav {
                        position: fixed;
                        top: 0;
                        left: -100%;
                        width: 80%;
                        max-width: 300px;
                        height: 100vh;
                        background: var(--bg-darker);
                        z-index: 2000;
                        transition: left 0.3s ease;
                        overflow-y: auto;
                        padding: 20px;
                    }

                    .main-nav.active {
                        left: 0;
                    }

                    .nav-list {
                        flex-direction: column;
                    }

                    .nav-item > a {
                        padding: 16px 0;
                        border-bottom: 1px solid var(--border-color);
                    }

                    .dropdown-menu {
                        position: static;
                        display: none;
                        flex-direction: column;
                        min-width: auto;
                        padding: 12px 0 12px 16px;
                        background: transparent;
                        border: none;
                    }

                    .nav-item.has-dropdown.open .dropdown-menu {
                        display: flex;
                    }

                    .mobile-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.7);
                        z-index: 1999;
                        display: none;
                    }

                    .mobile-overlay.active {
                        display: block;
                    }
                }
            `;
            document.head.appendChild(style);

            // Inserir botão no header
            header.insertBefore(btn, header.firstChild);

            // Criar overlay
            const overlay = document.createElement('div');
            overlay.className = 'mobile-overlay';
            overlay.addEventListener('click', () => this.close());
            document.body.appendChild(overlay);
        },

        toggle() {
            const nav = document.querySelector('.main-nav');
            const overlay = document.querySelector('.mobile-overlay');

            nav?.classList.toggle('active');
            overlay?.classList.toggle('active');
            document.body.style.overflow = nav?.classList.contains('active') ? 'hidden' : '';
        },

        close() {
            const nav = document.querySelector('.main-nav');
            const overlay = document.querySelector('.mobile-overlay');

            nav?.classList.remove('active');
            overlay?.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    mobileMenu.init();

    // =============================================
    // NEWSLETTER FORM
    // =============================================
    const newsletterForm = document.querySelector('.newsletter-form');

    newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (email) {
            // Enviar para API
            console.log('Newsletter signup:', email);
            cart.showNotification('E-mail cadastrado com sucesso!');
            newsletterForm.reset();
        }
    });

    // =============================================
    // SMOOTH SCROLL PARA LINKS INTERNOS
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =============================================
    // ANIMAÇÕES AO SCROLL
    // =============================================
    if ('IntersectionObserver' in window) {
        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });

        // Adicionar classe para animação
        document.querySelectorAll('.product-card, .category-card, .benefit-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            animateOnScroll.observe(el);
        });

        // Estilo para quando animar
        const animStyle = document.createElement('style');
        animStyle.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(animStyle);
    }

    console.log('🏍️ VENNOM RACING - Site carregado com sucesso!');
});
