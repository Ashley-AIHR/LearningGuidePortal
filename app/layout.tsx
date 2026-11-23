import type { Metadata } from "next";
import { SandboxEnvironmentBanner } from "@/components/portal/SandboxEnvironmentBanner";
import { StreamedContent } from "@/components/portal/StreamedContent";
import { appEnvironment } from "@/services/runtimeConfig";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "katex/dist/katex.min.css";
import "./styles.css";
import "./portal-design.css";

const sandbox = appEnvironment() === "SANDBOX";

export const metadata: Metadata = {
  title: sandbox ? "[SANDBOX] Learning Guide" : "Learning Guide",
  description: sandbox
    ? "Learning Guide Sandbox — go-live rehearsal, not production"
    : "Learning Guide production website"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <SandboxEnvironmentBanner />
        <StreamedContent>{children}</StreamedContent>
      </body>
    </html>
  );
}
