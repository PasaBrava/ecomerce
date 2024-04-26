import { createBrowserRouter } from "react-router-dom"

import Error404 from "../components/pages/Error404"
import Products from "../components/pages/Products"
import App_public from "../components/templates/App_public"
import Home from "../components/pages/Home"
const router = createBrowserRouter([
    {
        path: "/",
        element: <App_public/> ,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home/>,

            },
            {
                path: "/productos",
                element: <Products/>

            }

        ]
    },

])
 
export default router