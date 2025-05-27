import { Link } from 'react-router-dom';

function FinalCallToAction() {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-20">
      {/* Generous padding to make it a focal point */}
      <div className="mx-auto max-w-xl text-center">
        {/* Constrain width and center content */}
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
          {/* Slightly smaller than main feature titles, but still impactful */}
          Ready to See the Real Sentiment?
        </h2>
        <p className="mb-8 text-base text-gray-500 sm:text-lg">
          Stop guessing and start understanding. Get your AI-powered Instagram
          post analysis in just a few clicks.
        </p>
        <Link
          to="/analyze"
          className="inline-block transform rounded-lg bg-yellow-500 px-10 py-3 text-base font-bold text-gray-800 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:shadow-lg sm:px-12 sm:py-4 sm:text-lg"
          // Using your specified Analyze button color and styling
          // Slightly larger padding on sm+ screens for more emphasis
        >
          Analyze Your First Post
        </Link>
      </div>
    </section>
  );
}

export default FinalCallToAction;
