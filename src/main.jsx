import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import PageOne from "./components/1.2_pages/Page01.jsx";
// import PageTwo from "./components/1.2_pages/Page02.jsx";
// import PageThree from "./components/1.2_pages/Page03.jsx";
import Navigations from "./components/Navigations.jsx";
import OwnerPage from "./components/OwnerPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigations />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
  {
    path: "/owner",
    element: <Navigations />,
    children: [
      {
        path: "",
        element: <OwnerPage />,
      },
    ],
  },
  // {
  //   path: "/page02",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <PageTwo />,
  //     },
  //   ],
  // },
  // {
  //   path: "/page03",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <PageThree />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
