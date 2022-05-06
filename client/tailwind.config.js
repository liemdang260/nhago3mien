module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1400px',
            },
            colors: {
                'primary-color': '#603814',
                color: '#333',
            },
            container: {
                screens: {
                    DEFAULT: '100%',
                    sm: '576px',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                },
                center: true,
            },
            fontFamily: {
                edwardianKT: ['EdwardianKT', 'cursive'],
                nunito: ['Nunito', 'cursive'],
            },
            keyframes: {
                textScrolling: {
                    '0%': { transform: 'translateX(138%)' },
                    '100%': { transform: 'translateX(-105%)' },
                },
                shine: {
                    '100%': { left: '125%' },
                },
            },
            animation: {
                textScrolling: 'textScrolling 20s linear infinite',
                shineToLetf: 'shine 0.75s',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

