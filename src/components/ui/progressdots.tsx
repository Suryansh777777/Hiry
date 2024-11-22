interface ProgressDotsProps {
  active: number;
  total: number;
}

export function ProgressDots({ active, total }: ProgressDotsProps) {
  return (
    <div className="absolute left-7 top-16 h-[calc(100%-4rem)] w-0.5">
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gray-200" />
        {Array.from({ length: total - 1 }).map((_, i) => (
          <div
            key={i}
            className={`absolute left-1/2 top-20 h-0.5 w-0.5 -translate-x-1/2 rounded-full ${
              i < active ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
