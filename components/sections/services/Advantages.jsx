import Section from "../../Section";
import * as styles from "../../../styles/modules/sections/services/Advantages.module.scss";
import { useMediaQuery } from "@chakra-ui/react";
import {
	MobileHeaderCenter,
	DesktopHeader,
	Para
} from "../../displays/Headers";
import AdvantagesAccordion from "../../interactives/AdvantagesAccordion";
import { advantages } from "../../../data/dynamic";

const AdvantagesMobile = () => {
	return (
		<div className={styles.advantagesMobileWrapper}>
			<Section spacing="widest" container="spacingWidest">
				<MobileHeaderCenter title="Advantages" />
				<Para
					desc="Begin with everything you need!"
					className="text-center mb-8"
				/>
				{advantages.map((advantage, index) => (
					<AdvantagesAccordion title={advantage.name} key={index}>
						{advantage.content}
					</AdvantagesAccordion>
				))}
			</Section>
		</div>
	);
};

const AdvantagesDesktop = () => {
	const full = advantages.length;
	const half = Math.ceil(full / 2);
	const firstCol = advantages.slice(0, half);
	const secondCol = advantages.slice(half, full);

	console.log(half);

	return (
		<div className={styles.advantagesDesktopWrapper}>
			<Section spacing="widest" container="spacingWidest">
				<DesktopHeader title="Advantages" />
				<Para desc="Begin with everything you need!" />
				<div className="grid grid-cols-2 gap-x-6 mt-6">
					<div>
						{firstCol.map((advantage, index) => (
							<AdvantagesAccordion title={advantage.name} key={index}>
								{advantage.content}
							</AdvantagesAccordion>
						))}
					</div>
					<div>
						{secondCol.map((advantage, index) => (
							<AdvantagesAccordion title={advantage.name} key={index}>
								{advantage.content}
							</AdvantagesAccordion>
						))}
					</div>
				</div>
			</Section>
		</div>
	);
};

export default function Advantages() {
	const [isDesktop] = useMediaQuery("(min-width: 896px)");

	return <div>{isDesktop ? <AdvantagesDesktop /> : <AdvantagesMobile />}</div>;
}
