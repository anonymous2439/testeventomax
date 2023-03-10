import Image from "next/image";
import Section from "../../Section";
import { useMediaQuery } from "@chakra-ui/react";
import { MobileHeader, DesktopHeader, Para } from "../../displays/Headers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { whoCouldYouBeDeets } from "../../../data/dynamic";
import * as styles from "../../../styles/modules/sections/about-us/WhoCouldYouBe.module.scss";
import QuestionMobile from "../../../images/icons/faq-question.svg";
import QuestionDesktop from "../../../images/icons/faq-question-desktop.svg";

const WhoCouldYouBeMobile = () => {
	const full = whoCouldYouBeDeets.length;
	const half = Math.ceil(full / 2);
	const firstSlide = whoCouldYouBeDeets.slice(0, half);
	const secondSlide = whoCouldYouBeDeets.slice(half, full);

	return (
		<Section spacing="widest" container="spacingWidest">
			<div className="flex gap-x-2">
				<MobileHeader title="Who could you be?" />
				<Image src={QuestionMobile} alt="Question" />
			</div>
			<div>
				<Para>
					You now know who we are, but for whom do we work? View the complete
					list of the businesses and clients we have assisted with their
					administrative, design, outsourcing, and other needs.
				</Para>
			</div>
			<div className="mt-5">
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					pagination={true}
					loop={true}
					modules={[Pagination, Navigation]}
				>
					<SwiperSlide>
						{secondSlide.map((who, index) => (
							<div className={styles.whoCouldClientele} key={index}>
								<p>{who.name}</p>
								<p>{who.percent}</p>
							</div>
						))}
					</SwiperSlide>
					<SwiperSlide>
						{firstSlide.map((who, index) => (
							<div className={styles.whoCouldClientele} key={index}>
								<p>{who.name}</p>
								<p>{who.percent}</p>
							</div>
						))}
					</SwiperSlide>
				</Swiper>
			</div>
		</Section>
	);
};

const WhoCouldYouBeDesktop = () => {
	return (
		<Section
			spacing="widest"
			container="spacingWidest"
			className={styles.secondGrid}
		>
			<div className="grid grid-cols-2 gap-10">
				<div>
					<div className="flex gap-x-2">
						<DesktopHeader title="Who could you be?" />
						<Image src={QuestionDesktop} alt="Question" width={150} />
					</div>
					<Para>
						You now know who we are, but for whom do we work? View the complete
						list of the businesses and clients we have assisted with their
						administrative, design, outsourcing, and other needs.
					</Para>
				</div>
				<div>
					<div className="grid grid-cols-2 gap-x-6">
						{whoCouldYouBeDeets.map((who, index) => (
							<div className={styles.whoCouldClientele} key={index}>
								<p>{who.name}</p>
								<p>{who.percent}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default function WhoCouldYouBe() {
	const [isDesktop] = useMediaQuery("(min-width: 768px)");

	return <>{isDesktop ? <WhoCouldYouBeDesktop /> : <WhoCouldYouBeMobile />}</>;
}
