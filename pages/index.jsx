

import SEO from "@bradgarropy/next-seo";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import AboutHome from "../components/sections/home/AboutHome";
import OurField from "../components/sections/home/OurField";

import HowItWorks from "../components/sections/home/HowItWorks";
// import CostBreakdown from "../components/sections/home/CostBreakdown";
import ChooseUs from "../components/sections/home/ChooseUs";



export default function Index() {
	return (
		<Layout>
			
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
