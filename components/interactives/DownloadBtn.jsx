export default function Download({ title, display, size, className }) {
	let linkStyle = {
		primary: "primary",
		secondary: "secondary",
		tertiary: "tertiary",
		dark: "dark",

		fit: "fit",
		full: "full"
	};

	const downloadBrochure = () => {
		window.open(
			"https://drive.google.com/file/d/1Q8j84KxTLqTB9G6nkFfMhD6CG0iPs8hY/view?usp=sharing"
		);
	};

	return (
		<div className={className}>
			<button
				className={`${linkStyle[display]} ${linkStyle[size]}`}
				onClick={downloadBrochure}
				value="download"
			>
				{title}
			</button>
		</div>
	);
}
