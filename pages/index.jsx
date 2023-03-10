import Head from "next/head";

import SEO from "@bradgarropy/next-seo";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import AboutHome from "../components/sections/home/AboutHome";
import OurField from "../components/sections/home/OurField";

import HowItWorks from "../components/sections/home/HowItWorks";
// import CostBreakdown from "../components/sections/home/CostBreakdown";
import ChooseUs from "../components/sections/home/ChooseUs";

const indexSchema = {
	"@context": "http://schema.org",
	"@type": "LocalBusiness",
	name: "EventoMax",
	image:
		"https://www.eventomax.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-field-feature.6a42fe07.png&w=1920&q=75",
	telephone: "+(032) 344-5835",
	email: "hello@eventomax.com",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Support BPO Bldg., Hernan Cortes",
		addressLocality: "Mandaue City",
		addressRegion: "Cebu",
		addressCountry: "PH",
		postalCode: "6014"
	},
	openingHoursSpecification: {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: { "@type": "DayOfWeek", name: "Monday - Friday" },
		opens:
			"Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
		closes:
			"Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30"
	},
	url: "https://www.google.com/webmasters/markup-helper/u/0/tagger?sourceId=107853651&hl=en_GB"
};

export default function Index() {
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg"></link>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchema) }}
				/>
			</Head>
			<SEO
				title="EventoMax | Offshore Outsourcing & BPM"
				description="Offshore Outsourcing and BPM services company! We focus on what the business needs. EventoMax is a two-in-one service provider for offshoring/outsourcing and business process management (BPM)."
				keywords={[
					"Offshoring",
					"Ooutsourcing",
					"BPM Services",
					"Customer Service",
					"Customer Support",
					"Tech Support",
					"Support Staff",
					"Virtual Assistance",
					"Digital Marketing",
					"Bookkeeping",
					"Sales",
					"Lead Generation Outsourcing",
					"Chat Support",
					"Governance",
					"Risk & Compliance",
					"Credit Underwriting Process",
					"Finance & Accounting",
					"HR Lifecycle Management",
					"Customer Onboarding",
					"Digitization Services",
					"Healthcare Services",
					"Assisted Sales Competency",
					"Contact Centre",
					"Integrated Business Process"
				]}
			/>
			<Banner />
			<AboutHome />
			<OurField />
			<HowItWorks />
			{/* <CostBreakdown /> */}
			<ChooseUs />
		</Layout>
	);
}
