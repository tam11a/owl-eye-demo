"use client";

import { Button, Card, Form, Input } from "antd";
import schema, { FormValues } from "./login.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "./login.action";

export function LoginForm() {
	const { handleSubmit, control } = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: FormValues) {
		await login(values);
	}

	return (
		<Card>
			<Form
				layout="vertical"
				className="space-y-4"
				requiredMark={false}
				onSubmitCapture={handleSubmit(onSubmit)}
			>
				<Controller
					control={control}
					name={"email"}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<Form.Item<FormValues>
							label="Email"
							name="email"
						>
							<Input
								placeholder="john.doe@example.com"
								size="large"
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								status={error ? "error" : ""}
							/>
							<Form.ErrorList
								className="text-red-500"
								fieldId="email"
								errors={[error?.message]}
							/>
						</Form.Item>
					)}
				/>
				<Controller
					control={control}
					name={"password"}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<Form.Item<FormValues>
							label="Password"
							name="password"
							tooltip="Password must be at least 6 characters."
						>
							<Input.Password
								placeholder="******"
								size="large"
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								status={error ? "error" : ""}
							/>
							<Form.ErrorList
								className="text-red-500"
								fieldId="password"
								errors={[error?.message]}
							/>
						</Form.Item>
					)}
				/>
				<Button
					size="large"
					type="primary"
					htmlType="submit"
					className="w-full"
				>
					Sign In
				</Button>
			</Form>
		</Card>
	);
}
