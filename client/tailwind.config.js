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
                'sub-background-color': '#f7f5f3',
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
                scaling: {
                    '0%': {
                        transform: 'scale(1)',
                        backgroundColor: '#9BF080',
                    },
                    '100%': {
                        transform: 'scale(3)',
                        backgroundColor: 'rgba(245,0,182,0)',
                    },
                },
            },
            animation: {
                textScrolling: 'textScrolling 20s linear infinite',
                shineToLetf: 'shine 0.75s',
                scaling: 'scaling 2s linear infinite',
            },
        },
    },
};

