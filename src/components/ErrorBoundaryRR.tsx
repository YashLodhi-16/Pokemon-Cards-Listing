import { useRouteError } from "react-router";
import CoreErrorBoundary from "./CoreErrorBoundary";

const ErrorBoundaryRR = () => {
  const error = useRouteError() as Error;
  return <CoreErrorBoundary type="route" errorMessage={error.message} />;
};

export default ErrorBoundaryRR;
