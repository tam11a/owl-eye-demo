"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteProject(data: { project_id: string }) {
	const supabase = createClient();

	const { error } = await supabase
		.from("projects")
		.delete()
		.eq("id", data.project_id);

	if (error) {
		throw error;
	}

	revalidatePath("/", "layout");
	redirect("/");
}
