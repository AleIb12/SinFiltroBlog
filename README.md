# 🌸 Sin Filtro Blog

Un blog personal elegante y moderno enfocado en skincare, moda y vida nocturna. Construido con Next.js y diseñado sin filtros, con mucho estilo.

> ✨ **Creado por Alisha Ibarra Bello** - Porque la vida es demasiado corta para vivir con filtros

## ✨ Características Principales

- 🎨 **Diseño Moderno**: Cartas rediseñadas sin imágenes que mantienen su atractivo visual
- 📱 **Totalmente Responsive**: Experiencia perfecta en todos los dispositivos
- 🏷️ **Contenido Categorizado**: Posts organizados por temas (Skincare, Moda, Fiesta)
- 🎭 **Interfaz Elegante**: Gradientes, animaciones y transiciones suaves
- 🌈 **Paleta de Colores Vibrante**: Rosa vibrante con acentos coral
- 💫 **Componentes Interactivos**: Hover effects y animaciones micro-interactivas
- 🔗 **Integración Social**: Enlaces a redes sociales (Instagram, WhatsApp, Telegram)

## 🎯 Secciones del Blog

### 📝 Categorías de Posts
- **Skincare**: Rutinas, productos y consejos de cuidado facial
- **Moda**: Tendencias, compras y estilo personal
- **Fiesta**: Vida nocturna, playlist y tips de fiesta

### 🖼️ Galería de Momentos
- Tarjetas temáticas con gradientes personalizados
- Íconos y emojis representativos para cada categoría
- Carousel interactivo con controles elegantes
- Diseño sin imágenes externas pero visualmente atractivo

### 💖 Favoritos del Mes
- Productos recomendados con diseño especial
- Enlaces directos de compra
- Sistema de calificación visual

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15.3.3
- **Styling**: Tailwind CSS + shadcn/ui
- **Iconos**: Lucide React
- **Componentes**: Radix UI primitives
- **Animaciones**: Tailwind CSS + CSS transitions
- **Carousel**: Embla Carousel React
- **Tipado**: TypeScript
- **Fonts**: Google Fonts (Belleza + PT Sans)

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/AleIb12/SinFiltroBlog.git

# Navegar al directorio
cd SinFiltroBlog

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Scripts Disponibles
```bash
# Desarrollo con Turbopack
npm run dev

# Desarrollo con Genkit AI
npm run genkit:dev
npm run genkit:watch

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint

# Verificación de tipos
npm run typecheck
```

## 🎨 Guía de Estilo

