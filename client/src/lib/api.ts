import { type LoginInput } from "@vitals-log/shared/validators/auth.schema";

export const loginUser = async (credentials: LoginInput) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to login. Please try again.");
    }

    return data;
  } catch (error) {
    console.log("error occured in server api.")
  }
};