import type {Config} from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
    	extend: {
    		colors: {
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			text: {
    				DEFAULT: 'hsl(var(--text))',
    				foreground: 'hsl(var(--text-foreground))'
    			},
    			background: {
    				DEFAULT: 'hsl(var(--background))',
    				foreground: 'hsl(var(--foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			white: {
    				a0: '#ffffff',
    				a10: '#faf7f9',
    				a20: '#f5eff3',
    				a30: '#efe7ee',
    				a40: '#eae0e8',
    				a50: '#e5d8e2',
    				a60: '#b2a9b0',
    				a70: '#837b81',
    				a80: '#565155',
    				a90: '#2c2a2c',
    				a100: '#000000'
    			},
    			'primary-100': '#1028FF',
    			'primary-200': '#0076df',
    			'primary-300': '#1390ff',
    			'accent-100': '#ff9200',
    			'accent-200': '#ff9200',
    			'accent-300': '#ff9200',
    			'background-100': '#f9fbfd',
    			'background-200': '#e6eef7',
    			'background-300': '#d3e1f0',
    			'text-100': '#001020',
    			'text-200': '#002a53',
    			'text-300': '#004386',
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			gradient: 'linear-gradient(90deg, #7517e2 0%, #1799e2 100%)',
				purple: {
					custom: '#4423E60D', 
				  },
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
