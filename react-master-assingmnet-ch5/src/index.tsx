import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  </QueryClientProvider>
);
