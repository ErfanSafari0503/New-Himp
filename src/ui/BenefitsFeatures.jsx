import FeatureCard from './FeatureCard';

const cardsData = [
  {
    id: 1,
    icon: 'CpuChipIcon',
    title: 'Instant AI Analysis',
    description:
      'Get immediate insights into sentiment, tone, and key themes from any public Instagram post.',
  },
  {
    id: 2,
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Deep Audience Understanding',
    description:
      'Uncover commenter satisfaction, interest levels, languages used, and more.',
  },
  {
    id: 3,
    icon: 'PresentationChartBarIcon',
    title: 'Clear & Actionable Reports',
    description:
      'Receive easy-to-digest summaries and data visualizations to inform your strategy.',
  },
];

function BenefitsFeatures() {
  return (
    <section className="mx-auto max-w-5xl px-2 sm:px-4 md:px-8">
      <div className="mx-auto">
        {/* Title */}
        <h2 className="font-Inter mb-8 text-center text-3xl font-bold tracking-normal text-gray-800 sm:mb-16 sm:text-4xl">
          Discover the{' '}
          <span className="font-Inter font-bold tracking-widest text-yellow-400">
            HIMP
          </span>{' '}
          Advantage
        </h2>
        {/* Feature Cards */}
        <div className="space-y-9 sm:px-12">
          {cardsData.map((card) => (
            <FeatureCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              key={card.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsFeatures;
