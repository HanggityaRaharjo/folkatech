import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  PasswordRegisterPage,
} from "./pages/Authentication";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/register/password",
    element: <PasswordRegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
