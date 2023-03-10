import React, { useState } from "react";
import Image from "next/image";
import CostFeature from "../../images/cost-breakdown-featured.webp";
import * as styles from "../../styles/modules/sections/home/CostBreakdown.module.scss";

const Tab1 = () => {
	return (
		<div className={styles.costSwiperBg}>
			<div className={styles.costSwiperSlides}>
				<Image src={CostFeature} alt="Cost Breakdown" />
			</div>
		</div>
	);
};

const Tab2 = () => {
	return (
		<div className={styles.costSwiperBg}>
			<div className={styles.costSwiperSlides}>
				<Image src={CostFeature} alt="Cost Breakdown" />
			</div>
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
		<div className="App mt-10">
			<div className="tabs">
				<div className="grid grid-cols-2 text-center cursor-pointer mb-6">
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
					{activeTab === "tab1" ? <Tab1 /> : <Tab2 />}
				</div>
			</div>
		</div>
	);
}
