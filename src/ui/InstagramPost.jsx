import { useState } from 'react';

import Comment from './Comment';
import Button from './Button';

import {
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';

function InstagramPost({
  username = 'alex_anderson',
  postContent = 'https://placehold.co/600x600/3B82F6/FFFFFF?text=Post',
  caption = 'Chasing waterfalls and finding paradise. What an incredible view!',
  comments = [
    { id: 1, username: 'maria_g', text: 'Absolutely stunning shot! ✨' },
    {
      id: 2,
      username: 'adventure_awaits',
      text: 'Wow, I need to go here! Where is this?',
    },
  ],
}) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="mx-auto max-w-sm rounded-lg border border-gray-300/50 bg-white shadow-lg">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="size-10 rounded-full object-cover"
          src={`https://placehold.co/36x36/7C3AED/FFFFFF?text=A`}
          alt={`${username}'s profile`}
        />
        <span className="font-Inter ml-3 text-base font-semibold tracking-normal text-gray-800">
          {username}
        </span>
      </div>

      {/* Post Content (Image) */}
      <div className="w-full">
        <img
          className="h-auto w-full object-cover"
          src={postContent}
          alt={`Post by ${username}`}
        />
      </div>

      {/* Post Footer */}
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-gray-800">
            <HeartIcon className="size-7 text-red-600" />
          </span>
          <span className="flex items-center text-gray-800">
            <ChatBubbleOvalLeftIcon className="size-7" />
          </span>
          <span className="flex items-center text-gray-800">
            <PaperAirplaneIcon className="size-7" />
          </span>
        </div>

        {/* Caption */}
        <div className="mt-4">
          <p className="font-DM-Sans text-sm tracking-normal text-gray-700">
            <span className="font-Inter mr-2 font-semibold text-gray-800">
              {username}
            </span>
            {caption}
          </p>
        </div>

        {/* Comments */}
        {showComments ? (
          <div className="mt-5">
            {comments?.slice(0, 2).map((comment) => (
              <Comment
                key={comment.id}
                username={comment.username}
                content={comment.text}
              />
            ))}
          </div>
        ) : (
          <Button
            type="showMore"
            styles="font-DM-Sans mt-5 cursor-pointer text-sm tracking-normal text-blue-500"
            func={() => setShowComments(true)}
          >
            View all comments
          </Button>
        )}

        {/* Timestamp */}
        {/* <p className="mt-2 text-xs font-semibold text-gray-400 uppercase">
          {postedAt}
        </p> */}
      </div>
    </div>
  );
}

export default InstagramPost;
