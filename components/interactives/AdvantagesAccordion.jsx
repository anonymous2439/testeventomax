import { useState, useRef } from "react";
import Image from "next/image";

import ExpandDown from "../../images/icons/expand-down.svg";

function Accordion(props) {
	const [setActive, setActiveState] = useState("");
	const [setHeight, setHeightState] = useState("0px");
	const [setRotate, setRotateState] = useState("advantages_accordion__icon");

	const content = useRef(null);

	function toggleAccordion() {
		setActiveState(setActive === "" ? "advantagesActive" : "");
		setHeightState(
			setActive === "advantagesActive"
				? "0px"
				: `${content.current.scrollHeight}px`
		);
		setRotateState(
			setActive === "advantagesActive"
				? "advantages_accordion__icon"
				: "advantages_accordion__icon rotate"
		);
	}

	return (
		<div className="advantages_accordion__section">
			<button
				className={`advantages_accordion ${setActive}`}
				onClick={toggleAccordion}
			>
				<p className="advantages_accordion__title">{props.title}</p>
				<Image src={ExpandDown} alt="doubleRight" className={`${setRotate}`} />
			</button>
			<div
				ref={content}
				style={{ maxHeight: `${setHeight}` }}
				className="advantages_accordion__content"
			>
				<div className="advantages_accordion__text">{props.children}</div>
			</div>
		</div>
	);
}

export default Accordion;
