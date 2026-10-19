"use server";

import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export type AuthActionState = {
    success: boolean;
    message: string;
};

export async function registerUser(
    previousState: AuthActionState,
    formData: FormData
): Promise<AuthActionState> {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (
        typeof firstName !== "string" ||
        typeof lastName !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string" ||
        typeof confirmPassword !== "string" ||
        !firstName.trim() ||
        !lastName.trim() ||
        !email.trim() ||
        !password ||
        !confirmPassword
    ) {
        return {
            success: false,
            message: "Please complete all fields.",
        };
    }

    if (password !== confirmPassword) {
        return {
            success: false,
            message: "Passwords do not match.",
        };
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
        where: {
            email: normalizedEmail,
        },
    });

    if (existingUser) {
        return {
            success: false,
            message: "An account with this email already exists.",
        };
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await prisma.user.create({
        data: {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: normalizedEmail,
            passwordHash,
            role: "CLIENT",
        },
    });

    return {
        success: true,
        message: "Account created successfully.",
    };
}
