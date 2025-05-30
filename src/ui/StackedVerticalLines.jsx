function StackedVerticalLines({
  segments = 2,
  segmentHeight = 'h-4',
  segmentColor = 'bg-gray-400',
  segmentSize = 'w-1.5',
  segmentRounded = 'rounded-full',
  segmentPositionStyles = 'relative',
  gap = 'space-y-1.5',
}) {
  const lineSegments = [];
  for (let i = 0; i < segments; i++) {
    lineSegments.push(
      <div
        key={i}
        className={`${segmentColor} ${segmentRounded} ${segmentSize} ${segmentHeight} ${segmentPositionStyles}`}
      ></div>,
    );
  }

  return (
    <div className={`flex flex-col items-center ${gap}`}>{lineSegments}</div>
  );
}

export default StackedVerticalLines;
