"use client";

// Styled Components
import { Button, Card, Form, Input } from "antd";
const { Item, ErrorList } = Form;
const { Password } = Input;

// Hooks
import { Controller, useForm } from "react-hook-form";

// Resolvers
import schema, { FormValues } from "./login.schema";
import { zodResolver } from "@hookform/resolvers/zod";

// Actions
import { login } from "./login.action";

export function LoginForm() {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormValues>({
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
						<Item<FormValues>
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
							<ErrorList
								className="text-red-500"
								fieldId="email"
								errors={[error?.message]}
							/>
						</Item>
					)}
				/>
				<Controller
					control={control}
					name={"password"}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<Item<FormValues>
							label="Password"
							name="password"
							tooltip="Password must be at least 6 characters."
							// status={error ? "error" : ""}
						>
							<Password
								placeholder="******"
								size="large"
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								status={error ? "error" : ""}
							/>
						</Item>
					)}
				/>
				<ErrorList
					className="text-red-500"
					errors={Object.values(errors).map((error) => error.message)}
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
