import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from '../pages/Home/HomePage.js'
import Products from '../components/Ui/ProductPage.js'
import ProductsDetails from '../components/Ui/ProductsDetails.js'
import MyCart from '../pages/MyCart/MyCart.js'
import ProductManagement from "../pages/ProductManagement/ProductManagement.js";
import UpdatedProduct from "../components/Ui/UpdatedProduct.js";
import SuccessPage from "../components/Ui/CheckoutPage.js";
import CheckoutPage from '../components/Ui/CheckoutPage.js'
import CategoryProduct from "../components/Ui/CategoryProduct.js";
import ExerciseBikes from "../components/shared/ExerciseBikes.js";
import WeightPlates from "../components/shared/WeightPlates.js";
import About from "../pages/About/About"



const router = createBrowserRouter([
    {
        path:'/',
        element :<App/>,
        children:[
            {
                path:'/',
                element: <HomePage/>
            },
            {
                path:'/products',
                element: <Products/>
            },
            {
                path:'/productDetails/:id',
                element: <ProductsDetails/>
            },
           
            {
                path:'/myCart',
                element: <MyCart/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/success',
                element: <SuccessPage/>
            },
            {
                path:'/checkout',
                element: <CheckoutPage/>
            },
            {
                path:'/category/Dumbbells',
                element: <CategoryProduct/>
            },
            {
                path:'/category/ExerciseBikes',
                element: <ExerciseBikes/>
            },
            {
                path:'/category/WeightPlates',
                element: <WeightPlates/>
            },
            {
                path:'/productManagement',
                element: <ProductManagement/>
            },
            {
                path:'/productManagement/:id',
                element: <UpdatedProduct/>
            },
        ]

    },
   
])

export default router