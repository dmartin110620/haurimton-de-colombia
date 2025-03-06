export default {
    content: [
    "./src/**/*.html",    // Includes all HTML files inside 'src'
    "./src/js/**/*.js",   // Includes all JS files inside 'src/js'
    "./src/styles/**/*.css", // Includes all CSS files if needed
    ],
    theme: {
    extend: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
    },
    plugins: [],
};