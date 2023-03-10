import Section from "../../Section";
import * as styles from "../../../styles/modules/sections/pricing/Price.module.scss";
import LinkBtn from "../../interactives/LinkBtn";

export default function Price() {
	return (
		<div className={styles.priceWrapper}>
			<Section spacing="widest" container="spacingWidest">
				<div className={styles.priceCards}>
					<div className={styles.priceCard}>
						<p className={styles.priceTitle}>BPO Staffing</p>
						<div className="flex justify-between items-center pt-6 border-b border-black pb-2">
							<p>BPO Services</p>
							<p className="text-right">
								$8 <br /> <span>Per hour/headcount</span>
							</p>
						</div>
						<div className="flex justify-between items-center pt-6 border-b border-black pb-2">
							<p>Offices</p>
							<p className="text-right">
								$8 <br /> <span>Per month</span>
							</p>
						</div>
						<div className="flex justify-between items-center pt-6 border-b border-black pb-2">
							<p>Equipment</p>
							<p className="text-right">
								$8 <br /> <span>Per Staff</span>
							</p>
						</div>
						<div className="flex justify-between items-center pt-6 border-b border-black pb-2">
							<p>Taxes & Benefits</p>
							<p className="text-right">
								$8 <br /> <span>Per Staff</span>
							</p>
						</div>
					</div>
					<div className={styles.priceCard}>
						<p className={styles.priceTitle}>BPM Staffing</p>
						<div className="flex justify-between items-center pt-6 border-b border-black pb-2">
							<p>BPM Services</p>
							<p className="text-right">
								$8 <br /> <span>Per hour/headcount</span>
							</p>
						</div>
						<div className="flex justify-between items-center pt-6 border-b border-black pb-2">
							<p>Offices</p>
							<p className="text-right">
								$8 <br /> <span>Per month</span>
							</p>
						</div>
						<div className="flex justify-between items-center pt-6 border-b border-black pb-2">
							<p>Equipment</p>
							<p className="text-right">
								$8 <br /> <span>Per Staff</span>
							</p>
						</div>
						<div className="flex justify-between items-center pt-6 border-b border-black pb-2">
							<p>Taxes & Benefits</p>
							<p className="text-right">
								$8 <br /> <span>Per Staff</span>
							</p>
						</div>
					</div>
				</div>
				<LinkBtn
					title="Build your dream team today!"
					href="/contact"
					display="primary"
					size="fit"
					className="text-center pt-6"
				/>
			</Section>
		</div>
	);
}
