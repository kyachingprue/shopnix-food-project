import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

import {FaChrome as Chrome} from 'react-icons/fa'

export function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false
    }
  })

  const onSubmit = async data => {
    setIsLoading(true)

    console.log('Login Data:', data)

    // Replace this with your real login API/Firebase logic
    await new Promise(resolve => setTimeout(resolve, 1200))

    setIsLoading(false)

    // Example:
    navigate('/')

    console.log('Login successful')
  }

  return (
    <main className="min-h-screen bg-[#faf8f3]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* ========================================
            LEFT SIDE — IMAGE / BRANDING
        ======================================== */}
        <section className="relative hidden overflow-hidden lg:block">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85"
            alt="Delicious restaurant food"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#06150f]/95 via-[#123b29]/75 to-[#07130e]/80" />

          {/* Gradient Glow */}
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-400/20 blur-[120px]" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-amber-400/15 blur-[130px]" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">

            {/* Main Content */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-md">
                  Welcome Back
                </span>

                <h1 className="font-serif text-5xl font-bold leading-tight text-white xl:text-6xl">
                  Great food
                  <br />
                  starts with a
                  <br />
                  <span className="text-amber-300">great experience.</span>
                </h1>

                <p className="mt-6 max-w-md text-base leading-7 text-white/65">
                  Sign in to discover delicious dishes, save your favorites and
                  enjoy a better dining experience with Antixor.
                </p>

                {/* Features */}
                <div className="mt-8 space-y-3">
                  {[
                    'Save your favorite dishes',
                    'Track your orders easily',
                    'Enjoy personalized recommendations'
                  ].map(item => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/75"
                    >
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom */}
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Antixor. All rights reserved.
            </p>
          </div>
        </section>

        {/* ========================================
            RIGHT SIDE — LOGIN FORM
        ======================================== */}
        <section className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-100/60 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-100/50 blur-[110px]" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-md"
          >
            {/* Heading */}
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#174c37]">
                Welcome Back
              </p>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Sign in to your
                <span className="block text-[#174c37]">account</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Enter your details below to continue your delicious journey.
              </p>
            </div>

            {/* Google Button */}
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:shadow-md"
            >
              <Chrome size={19} />
              Continue with Google
            </motion.button>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium text-gray-400">
                OR CONTINUE WITH EMAIL
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Email Address
                </label>

                <div
                  className={`group flex items-center rounded-2xl border bg-white transition-all ${
                    errors.email
                      ? 'border-red-400 ring-4 ring-red-50'
                      : 'border-gray-200 focus-within:border-[#174c37] focus-within:ring-4 focus-within:ring-[#174c37]/10'
                  }`}
                >
                  <Mail
                    size={19}
                    className="ml-4 shrink-0 text-gray-400 transition group-focus-within:text-[#174c37]"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-[#174c37] transition hover:text-emerald-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div
                  className={`group flex items-center rounded-2xl border bg-white transition-all ${
                    errors.password
                      ? 'border-red-400 ring-4 ring-red-50'
                      : 'border-gray-200 focus-within:border-[#174c37] focus-within:ring-4 focus-within:ring-[#174c37]/10'
                  }`}
                >
                  <Lock
                    size={19}
                    className="ml-4 shrink-0 text-gray-400 transition group-focus-within:text-[#174c37]"
                  />

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                    className="w-full bg-transparent px-3 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    className="mr-3 rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  {...register('remember')}
                  className="h-4 w-4 rounded border-gray-300 accent-[#174c37]"
                />

                <span className="text-sm text-gray-500">Remember me</span>
              </label>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#174c37] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#174c37]/20 transition hover:bg-[#103b2a] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </motion.button>
            </form>

            {/* Register */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-bold text-[#174c37] transition hover:text-emerald-700"
              >
                Create an account
              </Link>
            </p>

            {/* Terms */}
            <p className="mt-8 text-center text-[11px] leading-5 text-gray-400">
              By continuing, you agree to our{' '}
              <Link
                to="/terms"
                className="underline underline-offset-2 hover:text-gray-600"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                className="underline underline-offset-2 hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  )
}
