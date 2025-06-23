"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Welcome Back to InfiniaTrade
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Access your trading account and continue your futures trading journey
            with our advanced platform and professional tools.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Real-time market data</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Advanced charting tools</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Multi-device synchronization</span>
            </div>
          </div>
          <p className="text-gray-400 mt-8">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-400 hover:text-blue-300 underline">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Sign In to Your Account
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Access your trading dashboard
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Sign In Buttons */}
              <div className="space-y-3">
                <Button className="w-full" variant="outline" size="lg">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign in with Google
                </Button>

                <Button className="w-full bg-black hover:bg-gray-800 text-white" size="lg">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Sign in with Apple
                </Button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign in with email</span>
                </div>
              </div>

              {/* Email/Password Form */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 underline">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Sign In
                </Button>
              </div>

              {/* Two-Factor Authentication Notice */}
              <div className="text-center">
                <p className="text-xs text-gray-600">
                  For enhanced security, two-factor authentication may be required.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Support Information */}
          <div className="mt-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-3">Need Help?</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <Link href="/support" className="text-blue-400 hover:text-blue-300 underline">
                    Contact Support
                  </Link>
                  {" "}for account assistance
                </p>
                <p>
                  <Link href="/faq" className="text-blue-400 hover:text-blue-300 underline">
                    View FAQ
                  </Link>
                  {" "}for common questions
                </p>
                <p>Call: 1 (844) 283-3100</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Notice */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            We use cookies to ensure that we give you the best experience on our website. By continuing using the website, you consent to our use of cookies as described in our{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Policy
            </Link>
            .
          </p>
          <Button variant="outline" size="sm">
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  );
}
