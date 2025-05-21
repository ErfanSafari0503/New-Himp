import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import HowItWorks from './ui/HowItWorks';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/how-it-works',
        element: <HowItWorks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
