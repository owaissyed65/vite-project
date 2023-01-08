import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Store from "./Redux/Store";
import "swiper/css/bundle";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
import Blog from "./Components/Blog/Blog";
import { Theme } from "./StyledComponent/ThemeAndVariable";
import { ThemeProvider } from "styled-components";
import BlogDetails from "./Components/Blog/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/details/:id",
    element: <BlogDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
