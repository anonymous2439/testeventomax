import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import Image from "next/image";
import Section from "../../Section";
import LinkBtn from "../../interactives/LinkBtn";
import {
	DesktopHeaderCenter,
	MobileHeaderCenter,
	Para
} from "../../displays/Headers";

import { useMediaQuery } from "@chakra-ui/react";

import * as styles from "../../../styles/modules/sections/home/ChooseUs.module.scss";

import Coffee from "../../../images/icons/coffee.webp";
import CoffeeMobile from "../../../images/icons/coffee.webp";
import Plant from "../../../images/icons/plant.webp";
import Staff from "../../../images/icons/staff.svg";
import Talent from "../../../images/icons/talent.svg";
import Success from "../../../images/icons/success.svg";

const ChooseUsMobile = () => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<div className={styles.chooseUsBg}>
				<Image src={CoffeeMobile} alt="Coffee" className={styles.chooseUsImg} />
				<MobileHeaderCenter title="Why Choose Us?" />
				<Para
					desc="Choosing us means choosing maximum success. Finding a reliable arm to help boost your brand is the first step to achieving maximum success. EventoMax will be with you for the remainder of your business journey to ensure that all of your objectives are crossed off your bucket list."
					className="text-center"
				/>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					pagination={true}
					loop={true}
					modules={[Pagination, Navigation]}
				>
					<SwiperSlide>
						<div className="bg-white3 px-6 py-8">
							<div className="flex flex-nowrap flex-row justify-between">
								<h4 className="font-semibold">Reliable Staff</h4>
								<Image src={Staff} alt="Reliable Staff" />
							</div>
							<Para desc="Craft unforgettable application essays and cultivate world-class written and verbal communication skills." />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-tertiary px-6 py-8 text-white">
							<div className="flex flex-nowrap flex-row justify-between">
								<h4 className="font-semibold">Confident Talent</h4>
								<Image src={Talent} alt="Confident Talent" />
							</div>
							<p className="text-white font-bold mt-6">
								Build self-confidence, command attention and respect, and hone a
								razor-sharp competitive{" "}
								<edge className="asdasdasdsaedwaeawewae"></edge>
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-white3 px-6 py-8">
							<div className="flex flex-nowrap flex-row justify-between">
								<h4 className="font-semibold">Achieve Success</h4>
								<Image src={Staff} alt="Achieve Success" />
							</div>
							<Para desc="Ear admission to top BPO companies, lead the pack, and become unstoppable in work, and life." />
						</div>
					</SwiperSlide>
				</Swiper>
				<LinkBtn
					display="primary"
					title="Build your team now"
					href="/contact"
					size="full"
				/>
			</div>
		</Section>
	);
};

const ChooseUsDesktop = () => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<div className={styles.chooseUsWrapperDesktop}>
				<DesktopHeaderCenter title="Why Choose Us?" />
				<Image src={Coffee} className={styles.desktopCoffee} alt="Coffee" />
				<Para
					desc="Choosing us means choosing maximum success. Finding a reliable arm to help boost your brand is the first step to achieving maximum success. EventoMax will be with you for the remainder of your business journey to ensure that all of your objectives are crossed off your bucket list."
					className="text-center w-2/4 mx-auto"
				/>
				<Image src={Plant} className={styles.desktopPlant} alt="Plant" />
				<div className={styles.chooseUsTiles}>
					<div className="bg-white3 px-6 py-8 shadow-xl">
						<div className="flex flex-nowrap flex-row justify-between">
							<h4 className="font-semibold">Reliable Staff</h4>
							<Image src={Staff} alt="Reliable Staff" />
						</div>
						<Para desc="Craft unforgettable application essays and cultivate world-class written and verbal communication skills." />
					</div>
					<div className="bg-tertiary px-6 py-8 text-white shadow-xl">
						<div className="flex flex-nowrap flex-row justify-between">
							<h4 className="font-semibold">Confident Talent</h4>
							<Image src={Talent} alt="Confident Talent" />
						</div>
						<p className="text-white font-bold mt-6">
							Build self-confidence, command attention and respect, and hone a
							razor-sharp competitive edge.
						</p>
					</div>
					<div className="bg-white3 px-6 py-8 shadow-xl">
						<div className="flex flex-nowrap flex-row justify-between">
							<h4 className="font-semibold">Achieve Success</h4>
							<Image src={Staff} alt="Achieve Success" />
						</div>
						<Para desc="Ear admission to top BPO companies, lead the pack, and become unstoppable in work, and life." />
					</div>
				</div>
			</div>
		</Section>
	);
};

export default function ChooseUs() {
	const [isDesktop] = useMediaQuery("(min-width: 768px)");
	return <div>{isDesktop ? <ChooseUsDesktop /> : <ChooseUsMobile />}</div>;
}
