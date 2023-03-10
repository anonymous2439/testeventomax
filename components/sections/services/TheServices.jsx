import Section from "../../Section";
import {
	MobileHeaderCenter,
	DesktopHeaderCenter,
	Para
} from "../../displays/Headers";
import { useMediaQuery } from "@chakra-ui/react";
import * as styles from "../../../styles/modules/sections/services/TheServices.module.scss";
import ServicesTabsv2 from "../../interactives/ServicesTabsv2";
import ServicesTabsv3 from "../../interactives/ServicesTabsv3";

import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

const TheServicesMobile = () => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<MobileHeaderCenter title="Our Services" />
			<Para className="text-center pb-10">
				We focus on what the business needs. Eventomax is a two-in-one service
				provider for offshoring/outsourcing and business process management
				(BPM).
				<br />
				<br />
				We are happy to help you with the services that we have studied,
				developed, worked, and provided for years in the industry.
				<br />
				<br />
				Check the list of services we have below. You may also set an
				appointment for further consultation and discussion for your needs.
			</Para>
			<ServicesTabsv2 />
		</Section>
	);
};

const TheServicesDesktop = () => {
	return (
		<div className={styles.theServicesWrapperOuter}>
			<div className={styles.theServicesWrapperDesktop}>
				<Section spacing="widest" container="spacingWidest">
					<DesktopHeaderCenter title="Our Services" />
					<Para className="text-center w-9/12 mx-auto">
						We focus on what the business needs. Eventomax is a two-in-one
						service provider for offshoring/outsourcing and business process
						management (BPM). We are happy to help you with the services that we
						have studied, developed, worked, and provided for years in the
						industry. Check the list of services we have below. You may also set
						an appointment for further consultation and discussion for your
						needs.
					</Para>
					<div>
						<ServicesTabsv3 />
					</div>
				</Section>
			</div>
		</div>
	);
};

export default function TheServices() {
	const [isDesktop] = useMediaQuery("(min-width: 768px)");

	return (
		<div>{isDesktop ? <TheServicesDesktop /> : <TheServicesMobile />}</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};
