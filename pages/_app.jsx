import { Raleway } from "@next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { chakraCustomThemes } from "../styles/chakraCustomStyles";
import Script from "next/script";

import "../styles/global.scss";

const raleway = Raleway({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
	return (
		<main className={raleway.className}>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=GTM-MGGNLDW"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
               window.dataLayer = window.dataLayer || [];
               function gtag(){window.dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'GTM-MGGNLDW');
            `}
			</Script>
			<ChakraProvider theme={chakraCustomThemes}>
				<Component {...pageProps} />
			</ChakraProvider>
		</main>
	);
}

export default MyApp;
