import Logo from "../assets/logo.png";
import CartIcon from "../assets/Vector.png";
import favoriteIcon from "../assets/favourite.svg";
import userIcon from "../assets/user.svg";
import productImg from "../assets/c-1.png";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [favoriteOpen, setFavoriteOpen] = useState(false);

  return (
    <>
      <nav className="bg-linear-to-b from-[#d9d9d9] to-white">
        <div className="max-w-300 mx-auto flex items-center justify-between py-4 border-b-2 border-[#750000]">
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>

          <div className="flex items-center gap-5">
            {/* CART */}
            <img
              src={CartIcon}
              alt="cart"
              className="cursor-pointer"
              onClick={() => setCartOpen(true)}
            />

            <p className="text-[#750000] font-medium text-2xl sm:text-xl">
              30 595 ₽
            </p>

            {/* FAVORITE */}
            <img
              src={favoriteIcon}
              alt="favorite"
              className="cursor-pointer"
              onClick={() => setFavoriteOpen(true)}
            />

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

      {/* OVERLAY */}
      {(cartOpen || favoriteOpen) && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => {
            setCartOpen(false);
            setFavoriteOpen(false);
          }}
        />
      )}

      {/* CART (RIGHT) */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setCartOpen(false)}
              className="text-3xl text-[#750000]"
            >
              ←
            </button>

            <h2 className="text-3xl font-bold text-[#750000]">Cart</h2>
          </div>

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border rounded-2xl p-4 mb-5 hover:border-[#750000] transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={productImg}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[#750000] font-bold">Blacksi</h3>
                  <p className="text-gray-500 text-sm">Sports suit</p>
                  <p className="text-lg mt-1">3 595 ₽</p>
                </div>
              </div>

              <button className="border border-[#750000] w-10 h-10 rounded-lg">
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAVORITE (LEFT) */}
      <div
        className={`fixed top-0 left-0 h-full w-[420px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          favoriteOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setFavoriteOpen(false)}
              className="text-3xl text-[#750000]"
            >
              →
            </button>

            <h2 className="text-3xl font-bold text-[#750000]">Favorites</h2>
          </div>

          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border rounded-2xl p-4 mb-5 hover:border-[#750000] transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={productImg}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-[#750000] font-bold">Blacksi</h3>
                  <p className="text-gray-500 text-sm">Sports suit</p>
                  <p className="text-lg mt-1">3 595 ₽</p>
                </div>
              </div>

              <button className="border border-[#750000] w-10 h-10 rounded-lg">
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
