import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d6efff',
          300: '#3498db',
          500: '#13496c',
        },
        neutral: {
          100: '#ffffff',
          200: '#f0f1f4',
          300: '#e2e3e9',
          400: '#d6d8e0',
          500: '#c5c7d3',
          600: '#9da0af',
          700: '#5c5f70',
          800: '#181e34',
        },
        danger: {
          300: '#b8143d',
        },
        success: {
          300: '#449e49',
        },
      },
      spacing: {
        33.75: '135px',
        87.5: '350px',
        217.5: '870px',
        292.5: '1170px',
      },
    },
  },
  plugins: [],
};
export default config;
