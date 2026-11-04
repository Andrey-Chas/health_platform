import { Suspense } from "react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { auth } from "@/auth";

export default function Home() {
  return (
    <Suspense fallback={<main aria-busy="true">Loading your account...</main>}>
      <AuthenticatedHome />
    </Suspense>
  );
}

async function AuthenticatedHome() {
  await connection();
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Health Platform</h1>
    </div>
  );
}
