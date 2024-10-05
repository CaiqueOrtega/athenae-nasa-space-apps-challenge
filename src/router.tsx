import { createBrowserRouter, redirect } from "react-router-dom";
import Init from "./pages/home";
import NavBar from "./components/navbar";

export const Router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect(`/start`)
  },
  {
    element: <NavBar/>,
    children: [
      {
        path: "/start",
        element: <Init/>
      }
    ]
  }
])