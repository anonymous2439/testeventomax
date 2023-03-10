import Image from "next/image";
import Section from "../../Section";

import { DesktopHeader, MobileHeader, Para } from "../../displays/Headers";
import { useMediaQuery } from "@chakra-ui/react";
import * as styles from "../../../styles/modules/sections/home/HowItWorks.module.scss";

import Cogs from "../../../images/icons/cogs.svg";
import DesktopTabSection from "../../DesktopTabSection";
import MobileTabSection from "../../MobileTabSection";

const HowItWorksMobile = () => {
	return (
		<div className={styles.howItWorksMobileWrapper}>
			<Section spacing="widest" container="spacingWidest">
				<div className="flex justify-center space-x-4 mb-10">
					<h3 className="text-center font-bold">How it works</h3>
					<Image src={Cogs} alt="Cogs" width={40} height={80} />
				</div>
				<div>
					<MobileTabSection />
				</div>
				<div className="mt-20">
					<MobileHeader title="We elevate businesses" />
					<p className="mt-6">
						EventoMax is designed to help every business reach maximum success.
						<br />
						<br />
						We are your concept and overall outsourcing experts that can provide
						experienced offshoring/outsourcing and BPM staff that can
						immediately address company needs. With EventoMax&apos;s innovative
						industry structure, there is profit in every investment.
						<br /> <br />
						Choosing EventoMax is choosing maximum success.
					</p>
				</div>
			</Section>
		</div>
	);
};

const HowItWorksDesktop = () => {
	return (
		<div className={styles.howItWorksDesktopWrapper}>
			<Section spacing="widest" container="spacingWidest">
				<div>
					<DesktopHeader title="We elevate businesses" className="text-black" />
					<Para>
						EventoMax is designed to help every business reach maximum success.
						<br />
						<br />
						We are your concept and overall outsourcing experts that can provide
						experienced offshoring/outsourcing and BPM staff that can
						immediately address company needs. With EventoMax&apos;s innovative
						industry structure, there is profit in every investment.
						{/* <br />
						<br />
						EventoMax takes pride with justifiable western quality services like
						chat support, customer service, design, digital marketing, lead
						generation, sales, technical support, virtual assistance, credit underwriting process, HR lifecycle management, contact centre, integrated business process services and many more. */}
						<br /> <br />
						Choosing EventoMax is choosing maximum success.
					</Para>
				</div>
				<div className="pl-2 xl:pl-6">
					<div className="flex space-x-4 mb-10">
						<h5 className="text-center font-bold">How it works</h5>
						<Image src={Cogs} alt="Cogs" width={40} height={80} />
					</div>
					<DesktopTabSection />
				</div>
			</Section>
		</div>
	);
};

export default function HowItWorks() {
	const [isDesktop] = useMediaQuery("(min-width: 1072px");

	return <div>{isDesktop ? <HowItWorksDesktop /> : <HowItWorksMobile />}</div>;
}
