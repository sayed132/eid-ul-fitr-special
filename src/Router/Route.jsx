import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import EidHistory from "../components/EidHistory/EidHistory";
import EidLaw from "../components/EidLaw/EidLaw";
import EidGift from "../components/EidGift/EidGift";
import EidSalami from "../components/EidSalami/EidSalami";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/eid-history",
        element: <EidHistory />,
      },
      {
        path: "/eid-law",
        element: <EidLaw />,
      },
      {
        path: "/eid-gift",
        element: <EidGift />,
      },
      {
        path: "/eid-salami",
        element: <EidSalami />,
      },
    ],
  },
]);

export default router;
