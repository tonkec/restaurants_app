/** @type {import('tailwindcss').Config} */
// Color palette https://coolors.co/palette/fffcf2-ccc5b9-403d39-252422-eb5e28
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                orange: '#EB5E28',
                black: '#252422',
                white: '#FFFCF2',
                gray: '#CCC5B9',
                brown: '#403D39',
            },
            screens: {
                xs: '375px',
            },
        },
    },
    plugins: [],
};
