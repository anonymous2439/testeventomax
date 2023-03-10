import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Section from "../Section";
import LinkBtn from "../interactives/LinkBtn";
import { useMediaQuery } from "@chakra-ui/react";

import EventoMaxFooter from "../../images/logos/eventomax.svg";

import { mobileNavSocialMedia } from "../../data/dynamic";

import { nav } from "../../data/dynamic";
import * as styles from "../../styles/modules/Footer.module.scss";
import FooterAccordion from "../interactives/FooterAccordion";

const MobileFooter = () => {
	const router = useRouter();

	return (
		<div className="bg-darkGrey text-white">
			<Section spacing="widest" container="spacingNavigation">
				<div className="flex flex-row justify-between items-center">
					<Image src={EventoMaxFooter} alt="EventoMax" width={150} />
					<div className={styles.footerSocialIcons}>
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
				</div>
			</Section>
			<Section
				spacing="widest"
				container="spacingNavigation"
				className="space-y-6"
			>
				<p className="font-light">
					Your offshoring, outsourcing, and BPM experts!
				</p>
				<p>
					<Link
						href="mailto:sales@eventomax.com"
						className="hover:text-primary font-bold"
					>
						hello@eventomax.com
					</Link>
				</p>
			</Section>
			<Section spacing="widest" container="spacingNavigation">
				<FooterAccordion title="Quick Links">
					{nav.map((navigation, idx) => (
						<span key={idx} className="mb-6 font-light">
							<Link
								href={navigation.route}
								legacyBehavior
								className={
									router.pathname == `${navigation.route}` ? "mobileActive" : ""
								}
							>
								{navigation.name}
							</Link>
						</span>
					))}
					<span className="mb-6 font-light">
						<Link
							href="/contact"
							legacyBehavior
							className={router.pathname == `/contact` ? "mobileActive" : ""}
						>
							Contact Us
						</Link>
					</span>
				</FooterAccordion>
			</Section>
			<Section spacing="widest" container="spacingNavigation">
				<h4 className="font-medium mb-4">Contact Numbers</h4>
				<p className="ml-4">
					<a href="tel:+639088970929">+1 (650) 506 4870 (USA)</a>
				</p>
				<p className="ml-4">
					<a href="tel:+639088970929">+44 2030 342160 (UK)</a>
				</p>
				<p className="ml-4">
					<a href="tel:+639088970929">+61 290 700 739 (AU)</a>
				</p>
				<p className="ml-4">
					<a href="tel:+639088970929">+63 908 897 0929 (PH)</a>
				</p>
				<p className="ml-4">
					<a href="tel:+639088970929">+(032) 344-5835 (PH Landline)</a>
				</p>
			</Section>
			<Section
				spacing="widest"
				container="spacingNavigation"
				className="space-y-6"
			>
				<h4 className="font-medium mb-4">Registered Address</h4>
				<p>Support BPO Bldg., Hernan Cortes, Mandaue City, Cebu, PH 6014</p>
				<div className={styles.footerMap}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15699.746838260107!2d123.9270276!3d10.3469459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x440f05e87d38f499!2sEventomax!5e0!3m2!1sen!2sph!4v1670999738693!5m2!1sen!2sph"
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</Section>
			<Section
				container="widest"
				className="border-t-2 border-footerBorder mt-10"
				spacing="spacingNavigation"
			>
				<p className="text-center text-footerGrey font-semibold text-xs">
					Eventomax &copy; 2023
					<br />
					<br />
				</p>
			</Section>
		</div>
	);
};

const DesktopFooter = () => {
	const router = useRouter();
	return (
		<div className="bg-darkGrey text-white">
			<Section
				spacing="widest"
				container="spacingWidest"
				className="grid grid-cols-4 gap-x-10"
			>
				<div className="space-y-6">
					<Image src={EventoMaxFooter} alt="EventoMax" width={250} />
					<p className="font-light">
						Your offshoring, outsourcing, and BPM experts!
					</p>
					<p>
						<Link
							href="mailto:sales@eventomax.com"
							className="hover:text-primary font-bold"
						>
							hello@eventomax.com
						</Link>
					</p>
					<div className={styles.footerSocialIcons}>
						{mobileNavSocialMedia.map((detailss, idxx) => (
							<span key={idxx}>
								<a
									href={detailss.externalLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image src={detailss.icon} alt={detailss.name} />
								</a>
							</span>
						))}
					</div>
					<div>
						<a
							href="https://www.nextbizthing.com/manhattan/business-support-20-supplies-20-services/eventomax-inc?from=badge"
							title="Find me on NextBizThing"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="https://www.nextbizthing.com/images/memberbadge.png"
								border={0}
								alt="Member"
								width={100}
								height={100}
								style={{ width: `100px`, height: `100px` }}
							/>
						</a>
					</div>
				</div>
				<div className="justify-self-center">
					<h4 className="text-primary font-semibold mb-4">Quick Links</h4>
					<span className="text-white flex flex-col">
						{nav.map((navigation, idx) => (
							<span key={idx} className="mb-6 font-light">
								<Link href={navigation.route} legacyBehavior>
									<a
										className={
											router.pathname == `${navigation.route}`
												? "mobileActive"
												: ""
										}
									>
										{navigation.name}
									</a>
								</Link>
							</span>
						))}
					</span>
				</div>
				<div className="space-y-20">
					<div>
						<h4 className="text-primary font-semibold mb-4">Contact Numbers</h4>
						<p className="hover:text-primary">
							<a href="tel:+639088970929">+1 (650) 506 4870 (USA)</a>
						</p>
						<p className="hover:text-primary">
							<a href="tel:+639088970929">+44 2030 342160 (UK)</a>
						</p>
						<p className="hover:text-primary">
							<a href="tel:+639088970929">+61 290 700 739 (AU)</a>
						</p>
						<p className="hover:text-primary">
							<a href="tel:+639088970929">+63 908 897 0929 (PH)</a>
						</p>
						<p className="hover:text-primary">
							<a href="tel:+639088970929">+(032) 344-5835 (PH Landline)</a>
						</p>
					</div>
					<div>
						<h4 className="text-primary font-semibold mb-4">
							Registered Address
						</h4>
						<p>Support BPO Bldg., Hernan Cortes, Mandaue City, Cebu, PH 6014</p>
					</div>
				</div>
				<div>
					<div className={styles.footerMap}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15699.746838260107!2d123.9270276!3d10.3469459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x440f05e87d38f499!2sEventomax!5e0!3m2!1sen!2sph!4v1670999738693!5m2!1sen!2sph"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
					<div className="pt-10">
						<LinkBtn
							display="primary"
							title="Contact Us"
							href="/contact"
							target="_blank"
							rel="noopener noreferrer"
						/>
					</div>
				</div>
			</Section>
			<Section
				container="widest"
				className="border-t-2 border-footerBorder mt-10"
				spacing="spacingNavigation"
			>
				<p className="text-center text-footerGrey font-semibold text-m">
					Eventomax &copy; 2023
					<br />
					<br />
				</p>
			</Section>
		</div>
	);
};

export default function Footer() {
	const [isDesktop] = useMediaQuery("(min-width: 960px)");

	return <footer>{isDesktop ? <DesktopFooter /> : <MobileFooter />}</footer>;
}
