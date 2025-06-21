import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-blue-500 hover:text-blue-700 tranisition duration-500"
      : "text-gray-500 hover:text-gray-700 tranisition duration-500";
  };

  return (
    <header className="bg-white shadow-lg">
      <nav className="container max-w-[80%] my-0 mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BookMe!
          </Link>
          <div className="flex gap-6">
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
            <Link to="/browse" className={isActive("/browse")}>
              Browse
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
