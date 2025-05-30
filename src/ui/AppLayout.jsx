import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function AppLayout() {
  return (
    <div className="h-full w-dvw scroll-smooth bg-gray-100 pt-6">
      <Header />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
