import SEO from "@bradgarropy/next-seo";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import * as styles from "../styles/modules/Contact.module.scss";
import Section from "../components/Section";
import {
	DesktopHeaderCenter,
	MobileHeaderCenter,
	DesktopHeader
} from "../components/displays/Headers";
import { useMediaQuery } from "@chakra-ui/react";
import ContactForm from "../components/forms/ContactForm";

import AddressIcon from "../images/icons/contact-pin.svg";
import EmailIcon from "../images/icons/contact-message.svg";
import PhoneIcon from "../images/icons/contact-phone.svg";
import Image from "next/image";

export default function Contact() {
	const [isDesktop] = useMediaQuery("(min-width: 648px)");
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg"></link>
			</Head>
			<SEO
				title="EventoMax | Contact"
				description="Get your needs satisfied and ideas realized."
				keywords={["Location", "Services we offer", "Outcomes", "Objectives"]}
			/>
			<div className={styles.contactWrapper}>
				<Section spacing="widest" container="spacingWidest">
					{isDesktop ? (
						<DesktopHeaderCenter
							title="Make your needs and ideas realized!"
							className="text-white"
						/>
					) : (
						<MobileHeaderCenter
							title="Make your needs and ideas realized!"
							className="text-white"
						/>
					)}

					<p className="max-w-xl mx-auto text-center text-white mt-8">
						Don&apos;t let roadblocks delay your big business any further!
						We&apos;ll smash them in a timely fashion and bring your ideas to
						where you want them to be.
					</p>
				</Section>
			</div>
			<Section spacing="widest" container="spacingWidest">
				<div className={styles.contactDeets}>
					<div>
						<ContactForm />
					</div>
					<div>
						<DesktopHeader title="Contact Us" />
						{isDesktop ? (
							<div className="grid grid-cols-2 mt-6 gap-x-6">
								<div>
									<div className="flex gap-x-2 items-center mb-6">
										<div>
											<h3 className="font-semibold">Address</h3>
										</div>
										<div>
											<Image
												src={AddressIcon}
												alt="Address"
												width={36}
												height={36}
											/>
										</div>
									</div>
									<h3 className="font-semibold">Philippines</h3>
									<h4 className="font-light mb-6">
										Support BPO Bldg., Hernan Cortes, Mandaue City, Cebu, PH
										6014
									</h4>
									<h3 className="font-semibold">London, UK</h3>
									<h4 className="font-light mb-6">
										Kemp House, 152-160 City Road, London, EC1V 2NX, UK
									</h4>
								</div>
								<div>
									<div className="flex gap-x-2 items-center">
										<div>
											<h3 className="font-semibold">Email Address</h3>
										</div>
										<div>
											<Image
												src={EmailIcon}
												alt="Email"
												width={36}
												height={36}
											/>
										</div>
									</div>
									<h4 className="font-light">
										<a href="mailto:sales@eventomax.com" className="mb-6">
											sales@eventomax.com
										</a>
									</h4>
									<div className="flex gap-x-2 items-center">
										<div>
											<h3 className="font-semibold">Contact Numbers</h3>
										</div>
										<div>
											<Image
												src={PhoneIcon}
												alt="Phone"
												width={36}
												height={36}
											/>
										</div>
									</div>
									<div className="pb-1">
										<h4 className="font-light">
											<a href="tel:+16505064870">+1 (650) 506 4870 (USA)</a>
										</h4>
									</div>
									<div className="pb-1">
										<h4 className="font-light">
											<a href="tel:+442030342160">+44 2030 342160 (UK)</a>
										</h4>
									</div>
									<div className="pb-1">
										<h4 className="font-light">
											<a href="tel:+61290700739">+61 290 700 739 (AU)</a>
										</h4>
									</div>
									<div className="pb-1">
										<h4 className="font-light">
											<a href="tel:+639204743207">+63 920 474 3207 (PH)</a>
										</h4>
									</div>
									<div>
										<h4 className="font-light">
											<a href="tel:+0323445835">
												+(032) 344-5835 (PH Landline)
											</a>
										</h4>
									</div>
								</div>
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 mt-6">
								<div>
									<div className="flex gap-x-2 items-center mb-6">
										<div>
											<h4 className="font-semibold">Address</h4>
										</div>
										<div>
											<Image
												src={AddressIcon}
												alt="Address"
												width={36}
												height={36}
											/>
										</div>
									</div>
									<h4 className="font-semibold">Philippines</h4>
									<p className="font-light mb-6">
										Support BPO Bldg., Hernan Cortes, Mandaue City, Cebu, PH
										6014
									</p>
									<h4 className="font-semibold">London, UK</h4>
									<p className="font-light mb-6">
										Kemp House, 152-160 City Road, London, EC1V 2NX, UK
									</p>
								</div>
								<div>
									<div className="flex gap-x-2 items-center">
										<div>
											<h4 className="font-semibold">Email Address</h4>
										</div>
										<div>
											<Image
												src={EmailIcon}
												alt="Email"
												width={36}
												height={36}
											/>
										</div>
									</div>
									<p className="font-light">
										<a href="mailto:sales@eventomax.com" className="mb-6">
											sales@eventomax.com
										</a>
									</p>
									<div className="flex gap-x-2 items-center">
										<div>
											<h4 className="font-semibold">Contact Numbers</h4>
										</div>
										<div>
											<Image
												src={PhoneIcon}
												alt="Phone"
												width={36}
												height={36}
											/>
										</div>
									</div>
									<div className="pb-1">
										<p className="font-light">
											<a href="tel:+16505064870">+1 (650) 506 4870 (USA)</a>
										</p>
									</div>
									<div className="pb-1">
										<p className="font-light">
											<a href="tel:+442030342160">+44 2030 342160 (UK)</a>
										</p>
									</div>
									<div className="pb-1">
										<p className="font-light">
											<a href="tel:+61290700739">+61 290 700 739 (AU)</a>
										</p>
									</div>
									<div className="pb-1">
										<p className="font-light">
											<a href="tel:+639204743207">+63 920 474 3207 (PH)</a>
										</p>
									</div>
									<div>
										<p className="font-light">
											<a href="tel:+0323445835">
												+(032) 344-5835 (PH Landline)
											</a>
										</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</Section>
		</Layout>
	);
}
