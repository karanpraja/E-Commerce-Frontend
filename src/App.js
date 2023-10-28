import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/RootLayout';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Homepage from './pages/Homepage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';
const router=createBrowserRouter([{
  path:'/',element:<RootLayout/>
  ,children:[{
    index:true,path:'',element:<Homepage/>
  },
  {
    path:'signup',element:<SignUpPage/>
  },
  {
    path:'login',element:<LoginPage/>
  },
  {
    path:'cart',element:<CartPage/>
  },
  {
    path:'checkout',element:<CheckoutPage/>
  },
  {
    path:'productdetail',element:<ProductDetailPage/>
  }

]
}])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}
export default App;
// const =()=>{
// return()
// }
// export default 
