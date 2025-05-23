import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <header
      className={
        isOpen
          ? 'absolute inset-0 min-h-dvh min-w-dvw bg-slate-100/20 pt-6 backdrop-blur-sm'
          : ''
      }
    >
      <nav>
        <div className="mx-4 flex flex-wrap items-center justify-between rounded-full bg-white px-6 py-4 shadow-lg shadow-gray-400/30">
          {/* Logo */}
          <div onClick={isOpen && menuToggle}>
            <Link
              to="/"
              className="font-Inter text-4xl font-bold tracking-widest text-gray-800"
            >
              HIMP
            </Link>
          </div>

          {/* Icons */}
          <Button type="headerMenuIcon" func={menuToggle}>
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
        {/* Menu items */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? 'max-h-96 scale-100 opacity-100'
              : 'max-h-0 scale-95 opacity-0'
          } mt-4 flex w-full flex-col items-center space-y-3`}
        >
          {/* how it works */}
          <div className="w-full max-w-xs" onClick={menuToggle}>
            <Link
              to="/how-it-works"
              className="flex items-center gap-5 rounded-xl bg-gray-300 px-5 py-3 text-lg font-semibold tracking-wide shadow-md shadow-gray-300/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100">
                <LightBulbIcon className="size-4 text-gray-500" />
              </span>
              How It Works
            </Link>
          </div>

          {/* About us */}
          <div className="w-full max-w-xs" onClick={menuToggle}>
            <Link
              to="/about-us"
              className="flex items-center gap-5 rounded-xl bg-gray-300 px-5 py-3 text-lg font-semibold tracking-wide shadow-md shadow-gray-300/60"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100">
                <UserGroupIcon className="size-4 text-gray-500" />
              </span>
              About Us
            </Link>
          </div>

          {/* Analyze */}
          <div className="w-full max-w-xs" onClick={menuToggle}>
            <Link
              to="/analyze"
              className="flex items-center gap-5 rounded-xl bg-yellow-400 px-5 py-3 text-lg font-bold tracking-wide text-gray-800 shadow-lg shadow-yellow-400/40 transition hover:bg-yellow-500"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white">
                <RocketLaunchIcon className="size-6 text-yellow-500" />
              </span>
              Analyze
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
