/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Moment from "react-moment";
import * as styles from "../styles/modules/sections/articles/Articles.module.scss";
import Link from "next/link";

export default function ArticlesCard({ article }) {
	const { blogTitle, slug, publishedAt, featuredImage, categories } =
		article.fields;

	return (
		<div className={styles.post}>
			<Link href={`/articles/` + slug}>
				<Image
					src={`https:` + featuredImage.fields.file.url}
					alt={blogTitle}
					width={featuredImage.fields.file.details.image.width}
					height={featuredImage.fields.file.details.image.height}
				/>
				<div className="p-4">
					<div className={styles.cardDetail}>
						<p className="font-semibold text-left">{blogTitle}</p>
						<div className={styles.innerDetail}>
							<div className={styles.innerDeets}>
								<p>
									<Moment format="MMM. DD, YYYY">{publishedAt}</Moment>
								</p>
								<p>{categories}</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
