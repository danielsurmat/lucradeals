import { Geist, Geist_Mono , Roboto , Poppins} from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["400", "700"],
})

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "600", "700"],
})


export const metadata = {
	title: {
		default: "Best Water Bottles in 2025",
		template: "%s - Best Water Bottles in 2025",
	},
	description:
		"Shop the best water bottles. Stainless steel, insulated, leakproof, and eco-friendly designs. Stay hydrated with unbeatable deals today!",
	icons: {
		icon: "/favicon.png",
	},
	metadataBase: new URL("https://lucradeals.com"), // change to your domain
	openGraph: {
		title: "Best Water Bottles",
		description:
			"Discover premium water bottles at the best prices Owala, Stanley, HydroJug, Coldest, BrüMate, and more. Shop now and save big!",
		url: "https://lucradeals.com",
		siteName: "Lucradeals",
		locale: "en_US",
		type: "website",
	},

	other: {
		"impact-site-verification": "e70fa6dc-d47b-408f-a7d7-778d3deac641",
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body 
				className={`${poppins.variable} ${roboto.variable} min-h-screen antialiased bg-white text-black`}
			>
				<Header />

				<main className="mt-15 text-black">
					{children}
				</main>
			</body>
		</html>
	)
}
