export interface AuthUser {
  id: string;
  role: "ADMIN" | "NURSE" | "PATIENT";
  email: string;
  name: string;
}

export interface LoginResponse {
  user: AuthUser;
}

export interface UserRequest {
  id: string;
  role: string;
}