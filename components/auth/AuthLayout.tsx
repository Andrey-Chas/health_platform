import Image from "next/image";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <main className="min-h-svh bg-background lg:grid lg:grid-cols-2">
      {/* Brand / visual panel */}
      <section className="relative hidden min-h-svh overflow-hidden bg-muted lg:block">
        <div className="absolute inset-0 bg-[url('/images/auth-background.png')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-transparent dark:bg-black/20" />

        <div className="relative z-10 flex min-h-svh flex-col p-10 xl:p-12">
          {/* Brand */}
          <div className="flex items-center gap-1">
            <Image
              src="/logo.svg"
              alt="Health Platform"
              width={42}
              height={42}
              priority
              className="h-10 w-17"
            />

            <span className="text-xl font-semibold tracking-tight text-[#102a4c] dark:text-white">
              Health Platform
            </span>
          </div>

          {/* Message */}
          <div className="mt-[28vh] max-w-md">
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#102a4c] xl:text-5xl">
              Your Health
              <br />
              Matters
            </h2>

            <p className="mt-5 max-w-sm text-base leading-7 text-[#6d819b] xl:text-lg">
              Book appointments, manage your health and stay connected with your
              doctor.
            </p>
          </div>
        </div>
      </section>

      {/* Authentication panel */}
      <section className="flex min-h-svh items-center justify-center px-6 py-10 sm:px-10 lg:px-12 xl:px-20">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-10 flex justify-center lg:hidden">
            <Image
              src="/logo.svg"
              alt="Health Care"
              width={48}
              height={48}
              priority
              className="h-20 w-20"
            />
          </div>
          <header className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              {description}
            </p>
          </header>

          {children}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
