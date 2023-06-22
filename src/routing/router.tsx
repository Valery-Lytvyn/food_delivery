import { createHashRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import CartPage from "../pages/CartPage";
import { ROUTES } from "./routes";
import ErrorPage from "../pages/ErrorPage";

export const router = createHashRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.search,
        element: <SearchPage />,
      },
      {
        path: ROUTES.cart,
        element: <CartPage />,
      },
    ],
  },
]);
