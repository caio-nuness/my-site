/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "mygrey-150": "rgba(217,217,217,0.15)",
        "mygrey-200": "rgba(217,217,217,0.2)",
        "mygrey-250": "rgba(217,217,217,0.25)",
        "mygrey-300": "rgba(217,217,217,0.3)",
        "mygrey-350": "rgba(217,217,217,0.35)",
        "mywhite-400": "rgba(255,255,255,0.4)",
        "mygrey-500": "rgba(217,217,217,0.5)",
        "mygrey-700": "rgba(217,217,217,0.7)",
        "mywhite-800": "rgba(255,255,255,0.8)",
        "mywhite-full": "rgba(255,255,255,1)",

        "myblue-800": "rgba(0, 224, 255, 0.8)",
        "myblue-full": "rgba(0, 224, 255, 1)",

        "mygreen-200": "rgba(7, 255, 32, 0.2)",
        "mygreen-400": "rgba(7, 255, 32, 0.4)",
        "mygreen-700": "rgba(7, 255, 32, 0.7)",
        "mygreen-full": "rgba(7, 255, 32, 0.8)",
      },
      fontFamily: {
        'sans': ['Roboto']
      },
      fontWeight: {
        thin: 100,
        normal: 400,
        bold: 700,
      },
      screens: {
        'mobile-p': '320px',
        'mobile-m': '375px',
        'mobile-g': '425px',
        'tablet': '768px',
        'leptop': '1024px',
        'leptop-g': '1440px',
      }
    },
  },
  plugins: [],
}