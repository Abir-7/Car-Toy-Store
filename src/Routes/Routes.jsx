import {createBrowserRouter,} from "react-router-dom";
import MainPage from "../Components/PageLayout/MainPage";
import HomePage from "../Components/Pages/HomePage/HomePage/HomePage";
import Login from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/Signup/Signup";
import AddToys from "../Components/Pages/AddToys/AddToys";
import AllToys from "../Components/Pages/AllToys/AllToys";
import UserToys from "../Components/Pages/UserToys/UserToys";
import UpdateToy from "../Components/Pages/UpdateToy/UpdateToy";
import PrivetRouts from "./PrivetRouts";
import ToyDetails from "../Components/Pages/ToyDetails/ToyDetails";
import PageNotFound from "../Components/Pages/PageNotFound/PageNotFound";
import BlogPage from "../Components/Pages/BlogPage/BlogPage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainPage></MainPage> ,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/addtoys",
          element: <PrivetRouts><AddToys/></PrivetRouts>,
        },
        {
          path:"/alltoys",
          element: <AllToys></AllToys>,
          loader:()=>fetch('https://car-toy-shop-server.vercel.app/alltoys?limit=20')

        },
        {
          path:'/usertoys',
          element:<PrivetRouts><UserToys></UserToys></PrivetRouts>
        },
        {
          path:'/update/:id',
          element:<UpdateToy></UpdateToy>,
         loader:({params})=>fetch(`https://car-toy-shop-server.vercel.app/alltoys/${params.id}`),
        },
        {
          path:'/toydetais/:id',
          element:<PrivetRouts><ToyDetails></ToyDetails></PrivetRouts>,
         
          loader:({params})=>fetch(`https://car-toy-shop-server.vercel.app/alltoys/${params.id}`)
        },
        {
          path:'/blog',
          element:<BlogPage></BlogPage>
        }
      ],
    },
    {
      path:'*',
      element:<PageNotFound></PageNotFound>,
    }
  ]);

  export default router