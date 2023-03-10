import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children, pageImage }) {
	const indexSchema = {
		"@context": "http://schema.org",
		"@type": "LocalBusiness",
		name: "EventoMax",
		image:
			"https://www.eventomax.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-field-feature.6a42fe07.png&w=1920&q=75",
		telephone: "+(032) 344-5835",
		email: "hello@eventomax.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Support BPO Bldg., Hernan Cortes",
			addressLocality: "Mandaue City",
			addressRegion: "Cebu",
			addressCountry: "PH",
			postalCode: "6014"
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: { "@type": "DayOfWeek", name: "Monday - Friday" },
			opens:
				"Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
			closes:
				"Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30"
		},
		url: "https://www.google.com/webmasters/markup-helper/u/0/tagger?sourceId=107853651&hl=en_GB"
	};

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg"></link>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(indexSchema) }}
				/>
				<meta property="og:image" content={pageImage ? pageImage : ''} />
			</Head>
			<Navigation />
			{children}
			<Footer />
		</>
	);
}
