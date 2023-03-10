import { useState, useRef } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "../../../data/dynamic";

import Section from "../../Section";
import { DesktopHeader, MobileHeader, Para } from "../../displays/Headers";
import LinkBtn from "../../interactives/LinkBtn";
import { useMediaQuery } from "@chakra-ui/react";

import OurFieldFeature from "../../../images/our-field-feature.png";
import * as styles from "../../../styles/modules/sections/home/OurField.module.scss";
import ServicesTabs from "../../interactives/ServicesTabs";

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

const OurFieldMobile = props => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<MobileHeader title="Our field of expertise" />
			<div className="space-y-6">
				<Para>
					We focus on what the business needs. Eventomax is a two-in-one service
					provider for offshoring/outsourcing and business process management
					(BPM).
					<br />
					<br />
					We are happy to help you with the services that we have studied,
					developed, worked, and provided for years in the industry.
					<br />
					<br />
					Eventomax takes pride in these unique services and systems that helped
					businesses reach maximum success.
					<br />
					<br />
					Check the list of services we have below. You may also set an
					appointment for further consultation and discussion for your needs.
				</Para>
			</div>
			<Image
				src={OurFieldFeature}
				alt="Our Field"
				className="my-10 w-4/5 mx-auto"
			/>
			<div className={styles.mobileTabsWrapper}>
				<ServicesTabs />
				<LinkBtn
					title="View our Services!"
					href="/services"
					display="primary"
					size="full"
				/>
			</div>
		</Section>
	);
};

const OurFieldDesktop = () => {
	const full = services.length;
	const half = Math.ceil(full / 2);
	const bpoServices = services.slice(0, half);
	const bpmServices = services.slice(half, full);

	const [activeService, setActiveService] = useState(services[0]);
	const [serveActive, setServeActive] = useState(false);

	return (
		<div className={styles.ourFieldWrapper}>
			<Section spacing="widest" container="spacingWidest">
				<div className="grid grid-cols-2 gap-6">
					<div className="space-y-10">
						<DesktopHeader title="Our field of expertise" />
						<Para>
							We focus on what the business needs. Eventomax is a two-in-one
							service provider for offshoring/outsourcing and business process
							management (BPM).
							<br />
							<br />
							We are happy to help you with the services that we have studied,
							developed, worked, and provided for years in the industry.
							<br />
							<br />
							Eventomax takes pride in these unique services and systems that
							helped businesses reach maximum success.
							<br />
							<br />
							Check the list of services we have below. You may also set an
							appointment for further consultation and discussion for your
							needs.
						</Para>
					</div>
					<div>
						<Image
							src={OurFieldFeature}
							alt="Our Field"
							className="my-10"
							width={720}
							height={370}
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-6">
					<div className="grid grid-cols-2 gap-4">
						<div className={styles.desktopServicesCard}>
							<h3 className="font-semibold border-b-2 pb-2 border-black">
								BPO Services
							</h3>
							{bpoServices.map((bpo, index) => {
								return (
									<div
										key={index}
										className={
											activeService
												? `${styles.desktopServices}`
												: `${styles.desktopServices} ${styles.activeServeStyle}`
										}
										onClick={() => setActiveService(bpo)}
									>
										<p>{bpo.name}</p>
									</div>
								);
							})}
						</div>
						<div className={styles.desktopServicesCard}>
							<h3 className="font-semibold border-b-2 pb-2 border-black">
								BPM Services
							</h3>
							{bpmServices.map((bpm, index) => (
								<div
									key={index}
									className={styles.desktopServices}
									onClick={() => setActiveService(bpm)}
								>
									<p>{bpm.name}</p>
								</div>
							))}
						</div>
					</div>
					<div>
						<div className="mt-8">
							<Image src={activeService.image} alt={activeService.name} />
							<h3 className="font-bold mt-4">{activeService.name}</h3>
							<Para desc={activeService.desc} />
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default function OurField() {
	const [isDesktop] = useMediaQuery("(min-width: 1080px)");

	return (
		<div className={styles.ourFieldWrapper}>
			<div>{isDesktop ? <OurFieldDesktop /> : <OurFieldMobile />}</div>
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};
