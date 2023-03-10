import { useMediaQuery } from "@chakra-ui/react";
import Section from "../../Section";
import { MobileHeaderCenter, DesktopHeader } from "../../displays/Headers";
import * as styles from "../../../styles/modules/sections/services/Services.module.scss";
import Image from "next/image";
import ServicesBannerFeatured from "../../../images/services-banner-featured.png";

const ServicesBannerMobile = () => {
	return (
		<div className={styles.servicesBannerMobileWrapper}>
			<Section spacing="widest" container="spacingWidest">
				<MobileHeaderCenter title="Our fields of expertise" />
				<p>
					We address what the client needs.
					<br />
					<br />
					EventoMax is a Cebu-based offshoring/outsourcing and business
					processing management (BPM) brand which deliver more than quality
					services.
					<br />
					Name it. We got it.
				</p>
				<Image
					src={ServicesBannerFeatured}
					alt="Services Featured"
					width={300}
					height={300}
				/>
			</Section>
		</div>
	);
};

const ServicesBannerDesktop = () => {
	return (
		<div className={styles.servicesBannerDesktopWrapper}>
			<Section spacing="widest" container="spacingWidest">
				<div>
					<DesktopHeader title="Our fields of expertise" />
					<p>
						We address what the client needs.
						<br />
						<br />
						EventoMax is a Cebu-based offshoring/outsourcing and business
						processing management (BPM) brand which deliver more than quality
						services.
						<br />
						Name it. We got it.
					</p>
				</div>
				<div>
					<Image
						src={ServicesBannerFeatured}
						alt="Services Featured"
						width={600}
						height={600}
					/>
				</div>
			</Section>
		</div>
	);
};

export default function ServicesBanner() {
	const [isDesktop] = useMediaQuery("(min-width: 768px)");

	return (
		<div>
			{isDesktop ? <ServicesBannerDesktop /> : <ServicesBannerMobile />}
		</div>
	);
}
