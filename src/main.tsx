import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App";
import { ThemeProvider } from "@/components/theme-provider";
import ErrorBoundary from "@/components/ErrorBoundary";

const root = document.getElementById("root");
const fallbackTxt = "The Root Element is not Defined";

if (!root) {
  throw new Error(fallbackTxt);
}
createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
