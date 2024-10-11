import { createRoot, render } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ErrorPage from "./components/ErroPage";
import InfoCountry from "./components/InfoCountry";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <InfoCountry />,
      },
    ],
  },
]);

var root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
