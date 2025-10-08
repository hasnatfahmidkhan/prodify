const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-5 py-5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton h-4 w-1/2 mx-auto"></div>
          <div className="flex items-center justify-between">
            <div className="skeleton h-6 w-12"></div>
            <div className="skeleton h-6 w-12"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
