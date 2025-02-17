import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Add missing imports
import { PublicLayout } from "./layouts/PublicLayout";
import Homepage from "./routes/Homepage";
import React from "react";
import AuthPage from "./routes/AuthPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/auth",
          element: <AuthPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
