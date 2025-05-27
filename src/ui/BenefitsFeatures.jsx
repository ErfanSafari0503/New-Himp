function BenefitsFeatures() {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16">
      {/* Section padding */}
      <div className="mx-auto max-w-4xl">
        {/* Constrain width */}
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 sm:text-4xl md:mb-16">
          {/* Your primary text color, centered */}
          Why New HIMP is Your Go-To Analyzer
        </h2>
        {/* Container for feature cards: stacks vertically on mobile, grid on md+ */}
        <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 lg:gap-10">
          {/* Feature Card 1 */}
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            {/* TODO: Replace with your chosen Heroicon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
              {/* Example Icon (LightBulbIcon for "Insights") - Use your actual Heroicon component */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.354a15.055 15.055 0 0 1-4.5 0m4.5 0v-.333c0-.68-.027-1.35-.081-2.014M3 15.75V18m18-2.25V18M8.25 21.75H16.5M4.5 12.75a7.5 7.5 0 0 1 15 0m0 0v2.25m0-2.25a7.5 7.5 0 0 0-15 0m0 0V15m0-2.25a.75.75 0 0 0-.75.75c0 .414.336.75.75.75H3.75m0-1.5a.75.75 0 0 0-.75.75c0 .414.336.75.75.75H3m19.5 0a.75.75 0 0 0 .75-.75c0-.414-.336-.75-.75-.75h-.75m0 1.5a.75.75 0 0 0 .75-.75c0-.414-.336-.75-.75-.75h-.75M4.5 19.5a2.25 2.25 0 0 0 2.25 2.25H18a2.25 2.25 0 0 0 2.25-2.25V18.75c0-1.278-1.022-2.313-2.25-2.313H5.25A2.313 2.313 0 0 0 3 18.75V19.5Z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Instant AI Analysis
            </h3>
            <p className="text-sm text-gray-500">
              Get immediate insights into sentiment, tone, and key themes from
              any public Instagram post.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            {/* TODO: Replace with your chosen Heroicon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
              {/* Example Icon (UsersIcon for "Audience") */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.243-3.72a9.094 9.094 0 0 1-.479 3.741M16.5 19.5h-5.25m5.25 0V18s0-1.5-1.5-1.5H9.75S8.25 18 8.25 19.5m6.75-6.75a3.375 3.375 0 0 0-6.75 0m6.75 0a3.375 3.375 0 0 1-6.75 0m0 0H9.75m9.75-12H4.5m15 0a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5m15 0v1.5m0-1.5a2.25 2.25 0 0 1 2.25 2.25V15a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 15V6.75A2.25 2.25 0 0 1 6.75 4.5m0 0H19.5"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Deep Audience Understanding
            </h3>
            <p className="text-sm text-gray-500">
              Uncover commenter satisfaction, interest levels, languages used,
              and more.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            {/* TODO: Replace with your chosen Heroicon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
              {/* Example Icon (ChartPieIcon for "Data") */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Clear & Actionable Reports
            </h3>
            <p className="text-sm text-gray-500">
              Receive easy-to-digest summaries and data visualizations to inform
              your strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsFeatures;
