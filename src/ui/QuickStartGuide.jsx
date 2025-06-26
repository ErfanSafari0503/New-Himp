import { Link } from 'react-router-dom';
import StackedVerticalLines from './StackedVerticalLines';

function QuickStartGuide() {
  return (
    <section className="mx-auto max-w-3xl bg-white px-2 pt-15 pb-13 sm:px-4 md:rounded-3xl md:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-Inter mb-15 text-center text-3xl font-bold tracking-wide text-gray-800">
          Easy as <span className="text-yellow-500">1</span> {''}
          <span className="text-blue-600">2</span> {''}
          <span className="text-gray-800">3</span>
        </h2>
        <div className="space-y-8">
          {/* Vertical spacing for steps on mobile */}
          {/* Step 1 */}
          <div className="relative flex items-start space-x-4">
            <div className="font-DM-Sans mb-7 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-white">
              1
            </div>
            <div>
              <h3 className="font-DM-Sans mb-2 text-xl font-semibold tracking-normal text-gray-800">
                Paste the Link
              </h3>
              <p className="font-DM-Sans text-base font-medium text-gray-500">
                Copy any public Instagram post URL and paste it into our
                analyzer.
              </p>
            </div>
            <div className="absolute top-14.5 left-5.5">
              <StackedVerticalLines segmentColor="bg-blue-600" />
            </div>
          </div>
          {/* Step 2 */}
          <div className="relative flex items-start space-x-4">
            <div className="font-DM-Sans mb-7 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              2
            </div>
            <div>
              <h3 className="font-DM-Sans mb-2 text-xl font-semibold tracking-normal text-gray-800">
                AI Does the Magic
              </h3>
              <p className="font-DM-Sans text-base font-medium text-gray-500">
                Our advanced AI processes the post's caption and comments in
                seconds.
              </p>
              <div className="absolute top-15 left-5.5">
                <StackedVerticalLines segmentColor="bg-gray-800" />
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <div className="font-DM-Sans flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-xl font-bold text-white">
              3
            </div>
            <div>
              <h3 className="font-DM-Sans mb-2 text-xl font-semibold tracking-normal text-gray-800">
                Explore Your Results
              </h3>
              <p className="font-DM-Sans text-base font-medium text-gray-500">
                Dive into a detailed breakdown covering everything from overall
                sentiment scores to specific audience feedback and interaction
                metrics.
              </p>
            </div>
          </div>
        </div>
        {/* Link to the full "How It Works" page */}
        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="font-DM-Sans font-semibold text-blue-600"
          >
            Learn More Details &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default QuickStartGuide;
