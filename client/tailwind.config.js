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
                textScrolling: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(400%)' },
                },
            },
            animation: {
                textScrolling: 'textScrolling 20s linear infinite',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

