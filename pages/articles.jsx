import { createClient } from "contentful";
import Head from "next/head";
import useMediaQuery from "../hooks/useMediaQuery";
import SEO from "@bradgarropy/next-seo";
import Section from "../components/Section";
import Layout from "../components/layout/Layout";
import ArticleCard from "../components/ArticleCard";
import * as styles from "../styles/modules/sections/articles/Articles.module.scss";
import {
	DesktopHeader,
	MobileHeaderCenter
} from "../components/displays/Headers";
import ArticlesBanner from "../components/sections/articles/ArticlesBanner";

export async function getStaticProps() {
	const client = createClient({
		space: "48s5yct7sszr",
		accessToken: "PKKJyJdNPBMdgbYPm38jK7_fOLveNFSVE5JnPlebHf8"
	});

	const res = await client.getEntries({ content_type: "blogs" });

	return {
		props: {
			articles: res.items
		}
	};
}

export default function Articles2({ articles }) {
	const isDesktop = useMediaQuery("(min-width: 600px)");

	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg"></link>
			</Head>
			<ArticlesBanner />
			<Section spacing="widest" container="spacingWidest">
				<SEO
					title="EventoMax | Articles"
					description="Check out our latest blogs on EventoMax work environment, Lead Generation Outsourcing, Bookkeeping, Appointment Setters"
					keywords={[
						"Appointment Setters, Appointment Setting, Appointment Setter Jobs, Appointment Setter Job Description, Appointment Makers, Appointment, Appointment Makers"
					]}
				/>
				{isDesktop ? (
					<DesktopHeader title="Blog" />
				) : (
					<MobileHeaderCenter title="Blog" className="mb-10" />
				)}
				{isDesktop ? (
					<h4>Our hot takes and hot tips</h4>
				) : (
					<p className="text-center">Our hot takes and hot tips</p>
				)}
				<div className={styles.feed}>
					{articles.map(article => (
						<ArticleCard key={article.sys.id} article={article} />
					))}
				</div>
			</Section>
		</Layout>
	);
}
