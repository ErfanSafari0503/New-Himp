import {
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline';

function FeatureCard({ icon, title, description }) {
  const iconsStyle = 'size-10 text-gray-800';

  return (
    <article className="flex h-fit w-full flex-col items-start justify-start rounded-3xl bg-gray-50 bg-white px-13 pt-15 pb-19">
      {/* Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500">
        {icon === 'CpuChipIcon' && <CpuChipIcon className={iconsStyle} />}
        {icon === 'ChatBubbleLeftRightIcon' && (
          <ChatBubbleLeftRightIcon className={iconsStyle} />
        )}
        {icon === 'PresentationChartBarIcon' && (
          <PresentationChartBarIcon className={iconsStyle} />
        )}
      </div>

      <h3 className="font-Inter mb-5 text-2xl tracking-wider text-gray-800">
        {title}
      </h3>
      <div className="mb-9 w-20 rounded-full border-b-4 border-yellow-500"></div>
      <p className="font-DM-Sans text-base tracking-wide text-gray-500">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;
