import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ClientLayout from "./layout.client";

const fontSans = Outfit({
	// Google Font
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
	title: "Studio | Owl Eye",
	description: "360 Tour Editing Software",
	icons: ["favicon.svg"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(fontSans.className, `antialiased`)}>
				<AntdRegistry>
					<ClientLayout>{children}</ClientLayout>
				</AntdRegistry>
			</body>
		</html>
	);
}
