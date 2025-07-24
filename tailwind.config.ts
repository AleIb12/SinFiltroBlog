import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-press-start)', '"Press Start 2P"', 'Courier New', 'monospace'],
        headline: ['var(--font-press-start)', '"Press Start 2P"', 'monospace'],
        pixel: ['var(--font-press-start)', '"Press Start 2P"', 'Courier New', 'monospace'],
        code: ['var(--font-press-start)', '"Press Start 2P"', 'Courier New', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'pixel-bounce': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)', 
            opacity: '0.3' 
          },
          '25%': { 
            transform: 'translateY(-16px) scale(1.1)', 
            opacity: '0.6' 
          },
          '50%': { 
            transform: 'translateY(-8px) scale(1)', 
            opacity: '0.4' 
          },
          '75%': { 
            transform: 'translateY(-24px) scale(1.2)', 
            opacity: '0.8' 
          },
        },
        'pixel-scroll': {
          '0%': { 
            backgroundPosition: '0 0, 8px 8px, 4px 4px, 0 0, 0 0' 
          },
          '100%': { 
            backgroundPosition: '16px 16px, 24px 24px, 20px 20px, 8px 8px, 8px 8px' 
          },
        },
        'pixel-glow': {
          '0%': { 
            transform: 'scale(1)', 
            opacity: '0.5' 
          },
          '100%': { 
            transform: 'scale(1.1)', 
            opacity: '0.8' 
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pixel-bounce': 'pixel-bounce 4s ease-in-out infinite',
        'pixel-scroll': 'pixel-scroll 20s linear infinite',
        'pixel-glow': 'pixel-glow 10s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
