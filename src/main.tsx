import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "./pages/AddProduct.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductList from "./pages/ProductLst/ProductList.tsx";

const router = createBrowserRouter([
  { path: "/", element: <ProductList />, errorElement: <NotFound /> },
  { path: "/add-product", element: <AddProduct /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
