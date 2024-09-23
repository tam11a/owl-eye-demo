"use client";

// Styled Components
import { Layout } from "antd";
const { Header } = Layout;

// Components
import ProfileDropdown from "./profile.dropdown";

export default function HeaderComponent() {
	return (
		<>
			<Header>
				<section className="flex flex-row justify-between items-center">
					<div className="text-white">
						<h1>Owl Eye Studio</h1>
					</div>

					<div>
						<ProfileDropdown />
					</div>
				</section>
			</Header>
		</>
	);
}
