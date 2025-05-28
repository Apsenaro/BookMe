import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <h1 className="text-2xl font-bold">BookMe</h1>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>
            <Link to={"#"} className="text-gray-800 hover:text-amber-600 transition duration-500 ease-out">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/discover"} className="text-gray-800 hover:text-amber-600 transition duration-500 ease-out">
              Discover
            </Link>
          </li>
        </ul>
        <LoginButton />
        <LogoutButton />
      </div>
    </nav>
  );
}
