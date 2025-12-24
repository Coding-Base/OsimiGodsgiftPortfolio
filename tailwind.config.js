// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New dark theme colors
        'dark-primary': '#0A0A0A',
        'dark-secondary': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-card': '#282828',
        'accent-cyan': '#06B6D4',
        'accent-emerald': '#10B981',
        'accent-indigo': '#6366F1',
        'text-primary': '#F8FAFC',
        'text-secondary': '#A1A1AA',
        // Keep original colors for compatibility
        primary: '#3B82F6',
        secondary: '#1E40AF',
        accent: '#10B981',
        dark: '#1F2937',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 1.5s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'progress': 'progress 1s ease-in-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0.5deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-0.5deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        progress: {
          '0%': { width: '0%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)' },
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
