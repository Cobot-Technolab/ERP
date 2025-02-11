import { useState } from "react";
import { EyeOff, EyeIcon } from "lucide-react";
import { createPortal } from "react-dom";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return createPortal(
    (<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-6xl flex overflow-hidden">
        {/* Left Section */}
        <div className="bg-orange-500 w-1/2 p-12 text-white hidden lg:block">
          <div className="h-full flex flex-col">
            <h2 className="text-4xl font-bold mb-6">
              Simplify management with our dashboard.
            </h2>
            <p className="text-lg mb-8">
              Simplify your e-commerce management with our user-friendly admin
              dashboard.
            </p>
            <div className="flex-grow flex items-center justify-center">
              <img
                src="/api/placeholder/400/320"
                alt="Dashboard illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-xl font-bold">E Spurt</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-500">Please login to your account</p>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent focus:border-orange-500 focus:bg-white focus:ring-0"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-orange-500"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Login
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or Login with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 border rounded-lg hover:bg-gray-50"
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="Google"
                  className="w-6 h-6"
                />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 border rounded-lg hover:bg-gray-50"
              >
                <img
                  src="/api/placeholder/24/24"
                  alt="Facebook"
                  className="w-6 h-6"
                />
                Facebook
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Signup
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  ), document.getElementById("formPortalRoot") as HTMLElement)
};

export default LoginForm;
