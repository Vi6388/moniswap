import type { Config } from 'tailwindcss';

const { nextui } = require('@nextui-org/react');

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'splite-background':
          'linear-gradient(to bottom, #FFF0D9 0%, #FFF0D9 40%, #FABD61 40%, #FABD61 100%)',
        'dark-base':
          'linear-gradient(40.63deg, #C15638 11.99%, #4E2135 42.52%, #0D1C31 70.58%)',
      },
      backgroundColor: {
        base: '#FFF0D9',
        darkFooter: 'rgb(15 23 42)',
        primary: '#F59855',
        'right-panel': '#F6F5F5',
        content1: '#F59855',
        content2: '#FC8415',
        content3: '#ABABAB',
        black1: '#222121',
        black2: '#111111',
        black3: '#1E1E1E',
        content4: '#EAE9E4',
        content5: '#7D7D7D',
        content6: '#FAF9F9',
        divider: "#BEBEBE",        
        'exchange-button': '#47473F',
        'dark-card': 'rgb(255 255 255 / 0.05)',
        bookmark: 'rgb(6 14 26)',
        partDivider: '#F1F1F1',
        progressBar: '#E2E2E2',
      },
      colors: {
        navBorder: '#B2A187',
        primary: '#F59855',
        content1: '#515151',
        black1: '#222121',
        content2: '#CFCFCF',
        content3: '#494646',
        content5: '#7D7D7D',
        content6: '#A3A3A3',
        content7: '#ABABAB',
        content8: '#9A9888',
        arrow: '#CFCFCF',
        'card-content-text': '#494646',
      },
      borderColor: {
        content1: '#ABABAB',
        content2: '#F6F5F5',
        inputBorder: '#BEBEBE',
      },
      boxShadow: {
        shadow1:
          '0 3px 3px 0px rgb(0 0 0 / 0.1), 0 8px 4px -2px rgb(0 0 0 / 0.1);',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
