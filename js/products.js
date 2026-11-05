/* =============================================
   VENNOM RACING - Base de Produtos
   ============================================= */

const PRODUCTS = [
    {
        id: 1,
        slug: "bota-alpinestars-tech-7-red-bud",
        name: "Bota Alpinestars Tech 7 Unity Red Bud",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: 4199.00,
        price: 3599.90,
        installments: "12x de R$ 299,99",
        discount: 14,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-7-red-bud-100860.jpg"
        ],
        sizes: ["9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Azul/Vermelho"],
        description: "Edição limitada comemorativa da etapa Red Bud do AMA Motocross. Sistema de pivô duplo, flexão frontal com amortecedores, proteção em TPU completa. Certificação CE EN 13634:2017.",
        features: [
            "Edição Limitada Red Bud",
            "Sistema de pivô duplo medial e lateral",
            "Proteção em TPU na biqueira, tornozelo e espinela",
            "Sola vulcanizada de dois compostos",
            "Certificação CE EN 13634:2017",
            "Peso aproximado: 3,3 kg o par"
        ],
        rating: 5,
        reviews: 12,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-7-red-bud"
    },
    {
        id: 2,
        slug: "bota-alpinestars-tech-7-enduro-cinza-vermelho",
        name: "Bota Alpinestars Tech 7 Enduro Cinza/Vermelho",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Enduro",
        priceOld: null,
        price: 3989.05,
        installments: "12x de R$ 332,42",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-7-enduro-cinza-vermelho-71196.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Cinza/Vermelho"],
        description: "Bota Tech 7 versão Enduro com construção específica para trilhas técnicas. Proteção reforçada e maior conforto para longas jornadas.",
        features: [
            "Versão Enduro",
            "Construção específica para trilhas",
            "Sistema de pivô duplo",
            "Proteção em TPU",
            "Sola para aderência em terrenos variados"
        ],
        rating: 5,
        reviews: 8,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-7-enduro-cinza-vermelho"
    },
    {
        id: 3,
        slug: "bota-alpinestars-tech7",
        name: "Bota Alpinestars Tech 7 Nova",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: 4199.00,
        price: 3989.05,
        installments: "12x de R$ 349,92",
        discount: 5,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech7-102069.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)", "13 USA (44/45 BRA)"],
        colors: ["Preto", "Branco", "Preto/Branco"],
        description: "A Tech 7 é referência em proteção e conforto para motocross. Sistema de pivô duplo, amortecedores de flexão e construção premium.",
        features: [
            "Sistema de pivô duplo",
            "Amortecedores de flexão frontal",
            "Proteção completa em TPU",
            "Forro 3D respirável",
            "Sola vulcanizada"
        ],
        rating: 5,
        reviews: 45,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech7"
    },
    {
        id: 4,
        slug: "bota-alpinestars-tech-5-preto-cinza",
        name: "Bota Alpinestars Tech 5 Preto/Cinza",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: null,
        price: 2279.91,
        installments: "12x de R$ 189,99",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-5-preto-cinza-59662.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Preto/Cinza"],
        description: "Tech 5 oferece excelente proteção com custo-benefício. Ideal para pilotos que buscam qualidade Alpinestars com preço acessível.",
        features: [
            "Construção em microfibra",
            "Sistema de presilhas",
            "Proteção no tornozelo",
            "Sola antiderrapante"
        ],
        rating: 5,
        reviews: 32,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-5-preto-cinza"
    },
    {
        id: 5,
        slug: "bota-alpinestars-tech-10-vermelho",
        name: "Bota Alpinestars Tech 10 Vermelho",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: 6299.90,
        price: 5499.90,
        installments: "12x de R$ 458,33",
        discount: 13,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-10-vermelho-59763.jpg"
        ],
        sizes: ["9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)", "13 USA (44/45 BRA)"],
        colors: ["Vermelho"],
        description: "O topo de linha da Alpinestars. A Tech 10 oferece a máxima proteção e tecnologia para pilotos profissionais e exigentes.",
        features: [
            "Topo de linha Alpinestars",
            "Sistema de pivô biomecânico",
            "Proteção máxima em TPU",
            "Amortecedores de impacto",
            "Forro premium removível",
            "Certificação CE"
        ],
        rating: 5,
        reviews: 67,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-10-vermelho"
    },
    {
        id: 6,
        slug: "bota-alpinestars-tech-3-cinza",
        name: "Bota Alpinestars Tech 3 Cinza",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: null,
        price: 1899.90,
        installments: "12x de R$ 158,33",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-3-cinza-71414.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Cinza"],
        description: "A Tech 3 é a entrada perfeita no mundo Alpinestars. Proteção confiável com excelente custo-benefício.",
        features: [
            "Entrada de linha Alpinestars",
            "Construção durável",
            "Sistema de presilhas",
            "Proteção essencial"
        ],
        rating: 5,
        reviews: 28,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-3-cinza"
    },
    {
        id: 7,
        slug: "bota-alpinestars-tech-10-azul",
        name: "Bota Alpinestars Tech 10 Azul",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: 6299.90,
        price: 5499.90,
        installments: "12x de R$ 458,33",
        discount: 13,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-10-azul-81163.jpg"
        ],
        sizes: ["9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)", "13 USA (44/45 BRA)"],
        colors: ["Azul"],
        description: "Tech 10 na cor azul. Máxima proteção e tecnologia Alpinestars para competições e trilhas exigentes.",
        features: [
            "Topo de linha Alpinestars",
            "Sistema de pivô biomecânico",
            "Proteção máxima em TPU",
            "Certificação CE"
        ],
        rating: 5,
        reviews: 54,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-10-azul"
    },
    {
        id: 8,
        slug: "bota-motocross-infantil-alpinestars-tech-7s",
        name: "Bota Alpinestars Tech 7S Infantil",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Infantil",
        priceOld: null,
        price: 2489.05,
        installments: "12x de R$ 207,42",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-motocross-infantil-alpinestars-tech-7s-100596.jpg"
        ],
        sizes: ["2 USA (33 BRA)", "3 USA (34 BRA)", "4 USA (35 BRA)", "5 USA (36 BRA)", "6 USA (37 BRA)", "7 USA (38 BRA)", "8 USA (39 BRA)"],
        colors: ["Preto", "Branco"],
        description: "Tech 7S desenvolvida especialmente para jovens pilotos. Toda a tecnologia da Tech 7 em tamanhos infantis.",
        features: [
            "Desenvolvida para jovens pilotos",
            "Tecnologia Tech 7",
            "Sistema de pivô adaptado",
            "Proteção completa"
        ],
        rating: 5,
        reviews: 19,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-motocross-infantil-alpinestars-tech-7s"
    },
    {
        id: 9,
        slug: "bota-alpinestars-tech3-preta-branca",
        name: "Bota Alpinestars Tech 3 Preto/Branco",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: null,
        price: 2279.91,
        installments: "12x de R$ 199,99",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech3-preta-branca-46005.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)", "13 USA (44/45 BRA)"],
        colors: ["Preto/Branco"],
        description: "Tech 3 na combinação clássica preto e branco. Proteção confiável Alpinestars para motocross e trilha.",
        features: [
            "Construção durável",
            "Sistema de presilhas",
            "Proteção no tornozelo",
            "Sola antiderrapante"
        ],
        rating: 5,
        reviews: 67,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech3-preta-branca"
    },
    {
        id: 10,
        slug: "bota-alpinestars-tech-3-enduro-wp",
        name: "Bota Alpinestars Tech 3 Enduro WP",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Enduro",
        priceOld: null,
        price: 2659.05,
        installments: "12x de R$ 221,59",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-3-enduro-wp-75583.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Preto"],
        description: "Tech 3 versão Enduro com membrana impermeável (WP). Ideal para trilhas em condições adversas.",
        features: [
            "Membrana impermeável WP",
            "Versão Enduro",
            "Proteção contra água e lama",
            "Construção reforçada"
        ],
        rating: 5,
        reviews: 23,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-3-enduro-wp"
    },
    {
        id: 11,
        slug: "bota-alpinestars-tech-10-enduro",
        name: "Bota Alpinestars Tech 10 Enduro",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Enduro",
        priceOld: null,
        price: 5879.05,
        installments: "12x de R$ 489,92",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-10-enduro-76988.jpg"
        ],
        sizes: ["9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Preto/Cinza"],
        description: "A Tech 10 versão Enduro. Toda a tecnologia do topo de linha com construção específica para enduro.",
        features: [
            "Versão Enduro do topo de linha",
            "Sola específica para trilhas",
            "Sistema de pivô biomecânico",
            "Proteção máxima"
        ],
        rating: 5,
        reviews: 34,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-10-enduro"
    },
    {
        id: 12,
        slug: "bota-alpinestars-tech-10-amarelo-fluor",
        name: "Bota Alpinestars Tech 10 Amarelo Fluor",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: 6299.90,
        price: 5499.90,
        installments: "12x de R$ 458,33",
        discount: 13,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-10-amarelo-fluor-76694.jpg"
        ],
        sizes: ["9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Amarelo Fluor"],
        description: "Tech 10 na cor amarelo fluorescente. Alta visibilidade e máxima proteção Alpinestars.",
        features: [
            "Cor de alta visibilidade",
            "Topo de linha Alpinestars",
            "Sistema de pivô biomecânico",
            "Certificação CE"
        ],
        rating: 5,
        reviews: 29,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-10-amarelo-fluor"
    },
    {
        id: 13,
        slug: "bota-alpinestars-tech-7-enduro-nova",
        name: "Bota Alpinestars Tech 7 Enduro Nova",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Enduro",
        priceOld: null,
        price: 3989.05,
        installments: "12x de R$ 332,42",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-7-enduro-nova-101799.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Preto"],
        description: "Nova versão da Tech 7 Enduro com melhorias em proteção e conforto para trilhas técnicas.",
        features: [
            "Nova versão melhorada",
            "Específica para Enduro",
            "Sistema de pivô duplo",
            "Sola para trilhas"
        ],
        rating: 5,
        reviews: 18,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-7-enduro-nova"
    },
    {
        id: 14,
        slug: "bota-alpinestars-tech-7-enduro",
        name: "Bota Alpinestars Tech 7 Enduro",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Enduro",
        priceOld: null,
        price: 3799.05,
        installments: "12x de R$ 316,59",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-7-enduro-7186.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Preto", "Marrom"],
        description: "Tech 7 versão Enduro. Construção robusta para enfrentar trilhas pesadas com conforto e proteção.",
        features: [
            "Versão Enduro",
            "Construção reforçada",
            "Sola para aderência em trilhas",
            "Sistema de pivô duplo"
        ],
        rating: 5,
        reviews: 42,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-7-enduro"
    },
    {
        id: 15,
        slug: "bota-alpinestars-tech-7-enduro-preto-marrom",
        name: "Bota Alpinestars Tech 7 Enduro Preto/Marrom",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Enduro",
        priceOld: null,
        price: 3989.05,
        installments: "12x de R$ 332,42",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-7-enduro-preto-marrom-59638.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Preto/Marrom"],
        description: "Tech 7 Enduro na combinação clássica preto e marrom. Estilo vintage com tecnologia moderna.",
        features: [
            "Estilo vintage",
            "Versão Enduro",
            "Sistema de pivô duplo",
            "Proteção completa"
        ],
        rating: 5,
        reviews: 15,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-7-enduro-preto-marrom"
    },
    {
        id: 16,
        slug: "bota-alpinestars-tech-10-super-vented-preto-azul",
        name: "Bota Alpinestars Tech 10 Super Vented Preto/Azul",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: null,
        price: 5879.05,
        installments: "12x de R$ 489,92",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-10-super-vented-preto-azul-72859.jpg"
        ],
        sizes: ["9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Preto/Azul"],
        description: "Tech 10 versão Super Vented com ventilação superior. Ideal para pilotos em climas quentes.",
        features: [
            "Super ventilação",
            "Para climas quentes",
            "Topo de linha",
            "Sistema de pivô biomecânico"
        ],
        rating: 5,
        reviews: 21,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-10-super-vented-preto-azul"
    },
    {
        id: 17,
        slug: "bota-alpinestars-tech-10-branca",
        name: "Bota Alpinestars Tech 10 Branca",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: 6299.90,
        price: 5499.90,
        installments: "12x de R$ 458,33",
        discount: 13,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-10-branca-81172.jpg"
        ],
        sizes: ["9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)", "13 USA (44/45 BRA)"],
        colors: ["Branco"],
        description: "Tech 10 na cor branca clássica. Estilo limpo com a máxima proteção Alpinestars.",
        features: [
            "Cor branca clássica",
            "Topo de linha",
            "Sistema de pivô biomecânico",
            "Certificação CE"
        ],
        rating: 5,
        reviews: 48,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-10-branca"
    },
    {
        id: 18,
        slug: "bota-alpinestars-tech-5-preta",
        name: "Bota Alpinestars Tech 5 Preta",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: null,
        price: 2279.91,
        installments: "12x de R$ 189,99",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-5-preta-33611.jpg"
        ],
        sizes: ["8 USA (39/40 BRA)", "9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Preto"],
        description: "Tech 5 na cor preta. Excelente custo-benefício com a qualidade Alpinestars.",
        features: [
            "Excelente custo-benefício",
            "Construção em microfibra",
            "Sistema de presilhas",
            "Proteção essencial"
        ],
        rating: 5,
        reviews: 38,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-5-preta"
    },
    {
        id: 19,
        slug: "bota-infantil-alpinestars-tech-3s",
        name: "Bota Alpinestars Tech 3S Infantil",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Infantil",
        priceOld: null,
        price: 1519.05,
        installments: "12x de R$ 126,59",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-infantil-alpinestars-tech-3-s-85666.jpg"
        ],
        sizes: ["10 USA (27 BRA)", "11 USA (28 BRA)", "12 USA (29 BRA)", "13 USA (30 BRA)", "1 USA (31 BRA)", "2 USA (32 BRA)"],
        colors: ["Preto", "Branco"],
        description: "Tech 3S para os pequenos pilotos. Proteção Alpinestars desde cedo com conforto infantil.",
        features: [
            "Para pequenos pilotos",
            "Tamanhos infantis",
            "Proteção essencial",
            "Fácil de calçar"
        ],
        rating: 5,
        reviews: 24,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-infantil-alpinestars-tech-3-s"
    },
    {
        id: 20,
        slug: "bota-alpinestars-tech-10-super-vented-azul-escuro-branco",
        name: "Bota Alpinestars Tech 10 Super Vented Azul Escuro/Branco",
        brand: "Alpinestars",
        category: "Botas",
        subcategory: "Botas Motocross",
        priceOld: null,
        price: 5879.05,
        installments: "12x de R$ 489,92",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/bota-alpinestars-tech-10-super-vented-azul-escuro-branco-72867.jpg"
        ],
        sizes: ["9 USA (40/41 BRA)", "10 USA (41/42 BRA)", "11 USA (42/43 BRA)", "12 USA (43/44 BRA)"],
        colors: ["Azul Escuro/Branco"],
        description: "Tech 10 Super Vented na combinação azul escuro e branco. Ventilação superior com estilo premium.",
        features: [
            "Super ventilação",
            "Combinação exclusiva",
            "Topo de linha",
            "Sistema de pivô biomecânico"
        ],
        rating: 5,
        reviews: 16,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/bota-alpinestars-tech-10-super-vented-azul-escuro-branco"
    },
    // CAPACETES AIROH
    {
        id: 21,
        slug: "capacete-airoh-twist-3-0-fancy",
        name: "Capacete Airoh Twist 3.0 Fancy",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 815.91,
        installments: "12x de R$ 67,99",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-twist-3-0-fancy-98051.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Multicor"],
        description: "Capacete Airoh Twist 3.0 Fancy com design exclusivo e tecnologia de ponta para máxima proteção.",
        features: [
            "Casco em ABS de alta resistência",
            "Ventilação otimizada",
            "Forro removível e lavável",
            "Peso leve",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 15,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-twist-3-0-fancy"
    },
    {
        id: 22,
        slug: "capacete-airoh-twist-3-0-hustle-gloss",
        name: "Capacete Airoh Twist 3.0 Hustle Gloss",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 1099.90,
        installments: "12x de R$ 91,66",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-twist-3-0-hustle-gloss-98046.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Preto/Dourado"],
        description: "Capacete Airoh Twist 3.0 Hustle acabamento Gloss brilhante com visual agressivo.",
        features: [
            "Acabamento Gloss premium",
            "Casco em ABS",
            "Sistema de ventilação avançado",
            "Forro antibacteriano",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 22,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-twist-3-0-hustle-gloss"
    },
    {
        id: 23,
        slug: "capacete-airoh-wraap-fell-2025",
        name: "Capacete Airoh Wraap Feel 2025",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 899.90,
        installments: "12x de R$ 74,99",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-wraap-fell-2025-84489.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Azul/Vermelho"],
        description: "Capacete Airoh Wraap Feel linha 2025 com design moderno e proteção de alto nível.",
        features: [
            "Modelo 2025",
            "Casco em HRT (High Resistant Thermoplastic)",
            "Ventilação superior",
            "Forro removível",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 18,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-wraap-fell-2025"
    },
    {
        id: 24,
        slug: "capacete-airoh-wraap-conquer",
        name: "Capacete Airoh Wraap Conquer",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 1999.90,
        installments: "12x de R$ 166,66",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-wraap-conquer-98056.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Preto/Vermelho"],
        description: "Capacete Airoh Wraap Conquer premium com tecnologia avançada de absorção de impacto.",
        features: [
            "Linha premium Wraap",
            "Casco em HRT",
            "Sistema de emergência para remoção",
            "Ventilação ajustável",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 31,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-wraap-conquer"
    },
    {
        id: 25,
        slug: "capacete-airoh-twist-3-0-rainbow-gloss",
        name: "Capacete Airoh Twist 3.0 Rainbow Gloss",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 2060.55,
        installments: "12x de R$ 171,71",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-twist-3-0-rainbow-gloss-98043.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Rainbow/Multicor"],
        description: "Capacete Airoh Twist 3.0 Rainbow Gloss com acabamento cromado exclusivo.",
        features: [
            "Acabamento Rainbow cromado",
            "Visual exclusivo",
            "Casco em ABS",
            "Forro premium",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 12,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-twist-3-0-rainbow-gloss"
    },
    {
        id: 26,
        slug: "capacete-airoh-twist-3-0-color",
        name: "Capacete Airoh Twist 3.0 Color",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 2599.90,
        installments: "12x de R$ 216,66",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-twist-3-0-color-88511.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Branco", "Preto", "Amarelo"],
        description: "Capacete Airoh Twist 3.0 Color modelo sólido com cores vibrantes.",
        features: [
            "Cor sólida premium",
            "Casco em ABS reforçado",
            "Ventilação otimizada",
            "Peso reduzido",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 25,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-twist-3-0-color"
    },
    {
        id: 27,
        slug: "capacete-airoh-wraap-vision",
        name: "Capacete Airoh Wraap Vision",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 1999.90,
        installments: "12x de R$ 166,66",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-wraap-vision-98070.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Azul/Branco"],
        description: "Capacete Airoh Wraap Vision com design futurista e máxima proteção.",
        features: [
            "Design Vision exclusivo",
            "Casco em HRT",
            "Sistema de ventilação avançado",
            "Forro removível antibacteriano",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 19,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-wraap-vision"
    },
    {
        id: 28,
        slug: "capacete-airoh-twist-3-0-thunder",
        name: "Capacete Airoh Twist 3.0 Thunder",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 599.90,
        installments: "12x de R$ 49,99",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-twist-3-0-thunder-88527.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Preto/Amarelo"],
        description: "Capacete Airoh Twist 3.0 Thunder entrada de linha com excelente custo-benefício.",
        features: [
            "Excelente custo-benefício",
            "Casco em ABS",
            "Ventilação eficiente",
            "Forro removível",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 42,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-twist-3-0-thunder"
    },
    {
        id: 29,
        slug: "capacete-airoh-twist-3-0-dynasty",
        name: "Capacete Airoh Twist 3.0 Dynasty",
        brand: "Airoh",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 1177.90,
        installments: "12x de R$ 98,16",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-airoh-twist-3-0-dynasty-98049.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Azul/Vermelho"],
        description: "Capacete Airoh Twist 3.0 Dynasty com grafismo exclusivo e proteção premium.",
        features: [
            "Grafismo Dynasty exclusivo",
            "Casco em ABS reforçado",
            "Sistema de ventilação superior",
            "Forro antibacteriano removível",
            "Certificação ECE 22.06"
        ],
        rating: 5,
        reviews: 27,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-airoh-twist-3-0-dynasty"
    },
    // CAPACETES ASW
    {
        id: 30,
        slug: "capacete-asw-r1-mips-neo",
        name: "Capacete ASW R1 Mips Neo",
        brand: "ASW",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 1999.90,
        installments: "12x de R$ 166,66",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-asw-r1-mips-neo-82366.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Multicor"],
        description: "Capacete ASW R1 com sistema MIPS de proteção rotacional. Tecnologia de ponta para máxima segurança.",
        features: [
            "Sistema MIPS",
            "Casco em fibra de vidro",
            "Ventilação premium",
            "Forro removível",
            "Certificação DOT/ECE"
        ],
        rating: 5,
        reviews: 28,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-asw-r1-mips-neo"
    },
    {
        id: 31,
        slug: "capacete-asw-r1-mips-procarbon-cinetic",
        name: "Capacete ASW R1 Mips Procarbon Cinetic",
        brand: "ASW",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 1999.90,
        installments: "12x de R$ 166,66",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-asw-r1-mips-procarbon-cinetic-100188.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Preto/Azul"],
        description: "Capacete ASW R1 Procarbon com casco em fibra de carbono e sistema MIPS.",
        features: [
            "Casco em fibra de carbono",
            "Sistema MIPS",
            "Ultra leve",
            "Ventilação avançada",
            "Certificação DOT/ECE"
        ],
        rating: 5,
        reviews: 19,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-asw-r1-mips-procarbon-cinetic"
    },
    {
        id: 32,
        slug: "capacete-asw-r3-takker",
        name: "Capacete ASW R3 Takker",
        brand: "ASW",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 1599.90,
        installments: "12x de R$ 133,33",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-asw-r3-takker-101303.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Preto/Vermelho"],
        description: "Capacete ASW R3 Takker com design agressivo e proteção de alto nível.",
        features: [
            "Design Takker exclusivo",
            "Casco em ABS",
            "Ventilação otimizada",
            "Forro removível",
            "Certificação DOT"
        ],
        rating: 5,
        reviews: 15,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-asw-r3-takker"
    },
    {
        id: 33,
        slug: "capacete-asw-r3-pure",
        name: "Capacete ASW R3 Pure",
        brand: "ASW",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 2599.90,
        installments: "12x de R$ 216,66",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-asw-r3-pure-101173.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Branco"],
        description: "Capacete ASW R3 Pure com visual clean e acabamento premium.",
        features: [
            "Visual Pure minimalista",
            "Acabamento premium",
            "Casco em fibra",
            "Ventilação superior",
            "Certificação DOT/ECE"
        ],
        rating: 5,
        reviews: 22,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-asw-r3-pure"
    },
    {
        id: 34,
        slug: "capacete-asw-r1-mips-procarbon-blackout",
        name: "Capacete ASW R1 Mips Procarbon Blackout",
        brand: "ASW",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 3599.90,
        installments: "12x de R$ 299,99",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-asw-r1-mips-procarbon-blackout-80895.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Preto Fosco"],
        description: "Capacete ASW R1 Procarbon Blackout - topo de linha com casco em carbono e acabamento fosco.",
        features: [
            "Topo de linha ASW",
            "Casco 100% carbono",
            "Sistema MIPS",
            "Acabamento Blackout fosco",
            "Ultra leve - 1.100g",
            "Certificação DOT/ECE"
        ],
        rating: 5,
        reviews: 35,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-asw-r1-mips-procarbon-blackout"
    },
    {
        id: 35,
        slug: "capacete-asw-fusion-2-0-relay",
        name: "Capacete ASW Fusion 2.0 Relay",
        brand: "ASW",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 389.90,
        installments: "12x de R$ 32,49",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-asw-fusion-2-0-relay-79598.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Preto/Verde"],
        description: "Capacete ASW Fusion 2.0 Relay - excelente entrada de linha com ótimo custo-benefício.",
        features: [
            "Entrada de linha ASW",
            "Ótimo custo-benefício",
            "Casco em ABS",
            "Ventilação básica",
            "Certificação DOT"
        ],
        rating: 5,
        reviews: 58,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-asw-fusion-2-0-relay"
    },
    {
        id: 36,
        slug: "capacete-asw-r3-essence",
        name: "Capacete ASW R3 Essence",
        brand: "ASW",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 816.05,
        installments: "12x de R$ 68,00",
        discount: 0,
        freeShipping: true,
        images: [
            "https://www.mxparts.com.br/imagens_produtos/media/capacete-asw-r3-essence-101279.jpg"
        ],
        sizes: ["56 (S)", "58 (M)", "60 (L)", "62 (XL)"],
        colors: ["Multicor"],
        description: "Capacete ASW R3 Essence com grafismo moderno e proteção confiável.",
        features: [
            "Grafismo Essence",
            "Casco em ABS reforçado",
            "Ventilação eficiente",
            "Forro removível",
            "Certificação DOT"
        ],
        rating: 5,
        reviews: 31,
        inStock: true,
        sourceUrl: "https://www.mxparts.com.br/capacete-asw-r3-essence"
    },
    {
        id: 37,
        slug: "capacete-asw-r3-pointer-2027",
        name: "Capacete ASW R3 Pointer 2027",
        brand: "ASW",
        category: "Capacetes",
        subcategory: "Capacetes Motocross",
        priceOld: null,
        price: 197.90,
        installments: "10x de R$ 19,79",
        discount: 0,
        freeShipping: true,
        isNew: true,
        customPage: "produto-asw-r3.html",
        images: [
            "assets/products/r3/r3-01.jpg"
        ],
        sizes: ["P", "M", "G", "GG"],
        colors: ["21 opções de cores"],
        description: "Capacete ASW R3 Pointer 2027 desenvolvido para pilotos que exigem máxima segurança, conforto e desempenho nas trilhas, pistas de motocross e competições de enduro.",
        features: [
            "Casco em ABS de alta resistência",
            "Calota interna em EPS com 4 densidades",
            "Sistema de ventilação com 9 entradas e 6 saídas",
            "Forração removível, lavável e hipoalergênica",
            "Fecho com sistema Duplo D",
            "Pala semirrígida com ajuste de altura",
            "Homologação ECE 22.06",
            "Ideal para Motocross, Enduro e Trilha"
        ],
        rating: 5,
        reviews: 47,
        inStock: true,
        sourceUrl: ""
    }
];

// Função para buscar produto por slug
function getProductBySlug(slug) {
    return PRODUCTS.find(p => p.slug === slug);
}

// Função para buscar produto por ID
function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

// Função para filtrar produtos
function filterProducts(filters = {}) {
    let filtered = [...PRODUCTS];

    if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters.subcategory) {
        filtered = filtered.filter(p => p.subcategory === filters.subcategory);
    }
    if (filters.brand) {
        filtered = filtered.filter(p => p.brand === filters.brand);
    }
    if (filters.minPrice) {
        filtered = filtered.filter(p => p.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
        filtered = filtered.filter(p => p.price <= filters.maxPrice);
    }
    if (filters.freeShipping) {
        filtered = filtered.filter(p => p.freeShipping);
    }
    if (filters.hasDiscount) {
        filtered = filtered.filter(p => p.discount > 0);
    }

    return filtered;
}

// Função para formatar preço
function formatPrice(value) {
    return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Exportar para uso global
window.PRODUCTS = PRODUCTS;
window.getProductBySlug = getProductBySlug;
window.getProductById = getProductById;
window.filterProducts = filterProducts;
window.formatPrice = formatPrice;
