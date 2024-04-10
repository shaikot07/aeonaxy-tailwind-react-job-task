import { createBrowserRouter } from "react-router-dom";
import Layout from "../../LayOut/Layout";
import Home from "../Home/Home";




 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                  path: "/",
                  element: <Home></Home>
            },
            
        ]
      },
  ]);


