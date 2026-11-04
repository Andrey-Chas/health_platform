import { Suspense } from "react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { auth } from "@/auth";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <Suspense fallback={<main aria-busy="true">Loading...</main>}>
      <AuthenticatedRegisterPage />
    </Suspense>
  );
}

async function AuthenticatedRegisterPage() {
  await connection();

  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <AuthLayout
      title="Create an account"
      description="Join Health Platform to manage your health and stay connected with your doctor."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
