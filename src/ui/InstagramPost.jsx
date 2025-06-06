function InstagramPost({ username, postContent, caption, comments }) {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Post Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <div className="size-10 overflow-hidden rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
          <div className="size-full rounded-full border-2 border-white">
            <img
              src="https://picsum.photos/200"
              alt="profile"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-Inter text-sm font-semibold text-gray-900">
            username
          </span>
          <span className="font-DM-Sans text-xs text-gray-500">
            Original Post
          </span>
        </div>
      </div>

      {/* Post Content */}
      <div className="aspect-square w-full bg-gray-100">
        <img
          src="https://picsum.photos/800"
          alt="post"
          className="size-full object-cover"
        />
      </div>

      {/* Post Caption */}
      <div className="space-y-2 px-4 py-3">
        <p className="font-DM-Sans text-sm">
          <span className="font-Inter font-semibold text-gray-900">
            username
          </span>{' '}
          This is a sample caption for the post with some hashtags #instagram
          #post #sample
        </p>
        <span className="font-DM-Sans text-xs text-gray-500">2 HOURS AGO</span>
      </div>

      {/* Comments */}
      <div className="border-t border-gray-100 px-4 py-3">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="font-Inter text-sm font-semibold text-gray-900">
              commenter
            </span>
            <p className="font-DM-Sans text-sm text-gray-600">
              This is a sample comment on the post!
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-Inter text-sm font-semibold text-gray-900">
              another_user
            </span>
            <p className="font-DM-Sans text-sm text-gray-600">Great post! 👏</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramPost;
