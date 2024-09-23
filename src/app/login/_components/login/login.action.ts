"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import { FormValues } from "./login.schema";

export async function login(data: FormValues) {
	const supabase = createClient();

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		throw error;
	}

	revalidatePath("/", "layout");
	redirect("/");
}
