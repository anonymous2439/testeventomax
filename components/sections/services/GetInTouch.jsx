import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import {
	MobileHeaderCenter,
	DesktopHeader,
	Para
} from "../../displays/Headers";
import Section from "../../Section";
import LinkBtn from "../../interactives/LinkBtn";

import GetInTouchFeatured from "../../../images/get-in-touch-featured.svg";

const GetInTouchMobile = () => {
	return (
		<Section spacing="widest" container="spacingWidest" className="space-y-10">
			<MobileHeaderCenter title="Get In Touch" />
			<Para
				desc="Unless you have the bravery to tell the world about your brilliant idea, it will just remain that. Why not begin by telling our Angels? Our network connects you with variety of business and technical leaders who can help your concept find its niche and reach maximum success."
				className="text-center"
			/>
			<Image src={GetInTouchFeatured} alt="Featured" className="mx-auto" />
			<LinkBtn
				display="primary"
				title="Get In Touch!"
				href="/contact"
				size="full"
			/>
		</Section>
	);
};

const GetInTouchDesktop = () => {
	return (
		<Section spacing="widest" container="spacingWidest" className="space-y-10">
			<div className="grid grid-cols-2 gap-x-6 items-center">
				<div>
					<Image src={GetInTouchFeatured} alt="Featured" />
				</div>
				<div className="space-y-10">
					<DesktopHeader title="Get In Touch" />
					<Para desc="Unless you have the bravery to tell the world about your brilliant idea, it will just remain that. Why not begin by telling our Angels? Our network connects you with variety of business and technical leaders who can help your concept find its niche and reach maximum success." />

					<LinkBtn
						display="primary"
						title="Get In Touch!"
						href="/contact"
						size="fit"
					/>
				</div>
			</div>
		</Section>
	);
};

export default function GetInTouch() {
	const [isDesktop] = useMediaQuery("(min-width: 640px)");

	return <div>{isDesktop ? <GetInTouchDesktop /> : <GetInTouchMobile />}</div>;
}
