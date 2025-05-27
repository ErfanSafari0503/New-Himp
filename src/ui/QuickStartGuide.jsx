import { Link } from 'react-router-dom';

function QuickStartGuide() {
  return (
    <section className="bg-gray-100 px-4 py-12 sm:px-6 md:py-16">
      {/* Light contrasting background for this section */}
      <div className="mx-auto max-w-3xl">
        {/* Slightly narrower max-width for focus */}
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 sm:text-4xl md:mb-16">
          Get Insights in 3 Simple Steps
        </h2>
        <div className="space-y-8">
          {/* Vertical spacing for steps on mobile */}
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-white">
              1
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-gray-800">
                Paste the Link
              </h3>
              <p className="text-sm text-gray-500">
                Copy any public Instagram post URL and paste it into our
                analyzer.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-white">
              2
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-gray-800">
                AI Does the Magic
              </h3>
              <p className="text-sm text-gray-500">
                Our advanced AI processes the post's caption and comments in
                seconds.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-white">
              3
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-gray-800">
                View Your Insights
              </h3>
              <p className="text-sm text-gray-500">
                Explore a comprehensive report on sentiment, engagement, and
                audience reactions.
              </p>
            </div>
          </div>
        </div>
        {/* Optional: Link to the full "How It Works" page */}
        <div className="mt-10 text-center md:mt-12">
          <Link
            to="/how-it-works"
            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Learn More Details &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default QuickStartGuide;
