"use client";

import { useActionState } from "react";
import { loginUser } from "@/lib/auth/login";

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
    <form action={formAction}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>

      {state.message && <p role="status">{state.message}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
};

export default LoginForm;
