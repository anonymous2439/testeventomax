import Layout from "../components/layout/Layout";
import Section from "../components/Section";

export default function ThankYou() {
	return (
		<Layout>
			<Section spacing="widest" container="spacingWidest">
				<header className="mt-20 mb-10">
					<h1 className="text-center">Thank you for submitting a response!</h1>
					<h2 className="text-center">
						We will get back to you as soon as possible.
					</h2>
				</header>
			</Section>
		</Layout>
	);
}
