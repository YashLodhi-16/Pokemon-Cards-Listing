import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App";
import ErrorBoundary from "@/components/ErrorBoundary";

const root = document.getElementById("root");
const fallbackTxt = "The Root Element is not Defined";

if (!root) {
  throw new Error(fallbackTxt);
}
createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
