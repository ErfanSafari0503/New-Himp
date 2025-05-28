import FeatureCard from './FeatureCard';

function BenefitsFeatures() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto">
        {/* Title */}
        <h2 className="font-Inter mb-8 text-center text-3xl font-bold tracking-wide text-gray-800">
          Discover the{' '}
          <span className="font-Inter font-bold tracking-widest text-yellow-400">
            HIMP
          </span>{' '}
          Advantage
        </h2>
        {/* Feature Cards */}
        <div className="space-y-9">
          {/* Card 1 */}
          <FeatureCard
            icon="CpuChipIcon"
            title="Instant AI Analysis"
            description="Get immediate insights into sentiment, tone, and key themes from
              any public Instagram post."
          />

          {/* Card 2 */}
          <FeatureCard
            icon="ChatBubbleLeftRightIcon"
            title="Deep Audience Understanding"
            description=" Uncover commenter satisfaction, interest levels, languages used,
              and more."
          />

          {/* Card 3 */}
          <FeatureCard
            icon="PresentationChartBarIcon"
            title="Clear & Actionable Reports"
            description="Receive easy-to-digest summaries and data visualizations to inform
              your strategy."
          />
        </div>
      </div>
    </section>
  );
}

export default BenefitsFeatures;
