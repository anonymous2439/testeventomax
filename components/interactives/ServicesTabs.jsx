import React, { useState } from "react";
import { services } from "../../data/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import * as styles from "../../styles/modules/interactives/ServicesTabs.module.scss";
import Image from "next/image";

const Tab1 = () => {
	const full = services.length;
	const half = Math.ceil(full / 2);
	const bpoServices = services.slice(0, half);

	return (
		<div className={styles.tabContent}>
			<Swiper
				spaceBetween={50}
				slidesPerView={2}
				pagination={true}
				loop={true}
				modules={[Pagination, Navigation]}
			>
				{bpoServices.map((bpo, index) => (
					<SwiperSlide key={index}>
						<div>
							<Image src={bpo.image} alt={bpo.name} className="mx-auto" />
							<p className="text-center font-semibold pt-5">{bpo.name}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

const Tab2 = () => {
	const full = services.length;
	const half = Math.ceil(full / 2);
	const bpmServices = services.slice(half, full);

	return (
		<div className={styles.tabContent}>
			<Swiper
				spaceBetween={50}
				slidesPerView={2}
				pagination={true}
				loop={true}
				modules={[Pagination, Navigation]}
			>
				{bpmServices.map((bpm, index) => (
					<SwiperSlide key={index}>
						<div>
							<Image src={bpm.image} alt={bpm.name} className="mx-auto" />
							<p className="text-center font-semibold pt-5">{bpm.name}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default function App() {
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTab1 = () => {
		setActiveTab("tab1");
	};
	const handleTab2 = () => {
		setActiveTab("tab2");
	};

	return (
		<div className="App">
			<div className={styles.tabs}>
				<div className={styles.tabLinks}>
					<p
						onClick={handleTab1}
						className={activeTab === "tab1" ? "active" : ""}
					>
						BPO
					</p>
					<p
						onClick={handleTab2}
						className={activeTab === "tab2" ? "active" : ""}
					>
						BPM
					</p>
				</div>
				<div className="outlet">
					{activeTab === "tab1" ? <Tab1 /> : <Tab2 />}
				</div>
			</div>
		</div>
	);
}
