/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFDB19",
				secondary: "#E9BB3F",
				tertiary: "#8e793e",
				quaternary: "#ad974f",
				white2: "#fafafa",
				white3: "#f9f9f9",
				grey: "#F6F6F6",
				darkGrey: "#1F1F1F",
				footerGrey: "#666666",
				footerBorder: "#423E3E",
				grey3: "#595959",
				grey4: "#eaeaea"
			}
		},
		screens: {
			xs: "475px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px"
			// => @media (min-width: 1536px) { ... }
		}
	},
	plugins: []
};
