"use client";
import { Button } from "antd";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
	const supabase = createClient();
	const router = useRouter();

	return (
		<Button
			variant="filled"
			color="danger"
			onClick={async () => {
				await supabase.auth.signOut();
				router.replace("/login");
			}}
		>
			Sign Out
		</Button>
	);
}
