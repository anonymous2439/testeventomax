import Image from "next/image";
import Section from "../../Section";
import { useMediaQuery } from "@chakra-ui/react";
import { leadership } from "../../../data/dynamic";
import {
	MobileHeaderCenter,
	Para,
	SmallDesktopHeader
} from "../../displays/Headers";
import * as styles from "../../../styles/modules/sections/about-us/Leadership.module.scss";
import Leon from "../../../images/staff/leon.webp";

const LeadershipMobile = () => {
	return (
		<Section spacing="widest" container="spacingWidest">
			<MobileHeaderCenter title="The Leadership" />
			<h2 className="text-center font-bold mt-10">
				This is the <br /> EventoMax team
			</h2>
			<Para
				className="text-center"
				desc="The company is led by a highly experienced and proactive team of passionate leaders who are well aware of the outsourcing race that is shaping global business today."
			/>
			<div className={styles.staffWrapper}>
				<div className={styles.ceoWrapper}>
					<div>
						<Image
							src={Leon}
							alt="Leon"
							width={300}
							height={300}
							className="rounded-md"
						/>
					</div>
					<div>
						<p>Founder & CEO</p>
						<h2 className="font-bold">Leon</h2>
					</div>
				</div>
				<div className={styles.otherStaff}>
					{leadership.map((leaders, index) => (
						<div key={index}>
							<Image
								src={leaders.image}
								alt={leaders.name}
								className="rounded-md"
							/>
							<p className="text-grey3 text-xs mt-4">{leaders.position}</p>
							<p className="font-semibold">{leaders.name}</p>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

const LeadershipDesktop = () => {
	return (
		<div>
			<Section spacing="wider" container="spacingWider">
				<div className={styles.leadershipWrapperDesktop}>
					<div className={styles.ceoWrapperDesktop}>
						<div>
							<Image
								src={Leon}
								alt="Leon"
								className="rounded-md"
								width={400}
								height={400}
							/>
						</div>
						<div className="mt-4">
							<p>Founder & CEO</p>
							<h2 className="font-bold">Leon</h2>
						</div>
					</div>
					<div>
						<SmallDesktopHeader title="The Leadership" />
						<h5 className="font-bold mt-10">
							This is the <br /> EventoMax team
						</h5>
						<Para desc="The company is led by a highly experienced and proactive team of passionate leaders who are well aware of the outsourcing race that is shaping global business today." />
					</div>
				</div>
			</Section>
			<Section spacing="widest" container="spacingWidest">
				<div className={styles.otherStaffDesktop}>
					{leadership.map((leaders, index) => (
						<div key={index} className="max-w-70">
							<Image
								src={leaders.image}
								alt={leaders.name}
								className="rounded-md mx-auto"
							/>
							<p className="text-grey3 mt-4">{leaders.position}</p>
							<h3 className="font-bold">{leaders.name}</h3>
						</div>
					))}
				</div>
			</Section>
		</div>
	);
};

export default function Leadership() {
	const [isDesktop] = useMediaQuery("(min-width: 690px)");

	return <div>{isDesktop ? <LeadershipDesktop /> : <LeadershipMobile />}</div>;
}
