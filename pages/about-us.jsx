import Head from "next/head";
import SEO from "@bradgarropy/next-seo";
import Layout from "../components/layout/Layout";
import AboutBanner from "../components/sections/about-us/AboutBanner";
import AboutTile from "../components/sections/about-us/Tiles";
import WhoCouldYouBe from "../components/sections/about-us/WhoCouldYouBe";
import Refer from "../components/sections/about-us/Refer";
import Leadership from "../components/sections/about-us/Leadership";
// import Careers from "../components/sections/about-us/Careers";

export default function About() {
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg"></link>
			</Head>
			<SEO
				title="EventoMax | About Us"
				description="Learn more about EventoMax! Lead by a highly experienced and proactive team! View the complete list of the businesses and clients we have assisted with their administrative, design, outsourcing, and BPM services."
				keywords={["Location", "Services we offer", "Outcomes", "Objectives"]}
			/>
			<AboutBanner />
			<AboutTile />
			<WhoCouldYouBe />
			<Refer />
			<Leadership />
			{/* <Careers /> */}
		</Layout>
	);
}
