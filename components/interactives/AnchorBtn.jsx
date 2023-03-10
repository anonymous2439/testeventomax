import Link from "next/link";

export default function LinkBtn({ href, title, display, size, className }) {
	let linkStyle = {
		primary: "primary",
		secondary: "secondary",
		tertiary: "tertiary",
		dark: "dark",

		fit: "fit",
		full: "full"
	};

	return (
		<div className={className}>
			<a
				href={href}
				className={`${linkStyle[display]} ${linkStyle[size]}`}
				download
			>
				{title}
			</a>
		</div>
	);
}
