import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import LinkBtn from "../interactives/LinkBtn";
import Section from "../Section";
import MobileNavigation from "./MobileNavigation";
import { useMediaQuery } from "@chakra-ui/react";

import * as styles from "../../styles/modules/Navigation.module.scss";
import { nav } from "../../data/dynamic";

import EventoMax from "../../images/logos/eventomax.svg";

export default function Navigation() {
	const router = useRouter();
	const [isDesktop] = useMediaQuery("(min-width: 640px)");

	return (
		<nav className={styles.navigationWrapper}>
			<div className="relative">
				{isDesktop ? (
					<Section
						container="widest"
						spacing="spacingNavigation"
						className={styles.navigation}
					>
						<div>
							<Link href="/">
								<Image src={EventoMax} alt="EventoMax" width={125} />
							</Link>
						</div>
						<div>
							<ul className="flex space-x-10 text-white">
								{nav.map((navigation, idx) => (
									<li key={idx}>
										<Link href={navigation.route} legacyBehavior>
											<a
												className={
													router.pathname == `${navigation.route}`
														? "active"
														: ""
												}
											>
												{navigation.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<div>
								<LinkBtn display="primary" title="Contact Us" href="/contact" />
							</div>
						</div>
					</Section>
				) : (
					<Section
						container="widest"
						spacing="spacingNavigation"
						className={styles.navigation}
					>
						<div>
							<Link href="/">
								<Image src={EventoMax} alt="EventoMax" width={125} />
							</Link>
						</div>
						<MobileNavigation />
					</Section>
				)}
			</div>
		</nav>
	);
}
