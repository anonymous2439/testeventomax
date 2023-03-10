import React, { useState } from "react";
import { services } from "../../data/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
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
		<div className="grid grid-cols-2 gap-6 mt-6">
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
			</div>
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
						<div className="grid grid-cols-2 mt-6 gap-6 text-center cursor-pointer">
							{bpoServices.map((bpo, index) => (
								<div key={index} className={styles.desktopServices} onClick={() => setActiveService(bpo)}>
									<p>{bpo.name}</p>
								</div>
							))}
						</div>
					) : (
						<div className="grid grid-cols-2 mt-6 gap-6 text-center cursor-pointer">
							{bpmServices.map((bpm, index) => (
								<div key={index} className={styles.desktopServices} onClick={() => setActiveService(bpm)}>
									<p>{bpm.name}</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
