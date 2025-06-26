import {
  SparklesIcon,
  HandThumbUpIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

function OverallAnalyze() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:max-w-md">
      <h2 className="mb-4 flex items-center text-lg font-bold text-gray-800">
        <SparklesIcon className="mr-3 size-6 text-blue-500" />
        Overall AI Analysis
      </h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <HandThumbUpIcon className="mt-1 mr-4 size-5 flex-shrink-0 text-green-500" />
          <div>
            <h3 className="font-semibold text-gray-700">Overall Sentiment</h3>
            <p className="text-sm text-gray-600">
              The comments show an overwhelmingly positive sentiment, with no
              negative feedback detected.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <TagIcon className="mt-1 mr-4 size-5 flex-shrink-0 text-purple-500" />
          <div>
            <h3 className="font-semibold text-gray-700">Key Themes</h3>
            <p className="text-sm text-gray-600">
              Dominant themes include "stunning scenery," "beauty," and "travel
              interest," indicating high visual appeal.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OverallAnalyze;
