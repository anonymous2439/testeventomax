import Image from "next/image";

import { useMediaQuery } from "@chakra-ui/react";
import Section from "../../Section";
import { MobileHeaderCenter, DesktopHeader } from "../../displays/Headers";

import AboutBannerFeatured from "../../../images/about-banner.webp";

import * as styles from "../../../styles/modules/sections/about-us/AboutBanner.module.scss";

const AboutBannerMobile = () => {
	return (
		<div className={styles.aboutBannerWrapperMobile}>
			<Section spacing="widest" container="spacingWidest">
				<div className={styles.aboutBannerContentSectionMobile}>
					<MobileHeaderCenter title="About EventoMax" />
					<p className="text-white mt-6">
						At EventoMax, we value transparency and communication. We believe
						that open and honest communication is key to the success of any
						project. We always keep our clients informed of the progress of
						their projects, and we are available to answer any questions or
						concerns they may have.
						<br />
						<br />
						We are proud to have a diverse client base, including small
						businesses, startups, and large enterprises. Our clients trust us to
						handle their outsourcing needs because of our dedication to quality,
						our strong track record of successful projects, and our commitment
						to providing excellent customer service.
						<br />
						<br />
						Thank you for considering EventoMax for your outsourcing needs. We
						look forward to working with you!
					</p>
					<Image
						src={AboutBannerFeatured}
						alt="About Banner Featured"
						width={340}
						height={290}
					/>
				</div>
			</Section>
		</div>
	);
};

const AboutBannerDesktop = () => {
	return (
		<div className={styles.aboutBannerWrapperDesktop}>
			<Section spacing="widest" container="spacingWidest">
				<div className={styles.aboutBannerContentSectionDesktop}>
					<div>
						<Image
							src={AboutBannerFeatured}
							alt="About Banner Featured"
							width={700}
							height={600}
						/>
					</div>
					<div className={styles.aboutBannerFeaturedContent}>
						<DesktopHeader title="About EventoMax" />
						<p className="text-white mt-6">
							At EventoMax, we value transparency and communication. We believe
							that open and honest communication is key to the success of any
							project. We always keep our clients informed of the progress of
							their projects, and we are available to answer any questions or
							concerns they may have.
							<br />
							<br />
							We are proud to have a diverse client base, including small
							businesses, startups, and large enterprises. Our clients trust us
							to handle their outsourcing needs because of our dedication to
							quality, our strong track record of successful projects, and our
							commitment to providing excellent customer service.
							<br />
							<br />
							Thank you for considering EventoMax for your outsourcing needs. We
							look forward to working with you!
						</p>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default function AboutBanner() {
	const [isDesktop] = useMediaQuery("(min-width: 1080px)");
	return (
		<div>{isDesktop ? <AboutBannerDesktop /> : <AboutBannerMobile />}</div>
	);
}
