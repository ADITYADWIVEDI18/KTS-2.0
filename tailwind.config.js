module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translate(-2%,2%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            transform :'scale(1.1)',
            // transform: 'skew(-40deg,-30deg)',
          },
          '50%': {
            transform: 'translate(5%,-6%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            transform :'scale(1.0)',
            // transform: 'skew(40deg,30deg)',
          },
        },
      },
      animation: {
        bounce: 'bounce 5s infinite',
      },
    },
    
  },
  plugins: [],
};
