import { appEnvironment } from "@/services/runtimeConfig";

/**
 * Persistent Sandbox chrome. Only renders when APP_ENV=SANDBOX so UAT/SIT/PROD stay unchanged.
 */
export function SandboxEnvironmentBanner() {
  if (appEnvironment() !== "SANDBOX") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      data-testid="sandbox-environment-banner"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        minHeight: "2.25rem",
        padding: "0.4rem 1rem",
        background: "linear-gradient(90deg, #b45309 0%, #d97706 50%, #b45309 100%)",
        color: "#fff7ed",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        fontSize: "0.8125rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        borderBottom: "3px solid #78350f",
        boxShadow: "0 2px 8px rgba(120, 53, 15, 0.35)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "0.55rem",
          height: "0.55rem",
          borderRadius: "999px",
          background: "#fef3c7",
          boxShadow: "0 0 0 3px rgba(254, 243, 199, 0.35)",
        }}
      />
      <span>Sandbox · go-live rehearsal — not production</span>
      <span
        style={{
          marginLeft: "0.25rem",
          padding: "0.1rem 0.45rem",
          borderRadius: "0.25rem",
          background: "rgba(0,0,0,0.22)",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
        }}
      >
        SANDBOX
      </span>
    </div>
  );
}
