import Image from "next/image";

import Section from "../../Section";
import { useMediaQuery } from "@chakra-ui/react";
import * as styles from "../../../styles/modules/sections/about-us/Careers.module.scss";

import CareersFeatured from "../../../images/careers-featured.svg";
import LinkBtn from "../../interactives/LinkBtn";
import CogsBlack from "../../../images/icons/cogs-black.svg";

const CareersMobile = () => {
	return (
		<div className={styles.careersWrapperMobile}>
			<Section spacing="widest" container="spacingWidest">
				<div>
					<h3 className="text-center font-semibold mb-6">
						Do you want to join our team?
					</h3>
					<p className="text-center font-semibold text-grey3">
						We are giving you the rare chance to step up and catch up with the
						digital revolutions taking over the world. By joining our team, we
						can guarantee you the best path to your future!
					</p>
					<Image
						src={CareersFeatured}
						alt="Careers"
						width={300}
						height={300}
						className="mx-auto my-6"
					/>
					<LinkBtn
						display="dark"
						title="Join our team now"
						href="/"
						size="full"
					/>
				</div>
			</Section>
		</div>
	);
};

const CareersDesktop = () => {
	return (
		<div className={styles.careersWrapperDesktop}>
			<Section spacing="widest" container="spacingWidest">
				<div className="grid grid-cols-2 items-center">
					<div className="space-y-6">
						<div className="flex gap-x-4">
							<h1 className="font-semibold">Careers</h1>
							<Image src={CogsBlack} alt="Cogs" />
						</div>
						<h4 className="font-semibold text-grey3">
							Do you want to join our team? We are giving you the rare chance to
							step up and catch up with the digital revolutions taking over the
							world. By joining our team, we can guarantee you the best path to
							your future!
						</h4>
						<LinkBtn
							display="dark"
							title="Join our team now"
							href="/"
							size="fit"
						/>
					</div>
					<div>
						<Image
							src={CareersFeatured}
							alt="Careers"
							width={400}
							height={400}
							className="mx-auto my-6"
						/>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default function Careers() {
	const [isDesktop] = useMediaQuery("(min-width: 690px)");

	return <div>{isDesktop ? <CareersDesktop /> : <CareersMobile />}</div>;
}
