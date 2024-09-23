import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
	const supabase = createClient();

	// get the user data from the server
	const { data } = await supabase.auth.getUser();

	// if there is no user data, redirect to the login page
	if (!data?.user) redirect("/login");

	return (
		<>
			<h1 className="text-lg">Welcome back, {data.user.email}</h1>
		</>
	);
}
