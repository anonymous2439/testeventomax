export default function Section({ children, container, spacing, className }) {
	let sectionStyle = {
		widest: "max-w-screen-2xl",
		wider: "max-w-screen-xl",
		wide: "max-w-screen-lg",

		spacingWidest: "py-10 sm:py-20",
		spacingWider: "py-6 sm:py-12",
		spacingNavigation: "py-4"
	};

	return (
		<section
			className={`mx-auto px-4 ${sectionStyle[spacing]} ${sectionStyle[container]} ${className}`}
		>
			{children}
		</section>
	);
}
