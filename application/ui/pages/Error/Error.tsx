import { useRouteError } from "react-router-dom";

type UseRouteError = {
  statusText?: string;
  message: string;
};

function Error() {
  const error = useRouteError() as UseRouteError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;
