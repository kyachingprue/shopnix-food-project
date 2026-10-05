import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);

    // Connect your register API here
    // Example:
    // registerUser(data)
  };

  return (
    <main className="min-h-screen bg-[#fffaf5]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}
        <section className="relative hidden overflow-hidden bg-[#19120d] lg:block">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85"
            alt="Delicious food"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/45 to-orange-950/80" />

          {/* Decorative circles */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">

            {/* Content */}
            <div className="max-w-xl">
              <span className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-orange-200 backdrop-blur-md">
                🍽️ Taste something amazing
              </span>

              <h1 className="text-4xl font-black leading-tight text-white xl:text-6xl">
                Your next
                <span className="block text-orange-400">
                  delicious journey
                </span>
                starts here.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/70">
                Create your account and discover delicious meals, exclusive
                offers, and your favorite food all in one place.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  "Discover delicious meals",
                  "Save your favorite foods",
                  "Get exclusive food offers",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <CheckCircle2
                      size={19}
                      className="text-orange-400"
                    />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Foodly. Deliciousness delivered.
            </p>
          </div>
        </section>

        {/* ================= RIGHT SIDE ================= */}
        <section className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
          <div className="w-full max-w-lg">

            {/* Heading */}
            <div className="mb-8">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-500">
                Welcome to Shopnix
              </p>

              <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Join us and discover a world full of delicious food.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
                      errors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                    }`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    placeholder="+880 1XXXXXXXXX"
                    {...register("phone", {
                      required: "Phone number is required",
                      minLength: {
                        value: 10,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
                      errors.phone
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                    }`}
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-12 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
                      errors.password
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-orange-500"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-12 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
                      errors.confirmPassword
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-orange-400 focus:ring-orange-100"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-orange-500"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                  className="mt-1 h-4 w-4 cursor-pointer accent-orange-500"
                />

                <p className="text-xs leading-5 text-gray-500">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-semibold text-orange-500 hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-semibold text-orange-500 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {errors.terms && (
                <p className="-mt-3 text-xs font-medium text-red-500">
                  {errors.terms.message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/40 active:translate-y-0"
              >
                Create Account

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-orange-500 transition hover:text-orange-600 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;

