"use server";

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

    return {
        success: true,
        message: "Registration data validated successfully.",
    };
}
