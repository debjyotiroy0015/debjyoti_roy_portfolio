// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./components/HomePage.jsx";
import ServicePage from "./components/ServicePage.jsx";
import WorkPage from "./components/WorkPage.jsx";
import ResumePage from "./components/ResumePage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/", // App wraps all pages
    element: <App />,
    children: [
      { index: true, element: <HomePage /> }, // 👈 Home route now nested!
      { path: "ServicePage", element: <ServicePage /> },
      { path: "WorkPage", element: <WorkPage /> },
      { path: "ResumePage", element: <ResumePage /> },
      { path: "ContactPage", element: <ContactPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
