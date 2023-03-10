import MobileTabs from "../hooks/MobileTabs";

import { MobileHeaderUnderlined } from "./displays/Headers";
import { steps } from "../data/dynamic";

function MobileTabSection() {
	return (
		<div className="mt-6">
			<MobileTabs>
				{steps.map((step, idx) => (
					<div key={idx} label={step.name} label2={`Step ${step.id}`}>
						<MobileHeaderUnderlined title={step.title} />
						<p className="pt-6">{step.desc}</p>
					</div>
				))}
			</MobileTabs>
		</div>
	);
}

export default MobileTabSection;
