"use client";
import { createClient } from "@/utils/supabase/client";
import { Button } from "antd";
import { redirect } from "next/navigation";

export default function SignOutButton() {
	const supabase = createClient();

	return (
		<Button
			variant="filled"
			color="danger"
			onClick={async () => {
				await supabase.auth.signOut();
				redirect("/login");
			}}
		>
			Sign Out
		</Button>
	);
}
