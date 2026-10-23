"use client";

import { useActionState } from "react";
import { loginUser } from "@/lib/auth/login";
import { Button } from "@/components/ui/button";

const initialState = {
  success: false,
  message: "",
};

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(
    loginUser,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6">
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
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm font-medium text-foreground"
          >
            Password
          </label>

          <button
            type="button"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Forgot password?
          </button>
        </div>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
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
        {isPending ? "Signing in..." : "Sign in"}
      </Button>

      {/* Registration */}
      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <a
          href="/register"
          className="font-medium text-primary transition-colors hover:text-primary/80"
        >
          Create one
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
