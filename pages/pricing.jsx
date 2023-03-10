import SEO from "@bradgarropy/next-seo";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import PricingBanner from "../components/sections/pricing/PricingBanner";
import Price from "../components/sections/pricing/Prices";

export default function Pricing() {
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg" ></link>
			</Head>
			<SEO
				title="EventoMax | Pricing"
				description="Our offshore services are negotiable with an assurance of high-quality service."
				keywords={["Location", "Services we offer", "Outcomes", "Objectives"]}
			/>
			<PricingBanner />
			<Price />
		</Layout>
	);
}
