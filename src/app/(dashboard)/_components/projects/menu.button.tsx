"use client";

import { Button, Dropdown, MenuProps } from "antd";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import React from "react";
import { deleteProject } from "./delete.action";

interface MenuButtonProps {
	project_id: string;
}

export default function MenuButton({ project_id }: MenuButtonProps) {
	const items: MenuProps["items"] = [
		{
			key: "7",
			label: (
				<Link href={`/studio/project/${project_id}?view=public`}>Preview</Link>
			),
			disabled: true,
		},
		{
			key: "1",
			label: <Link href={`/studio/project/${project_id}`}>Open in Editor</Link>,
		},
		{
			type: "divider",
		},
		{
			key: "3",
			label: (
				<Link href={`/studio/project/${project_id}/settings`}>Settings</Link>
			),
			disabled: true,
		},
		{
			key: "4",
			label: (
				<Link href={`/studio/project/${project_id}/settings`}>Feedback</Link>
			),
			disabled: true,
		},
		{
			type: "divider",
		},
		// Add more options here, such as "Clone", "Move", etc.
		{
			key: "2",
			label: "Delete",
			danger: true,
			onClick: async () => {
				// delete the project
				await deleteProject({ project_id });
			},
		},
	];

	return (
		<>
			<Dropdown menu={{ items }}>
				<Button
					icon={<EllipsisVertical height={15} />}
					size="small"
					type="text"
					className="absolute top-2 right-2"
				/>
			</Dropdown>
		</>
	);
}
