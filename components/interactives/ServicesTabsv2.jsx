import React, { useState } from "react";
import { services } from "../../data/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import * as styles from "../../styles/modules/interactives/ServicesTabs.module.scss";
import Image from "next/image";
import { Para } from "../displays/Headers";
import LinkBtn from "./LinkBtn";

export default function App() {
	const [activeTab, setActiveTab] = useState("tab1");
	const [activeService, setActiveService] = useState(services[0]);

	const full = services.length;
	const half = Math.ceil(full / 2);
	const bpoServices = services.slice(0, half);
	const bpmServices = services.slice(half, full);

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
						className={activeTab === "tab1" ? "active2" : "default"}
					>
						BPO
					</p>
					<p
						onClick={handleTab2}
						className={activeTab === "tab2" ? "active2" : "default"}
					>
						BPM
					</p>
				</div>
				<div className="outlet">
					{activeTab === "tab1" ? (
						<div className={styles.tabContent}>
							<Swiper
								spaceBetween={50}
								slidesPerView={2}
								pagination={true}
								loop={true}
								modules={[Pagination, Navigation]}
							>
								{bpoServices.map((bpo, index) => (
									<SwiperSlide
										key={index}
										onClick={() => setActiveService(bpo)}
										className="cursor-pointer"
									>
										<div>
											<Image
												src={bpo.image}
												alt={bpo.name}
												className="mx-auto"
											/>
											<p className="text-center font-semibold pt-5">
												{bpo.name}
											</p>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					) : (
						<div className={styles.tabContent}>
							<Swiper
								spaceBetween={50}
								slidesPerView={2}
								pagination={true}
								loop={true}
								modules={[Pagination, Navigation]}
							>
								{bpmServices.map((bpm, index) => (
									<SwiperSlide
										key={index}
										onClick={() => setActiveService(bpm)}
										className="cursor-pointer"
									>
										<div>
											<Image
												src={bpm.image}
												alt={bpm.name}
												className="mx-auto"
											/>
											<p className="text-center font-semibold pt-5">
												{bpm.name}
											</p>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					)}
				</div>
			</div>
			<div>
				<div className="mb-6">
					<Image
						src={activeService.image}
						alt={activeService.name}
						width={720}
						height={390}
						className="border-2 border-black rounded-lg"
					/>
					<h3 className="font-bold mt-4">{activeService.name}</h3>
					<Para desc={activeService.desc} />
				</div>
				<LinkBtn
					display="primary"
					title="Contact Us"
					href="/contact"
					size="full"
				/>
			</div>
		</div>
	);
}
