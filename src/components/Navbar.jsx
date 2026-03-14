import Logo from "../assets/logo.png";
import CartIcon from "../assets/Vector.png";
import favoriteIcon from "../assets/favourite.svg";
import userIcon from "../assets/user.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-linear-to-b from-[#d9d9d9] to-white">
      <div className="max-w-300 mx-auto flex items-center justify-between py-4 border-b-2 border-[#750000]">
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-5">
          <img src={CartIcon} alt="cart" />
          <p className="text-[#750000] font-medium text-2xl sm:text-xl">
            30 595 ₽
          </p>
          <img src={favoriteIcon} alt="like" />
          <Link to={"/profile"}>
            <img src={userIcon} alt="user" />
          </Link>
          <Link to={"/login"}>
            <button className="text-[#750000] font-medium border-2 px-7 py-1 rounded-lg transition-all duration-200 cursor-pointer active:scale-95 text-2xl sm:text-xl">
              login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
