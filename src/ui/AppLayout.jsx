import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function AppLayout() {
  return (
    <div className="h-dvh w-dvw bg-gray-100 pt-6">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
