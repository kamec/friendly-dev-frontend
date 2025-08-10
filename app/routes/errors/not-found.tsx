import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-6xl font-extrabold text-blue-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 max-w-md">
        Sorry, the page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
