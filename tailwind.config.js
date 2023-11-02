/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"media",
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
     
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors:{
          "red":"#CE151B",
          "black-2":"#303030",
          "red-dark":"#412121",
          "black":"#000000"
        },
        textColor:{
          "red":"#CE151B",
          "black-2":"#303030",
          "red-dark":"#412121",
          "black":"#000000"

        },
        fontFamily:{
          "martel":["martel","haskoy"],
          "haskoy":["haskoy","martel"],
          "martel-semibold":["martel-semibold","haskoy"],
          "haskoy-semibold":["haskoy-semibold","martel"],
          "martel-bold":["martel-bold","haskoy"],
          "haskoy-bold":["haskoy-bold","martel"],
          "haskoy-light":["haskoy-light","martel"],
          "martel-extrabold":["martel-extrabold","haskoy"],
          "martel-black":["martel-black","haskoy"],

          
        }
      },
    },
    plugins: [],
  }
  