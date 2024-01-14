import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import {  loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const arouter = createBrowserRouter([
  {
    path: "/",
    // element: <h3 style={{width:"70%", marginLeft:"auto"}} >Hello World! </h3>
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts:/:contactId",
        element: <Contact />
      },
    ],
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />
  // },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={arouter} />
  </React.StrictMode>,
)
