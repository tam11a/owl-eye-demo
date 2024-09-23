"use client";

import { Button, Card, Input, Typography } from "antd";
const { Password } = Input;

export function LoginForm() {
	return (
		<Card
			classNames={{
				body: "space-y-4",
			}}
		>
			<div className="space-y-1">
				<Typography>Email</Typography>
				<Input
					size="large"
					placeholder="Email"
				/>
			</div>
			<div className="space-y-1">
				<Typography>Password</Typography>
				<Password
					size="large"
					placeholder="Password"
				/>
			</div>
			<Button
				type="primary"
				size="large"
				className="w-full"
			>
				Login
			</Button>
		</Card>
	);
}
