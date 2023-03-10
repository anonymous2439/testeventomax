import DesktopTabs from "../hooks/DesktopTabs";

import { MobileHeaderUnderlined } from "./displays/Headers";
import { steps } from "../data/dynamic";

function DesktopTabSection() {
	return (
		<div className="mt-6">
			<DesktopTabs>
				{steps.map((step, idx) => (
					<div key={idx} label={step.name} label2={`Step ${step.id}`}>
						<MobileHeaderUnderlined title={step.title} />
						<p className="pt-6">{step.desc}</p>
					</div>
				))}
			</DesktopTabs>
		</div>
	);
}

export default DesktopTabSection;
