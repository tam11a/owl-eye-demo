import { LoginForm } from "./_components/login/login.form";

export default async function Login() {
	return (
		<>
			<main className="w-svw h-svh flex flex-col items-center justify-center">
				<section className="max-w-xs w-full">
					<LoginForm />
				</section>
			</main>
		</>
	);
}
