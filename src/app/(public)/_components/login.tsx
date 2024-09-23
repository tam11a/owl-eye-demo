"use client";

import { useState } from "react";

export function LoginForm() {
	const [email] = useState<string>("asdasd");
	return <p>{email}</p>;
}
