import { useMediaQuery } from "@chakra-ui/react";
import Section from "../../Section";
import * as styles from "../../../styles/modules/sections/services/BusinessAngels.module.scss";
import Image from "next/image";
import LinkBtn from "../../interactives/LinkBtn";
import { DesktopHeader } from "../../displays/Headers";

import BusinessAngelsFeatured from "../../../images/business-angels-featured.svg";

const BusinessAngelsMobile = () => {
	return (
		<div className={styles.businessAngelsWrapper}>
			<Section
				spacing="widest"
				container="spacingWidest"
				className="space-y-10"
			>
				<Image
					src={BusinessAngelsFeatured}
					alt="Business Angels"
					width={190}
					height={200}
				/>
				<p className="text-white font-medium text-center">
					Our business angels make things possible for your companies. Connect
					with us to talk with our business angels and begin your journey to
					achieve maximum success.
				</p>
				<LinkBtn
					display="primary"
					title="Get started!"
					href="/contact"
					size="full"
				/>
			</Section>
		</div>
	);
};

const BusinessAngelsDesktop = () => {
	return (
		<div className={styles.businessAngelsWrapper}>
			<Section
				spacing="widest"
				container="spacingWidest"
				className="space-y-10"
			>
				<div className="grid grid-cols-2 items-center">
					<div>
						<Image
							src={BusinessAngelsFeatured}
							alt="Business Angels"
							width={310}
							height={320}
						/>
					</div>
					<div className="space-y-6">
						<DesktopHeader title="Business Angels" className="text-white" />
						<p className="text-white font-medium">
							Our business angels make things possible for your companies.
							Connect with us to talk with our business angels and begin your
							journey to achieve maximum success.
						</p>
						<LinkBtn
							display="primary"
							title="Get started!"
							href="/contact"
							size="fit"
						/>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default function Grow() {
	const [isDesktop] = useMediaQuery("(min-width: 640px)");

	return (
		<div>
			{isDesktop ? <BusinessAngelsDesktop /> : <BusinessAngelsMobile />}
		</div>
	);
}
