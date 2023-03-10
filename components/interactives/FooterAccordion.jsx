import { useState, useRef } from "react";
import Image from "next/image";

import DoubleRight from "../../images/icons/double-right.svg";

function Accordion(props) {
	const [setActive, setActiveState] = useState("");
	const [setHeight, setHeightState] = useState("0px");
	const [setRotate, setRotateState] = useState("accordion__icon");

	const content = useRef(null);

	function toggleAccordion() {
		setActiveState(setActive === "" ? "active" : "");
		setHeightState(
			setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
		);
		setRotateState(
			setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
		);
	}

	return (
		<div className="accordion__section">
			<button className={`accordion ${setActive}`} onClick={toggleAccordion}>
				<p className="accordion__title">{props.title}</p>
				<Image src={DoubleRight} alt="doubleRight" className={`${setRotate}`} />
			</button>
			<div
				ref={content}
				style={{ maxHeight: `${setHeight}` }}
				className="accordion__content"
			>
				<div className="accordion__text">{props.children}</div>
			</div>
		</div>
	);
}

export default Accordion;
