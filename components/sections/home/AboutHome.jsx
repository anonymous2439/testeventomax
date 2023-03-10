import Section from "../../Section";
import { MobileHeader, DesktopHeader, Para } from "../../displays/Headers";
import LinkBtn from "../../interactives/LinkBtn";

import { useMediaQuery } from "@chakra-ui/react";

import * as styles from "../../../styles/modules/sections/home/AboutHome.module.scss";

import { aboutTiles } from "../../../data/dynamic";

const AboutHomeMobile = () => {
	return (
		<Section
			spacing="widest"
			container="spacingWidest"
			className={styles.aboutHomeWrapperMobile}
		>
			<div className="grid grid-cols-2 gap-6">
				{aboutTiles.map((deets, index) => (
					<div className={styles.card} key={index}>
						<h1>{deets.count}</h1>
						<p>{deets.subName}</p>
					</div>
				))}
			</div>
			<MobileHeader title="About EventoMax" />
			<Para>
				Welcome to EventoMax! We are a team of experienced professionals
				dedicated to delivering top-quality services to our clients. With a
				combined 20 years of experience in the industry, we have the skills and
				expertise to handle a wide range of outsourcing needs.
				<br />
				<br />
				Our team is made up of highly skilled professionals in various fields,
				including software development, data analysis, customer service, and
				more. We pride ourselves on our ability to work closely with our clients
				to understand their specific needs and deliver customized solutions.
			</Para>
			<LinkBtn
				title="About Us"
				display="primary"
				href="/about-us"
				size="full"
			/>
		</Section>
	);
};

const AboutHomeDesktop = () => {
	return (
		<div className={styles.aboutHomeWrapperDesktopWrapper}>
			<Section
				spacing="widest"
				container="spacingWidest"
				className={styles.aboutHomeWrapperDesktop}
			>
				<div className="grid grid-cols-2 gap-6">
					{aboutTiles.map((deets, index) => (
						<div className={styles.card} key={index}>
							<h1>{deets.count}</h1>
							<p>{deets.subName}</p>
						</div>
					))}
				</div>
				<div className="space-y-10">
					<DesktopHeader title="About EventoMax" />
					<Para>
						Welcome to EventoMax! We are a team of experienced professionals
						dedicated to delivering top-quality services to our clients. With a
						combined 20 years of experience in the industry, we have the skills
						and expertise to handle a wide range of outsourcing needs.
						<br />
						<br />
						Our team is made up of highly skilled professionals in various
						fields, including software development, data analysis, customer
						service, and more. We pride ourselves on our ability to work closely
						with our clients to understand their specific needs and deliver
						customized solutions.
					</Para>
					<LinkBtn
						title="About Us"
						display="primary"
						href="/about-us"
						size="fit"
					/>
				</div>
			</Section>
		</div>
	);
};

export default function AboutHome() {
	const [isDesktop] = useMediaQuery("(min-width: 930px)");

	return <div>{isDesktop ? <AboutHomeDesktop /> : <AboutHomeMobile />}</div>;
}
