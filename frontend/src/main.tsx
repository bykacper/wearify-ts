import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import './App.css';
const Men = lazy(() => import('@/pages/Men'));
const Women = lazy(() => import('@/pages/Women'));
const Outlet = lazy(() => import('@/pages/Outlet'));
const Product = lazy(() => import('@/pages/Product'));
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';

const queryClient = new QueryClient();

const LoadingFallback = () => {
  return <p> Ładowanie... </p>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'men', element: <Men /> },
      { path: 'women', element: <Women /> },
      { path: 'outlet', element: <Outlet /> },
      { path: ':productId', element: <Product /> },
      { path: ':category/:productId', element: <Product /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingFallback />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);