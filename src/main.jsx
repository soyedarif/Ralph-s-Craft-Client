import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./Context/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DarkModeProvider from "./Context/DarkModeProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
