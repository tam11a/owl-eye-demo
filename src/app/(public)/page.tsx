import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { LoginForm } from "./_components/login/login.form";

export default async function Login() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data: todos } = await supabase.from("todos").select();

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
