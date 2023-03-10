import Section from "../../Section";
import { useMediaQuery } from "@chakra-ui/react";
import { DesktopHeader, MobileHeader, Para } from "../../displays/Headers";
import Image from "next/image";
import ReferFeatured from "../../../images/refer-featured.webp";
import Download from "../../interactives/DownloadBtn";

const ReferMobile = () => {
	return (
		<Section spacing="widest" container="spacingWidest" className="space-y-6">
			<MobileHeader title="Refer us anytime!" />
			<Para desc="Download and read our informative brochure. Share it to anyone who needs a quick reference to know us better and our services." />
			<Image src={ReferFeatured} alt="Refer" width={375} className="mx-auto" />
			<Download display="primary" title="Download Brochure" size="full" />
		</Section>
	);
};

const ReferDesktop = () => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<div className="grid grid-cols-2 gap-x-6 items-center">
				<div>
					<Image src={ReferFeatured} alt="Refer" />
				</div>
				<div className="space-y-6">
					<DesktopHeader title="Refer us anytime!" />
					<Para desc="Download and read our informative brochure. Share it to anyone who needs a quick reference to know us better and our services." />
					<Download display="primary" title="Download Brochure" size="fit" />
				</div>
			</div>
		</Section>
	);
};

export default function Refer() {
	const [isDesktop] = useMediaQuery("(min-width: 768px)");

	return <>{isDesktop ? <ReferDesktop /> : <ReferMobile />}</>;
}
