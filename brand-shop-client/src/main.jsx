import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import MainLayout from "./Pages/MainLayout/MainLayout.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import About from "./Pages/About/About.jsx";
import MyCart from "./Pages/MyCart/MyCart.jsx";
import AddProduct from "./Pages/AddProduct/AddProduct.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import BrandDetails from "./Components/BrandDetails/BrandDetails.jsx";
import SingleProductDetails from "./Components/SingleProductDetails/SingleProductDetails.jsx";
import UpdateProduct from "./Pages/UpdateProduct/UpdateProduct.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://brand-shop-server-bd.vercel.app/foods"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brandDetails/:id",
        element: (
          
            <BrandDetails></BrandDetails>
          
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-bd.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: "/singleProductDetails/:id",
        element: (
          <PrivateRoute>
            <SingleProductDetails></SingleProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-bd.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-bd.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
