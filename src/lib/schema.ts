export function generateBlogSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://sinfiltroblogue.vercel.app"
        },
        "name": "Sin Filtro Blog",
        "description": "Blog personal de Alisha Ibarra Bello sobre skincare, moda y vida nocturna. Viviendo sin filtros con mucho estilo.",
        "url": "https://sinfiltroblogue.vercel.app",
        "author": {
            "@type": "Person",
            "name": "Alisha Ibarra Bello",
            "url": "https://instagram.com/ali.ibarrabello",
            "sameAs": [
                "https://instagram.com/ali.ibarrabello",
                "https://wa.me/692616005",
                "https://t.me/Alisha_Ibarra"
            ]
        },
        "publisher": {
            "@type": "Person",
            "name": "Alisha Ibarra Bello",
            "url": "https://instagram.com/ali.ibarrabello"
        },
        "dateCreated": "2025-01-01",
        "dateModified": new Date().toISOString(),
        "inLanguage": "es-ES",
        "genre": ["Lifestyle", "Beauty", "Fashion", "Entertainment"],
        "keywords": "blog, skincare, moda, fiesta, beauty, lifestyle, belleza, cuidado facial, tendencias, vida nocturna",
        "about": [
            {
                "@type": "Thing",
                "name": "Skincare",
                "description": "Rutinas, productos y consejos de cuidado facial"
            },
            {
                "@type": "Thing",
                "name": "Moda",
                "description": "Tendencias, compras y estilo personal"
            },
            {
                "@type": "Thing",
                "name": "Vida Nocturna",
                "description": "Vida nocturna, playlist y tips de fiesta"
            }
        ]
    }
}

export function generatePersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Alisha Ibarra Bello",
        "givenName": "Alisha",
        "familyName": "Ibarra Bello",
        "url": "https://sinfiltroblogue.vercel.app",
        "sameAs": [
            "https://instagram.com/ali.ibarrabello",
            "https://wa.me/692616005",
            "https://t.me/Alisha_Ibarra"
        ],
        "jobTitle": "Blogger",
        "description": "Creadora de contenido sobre skincare, moda y vida nocturna. Viviendo sin filtros con mucho estilo.",
        "knowsAbout": ["Skincare", "Moda", "Belleza", "Vida Nocturna", "Lifestyle"],
        "owns": {
            "@type": "Blog",
            "name": "Sin Filtro Blog",
            "url": "https://sinfiltroblogue.vercel.app"
        }
    }
}

export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sin Filtro Blog",
        "url": "https://sinfiltroblogue.vercel.app",
        "description": "Blog personal de Alisha Ibarra Bello sobre skincare, moda y vida nocturna.",
        "inLanguage": "es-ES",
        "author": {
            "@type": "Person",
            "name": "Alisha Ibarra Bello"
        },
        "potentialAction": {
            "@type": "ReadAction",
            "target": "https://sinfiltroblogue.vercel.app"
        }
    }
}
