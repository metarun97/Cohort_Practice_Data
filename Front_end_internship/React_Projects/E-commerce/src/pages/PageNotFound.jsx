const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* 404 Text */}
      <h1 className="text-8xl font-extrabold text-blue-950">404</h1>

      {/* Subtitle */}
      <p className="mt-4 text-2xl font-semibold text-blue-700">
        Page Not Found
      </p>

      {/* Description */}
      <p className="mt-2 text-center text-blue-500 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
};

export default PageNotFound;
