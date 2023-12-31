import type { Config } from 'tailwindcss';
import { black } from 'next/dist/lib/picocolors';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-JetBrains_Mono)', 'sans-serif']
            },
            colors: {
                sorcerer: {
                    '50': '#faf8fc',
                    '100': '#f3eef9',
                    '200': '#ebe0f4',
                    '300': '#dac7eb',
                    '400': '#c2a3dd',
                    '500': '#aa7ece',
                    '600': '#9d6fc1',
                    DEFAULT: '#9d6fc1',
                    '700': '#7e4ea2',
                    '800': '#6a4386',
                    '900': '#57376c',
                    '950': '#3a1f4c'
                },
                burntsquidward: {
                    '50': '#f4f6fa',
                    '100': '#e6eaf3',
                    '200': '#d2d8eb',
                    '300': '#b3bfdd',
                    '400': '#8e9ecc',
                    '500': '#7382be',
                    '600': '#616aaf',
                    '700': '#555ba0',
                    '800': '#4a4c83',
                    '900': '#3f4269',
                    '950': '#292a41',
                    DEFAULT: '#292a41'
                },
                manoverboard: {
                    '50': '#ecf4ff',
                    '100': '#dceaff',
                    '200': '#c0d8ff',
                    '300': '#9abdff',
                    '400': '#7295ff',
                    '500': '#516fff',
                    '600': '#3144fa',
                    '700': '#2534dd',
                    '800': '#212fb2',
                    '900': '#232f8c',
                    '950': '#0b0e2b',
                    DEFAULT: '#0b0e2b'
                },
                nebula: {
                    '50': '#ebf4ff',
                    '100': '#dbeaff',
                    '200': '#bed8ff',
                    '300': '#97bcff',
                    '400': '#6d94ff',
                    '500': '#4c6dff',
                    '600': '#2c42ff',
                    '700': '#2031e2',
                    '800': '#1d2db6',
                    '900': '#202e8f',
                    '950': '#06081a',
                    DEFAULT: '#06081a'
                },
                foundation: {
                    '50': '#f8f8f8',
                    '100': '#f2f2f2',
                    DEFAULT: '#f2f2f2',
                    '200': '#dcdcdc',
                    '300': '#bdbdbd',
                    '400': '#989898',
                    '500': '#7c7c7c',
                    '600': '#656565',
                    '700': '#525252',
                    '800': '#464646',
                    '900': '#3d3d3d',
                    '950': '#292929'
                },
                solaeclipse: {
                    '50': '#ffffff',
                    DEFAULT: '#ffffff',
                    '100': '#efefef',
                    '200': '#dcdcdc',
                    '300': '#bdbdbd',
                    '400': '#989898',
                    '500': '#7c7c7c',
                    '600': '#656565',
                    '700': '#525252',
                    '800': '#464646',
                    '900': '#3d3d3d',
                    '950': '#292929'
                },
                intelligence: {
                    '50': '#eef5ff',
                    '100': '#d9e7ff',
                    '200': '#bcd5ff',
                    '300': '#8ebbff',
                    '400': '#5996ff',
                    '500': '#3772ff',
                    DEFAULT: '#3772ff',
                    '600': '#1b4df5',
                    '700': '#1439e1',
                    '800': '#172fb6',
                    '900': '#192d8f',
                    '950': '#141d57'
                },
                matcha: {
                    '50': '#f4faf3',
                    '100': '#e4f5e3',
                    '200': '#caeac8',
                    '300': '#a0d89d',
                    '400': '#73c170',
                    DEFAULT: '#73c170',
                    '500': '#48a245',
                    '600': '#378534',
                    '700': '#2e692c',
                    '800': '#285427',
                    '900': '#224522',
                    '950': '#0e250f'
                },
                yoda: {
                    '50': '#edfcf5',
                    '100': '#d3f8e4',
                    '200': '#abefce',
                    '300': '#74e1b3',
                    '400': '#3ccb93',
                    '500': '#18b17a',
                    '600': '#0ea371',
                    DEFAULT: '#0ea371',
                    '700': '#0a7251',
                    '800': '#0a5b42',
                    '900': '#0a4a37',
                    '950': '#042a20'
                },
                pumpkin: {
                    '50': '#fef4f2',
                    '100': '#fde8e3',
                    '200': '#fdd4cb',
                    '300': '#fab6a7',
                    '400': '#f58b74',
                    '500': '#ec6a4e',
                    DEFAULT: '#ec6a4e',
                    '600': '#d8492a',
                    '700': '#b63a1f',
                    '800': '#96331e',
                    '900': '#7d301f',
                    '950': '#44150b'
                },
                reveille: {
                    '50': '#fff0f0',
                    '100': '#ffdddd',
                    '200': '#ffc1c1',
                    '300': '#ff9696',
                    '400': '#ff5a5a',
                    '500': '#ff2727',
                    '600': '#fb0707',
                    '700': '#d40101',
                    '800': '#ae0606',
                    '900': '#900c0c',
                    '950': '#500000',
                    DEFAULT: '#500000'
                },
                sealmeat: {
                    '50': '#f5f7f8',
                    '100': '#eeeff1',
                    '200': '#dfe3e6',
                    '300': '#cbd0d6',
                    '400': '#b5bbc4',
                    '500': '#a2a6b2',
                    '600': '#8c909f',
                    '700': '#7a7d8b',
                    DEFAULT: '#7a7d8b',
                    '800': '#636570',
                    '900': '#53555c',
                    '950': '#303136'
                },
                goldisbest: {
                    '50': '#fcf9ea',
                    '100': '#f8f2c9',
                    '200': '#f3e495',
                    '300': '#ebcf59',
                    '400': '#e3b92c',
                    '500': '#d2a01e',
                    DEFAULT: '#d2a01e',
                    '600': '#b77d17',
                    '700': '#925b16',
                    '800': '#79491a',
                    '900': '#683c1b',
                    '950': '#3c1f0c'
                },
                slay: {
                    '50': '#fdf2f8',
                    '100': '#fce7f3',
                    '200': '#fbcfe8',
                    '300': '#f8a9d5',
                    '400': '#f373b7',
                    '500': '#ea4a9a',
                    '600': '#dc3882',
                    DEFAULT: '#dc3882',
                    '700': '#bc1a5e',
                    '800': '#9c184e',
                    '900': '#821944',
                    '950': '#4f0824'
                }
            }
        }
    },
    plugins: []
};
export default config;
