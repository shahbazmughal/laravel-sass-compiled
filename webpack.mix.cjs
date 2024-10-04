const mix = require('laravel-mix');
const path = require('path');  // Import the 'path' module

// Compile main app.scss
mix.sass('resources/scss/app.scss', 'public/css');

// Compile dashboard.scss for the dashboard page
mix.sass('resources/scss/dashboard.scss', 'public/css');

// Other mix settings
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ])
    .version();