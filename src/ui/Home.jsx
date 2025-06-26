import Hero from './Hero';
import BenefitsFeatures from './BenefitsFeatures';
import QuickStartGuide from './QuickStartGuide';
import FinalCallToAction from './FinalCallToAction';

function Home() {
  return (
    <div className="space-y-16 px-2 py-8 sm:space-y-32 sm:px-4 sm:py-12 md:px-8 lg:px-16 xl:px-32 2xl:mx-auto 2xl:max-w-7xl">
      {/* Hero Section */}
      <Hero />

      {/* Key Benefits/Features Section */}
      <BenefitsFeatures />

      {/* Brief "Quick Start Guide" Section */}
      <QuickStartGuide />

      {/* Final Call to Action Section  */}
      <FinalCallToAction />
    </div>
  );
}

export default Home;
