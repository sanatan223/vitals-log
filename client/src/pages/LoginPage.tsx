import { useState } from "react";
import { Input } from "../components/Input.tsx";
import { Button } from "../components/Button.tsx";
import { loginUser } from "../lib/api";
import { useMutation } from "@tanstack/react-query";
import { loginSchema } from "@vitals-log/shared/validators/auth.schema";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string[] }>({});

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.user.role === "ADMIN") {
        window.location.href = "/doctor-dashboard";
      } else {
        window.location.href = "/nurse-dashboard";
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setValidationErrors({});

      console.log("Attempting to login with:", { email, password });

      const parsed = loginSchema.safeParse({ email, password });
      console.log("Parsed result:", parsed);

      if (!parsed.success) {
        setValidationErrors(parsed.error.flatten().fieldErrors);
        return;
      }

      loginMutation.mutate(parsed.data);
    } catch (error) {
      console.error("Unexpected error during login:");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#f0f7ef]"
      style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <div className="flex flex-col items-center justify-center w-full max-w-[400px] bg-white rounded-lg shadow-md p-6">
        <div className="w-full max-w-[380px]">
          <div className="mb-8">
            <p
              className="text-[10px] tracking-widest uppercase mb-2"
              style={{ color: "#4a7848", fontFamily: "'JetBrains Mono', monospace" }}
            >
              VITALS-LOG HEALTH NETWORK
            </p>
            <h1
              className="text-2xl font-semibold"
              style={{ color: "#0f2b0e", letterSpacing: "-0.02em" }}
            >
              Staff Login
            </h1>
            <p className="text-sm mt-1" style={{ color: "#4a7848" }}>
              Authorized personnel only.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Error */}
              {/* {error && (
                  <div
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-sm"
                    style={{
                      background: "#fef2f2",
                      border: "1px solid #fca5a5",
                      color: "#b91c1c",
                    }}
                  >
                    <AlertCircle size={13} className="shrink-0" />
                    {error}
                  </div>
                )} */}

              {/* Staff Email */}
              <div>
                <Input
                  label="Staff Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="staff@vitalslog.com"
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email[0]}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <Input
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  {validationErrors.password && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.password[0]}</p>
                  )}
                </div>
              </div>

              <div style={{ borderTop: "1px solid #e4f2e3" }} />

              {/* '''Remember device'''
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setRememberDevice(!rememberDevice)}
                  className="w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all"
                  style={{
                    background: rememberDevice ? "#5ce25a" : "#ffffff",
                    border: `1.5px solid ${rememberDevice ? "#5ce25a" : "#c8e2c6"}`,
                  }}
                >
                  {rememberDevice && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5L3.5 6L8 1"
                        stroke="#0c1f0b"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                <span className="text-sm" style={{ color: "#4a7848" }}>
                  Keep me signed in for this shift (8 hrs)
                </span>
              </div> */}

              <Button type="submit" isLoading={loginMutation.isPending}>
                Sign In
              </Button>
            </form>

            {/* HIPAA notice */}
            {/* <div
                className="mt-6 flex items-start gap-2.5 px-4 py-3 rounded-lg"
                style={{ background: "#f0f7ef", border: "1px solid #d4e8d3" }}
              >
                <Shield size={12} className="shrink-0 mt-0.5" style={{ color: "#4a7848" }} />
                <p className="text-xs leading-relaxed" style={{ color: "#4a7848" }}>
                  This system is restricted to authorized Meridian Health Network staff. All access is recorded per HIPAA regulations. Unauthorized use is a federal offense.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-5">
                {["Privacy Policy", "IT Support", "Accessibility"].map((link) => (
                  <button
                    key={link}
                    type="button"
                    className="text-xs transition-colors"
                    style={{ color: "#9ab89a" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4a7848")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9ab89a")}
                  >
                    {link}
                  </button>
                ))}
              </div>

              <p className="text-center text-xs mt-3" style={{ color: "#c8e2c6" }}>
                © 2026 VITALS-LOG HEALTH Network · All rights reserved
              </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;