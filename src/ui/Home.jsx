import Hero from './Hero';
import BenefitsFeatures from './BenefitsFeatures';
import QuickStartGuide from './QuickStartGuide';
import FinalCallToAction from './FinalCallToAction';

function Home() {
  return (
    <div className="space-y-16 py-8">
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
