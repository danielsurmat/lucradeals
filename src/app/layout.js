import { Geist, Geist_Mono } from "next/font/google"
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

// app/layout.js or app/page.js (if it's homepage)
export const metadata = {
  title: {
    default: "Lucradeals | Best Water Bottles & Hydration Deals",
    template: "%s | Lucradeals",
  },
  description:
    "Shop the best water bottles at Lucradeals – stainless steel, insulated, leakproof, and eco-friendly designs. Stay hydrated with unbeatable deals today!",
  icons: {
	icon: "/lucradeals-favicon.png",
  },
	keywords: [
    "water bottles",
    "stainless steel bottles",
    "insulated bottles",
    "leakproof bottles",
    "hydration",
    "eco-friendly bottles",
    "Lucradeals deals",
  ],
  metadataBase: new URL("https://lucradeals.com"), // change to your domain
  openGraph: {
    title: "Lucradeals | Best Water Bottles & Hydration Deals",
    description:
      "Discover premium water bottles at the best prices – Owala, Stanley, HydroJug, Coldest, BrüMate, and more. Shop now and save big!",
    url: "https://lucradeals.com",
    siteName: "Lucradeals",
    locale: "en_US",
    type: "website",
  },
  
};


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased !bg-gray-300 text-white`}
			>
				<Header />

				<main className="pt-18 lg:pt-18 px-2 lg:px-4">{children}</main>
			</body>
		</html>
	)
}
