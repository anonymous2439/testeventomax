import { MobileHeaderCenter } from "../../displays/Headers";
import Section from "../../Section";
import * as styles from "../../../styles/modules/sections/pricing/PricingBanner.module.scss";

export default function PricingBanner() {
	return (
		<>
			<div className={styles.pricingBannerWrapper}>
				<Section spacing="widest" container="spacingWidest">
					<MobileHeaderCenter title="Cost Breakdown" />
					<p className="text-white">
						We create legacies taking the company to a future it deserves.
						EventoMax has a pool of experts on board that will connect your
						brand to the world. The cost of our services is justifiable of what
						we are capable and deliver for our clients.
						<br />
						<br />
						Another reason companies prefer EventoMax is that it all alleviates
						company burdens such as purchasing equipment, looking for office
						space, and paying taxes. These are all on us.
					</p>
				</Section>
			</div>
		</>
	);
}
