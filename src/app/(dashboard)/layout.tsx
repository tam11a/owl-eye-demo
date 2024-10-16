// Studio App layout

import HeaderComponent from "./_components/header/header.component";

export default function StudioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<HeaderComponent />
			<main className="p-5 max-w-7xl mx-auto">{children}</main>
		</>
	);
}
