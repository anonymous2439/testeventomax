import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import Checked from "../images/icons/checked.svg";
import Unchecked from "../images/icons/unchecked.svg";

class Tab extends Component {
	static propTypes = {
		activeTab: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		label2: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	};

	onClick = () => {
		const { label, label2, onClick } = this.props;
		onClick(label, label2);
	};

	render() {
		const {
			onClick,
			props: { activeTab, label, label2 }
		} = this;

		let className = "desktop-tab-list-item";

		if (activeTab === label) {
			className += " desktop-tab-list-active";
		}

		return (
			<div className={className} onClick={onClick}>
				<div>
					<span className="text-xl font-bold">{label}</span>
					<br />
					<span className="text-base font-light">{label2}</span>
				</div>
				<div className="steps-checks">
					{activeTab === label ? (
						<Image src={Checked} alt="Checked" width={22} height={22} />
					) : (
						<Image src={Unchecked} alt="Unchecked" width={22} height={22} />
					)}
				</div>
			</div>
		);
	}
}

export default Tab;
