import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';

function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col scroll-smooth bg-gray-50">
      <Header />
      <main className="w-full flex-1 px-2 pt-24 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:mx-auto 2xl:max-w-7xl">
        {/* <Loading message="Loading..." /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
