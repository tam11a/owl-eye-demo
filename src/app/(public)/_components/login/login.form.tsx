"use client";

import { Button, Card, Input } from "antd";

export function LoginForm() {
	return (
		<Card>
			<Input placeholder="Username" />
			<Input placeholder="Password" />
			<Button type="primary">Login</Button>
		</Card>
	);
}
