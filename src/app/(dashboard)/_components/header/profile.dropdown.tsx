"use client";

import { createClient } from "@/utils/supabase/client";
import { Avatar, Dropdown, MenuProps } from "antd";
import { LogOutIcon, UserCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
	const router = useRouter();
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: "My Account",
		},
		{
			type: "divider",
		},
		{
			type: "group",
			label: "Settings",
			children: [
				{
					key: "3",
					label: "Billing",
				},
				{
					key: "4",
					label: "Settings",
				},
			],
		},
		{
			type: "divider",
		},
		{
			key: "5",
			label: "Signout",
			danger: true,
			icon: <LogOutIcon size={16} />,
			onClick: async (info) => {
				info.domEvent.preventDefault();

				// Log the user out
				const supabase = createClient();
				await supabase.auth.signOut();
				router.replace("/login"); // Redirect to the login page
			},
		},
	];

	return (
		<>
			<Dropdown menu={{ items }}>
				<Avatar
					size="large"
					icon={<UserCircleIcon />}
				/>
			</Dropdown>
		</>
	);
}
