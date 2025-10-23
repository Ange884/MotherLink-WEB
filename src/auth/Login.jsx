import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-white from-blue-50 to-indigo-100 min-h-screen px-6 py-6 md:px-12 md:py-8">
      {/* Signup/Login Card */}
      <div className="relative z-10 bg-white shadow-2xl rounded-3xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden h-[90vh] transform transition-all duration-500 hover:scale-[1.02]">
        
        {/* Left side blue background */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#0B2447] to-[#19376D] text-white items-center justify-center p-8 animate-fade-in-left">
          <div className="text-center animate-slide-up">
            <h2 className="text-2xl font-semibold mb-3 md:mb-4 animate-pulse">Welcome to Mother Link!</h2>
            <p className="text-xs md:text-sm max-w-xs opacity-90 leading-relaxed">
              An AI-powered health platform for mothers and children — guiding you
              through pregnancy, postnatal care, and vaccination reminders.
            </p>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 bg-white animate-fade-in-right">
          <div className="w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#0B2447] to-[#19376D] bg-clip-text text-transparent animate-slide-down">
              Signup to Mother Link!
            </h2>

            <form className="space-y-4">
              <div className="animate-slide-up delay-100">
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Organization Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Nyabihu district hospital"
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-gray-400 lg:text-[14px] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
                />
              </div>

              <div className="animate-slide-up delay-200">
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Type of Facility
                </label>
                <input
                  type="text"
                  placeholder="e.g., Nyabihu district hospital"
                  className="w-full border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-2 text-gray-400 lg:text-[14px] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#0B2447] focus:border-transparent transition-all duration-300 hover:border-[#0B2447] hover:shadow-md"
                />
              </div>

              <div className="flex items-center justify-between animate-slide-up delay-250 mt-2">
  {/* Remember Me */}
  <label htmlFor="remember" className="flex items-center text-xs md:text-sm text-gray-600">
    <input
      id="remember"
      name="remember"
      type="checkbox"
      className="mr-2 w-4 h-4 md:w-5 md:h-5 accent-[#0B2447] border-gray-300 rounded transition-all duration-200 hover:scale-110"
    />
    Remember me
  </label>

  {/* Forgot Password */}
  <a href="#" className="text-xs md:text-sm text-[#0B2447] hover:underline">
    Forgot Password?
  </a>
</div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0B2447] to-[#19376D] text-white py-1.5 md:py-2 rounded-lg text-sm md:text-base hover:from-[#19376D] hover:to-[#0B2447] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-slide-up delay-300"
              >
                Proceed
              </button>
            </form>

            <div className="mt-4 text-center text-xs md:text-sm animate-slide-up delay-400">
              Already have an account?{" "}
              <a href="#" className="text-[#0B2447] font-semibold hover:underline transition-all duration-200">
                Login
              </a>
            </div>
          </div>
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
        .delay-250 { animation-delay: 0.25s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default Login;