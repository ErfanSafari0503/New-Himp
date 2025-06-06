import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import HowItWorks from './ui/HowItWorks';
import AboutUs from './ui/AboutUs';
import Analyze from './features/Analyze';
import Loading from './ui/Loading';
import Error from './ui/Error';

// Routing
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        // loader: <Loading message="Loading Home Page..." />,
      },
      {
        path: '/how-it-works',
        element: <HowItWorks />,
        // loader: <Loading message="Loading How It Works..." />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
        // loader: <Loading message="Loading About Us..." />,
      },
      {
        path: '/analyze',
        element: <Analyze />,
        // loader: <Loading message="Loading Analyze..." />,
      },
    ],
  },
]);

function App() {
  // Routing
  return <RouterProvider router={router} />;
}

export default App;
