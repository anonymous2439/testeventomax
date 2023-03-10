import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import Section from "../Section";
import LinkBtn from "../interactives/LinkBtn";

import Hamburger from "../../images/icons/menubar.svg";
import Close from "../../images/icons/double-right.svg";
import EventoMax from "../../images/logos/eventomax.svg";

import * as styles from "../../styles/modules/Navigation.module.scss";
import { mobileNavSocialMedia } from "../../data/dynamic";
import { nav } from "../../data/dynamic";

export default function MobileNavigation() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	const [date, setDate] = useState();
	const getYear = () => setDate(new Date().getFullYear());

	useEffect(() => {
		getYear();
	}, []);

	const router = useRouter();

	return (
		<>
			<div className="mobile-navbar">
				<button type="button" className="menu-bars">
					<Image src={Hamburger} alt="Open Sidebar" onClick={showSidebar} />
				</button>
			</div>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<div>
							<Image
								src={EventoMax}
								alt="EventoMax"
								width={150}
								className="mx-auto"
							/>
						</div>
						<div className="cursor-pointer">
							<Image src={Close} alt="Close Sidebar" className="mx-auto" />
						</div>
					</li>
					{nav.map((navigation, idx) => (
						<Link href={navigation.route} legacyBehavior key={idx}>
							<li key={idx} className="py-6">
								<a
									className={
										router.pathname == `${navigation.route}`
											? "mobileActive"
											: ""
									}
								>
									{navigation.name}
								</a>
							</li>
						</Link>
					))}
					<li className="py-5">
						<LinkBtn display="primary" title="Contact Us" href="/contact" />
					</li>
					<div className={styles.mobileNavFooter}>
						<div>
							{mobileNavSocialMedia.map((details, idx) => (
								<span key={idx}>
									<a
										href={details.externalLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image src={details.icon} alt={details.name} />
									</a>
								</span>
							))}
						</div>
						<Section
							container="widest"
							className="border-t-2 border-footerBorder mt-10"
							spacing="spacingNavigation"
						>
							<p className="text-center text-footerGrey font-semibold text-xs">
								Eventomax &copy; {date}
							</p>
						</Section>
					</div>
				</ul>
			</nav>
		</>
	);
}
