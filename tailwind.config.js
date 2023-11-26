/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      orange: {
        'main': "#ff7a38",
        'status': "#f76540",
      },
      green: {
        "status": "#5ab307"
      },
      yellow: {
        "status": "#fade41"
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      boxShadow: {
        "profile-shadow": '20px 20px 20px -30px'
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        gradient: "gradient 5s ease infinite",
        "gradient-profile": "gradient-profile 5s ease infinite",
        'border-orange': 'border-orange 4s linear infinite',
        'border-purple': 'border-purple 4s linear infinite',
        'border-gray': 'border-gray 4s linear infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        gradient: {
          "0%": {
            "background-position": "100% 50%",
          },
          "50%": {
            "background-position": "0% 50%",
          },
          "100%": {
            "background-position": "100% 50%",
          },
        },
        'gradient-profile': {
          "0%": {
            "background-position": "100% 100%",
          },
          "50%": {
            "background-position": "100% 0%",
          },
          "100%": {
            "background-position": "100% 100%",
          },
        },
        'border-orange': {
          "0%": {
            "border-color": "#b56a16"
          },
          "50%": {
            "border-color": "#935f00"
          },
          "100%": {
            "border-color": "#b56a16"
          }
        },
        'border-gray': {
          "0%": {
            "border-color": "#1f2937"
          },
          "50%": {
            "border-color": "#6b7280"
          },
          "100%": {
            "border-color": "#1f2937"
          }
        },
        'border-purple': {
          "0%": {
            "border-color": "#7943bf"
          },
          "50%": {
            "border-color": "#f88da9"
          },
          "100%": {
            "border-color": "#7943bf"
          }
        },
      },
      backgroundSize: {
        xp: "300% 100%",
        profile: "100% 300%"
      },
      fontFamily: {
        sans: ['"Roboto"', '"sans-serif"'],
      },
      dropShadow: {
        profile: '0px -1px 6px black'
      }
    },
  },
  plugins: [],
};
