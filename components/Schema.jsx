import Head from "next/head";

export default function Schema({ data }) {
	return (
		<Head>
			<script
				key="structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
			/>
		</Head>
	);
}
