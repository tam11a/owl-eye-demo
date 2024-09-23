import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const { data: todos } = await supabase.from("todos").select();

	return (
		<ul>
			{todos?.map((todo: string) => (
				<li key={todo}>{todo}</li>
			))}
		</ul>
	);
}
