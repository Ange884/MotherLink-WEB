import React from "react";
// sign-up2
const Signup2 = () => {
  return (
    <div className="flex items-center justify-center bg-white from-blue-50 to-indigo-100 min-h-screen px-6 py-6 md:px-12 md:py-8">
      {/* Signup Card */}
      <div className="relative z-10 bg-white shadow-2xl rounded-3xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
        
        {/* Left side (Form) */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between animate-fade-in-left">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#0B2447] to-[#19376D] bg-clip-text text-transparent">
            Signup to <span className="text-[#0B2447]">Mother Link!</span>
          </h2>

          <h3 className="text-base md:text-lg font-semibold text-[#0B2447] mb-3 md:mb-4 animate-slide-down">
            Organization Information
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Organization Name */}
            <div className="animate-slide-up delay-100">
              <label className="block font-medium mb-1 text-xs md:text-sm text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="e.g., Nyabihu district hospital"
                className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
              />
            </div>

            {/* Optional field next to Organization Name */}
            <div className="animate-slide-up delay-200">
              <label className="block font-medium mb-1 text-xs md:text-sm text-gray-700">Phone number</label>
              <input
                type="text"
                placeholder="+2507899..."
                className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
              />
            </div>

            {/* Type of Facility */}
            <div className="animate-slide-up delay-300">
              <label className="block font-medium mb-1 text-xs md:text-sm text-gray-700">Email Address</label>
              <input
                type="text"
                placeholder="email@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
              />
            </div>

            {/* District */}
            <div className="animate-slide-up delay-400">
              <label className="block font-medium mb-1 text-xs md:text-sm text-gray-700">Position/Role</label>
              <input
                type="text"
                placeholder="Enter ur role"
                className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
              />
            </div>

            {/* Sector */}
            <div className="animate-slide-up delay-500">
              <label className="block font-medium mb-1 text-xs md:text-sm text-gray-700">Create Password</label>
              <input
                type="text"
                placeholder="Enter sector"
                className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
              />
            </div>

            {/* License Number */}
            <div className="animate-slide-up delay-600">
              <label className="block font-medium mb-1 text-xs md:text-sm text-gray-700">Confirm Password</label>
              <input
                type="text"
                placeholder="e.g., ML-1924-1234"
                className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
              />
            </div>

            {/* Physical Address */}
            {/* <div className="md:col-span-2 animate-slide-up delay-700">
              <label className="block font-medium mb-1 text-xs md:text-sm text-gray-700">Physical Address</label>
              <input
                type="text"
                placeholder="e.g., Nyabihu main road near stadium"
                className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
              />
            </div> */}
          </form>

          {/* Buttons at the bottom */}
          <div className="mt-4 flex flex-col gap-2 animate-slide-up delay-800">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0B2447] to-[#19376D] text-white py-1.5 md:py-2 rounded-lg hover:from-[#19376D] hover:to-[#0B2447] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Proceed
            </button>

            <div className="text-center text-xs md:text-sm">
              Already have an account?{" "}
              <a href="#" className="text-[#0B2447] font-semibold hover:underline transition-all duration-200">
                Login
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-3">
              <button className="border border-gray-300 flex items-center justify-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-xs md:text-sm shadow-sm hover:shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="google"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                Sign up with Google
              </button>
              <button className="border border-gray-300 flex items-center justify-center gap-2 px-3 py-1 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-xs md:text-sm shadow-sm hover:shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="facebook"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Right side (Welcome section) */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#0B2447] to-[#19376D] text-white flex-col items-center justify-center p-6 md:p-10 animate-fade-in-right">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 animate-pulse">Welcome to Mother Link!</h2>
          <p className="text-center text-xs md:text-sm max-w-md mb-4 md:mb-6 opacity-90 leading-relaxed">
            An AI-powered health platform for mothers and children — guiding you
            through pregnancy, postnatal care, and vaccination reminders.
          </p>
          <button className="bg-white text-[#0B2447] font-semibold px-4 py-1.5 md:px-6 md:py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
            Get started
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }
        .animate-slide-down {
          animation: slide-down 0.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
};

export default Signup2;