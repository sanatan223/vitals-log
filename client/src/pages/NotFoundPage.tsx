const NotFoundPage = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#f0f7ef" }}
    >

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">

        {/* Error code */}
        <div className="relative mb-6 select-none">
          <p
            className="font-bold leading-none"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(6rem, 18vw, 11rem)",
              color: "#e8f3e7",
              letterSpacing: "-0.05em",
              userSelect: "none",
            }}
          >
            404
          </p>

          {/* Overlay accent on the zero */}
          <p
            className="absolute inset-0 font-bold leading-none pointer-events-none"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(6rem, 18vw, 11rem)",
              letterSpacing: "-0.05em",
              background: "linear-gradient(135deg, #5ce25a 0%, #3ab838 60%, transparent 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.18,
            }}
          >
            404
          </p>
        </div>

        {/* Flatline visual */}
        <div className="w-full max-w-sm mb-10 px-4">
          <p className="text-[10px] tracking-widest uppercase mt-2"
            style={{ color: "#9ab89a", fontFamily: "'JetBrains Mono', monospace" }}>
            Signal lost · Page not found
          </p>
        </div>

        {/* Heading + description */}
        <div className="max-w-md mb-10">
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: "#0f2b0e", letterSpacing: "-0.02em" }}
          >
            Page Not Found
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#4a7848" }}>
            The resource you requested could not be located, or you may not have sufficient privileges to access it. If you arrived here from a saved link, it may have expired or been moved.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-sm font-semibold transition-all cursor-pointer"
            style={{ background: "#5ce25a", color: "#0c1f0b" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#4ed64c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#5ce25a")}
          >
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;