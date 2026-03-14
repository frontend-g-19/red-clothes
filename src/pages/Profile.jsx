export default function Profile() {
  return (
    <div className="flex justify-center mt-24 px-5">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-lg border border-gray-200 text-center">
        {/* AVATAR */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-[#750000] text-white flex items-center justify-center text-3xl font-bold">
            A
          </div>
        </div>

        {/* NAME */}
        <h1 className="text-3xl font-bold text-[#750000]">Abdulaziz</h1>

        {/* EMAIL */}
        <p className="text-gray-500 mt-2">abdulaziz@gmail.com</p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-4 mt-8">
          <button className="border border-[#750000] text-[#750000] py-3 rounded-xl font-semibold hover:bg-[#750000] hover:text-white transition">
            Edit Profile
          </button>

          <button className="bg-[#750000] text-white py-3 rounded-xl font-semibold hover:bg-[#5e0000] transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
