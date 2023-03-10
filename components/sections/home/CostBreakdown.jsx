import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinkBtn from "../../interactives/LinkBtn";

import Section from "../../Section";
import {
	MobileHeaderCenter,
	Para,
	DesktopHeader
} from "../../displays/Headers";
import { useMediaQuery } from "@chakra-ui/react";

import CostFeature from "../../../images/cost-breakdown-featured.webp";
import CostFeatureDesktop from "../../../images/cost-breakdown-feature-desktop.webp";
import * as styles from "../../../styles/modules/sections/home/CostBreakdown.module.scss";
import CostBreakdownTabs from "../../interactives/CostBreakdownTabs";

const TabPanel = props => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography variant="div">{children}</Typography>
				</Box>
			)}
		</div>
	);
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	};
}

const CostBreakdownMobile = () => {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Section spacing="widest" container="spacingWidest">
			<MobileHeaderCenter title="Cost Breakdown" />
			<Para
				desc="We create legacies taking the company to a future it deserves. EventoMax has a pool of experts on board that will connect your brand to the world. The cost of our services is justifiable of what we are capable and deliver for our clients.
				Another reason companies prefer EventoMax is that it all alleviates company burdens such as purchasing equipment, looking for office space, and paying taxes. These are all on us."
				className="text-justify-center mb-10"
			/>
			<div className={styles.costSwiperBg}>
				<div className={styles.costSwiperSlides}>
					<Image src={CostFeature} alt="Cost Breakdown" />
				</div>
			</div>
			<LinkBtn
				title="View Pricing"
				href="/pricing"
				display="primary"
				size="full"
			/>
		</Section>
	);
};

const CostBreakdownDesktop = () => {
	return (
		<Section
			spacing="widest"
			container="spacingWidest"
			className="grid grid-cols-2 gap-6 "
		>
			<div>
				<Image src={CostFeatureDesktop} alt="Cost Breakdown" />
			</div>
			<div className="space-y-6">
				<DesktopHeader title="Cost Breakdown" />
				<Para>
					We create legacies taking the company to a future it deserves.
					EventoMax has a pool of experts on board that will connect your brand
					to the world. The cost of our services is justifiable of what we are
					capable and deliver for our clients.
					<br /> <br />
					Another reason companies prefer EventoMax is that it all alleviates
					company burdens such as purchasing equipment, looking for office
					space, and paying taxes. These are all on us.
				</Para>
				<LinkBtn
					title="View Pricing"
					href="/pricing"
					display="primary"
					size="fit"
				/>
			</div>
		</Section>
	);
};

export default function CostBreakdown() {
	const [isDesktop] = useMediaQuery("(min-width: 768px)");

	return (
		<div>{isDesktop ? <CostBreakdownDesktop /> : <CostBreakdownMobile />}</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};
