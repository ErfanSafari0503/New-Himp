import { useState } from 'react';
//API-Services
import { sendPost } from '../services/postServices';
//Helper-Functions
import { validateInstagramPostUrl } from '../utils/helpers';
import Button from '../ui/Button';
// import InstagramPost from '../ui/InstagramPost';

function Analyze() {
  const [postLink, setPostLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [postId, setPostId] = useState('');
  const [status, setStatus] = useState('');

  async function handleSendPostLink(e) {
    e.preventDefault();

    if (!postLink) return;

    const isValid = validateInstagramPostUrl(postLink);
    if (!isValid) return;

    setIsLoading(true);

    try {
      const result = await sendPost(postLink);
      setPostId(result.data.id);
      setStatus(result.data.status);
    } catch (error) {
      console.error('Error sending post:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="px-4 pt-30">
      <h1 className="font-Inter mb-2 text-center text-3xl font-bold tracking-wider text-gray-800">
        Analyze Instagram Post
      </h1>
      <p className="font-DM-Sans text-center text-lg tracking-normal text-gray-400">
        Understand audience reactions with our smart AI post analysis.
      </p>

      <div className="mx-auto mt-10 max-w-xl space-y-6">
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600 via-gray-800 to-yellow-500 opacity-30 blur"></div>
          <div className="relative rounded-3xl">
            <input
              type="text"
              placeholder="Paste Instagram post URL here"
              className="font-DM-Sans w-full rounded-3xl bg-white px-4 py-4 text-gray-800 placeholder-gray-400"
              value={postLink}
              onChange={(e) => setPostLink(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </div>
        <Button
          type="submit"
          styles="font-DM-Sans w-full rounded-3xl bg-gradient-to-r from-blue-600 via-gray-800 to-yellow-500 py-4 text-base font-semibold tracking-wide text-white shadow-lg"
          disabled={isLoading}
          func={handleSendPostLink}
        >
          Analyze
        </Button>
      </div>

      {/* <InstagramPost /> */}
    </div>
  );
}

export default Analyze;
