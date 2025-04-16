import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A0B0',   // Turquesa principal
        secondary: '#0D47A1', // Azul oscuro
        accent: '#64C7CC',    // Turquesa claro (acento)
        light: '#FFFFFF',      // Blanco
        gray: {            // Tonos de gris para texto/fondos
          DEFAULT: '#6B7280',
          light: '#F3F4F6', // Gris claro para footer
          medium: '#9CA3AF',
          dark: '#1F2937',
        },
        // Puedes añadir más colores aquí si los necesitas
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config 