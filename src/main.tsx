import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import './App.css';

// optymalized

const LoadingFallback = () => {
  return <p> Ładowanie... </p>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);