import Image from "next/image";
import SEO from "@bradgarropy/next-seo";

import Section from "../components/Section";
import Layout from "../components/layout/Layout";
import LinkBtn from "../components/interactives/LinkBtn";
import Featured404 from "../images/icons/404-featured.svg";

export default function ThankYou() {
	return (
		<Layout>
			<div className="py-40 md:py-28 px-4">
				<SEO
					title="EventoMax | 404"
					description="We provide the best offshore staffing with IT and BPO services that can professionally provide your business landscapesWe are located at Cebu City, PH and provide reasonable prices for the services we provide with hight quality results."
					keywords={[
						"Offshore",
						"Outsourcing",
						"BPO",
						"Digital Marketing",
						"Bookkeeping"
					]}
				/>
				<Section
					spacing="widest"
					container="spacingWidest"
					className="text-center space-y-10"
				>
					<Image
						src={Featured404}
						alt="404 Featured"
						width={600}
						className="mx-auto"
					/>
					<h3 className="font-light text-base">
						Oops! Seems like the page that your looking for does not exist or an
						error occured.
					</h3>
					<LinkBtn display="primary" title="Go To Homepage" href="/" />
				</Section>
			</div>
		</Layout>
	);
}
