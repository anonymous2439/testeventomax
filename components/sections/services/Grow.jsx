import { useMediaQuery } from "@chakra-ui/react";
import Section from "../../Section";
import { MobileHeader, DesktopHeader, Para } from "../../displays/Headers";
import Image from "next/image";
import * as styles from "../../../styles/modules/sections/services/Grow.module.scss";
import LinkBtn from "../../interactives/LinkBtn";

import { growDeets } from "../../../data/dynamic";

const GrowMobile = () => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<MobileHeader title="Grow your business" />
			<Para desc="Need help? We inspire business owners, secure capital, and are mentored by our experts. EventoMax' network got you covered." />
			<div className={styles.growCardsMobile}>
				{growDeets.map((deets, index) => (
					<div className={styles.card} key={index}>
						<div className="flex justify-between items-center w-full mb-4">
							<h4>{deets.name}</h4>
							<Image src={deets.icon} alt={deets.name} width={30} height={30} />
						</div>
						<p>{deets.deets}</p>
					</div>
				))}
			</div>
			<LinkBtn
				display="primary"
				title="Build your team now"
				href="/contact"
				size="full"
			/>
		</Section>
	);
};

const GrowDesktop = () => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<div className="grid grid-cols-2 gap-x-10 items-center">
				<div className={styles.growCardsDesktop}>
					{growDeets.map((deets, index) => (
						<div className={styles.card} key={index}>
							<div className="flex justify-between items-center w-full mb-4">
								<h3 className="text-base md:text-xl">{deets.name}</h3>
								<Image
									src={deets.icon}
									alt={deets.name}
									width={50}
									height={50}
								/>
							</div>
							<p>{deets.deets}</p>
						</div>
					))}
				</div>
				<div className="space-y-6">
					<DesktopHeader title="Grow your business" />
					<Para desc="Need help? We inspire business owners, secure capital, and are mentored by our experts. EventoMax' network got you covered." />
					<LinkBtn
						display="primary"
						title="Build your dream team now"
						href="/contact"
						size="fit"
					/>
				</div>
			</div>
		</Section>
	);
};

export default function Grow() {
	const [isDesktop] = useMediaQuery("(min-width: 768px)");

	return <div>{isDesktop ? <GrowDesktop /> : <GrowMobile />}</div>;
}
