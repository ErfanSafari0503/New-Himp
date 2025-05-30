import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleLogoClick } from '../utils/helpers';
import {
  Bars4Icon,
  XMarkIcon,
  LightBulbIcon,
  UserGroupIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';
import Button from './Button';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function menuToggle(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  function logoClick() {
    if (isOpen) setIsOpen(!isOpen);
    handleLogoClick();
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Always Visible Header Bar */}
      <header className="fixed top-6 right-0 left-0 z-50 bg-transparent">
        <nav>
          <div className="mx-4 flex flex-wrap items-center justify-between rounded-full bg-white px-6 py-4 shadow-lg shadow-gray-400/30">
            {/* Logo */}
            <div>
              <Link
                to="/"
                className="font-Inter text-4xl font-bold tracking-widest text-gray-800"
                onClick={logoClick}
              >
                HIMP
              </Link>
            </div>

            {/* Icons - Menu Toggle Button */}
            <Button
              type="headerMenuIcon"
              func={menuToggle}
              ariaLabel={isOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative h-6 w-6">
                <Bars4Icon
                  className={`absolute inset-0 size-6 transform text-gray-500 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'scale-75 rotate-45 opacity-0'
                      : 'scale-100 rotate-0 opacity-100'
                  }`}
                />
                <XMarkIcon
                  className={`absolute inset-0 size-6 transform text-gray-500 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'scale-100 rotate-0 opacity-100'
                      : 'scale-75 rotate-45 opacity-0'
                  }`}
                />
              </div>
            </Button>
          </div>
        </nav>
      </header>

      {/* Conditionally Rendered Menu Overlay & Items */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-100/20 backdrop-blur-sm"
          onClick={menuToggle}
        />
        <div
          className={`relative z-10 mx-auto mt-[136px] flex w-full max-w-xs flex-col items-center space-y-3 overflow-y-auto transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[calc(100vh-160px)] scale-100 opacity-100' : 'max-h-0 scale-95 opacity-0'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* how it works */}
          <div className="w-full" onClick={menuToggle}>
            <Link
              to="/how-it-works"
              className="font-DM-Sans flex items-center gap-5 rounded-xl bg-gray-300 px-5 py-3 text-lg font-semibold tracking-wide text-gray-800 shadow-md shadow-gray-300/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100">
                <LightBulbIcon className="size-4 text-gray-500" />
              </span>
              How It Works
            </Link>
          </div>
          {/* About us */}
          <div className="w-full" onClick={menuToggle}>
            <Link
              to="/about-us"
              className="font-DM-Sans flex items-center gap-5 rounded-xl bg-gray-300 px-5 py-3 text-lg font-semibold tracking-wide text-gray-800 shadow-md shadow-gray-300/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100">
                <UserGroupIcon className="size-4 text-gray-500" />
              </span>
              About Us
            </Link>
          </div>
          {/* Analyze */}
          <div className="w-full" onClick={menuToggle}>
            <Link
              to="/analyze"
              className="font-DM-Sans flex items-center gap-5 rounded-xl bg-yellow-400 px-5 py-3 text-lg font-bold tracking-wide text-gray-800 shadow-lg shadow-yellow-400/40 transition hover:bg-yellow-500"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white">
                <RocketLaunchIcon className="size-6 text-yellow-500" />
              </span>
              Analyze
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
