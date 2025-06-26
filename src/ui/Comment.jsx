import { useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

function Comment({ username, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-100 py-2 last:border-b-0">
      <div className="flex items-start justify-between">
        {/* Comment text */}
        <p className="text-sm text-gray-800">
          <span className="font-semibold">{username}</span> {content}
        </p>
        {/* Collapse/Expand button with icon */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600"
        >
          <ChevronDownIcon
            className={`size-5 transform transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      {/* Conditionally rendered AI description panel */}
      {isExpanded && (
        <div className="mt-2 rounded-lg bg-blue-50 p-3">
          <p className="text-xs font-semibold text-blue-800">AI Analysis:</p>
          <p className="mt-1 text-sm text-blue-700">
            This comment shows strong positive sentiment and high engagement
            interest.
          </p>
        </div>
      )}
    </div>
  );
}

export default Comment;
