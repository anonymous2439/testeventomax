import { aboutTiles } from "../../../data/dynamic";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import * as styles from "../../../styles/modules/sections/about-us/Tiles.module.scss";

const TilesMobile = () => {
	return (
		<div className={styles.tilesWrapperMobile}>
			{aboutTiles.map((tiles, index) => (
				<div key={index} className={styles.tiles}>
					<div className="h-36">
						<Image src={tiles.icon} alt={tiles.name} />
					</div>
					<h4>{tiles.name}</h4>
					<div className={styles.tilesOverlay}>
						<p>{tiles.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
};

const TilesDesktop = () => {
	return (
		<div className={styles.tilesWrapperDesktop}>
			{aboutTiles.map((tiles, index) => (
				<div key={index} className={styles.tiles}>
					<div className="h-36">
						<Image src={tiles.icon} alt={tiles.name} />
					</div>
					<h3>{tiles.name}</h3>
					<div className={styles.tilesOverlay}>
						<p>{tiles.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default function Tiles() {
	const [isDesktop] = useMediaQuery("(min-width: 824px)");
	return <div>{isDesktop ? <TilesDesktop /> : <TilesMobile />}</div>;
}
