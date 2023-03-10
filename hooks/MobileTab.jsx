import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import Checked from "../images/icons/checked.svg";
import Unchecked from "../images/icons/unchecked.svg";

class MobileTab extends Component {
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

		let className = "mobile-tab-list-item";

		if (activeTab === label) {
			className += " mobile-tab-list-active";
		}

		return (
			<span className={className} onClick={onClick}>
				{activeTab === label ? (
					<Image src={Checked} alt="Checked" width={22} height={22} />
				) : (
					<Image src={Unchecked} alt="Unchecked" width={22} height={22} />
				)}
				<div className="tab-list-wrapper">
					<span className="text-xs font-bold">{label}</span>
					<span className="text-xs font-light">{label2}</span>
				</div>
			</span>
		);
	}
}

export default MobileTab;
