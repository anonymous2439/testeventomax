export default function FormBtn({ type, title, display, size }) {
	let linkStyle = {
		primary: "primary",
		secondary: "secondary",
		tertiary: "tertiary",

		fit: "fit",
		full: "full"
	};

	return (
		<div>
			<button
				type={type}
				className={`${linkStyle[display]} ${linkStyle[size]}`}
			>
				{title}
			</button>
		</div>
	);
}
