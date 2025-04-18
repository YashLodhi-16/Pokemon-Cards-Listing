import { Component, ErrorInfo, ReactNode } from "react";
import CoreErrorBoundary from "./CoreErrorBoundary";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: null | string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: null,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true, errorMessage: _.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError && this.state.errorMessage) {
      return (
        <CoreErrorBoundary
          type="global"
          errorMessage={this.state.errorMessage}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
