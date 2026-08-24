import { type LoginInput } from "@vitals-log/shared/validators/auth.schema";

const baseUrl = import.meta.env.VITE_ENV === "development" ? "" : import.meta.env.VITE_API_URL; // Default to localhost if not set

export const loginUser = async (credentials: LoginInput) => {
  try {
    const response = await fetch(`${baseUrl}/api/auth/login`, {
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