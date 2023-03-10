import Section from "../components/Section";
import Head from "next/head";
import SEO from "@bradgarropy/next-seo";
import Layout from "../components/layout/Layout";
import ServicesBanner from "../components/sections/services/ServicesBanner";
import Grow from "../components/sections/services/Grow";
import BusinessAngels from "../components/sections/services/BusinessAngels";
import Advantages from "../components/sections/services/Advantages";
import TheServices from "../components/sections/services/TheServices";
import GetInTouch from "../components/sections/services/GetInTouch";

export default function Services() {
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg"></link>
			</Head>
			<SEO
				title="EventoMax | Services"
				description="Need help to grow your business? EventoMax is a two-in-one service provider for offshoring/outsourcing and business process management(BPM)"
				keywords={[
					"Customer Service",
					"Customer Support",
					"Chat Support",
					"Tech Support",
					"Support Staff",
					"Lead Generation Sourcing",
					"Virtual Assistance",
					"Digital Marketing",
					"Sales",
					"Bookkeeping",
					"Governance, Risk & Compliance",
					"Credit Underwriting Process",
					"Finance and Accounting",
					"HR Lifecycle Management",
					"Customer Onboarding",
					"Digitization Services",
					"Healthcare Services",
					"Assisted Sales Competency",
					"Contact Centre",
					"Integrated Business Process Services"
				]}
			/>
			<ServicesBanner />
			<Grow />
			<BusinessAngels />
			<Advantages />
			<TheServices />
			<GetInTouch />
		</Layout>
	);
}
