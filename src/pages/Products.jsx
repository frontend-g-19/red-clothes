import SearchIcon from "../assets/Icon.png";
import likeIcon from "../assets/favourite.png";

import clothesImg1 from "../assets/c-1.png";
import clothesImg2 from "../assets/c-2.png";
import clothesImg3 from "../assets/c-3.png";
import clothesImg4 from "../assets/c-4.png";
import clothesImg5 from "../assets/c-5.png";
import clothesImg6 from "../assets/c-6.png";
import Intro from "../assets/Intro.png";

export default function Products() {
  return (
    <div>
      <div className="max-w-300 mx-auto my-10">
        <img src={Intro} alt="intro" className="w-full rounded-xl" />
      </div>
      <div className="max-w-300 mx-auto">
        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <h1 className="text-[#750000] font-bold text-4xl sm:text-3xl">
            Все товары
          </h1>

          <div className="flex items-center gap-5 border border-[#d9d9d9] rounded-xl px-5 py-2.5 w-full md:w-105 bg-linear-to-b from-white to-[#d9d9d9]">
            <img src={SearchIcon} alt="search" />
            <input
              type="search"
              placeholder="Поиск..."
              className="w-full outline-none bg-transparent text-2xl text-[#d9d9d9]"
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
          {/* CARD */}
          {[
            clothesImg1,
            clothesImg2,
            clothesImg3,
            clothesImg4,
            clothesImg5,
            clothesImg6,
          ].map((item) => (
            <div
              key={item}
              className="relative border border-gray-300 rounded-3xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={likeIcon}
                alt="liked"
                className="absolute top-2 left-2 w-6 cursor-pointer"
              />

              <img src={item} alt="product" className="w-full object-cover" />

              <div className="p-5">
                <h1 className="text-primary font-bold text-lg">Brand Name</h1>

                <p className="font-open text-gray-700 text-lg mt-1">
                  Product name
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="font-open text-gray-500 text-sm">
                    ЦЕНА:
                    <p className="font-roboto text-black text-2xl mt-1">
                      3 595 ₽
                    </p>
                  </div>

                  <img
                    src="/image/add.png"
                    alt="add"
                    className="w-8 cursor-pointer hover:scale-110 transition"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
