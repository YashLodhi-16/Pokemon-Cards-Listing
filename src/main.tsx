import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/components/theme-provider";

export default App;

const root = document.getElementById("root");
const fallbackTxt = "The Root Element is not Defined";

if (!root) {
  throw new Error(fallbackTxt);
}
createRoot(root).render(
  <StrictMode>
    <ThemeProvider storageKey="vite-ui-theme">
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
