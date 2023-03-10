import { useState } from "react";
import Image from "next/image";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { MobileHeader, DesktopHeader, Para } from "../../displays/Headers";
import Section from "../../Section";
import { useMediaQuery } from "@chakra-ui/react";
import { faqs } from "../../../data/dynamic";
import LinkBtn from "../../interactives/LinkBtn";

import Question from "../../../images/icons/faq-question.svg";
import QuestionDesktop from "../../../images/icons/faq-question-desktop.svg";

import * as styles from "../../../styles/modules/sections/about-us/Faq.module.scss";

const FAQMobile = () => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<div className="flex gap-x-2">
				<MobileHeader title="FAQ's about EventoMax" />
				<Image src={Question} alt="Question Mark" />
			</div>
			<Para className="mb-6">
				Lorem ipsum dolor sit amet consectetur. Quam aliquam libero ultrices
				pretium orci justo blandit non. Tincidunt quis vitae id congue faucibus
				magna. Integer vitae purus viverra nibh sed egestas id duis. sus. Risus
				urna vestibulum amet libero consectetur.
				<br />
				<br />
				Pharetra laoreet eget sed luctus sit lacinia vulputate. Cursus eget
				morbi dolor interdum mi amet.
			</Para>
			{faqs.map((faq, idx) => (
				<Accordion key={idx} className="bg-tertiary text-white">
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel${faq.id}a-content`}
						id={`panel${faq.id}a-header`}
					>
						<Typography className="font-semibold">{faq.question}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{faq.answer}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
			<LinkBtn
				display="primary"
				title="Build your dream team today!"
				href="/"
				size="full"
				className="mt-6"
			/>
		</Section>
	);
};

const CustomAccordion = ({ title, children }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="accordion-wrapper">
			<div
				className={`accordion-title ${isOpen ? "open" : ""}`}
				onClick={() => setOpen(!isOpen)}
			>
				{title}
			</div>
			<div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
				<div className="accordion-content">{children}</div>
			</div>
		</div>
	);
};

const FAQDesktop = () => {
	const full = faqs.length;
	const half = Math.ceil(full / 2);
	const faqCol1 = faqs.slice(0, half);
	const faqCol2 = faqs.slice(half, full);

	return (
		<Section
			spacing="widest"
			container="spacingWidest"
			className="relative z-99"
		>
			<div className="grid grid-cols-2 gap-x-8">
				<div>
					<div className="flex justify-between">
						<DesktopHeader>
							FAQ&apos;s <span className="text-2xl ml-4">about EventoMax</span>
						</DesktopHeader>
						<Image src={QuestionDesktop} alt="Question Desktop" />
					</div>
					<Para>
						Lorem ipsum dolor sit amet consectetur. Quam aliquam libero ultrices
						pretium orci justo blandit non. Tincidunt quis vitae id congue
						faucibus magna. Integer vitae purus viverra nibh sed egestas id
						duis. sus. Risus urna vestibulum amet libero consectetur.
						<br />
						<br />
						Pharetra laoreet eget sed luctus sit lacinia vulputate. Cursus eget
						morbi dolor interdum mi amet.
					</Para>
					<LinkBtn
						display="primary"
						title="Build your dream team today!"
						href="/"
						size="fit"
						className="mt-6"
					/>
				</div>
				<div className={styles.questionsWrapper}>
					<div className="wrapper">
						{faqCol1.map((faq, index) => (
							<CustomAccordion key={index} title={faq.question}>
								{faq.answer}
							</CustomAccordion>
						))}
					</div>
					<div className="wrapper">
						{faqCol2.map((faq, index) => (
							<CustomAccordion key={index} title={faq.question}>
								{faq.answer}
							</CustomAccordion>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default function Faq() {
	const [isDesktop] = useMediaQuery("(min-width: 1080px)");

	return <div>{isDesktop ? <FAQDesktop /> : <FAQMobile />}</div>;
}
