import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/NotFound";
import Logement from "./pages/logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
      { path: "logement/:id", element: <Logement />}, 
    ],
  },
]);

export default router;