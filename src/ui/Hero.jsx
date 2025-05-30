import { Link } from 'react-router-dom';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

function Hero() {
  return (
    <section className="px-4 text-center">
      <h1 className="font-Inter mt-4 mb-5 text-4xl font-bold tracking-wide text-gray-800">
        See What Your Audience Truly Thinks
        <br />
        <span className="mt-1 text-yellow-500">
          AI-Powered Instagram Analysis
        </span>
      </h1>
      <p className="font-DM-Sans mx-auto mb-10 max-w-xl text-lg tracking-tight text-gray-500">
        Stop guessing. Start knowing. HIMP provides the AI-powered analysis you
        need to accurately gauge audience sentiment and refine your Instagram
        strategy.
      </p>
      <div className="flex items-center justify-center">
        <Link
          to="/analyze"
          className="font-Inter group flex max-w-fit items-center justify-center gap-4 rounded-2xl bg-yellow-400 px-7 py-4 text-lg font-bold tracking-wide text-gray-800 shadow-lg shadow-yellow-400/30 transition-all duration-300 hover:bg-yellow-500 hover:shadow-xl hover:shadow-yellow-400/40"
        >
          Analyze Now
          <span className="flex h-11 w-11 transform items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <PaperAirplaneIcon className="size-5 text-yellow-500" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
