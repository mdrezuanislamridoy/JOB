import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      {/** 404 Page Not Found with tailwind css */}

      <div>
        <div className="flex flex-col items-center justify-center h-screen ">
          <h1 className="text-6xl font-extrabold text-white mb-4 animate-pulse">
            404
          </h1>
          <p className="text-2xl text-gray-400 mb-8">Oops! Page Not Found</p>
          <div className="space-y-4 flex flex-col items-center">
            <p className="text-gray-500 text-center max-w-md">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
