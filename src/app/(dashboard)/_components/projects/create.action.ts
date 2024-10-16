"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(data: {
	label: string;
	author_id: string;
}) {
	const supabase = createClient();

	const { error } = await supabase.from("projects").insert(data);

	if (error) {
		throw error;
	}

	revalidatePath("/", "layout");
	redirect("/");
}
