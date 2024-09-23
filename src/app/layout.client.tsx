"use client";

import { ConfigProvider } from "antd";

interface ClientLayoutProps {
	children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#1e1e1e",
						fontFamily: "Outfit, sans-serif",
					},
				}}
			>
				{children}
			</ConfigProvider>
		</>
	);
}
