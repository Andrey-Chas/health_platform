"use client";

import { useActionState } from "react";
import { registerUser } from "@/lib/auth/actions";

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
    <form action={formAction}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" type="text" required />
      </div>

      <div>
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" name="lastName" type="text" required />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
        />
      </div>

      {state.message && <p role="status">{state.message}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
};

export default RegisterForm;
