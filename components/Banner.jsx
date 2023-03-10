import Image from "next/image";

import Section from "./Section";
import QuickContact from "./forms/QuickContact";

import LinkBtn from "./interactives/LinkBtn";
import { useMediaQuery } from "@chakra-ui/react";

import * as styles from "../styles/modules/Banner.module.scss";
import {
	mobileNavSocialMedia,
	desktopBannerSocialMedia
} from "./../data/dynamic";

const BannerMobile = () => {
	return (
		<div className={styles.bannerWrapperMobile}>
			<div className={styles.bannerWrapperInnerMobile}>
				<Section spacing="widest" container="spacingWidest">
					<p>Welcome to EventoMax</p>
					<h1 className="text-6xl">
						Reach Maximum <span className="text-primary">Success</span>
					</h1>
					<h4 className="font-semibold mt-4">
						{" "}
						<center>Your offshoring, outsourcing, and BPM experts!</center>
					</h4>
					<div className="mt-12">
						<LinkBtn
							display="primary"
							title="Build your team now"
							href="/contact"
						/>
					</div>
					<div className="flex flex-row space-x-3 mt-10">
						{mobileNavSocialMedia.map((details, idx) => (
							<span key={idx}>
								<a
									href={details.externalLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image src={details.icon} alt={details.name} />
								</a>
							</span>
						))}
					</div>
				</Section>
			</div>
		</div>
	);
};

const BannerDesktop = () => {
	return (
		<div className={styles.bannerWrapperDesktop}>
			<Section spacing="widest" container="spacingWidest">
				<div className="space-y-10 mt-40">
					<p>Welcome to EventoMax!</p>
					<h1>
						Reach Maximum <span className="text-primary">Success</span>
					</h1>
					<h2 className="font-semibold mt-4">
						Your offshoring, outsourcing, and BPM experts!
					</h2>
					<div>
						<LinkBtn
							display="primary"
							title="Build your dream team now!"
							href="/contact"
						/>
					</div>
					<div className="flex flex-row space-x-3 mt-10">
						{desktopBannerSocialMedia.map((details, idx) => (
							<span key={idx} className={details.hover}>
								<a
									href={details.externalLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image src={details.icon} alt={details.name} width={40} />
								</a>
							</span>
						))}
					</div>
				</div>
				<div>
					<QuickContact />
				</div>
			</Section>
		</div>
	);
};

export default function Banner() {
	const [isDesktop] = useMediaQuery("(min-width: 1036px)");

	return <div>{isDesktop ? <BannerDesktop /> : <BannerMobile />}</div>;
}
