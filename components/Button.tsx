import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    isLoading?: boolean;
    disabled?: boolean;
}

export const Button = ({ children, type = "button", isLoading = false }: ButtonProps) => {
    return (
        <button
            type={type}
            disabled={isLoading}
            style={{
                background: isLoading ? "#3fd63d" : "#5ce25a",
                color: "#0c1f0b",
            }}
            onMouseEnter={(e) => {
                if (!isLoading) e.currentTarget.style.background = "#4ed64c";
            }}
            onMouseLeave={(e) => {
                if (!isLoading) e.currentTarget.style.background = "#5ce25a";
            }}
            className={`
        flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 
        text-sm font-semibold text-white transition-all 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70
      `}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="rgba(12,31,11,0.25)" strokeWidth="3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="#0c1f0b" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Authenticating…
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    );
};