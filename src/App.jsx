import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleDetail from "./pages/ArticleDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/article/:username/:slug",
    element: <ArticleDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
