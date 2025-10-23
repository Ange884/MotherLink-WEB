import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden px-12 py-12 md:px-16 md:py-12">
      {/* Right side dark blue background */}
      {/* <div className="absolute right-0 top-0 h-full w-[45%] bg-[#0B2447] rounded-l-3xl z-0"></div> */}

      {/* Signup Card */}
      <div className="relative z-10 bg-white shadow-2xl rounded-2xl w-[80%] max-w-5xl flex flex-col md:flex-row overflow-hidden">
        {/* Left side (Form) */}
        <div className="w-full md:w-1/2 p-10 md:p-12">
          <h2 className="text-2xl font-bold mb-6">
            Signup to <span className="text-[#0B2447]">Mother Link!</span>
          </h2>

          <form className="space-y-4">
            {/* Organization Information */}
            <div>
              <label className="block font-medium mb-1 text-sm">Organization Name</label>
              <input
                type="text"
                placeholder="e.g., Nyabihu district hospital"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B2447]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1 text-sm">Type of Facility</label>
                <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B2447]">
                  <option>Select facility type</option>
                  <option>Health Center</option>
                  <option>District Hospital</option>
                  <option>Clinic</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1 text-sm">District</label>
                <input
                  type="text"
                  placeholder="Enter district"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B2447]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1 text-sm">Sector</label>
                <input
                  type="text"
                  placeholder="Enter sector"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B2447]"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-sm">License Number</label>
                <input
                  type="text"
                  placeholder="e.g., ML-1924-1234"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B2447]"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1 text-sm">Physical Address</label>
              <input
                type="text"
                placeholder="e.g., Nyabihu main road near stadium"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B2447]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B2447] text-white py-2 rounded-lg hover:bg-[#19376D] transition"
            >
              Proceed
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="#" className="text-[#0B2447] font-semibold">
              Login
            </a>
          </div>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="border flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
            <button className="border flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="facebook"
                className="w-5 h-5"
              />
              Sign up with Facebook
            </button>
          </div>
        </div>

        {/* Right side (Welcome section) */}
        <div className="hidden md:flex w-1/2 bg-[#0B2447] text-white flex-col items-center justify-center p-10">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Mother Link!</h2>
          <p className="text-center text-sm max-w-md mb-6">
            An AI-powered health platform for mothers and children — guiding you
            through pregnancy, postnatal care, and vaccination reminders.
          </p>
          <button className="bg-white text-[#0B2447] font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
