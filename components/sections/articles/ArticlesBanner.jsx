import Section from "../../Section";
import { DesktopHeaderCenter } from "../../displays/Headers";

import * as styles from "../../../styles/modules/sections/articles/Articles.module.scss";

export default function ArticlesBanner() {
	return (
		<div>
			<div className={styles.articlesOuterWrapper}>
				<div className={styles.articlesInnerWrapper}>
					<Section spacing="widest" container="spacingWidest">
						<DesktopHeaderCenter
							title="The EventoMax Blog"
							className="text-white"
						/>
						<p className="text-white text-center mt-10">
							Need more ideas about Eventomax? Check out our blog for handy,
							in-depth tips, as well as hot takes on today&apos;s trends in
							business!
						</p>
					</Section>
				</div>
			</div>
		</div>
	);
}
