module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-color': '#603814',
            },
            container: {
                screens: {
                    DEFAULT: '100%',
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1200px',
                },
                center: true,
            },
            fontFamily: {
                edwardianKT: ['EdwardianKT', 'cursive'],
            },
            keyframes: {
                shine: {
                    '100%': { left: '125%' },
                },
            },
            animation: {
                shineToLetf: 'shine 0.75s',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

