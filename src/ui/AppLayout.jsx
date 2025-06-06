import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';

function AppLayout() {
  return (
    <div className="flex min-h-dvh w-dvw flex-col scroll-smooth bg-gray-100">
      <Header />
      <main className="flex-1 pt-24">
        {/* <Loading message="Loading..." /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
