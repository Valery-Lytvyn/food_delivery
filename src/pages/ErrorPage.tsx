import { useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center gap-3">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="font-bold text-2xl text-gray-700">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-bold text-2xl">
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
