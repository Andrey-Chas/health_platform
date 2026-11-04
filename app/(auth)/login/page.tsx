import { Suspense } from "react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { auth } from "@/auth";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <Suspense fallback={<main aria-busy="true">Loading...</main>}>
      <AuthenticatedLoginPage />
    </Suspense>
  );
}

async function AuthenticatedLoginPage() {
  await connection();

  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to access your Health Platform account."
    >
      <LoginForm />
    </AuthLayout>
  );
}
