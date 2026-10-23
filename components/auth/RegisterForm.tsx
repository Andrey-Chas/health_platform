"use client";

import { useActionState } from "react";
import { registerUser } from "@/lib/auth/actions";
import { Button } from "@/components/ui/button";

const initialState = {
  success: false,
  message: "",
};

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6">
      {/* Name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-foreground"
          >
            First name
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Enter your first name"
            required
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-none outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-foreground"
          >
            Last name
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Enter your last name"
            required
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-none outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          required
          className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-none outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-foreground"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Create a password"
          required
          className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-none outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </div>

      {/* Confirm password */}
      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-medium text-foreground"
        >
          Confirm password
        </label>

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="Confirm your password"
          required
          className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground shadow-none outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </div>

      {/* Feedback */}
      {state.message && (
        <p
          role={state.success ? "status" : "alert"}
          aria-live={state.success ? "polite" : "assertive"}
          className={`rounded-xl px-4 py-3 text-sm ${
            state.success
              ? "bg-primary/10 text-primary"
              : "bg-destructive/10 text-destructive"
          }`}
        >
          {state.message}
        </p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={isPending}
        className="h-12 w-full rounded-xl text-sm font-semibold shadow-none transition-all hover:opacity-90"
      >
        {isPending ? "Creating account..." : "Create account"}
      </Button>

      {/* Login */}
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-medium text-primary transition-colors hover:text-primary/80"
        >
          Sign in
        </a>
      </p>
    </form>
  );
};

export default RegisterForm;
