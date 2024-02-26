import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomeContent from './home-page/HomeContent.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WebsiteTemplate from './WebsiteTemplate.tsx';
import ErrorPage from './ErrorPage.tsx';
import PostsByCountry from './posts-by-country-page/PostsByCountry.tsx';
import { ROUTES } from './routes/routes.ts';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <WebsiteTemplate child={<HomeContent />} />,
    errorElement: <WebsiteTemplate child={<ErrorPage />} />,
  },
  {
    path: ROUTES.postsByCountry,
    element: <WebsiteTemplate child={<PostsByCountry />} />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
