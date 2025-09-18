import tailwindcssTypography from '@tailwindcss/typography';

const config = {
  plugins: [
    ["@tailwindcss/postcss", { 
      plugins: [tailwindcssTypography] 
    }]
  ],
};

export default config;
