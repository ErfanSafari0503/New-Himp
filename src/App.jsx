import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import HowItWorks from './ui/HowItWorks';
import AboutUs from './ui/AboutUs';
import Analyze from './features/Analyze';

// Routing
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
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/analyze',
        element: <Analyze />,
      },
    ],
  },
]);

function App() {
  // Routing
  return <RouterProvider router={router} />;
}

export default App;
