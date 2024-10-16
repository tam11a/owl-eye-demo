"use client";

import { Button, Input, Modal, Typography } from "antd";
import React from "react";
import { createProject } from "./create.action";

interface CreateCardProps {
	author_id: string;
}

export default function CreateCard({ author_id }: CreateCardProps) {
	const [visible, setVisible] = React.useState(false);
	const toggleModal = () => setVisible((v) => !v);
	return (
		<>
			<Button
				type="dashed"
				onClick={toggleModal}
			>
				Create
			</Button>
			<Modal
				open={visible}
				onClose={toggleModal}
				closable
				onCancel={toggleModal}
				title={"Create a new project"}
				okText="Create"
				okButtonProps={{
					form: "create-project-form",
					htmlType: "submit",
				}}
			>
				<form
					className="my-8 space-y-2"
					id="create-project-form"
					onSubmit={async (e) => {
						e.preventDefault();
						const form = e.target as HTMLFormElement;
						const formData = new FormData(form);
						const data = Object.fromEntries(formData.entries());
						await createProject({ label: data?.label as string, author_id });
						form.reset();
						toggleModal();
					}}
				>
					<Typography.Text>Project Name</Typography.Text>
					<Input
						placeholder="Project Name"
						size="large"
						name="label"
						required
					/>
				</form>
			</Modal>
		</>
	);
}
