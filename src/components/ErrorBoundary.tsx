import { Component, ErrorInfo, ReactNode } from "react";

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
        <div className="h-svh w-svw flex justify-center items-center flex-col gap-y-0.5">
          <h1 className="text-center text-2xl font-bold text-red-600 capitalize">
            There was an Unexpected Error occured!
          </h1>
          <p className="text-lg font-medium capitalize">
            {this.state.errorMessage}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
