"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import type { AuthActionState } from "@/lib/auth/actions";

export async function loginUser(
    previousState: AuthActionState,
    formData: FormData,
): Promise<AuthActionState> {
    const email = formData.get("email");
    const password = formData.get("password");

    if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        !email.trim() ||
        !password
    ) {
        return {
            success: false,
            message: "Please enter your email and password.",
        };
    }

    try {
        await signIn("credentials", {
            email: email.trim().toLowerCase(),
            password,
            redirectTo: "/",
        });
    } catch (error) {
        if (error instanceof AuthError) {
            return {
                success: false,
                message: "Invalid email or password.",
            };
        }

        throw error;
    }

    return {
        success: true,
        message: "Login successful.",
    };
}
