import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Donation from './Components/Donation/Donation.jsx'
import DonationDetails from './Components/DonationDetails/DonationDetails.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/stats",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/donationData.json"),
        element: <DonationDetails></DonationDetails>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