### Colores Principales
- **Primario**: Rosa vibrante (#FF69B4) - Personalidad divertida y energética
- **Fondo**: Rosa muy claro (#FAF0E4) - Atmósfera suave e invitadora
- **Acento**: Coral (#FF8071) - Botones de acción y destacados
- **Texto**: Variaciones de gris para legibilidad óptima

### Tipografía
- **Títulos**: 'Belleza' (sans-serif) - Personalidad en títulos
- **Cuerpo**: 'PT Sans' (sans-serif) - Legibilidad y sensación moderna

### Componentes de Diseño
- Bordes punteados para un look casual
- Gradientes sutiles en las cartas
- Efectos de hover interactivos
- Backdrop blur para elementos flotantes
- Iconos temáticos para cada categoría

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**: sm, md, lg, xl siguiendo Tailwind CSS
- **Grid Adaptativo**: 1 columna en mobile, 2-3 en desktop
- **Navegación**: Menú colapsible y controles táctiles

## 🚀 Características Técnicas

### Rendimiento
- **Turbopack**: Desarrollo rápido con hot reload
- **Optimización de imágenes**: Next.js Image component con formatos modernos (AVIF, WebP)
- **Lazy Loading**: Carga diferida de contenido y componentes
- **Code Splitting**: Separación automática de código
- **Cache Optimization**: Headers de cache optimizados para recursos estáticos
- **Minificación**: SWC minifier para JavaScript optimizado
- **Tree Shaking**: Eliminación de código no utilizado
- **Gzip Compression**: Compresión automática de archivos
- **Font Display Swap**: Carga optimizada de fuentes
- **Critical CSS**: Estilos críticos inline para primera carga

### SEO Optimizado
- **Meta Tags Completos**: Title, description, keywords, author
- **Open Graph**: Integración completa para redes sociales
- **Twitter Cards**: Metadatos optimizados para Twitter
- **Schema Markup**: JSON-LD structured data (Blog, Person, Website)
- **Sitemap XML**: Generación automática de sitemap
- **Robots.txt**: Configuración de crawlers de búsqueda
- **Canonical URLs**: URLs canónicas para evitar contenido duplicado
- **Alt Text**: Textos alternativos para imágenes
- **Semantic HTML**: Estructura semántica correcta
- **Core Web Vitals**: Optimizado para métricas de Google

### Accesibilidad
- **ARIA Labels**: Etiquetas descriptivas para screen readers
- **Keyboard Navigation**: Navegación completa por teclado
- **Screen Reader**: Compatible con lectores de pantalla
- **Contraste**: Colores que cumplen estándares WCAG 2.1
- **Focus Management**: Manejo adecuado del foco
- **Reduced Motion**: Respeto a preferencias de movimiento reducido

## 🔧 Estructura del Proyecto

```
SinFiltroBlog/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globales
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página principal
│   ├── components/
│   │   ├── ui/              # Componentes de UI reutilizables
│   │   ├── contact-form.tsx # Formulario de contacto
│   │   └── loading-screen.tsx # Pantalla de carga
│   ├── hooks/               # Hooks personalizados
│   ├── lib/                 # Utilidades y helpers
│   └── ai/                  # Integración con AI (Genkit)
├── docs/
│   └── blueprint.md         # Documentación del diseño
├── tailwind.config.ts       # Configuración de Tailwind
├── next.config.ts          # Configuración de Next.js
└── components.json         # Configuración de shadcn/ui
```

## 🎪 Características Especiales

### Cartas Rediseñadas
- **Sin Imágenes**: Diseño hermoso usando solo elementos CSS
- **Iconos Temáticos**: Diferentes iconos para cada categoría
- **Gradientes**: Fondos con gradientes sutiles
- **Animaciones**: Efectos de hover y transiciones suaves
- **Elementos Decorativos**: Líneas, badges y elementos visuales
- **Contenido Expandible**: Desplegables con información completa de cada artículo

### Galería de Momentos
- **Tarjetas Temáticas**: Cada momento tiene su propia identidad visual
- **Gradientes Personalizados**: Colores únicos para cada categoría
- **Íconos Dinámicos**: Representaciones visuales de cada tipo de contenido
- **Carousel Mejorado**: Navegación fluida con indicadores visuales
- **Emojis Contextuales**: Elementos divertidos que complementan el tema

### Avatar Personalizado
- **Iniciales Elegantes**: "AIB" con tipografía exclusiva
- **Círculos Concéntricos**: Diseño en capas con gradientes
- **Elementos Flotantes**: Sparkles y corazones animados
- **Badges Temáticos**: Identificadores para cada área de expertise

### Interactividad
- **Hover Effects**: Transformaciones y cambios de color
- **Micro-animaciones**: Movimientos sutiles en botones y elementos
- **Loading Screen**: Pantalla de carga con animación
- **Transitions**: Transiciones suaves entre estados
- **Desplegables**: Artículos completos con contenido expandible

## 🤝 Contribución

Este es un proyecto personal, pero las sugerencias y mejoras son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Creadora**: Alisha Ibarra Bello 💕
- **Blog**: Sin Filtro - Mi mundo sin filtros
- **Instagram**: [@ali.ibarrabello](https://instagram.com/ali.ibarrabello)
- **WhatsApp**: [Contáctame](https://wa.me/692616005)
- **Telegram**: [@Alisha_Ibarra](https://t.me/Alisha_Ibarra)
- **GitHub**: [@AleIb12](https://github.com/AleIb12)
- **Proyecto**: [SinFiltroBlog](https://github.com/AleIb12/SinFiltroBlog)

---

*Hecho con 💖 por Alisha Ibarra Bello - Una entusiasta que vive sin filtros*
