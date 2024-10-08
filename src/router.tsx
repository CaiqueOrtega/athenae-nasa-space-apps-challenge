import { createBrowserRouter, redirect } from "react-router-dom";
import Init from "./pages/home";
import EarthModelPage from "./pages/planets/earth"
import MoonModelPage from "./pages/planets/moon";
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
      },
      {
        path: "/earth",
        element: <EarthModelPage/>
      },
      {
        path: "/moon",
        element: <MoonModelPage/>
      },
    ]
  }
])