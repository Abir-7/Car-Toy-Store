import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
        <div className='  mx-2 md:mx-[100px]'>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      </div>
    </AuthProvider>

)
