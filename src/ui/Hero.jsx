import { Link } from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 text-center">
      <h1 className="font-Inter mt-4 mb-5 text-4xl font-bold tracking-wide text-gray-800 sm:text-5xl sm:tracking-wider">
        See What Your Audience Truly Thinks
        <br />
        <span className="font-Inter mt-1 inline-block text-4xl text-yellow-500 sm:mt-4 sm:text-5xl sm:tracking-wider">
          AI-Powered Instagram Analysis
        </span>
      </h1>
      <p className="font-DM-Sans mx-auto mb-10 max-w-xl text-lg tracking-tight text-gray-500 sm:mt-6 sm:mb-15 sm:text-xl sm:tracking-normal">
        Stop guessing. Start knowing. HIMP provides the AI-powered analysis you
        need to accurately gauge audience sentiment and refine your Instagram
        strategy.
      </p>
      <div className="flex items-center justify-center">
        <Link
          to="/analyze"
          className="font-Inter group flex max-w-fit items-center justify-center gap-4 rounded-2xl bg-yellow-400 px-7 py-4 text-lg font-bold tracking-wide text-gray-800 shadow-lg shadow-yellow-400/30"
        >
          Analyze Now
          <span className="flex h-11 w-11 transform items-center justify-center rounded-full bg-white">
            <PaperAirplaneIcon className="size-5 text-yellow-500" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
