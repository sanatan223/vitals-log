import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import { type UserRequest } from "@vitals-log/shared/types"

export interface AuthenticatedRequest extends Request {
  user?: UserRequest
}

export const requireAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Authentication required." });
  }

  try {
    const decoded = jwt.verify(token, process.env.AUTH_SECRET as string) as { id: string, role: string };
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

export const requireRole = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access forbidden: insufficient permissions." });
    }
    next();
  };
};