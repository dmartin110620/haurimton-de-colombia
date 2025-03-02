module.exports = {
  plugins: [
    require("@tailwindcss/postcss"), // Use the new package instead of "tailwindcss"
    require("postcss-merge-rules"),
    require("autoprefixer"),
  ],
};
