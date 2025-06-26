import Button from './Button';

function FinalCallToAction() {
  return (
    <section className="mx-auto max-w-4xl px-2 sm:px-4 md:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-Inter mb-4 text-2xl font-semibold tracking-wider text-gray-800 sm:text-3xl sm:tracking-wide">
          What Lies Beneath the Likes?
        </h2>
        <p className="mb-10 text-base tracking-normal text-gray-500 sm:text-lg">
          Likes only tell part of the story. Our AI dives into comments and
          captions to reveal the true sentiment and deeper audience reactions
          hidden in plain sight.
        </p>
        <Button
          to="/analyze"
          color="bg-yellow-500"
          shadow="shadow-lg shadow-gray-500/90"
          linkStyle="font-DM-Sans text-base font-semibold tracking-wide text-gray-800"
        >
          Analyze Your First Post
        </Button>
      </div>
    </section>
  );
}

export default FinalCallToAction;
