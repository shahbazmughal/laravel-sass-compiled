const mix = require('laravel-mix');
const path = require('path');  // Import the 'path' module

mix.postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer'),
])
.options({
    postCssConfig: path.resolve(__dirname, 'postcss.config.cjs')  // Use 'path' to resolve config file
});
