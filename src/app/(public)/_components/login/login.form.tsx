"use client";

import { Button, Card, Form, Input } from "antd";
import schema, { FormValues } from "./login.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginForm() {
	const { reset, handleSubmit, control } = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: FormValues) {
		// Call the login API
		console.log(values);
		reset();
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
					rules={{ required: true }}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<>
							<Form.Item<FormValues>
								label="Email"
								name="email"
								style={{ marginBottom: "12px" }}
								rules={[{ required: true }]}
							>
								<Input
									placeholder="john.doe@example.com"
									size="large"
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									status={error ? "error" : ""}
								/>
							</Form.Item>
						</>
					)}
				/>
				<Controller
					control={control}
					name={"password"}
					rules={{ required: true }}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<>
							<Form.Item<FormValues>
								label="Password"
								name="password"
								style={{ marginBottom: "12px" }}
								rules={[{ required: true }]}
							>
								<Input.Password
									placeholder="******"
									size="large"
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									status={error ? "error" : ""}
								/>
							</Form.Item>
						</>
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
