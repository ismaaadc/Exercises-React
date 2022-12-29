import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";
import { Marvel } from "../components/marvel/Marvel"
import { MainLayout } from "../components/MainLayout"
import { LoginScreen } from "../components/login/LoginScreen";
import { NotFound } from "../components/ui/NotFound";
import { DcScreen } from "../components/dc/DcScreen"

const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <Marvel />
        },
        {
          path: "/marvel",
          element: <Marvel />
        },
        {
          path: "/dc",
          element: <DcScreen />
        }
      ]
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/login",
          element: <LoginScreen />
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
]);

export default router