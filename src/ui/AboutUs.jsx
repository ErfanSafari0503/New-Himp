function AboutUs() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl md:p-12">
        <h1 className="font-inter mb-4 text-3xl font-extrabold tracking-tight text-gray-800 md:text-4xl">
          About <span className="text-yellow-500">NEW-HIMP</span>
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-800 md:text-xl">
          <span className="font-semibold text-blue-600">NEW-HIMP</span> is a
          modern web platform that empowers creators, marketers, and researchers
          to unlock deep insights from Instagram posts. Using advanced AI, we
          analyze captions and comments to reveal sentiment, tone, language, and
          satisfaction—helping you understand engagement beyond just likes.
        </p>
        <div className="mb-6">
          <h2 className="font-inter mb-2 text-xl font-bold text-blue-600">
            Our Mission
          </h2>
          <p className="text-gray-700">
            We believe in making social data accessible and actionable. Our goal
            is to provide instant, meaningful feedback so you can connect better
            with your audience and make smarter content decisions.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="font-inter mb-2 text-xl font-bold text-blue-600">
            How It Works
          </h2>
          <ul className="list-inside list-disc space-y-1 text-gray-800">
            <li>Paste any public Instagram post link</li>
            <li>Our AI analyzes captions & comments in seconds</li>
            <li>
              Get clear scores for satisfaction, sentiment, tone, and more
            </li>
            <li>See language breakdowns and key phrases</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="font-inter mb-2 text-xl font-bold text-blue-600">
            Built With
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-yellow-400 bg-yellow-400/10 px-3 py-1 text-sm font-medium text-gray-800">
              React
            </span>
            <span className="rounded-full border border-yellow-400 bg-yellow-400/10 px-3 py-1 text-sm font-medium text-gray-800">
              Vite
            </span>
            <span className="rounded-full border border-blue-600 bg-blue-600/10 px-3 py-1 text-sm font-medium text-gray-800">
              NestJS
            </span>
            <span className="rounded-full border border-blue-600 bg-blue-600/10 px-3 py-1 text-sm font-medium text-gray-800">
              Ducky AI
            </span>
            <span className="rounded-full border border-blue-600 bg-blue-600/10 px-3 py-1 text-sm font-medium text-gray-800">
              Tailwind CSS
            </span>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="font-inter mb-2 text-xl font-bold text-blue-600">
            Meet the Creator
          </h2>
          <div className="flex items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/103066742?v=4"
              alt="ErfanSafari0503"
              className="h-14 w-14 rounded-full border-2 border-blue-600 shadow"
            />
            <div>
              <p className="font-semibold text-gray-800">Erfan Safari</p>
              <a
                href="https://github.com/erfansafari0503"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                @erfansafari0503
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-base text-gray-500 opacity-80">
          <span>
            Open source • MIT License • Built with 💙 for the digital community
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
