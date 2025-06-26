import {
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline';

function FeatureCard({ icon, title, description }) {
  const iconsStyle = 'size-10 text-gray-800';

  return (
    <article className="mx-auto flex h-fit w-full max-w-md flex-col items-start justify-start rounded-3xl bg-white px-13 pt-15 pb-19 shadow-2xl sm:px-10 sm:pt-12">
      {/* Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 sm:mb-8">
        {icon === 'CpuChipIcon' && <CpuChipIcon className={iconsStyle} />}
        {icon === 'ChatBubbleLeftRightIcon' && (
          <ChatBubbleLeftRightIcon className={iconsStyle} />
        )}
        {icon === 'PresentationChartBarIcon' && (
          <PresentationChartBarIcon className={iconsStyle} />
        )}
      </div>

      <h3 className="font-DM-Sans mb-5 text-2xl tracking-wide text-gray-800 sm:mb-7 sm:text-3xl">
        {title}
      </h3>
      <div className="mb-9 w-20 rounded-full border-b-4 border-yellow-500"></div>
      <p className="font-DM-Sans text-base tracking-normal text-gray-500 sm:text-lg">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;
