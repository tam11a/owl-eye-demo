import { createClient } from "@/utils/supabase/server";
import { Card, Divider, Tag } from "antd";
import { redirect } from "next/navigation";
import CreateCard from "./_components/projects/create.card";
import moment from "moment";
import Link from "next/link";
import MenuButton from "./_components/projects/menu.button";

export default async function Home() {
	const supabase = createClient();

	// get the user data from the server
	const {
		data: { user },
	} = await supabase.auth.getUser();

	// if there is no user data, redirect to the login page
	if (!user) redirect("/login");

	const { data: projects } = await supabase
		.from("projects")
		.select()
		.eq("author_id", user.id);

	console.log(user, projects);

	return (
		<>
			<section className="flex flex-row items-center gap-4">
				<h1 className="text-lg">Your Projects</h1>
				<CreateCard author_id={user.id} />
			</section>
			<Divider />
			{projects?.length === 0 ? (
				<div className="h-svh max-h-[500px] w-full flex flex-col items-center justify-center">
					<p className="text-slate-800">You have no projects yet</p>
				</div>
			) : (
				<section className="grid grid-cols-5 gap-2">
					{projects?.map((project) => (
						<Card
							key={project.id}
							className="bg-slate-100 border-slate-200"
						>
							<Link
								href={`/studio/project/${project.id}`}
								className="text-slate-800"
							>
								<h2 className="flex flex-row mb-3 items-center gap-2 font-bold text-lg">
									{project.label}{" "}
									<Tag
										color={
											project.is_draft
												? "default"
												: project.is_published
												? "cyan-inverse"
												: "orange-inverse"
										}
									>
										{project.is_draft
											? "Draft"
											: project.is_published
											? "Published"
											: "Archived"}
									</Tag>
								</h2>
							</Link>
							<p className="text-xs">{moment(project.updated_at).calendar()}</p>
							<MenuButton project_id={project.id} />
						</Card>
					))}
				</section>
			)}
		</>
	);
}
