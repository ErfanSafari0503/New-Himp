import { Link } from 'react-router-dom';
import { handleLogoClick, currentYear } from '../utils/helpers';

function Footer() {
  const year = currentYear();

  return (
    <footer className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-3">
          <div onClick={handleLogoClick} className="cursor-pointer">
            <Link
              to="/"
              className="font-Inter text-2xl font-bold tracking-wider text-white/90"
            >
              HIMP
            </Link>
          </div>
          <div className="text-sm tracking-normal text-gray-400">
            © {year} HIMP. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
