function Loading({ message = 'Loading...' }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <div className="relative h-20 w-20">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 animate-[spin_3s_linear_infinite] rounded-full border-4 border-transparent border-t-yellow-500/50" />
          {/* Middle rotating circle */}
          <div className="absolute inset-2 animate-[spin_2s_linear_infinite] rounded-full border-4 border-transparent border-t-blue-500/40" />
          {/* Inner rotating circle */}
          <div className="absolute inset-4 animate-[spin_1s_linear_infinite] rounded-full border-4 border-transparent border-t-gray-300/60" />
        </div>
        <div className="space-y-1.5">
          <p className="font-Inter text-base font-medium tracking-wide text-yellow-50">
            {message}
          </p>
          <div className="flex justify-center gap-1">
            <span className="h-1.5 w-1.5 animate-[bounce_1s_ease-in-out_infinite] rounded-full bg-yellow-400/80"></span>
            <span className="h-1.5 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.2s] rounded-full bg-blue-400/80"></span>
            <span className="h-1.5 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.4s] rounded-full bg-gray-300/80"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
