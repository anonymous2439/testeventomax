import { createClient } from "contentful";
import Head from "next/head";
import SEO from "@bradgarropy/next-seo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";

import Section from "../../components/Section";
import Layout from "../../components/layout/Layout";
import ArticleSidebar from "../../components/sections/articles/ArticleSidebar";

import * as styles from "../../styles/modules/sections/articles/Post.module.scss";

import Folder from "../../images/icons/folder.svg";
import Calendar from "../../images/icons/date.svg";

// const postSchema = {
// 	"@context": "https://schema.org/",
// 	"@type": "Article",
// 	mainEntityOfPage: {
// 		"@type": "WebPage",
// 		"@id": `https://www.eventomax.com/articles/${slug}`
// 	},
// 	headline: `EventoMax | ${blogTitle}`,
// 	description: `${description}`,
// 	image:
// 		"https://www.eventomax.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F48s5yct7sszr%2F63OIk5lMEifWqK4QLMsbB6%2F7cf54e86063c87354187dc0dfac07b74%2Flead-generation-attract-and-expand.jpg&w=1200&q=75",
// 	author: {
// 		"@type": "Organization",
// 		name: "Eventomax",
// 		url: "https://www.eventomax.com/articles/"
// 	},
// 	publisher: {
// 		"@type": "Organization",
// 		name: "Eventomax Inc.",
// 		logo: {
// 			"@type": "ImageObject",
// 			url: "http://www.w3.org/2000/svg"
// 		}
// 	},
// 	datePublished: "2023-02-10",
// 	dateModified: "2023-02-13"
// };

// show image / video on blog posts
const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
		console.log("fields: "+JSON.stringify(node.data.target));
		if(node.data.target.fields.file.contentType.includes("image"))
        	return <img src={node.data.target.fields.file.url} alt={node.data.target.fields.description}/>;
		else if(node.data.target.fields.file.contentType.includes("video"))
			return <video controls title={node.data.target.fields.description}>
				<source src={node.data.target.fields.file.url} type={node.data.target.fields.file.contentType} />
			</video>;
		else
			return "[file type unknown]";
      },
    },
  };

const client = createClient({
	space: "48s5yct7sszr",
	accessToken: "PKKJyJdNPBMdgbYPm38jK7_fOLveNFSVE5JnPlebHf8"
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "blogs"
	});

	const paths = res.items.map(item => {
		return {
			params: { slug: item.fields.slug }
		};
	});

	return {
		paths,
		fallback: false
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: "blogs",
		"fields.slug": params.slug
	});

	return {
		props: { articles: items[0] }
	};
}

export default function Post({ articles }) {
	const {
		blogTitle,
		publishedAt,
		featuredImage,
		categories,
		description,
		body,
		keywords
	} = articles.fields;

	return (
		<Layout>
			{/* <Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
				/>
			</Head> */}

			<Head>
				<link rel="shortcut icon" href="/favicon.svg"></link>
			</Head>
			<SEO
				title={`EventoMax | ${blogTitle}`}
				description={description}
				keywords={[`${keywords}`]}
			/>
			<Section
				spacing="wider"
				container="spacingWider"
				className="my-20 space-y-5 max-w-[1200px]"
			>
				<ArticleSidebar />
				<span className="tracking-wider font-medium">
					<Link className="hover:text-primary" href="/articles">
						Articles
					</Link>
					/{categories}/{blogTitle}
				</span>
				<h1 className={styles.postTitle}>{blogTitle}</h1>
				<div className="flex space-x-10">
					<div className="flex space-x-2">
						<span>
							<Image src={Folder} alt="Folder" width={24} height={24} />
						</span>
						<span className="font-medium cursor-default">
							{categories.join(", ")}
						</span>
					</div>
					<div className="flex space-x-2">
						<span>
							<Image src={Calendar} alt="Calendar" width={24} height={24} />
						</span>
						<span className="font-medium cursor-default">
							<Moment format="MMM. DD, YYYY">{publishedAt}</Moment>
						</span>
					</div>
				</div>
				<div className={styles.body}>
					<Image
						src={`https:` + featuredImage.fields.file.url}
						alt={blogTitle}
						width={featuredImage.fields.file.details.image.width}
						height={featuredImage.fields.file.details.image.height}
						className={styles.mainImage}
					/>
					<div className="mb-10">{documentToReactComponents(body, renderOptions)}</div>
				</div>
				<div className="clearfix"></div>
			</Section>
		</Layout>
	);
}
