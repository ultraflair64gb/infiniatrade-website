import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function WhyInfiniaTrade() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trade with a Platform Built Exclusively for Futures Traders
              </h1>
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  OPEN ACCOUNT
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg p-8 h-64 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Platform Demo Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Open Account Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Open an Account at InfiniaTrade?
            </h2>
            <h3 className="text-xl text-gray-600">
              Innovative Trading Tools & Award Winning Brokerage Technology
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Feature 1 */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-blue-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trade Anywhere - From Any Device
                </h3>
                <p className="text-gray-600 mb-4">
                  Full access to all versions of InfiniaTrade's cloud-based platform to trade on all of your devices: Desktop, mobile & tablet - Mac & PC Compatible
                </p>
                <Link href="/devices">
                  <Button variant="outline">View Device Types</Button>
                </Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-green-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  40+ Advanced Trading Tools
                </h3>
                <p className="text-gray-600 mb-4">
                  Designed specifically for futures traders, this suite of tools was built for the modern markets. Identify and execute your next trade with advanced InfiniaTrade tools.
                </p>
                <Link href="/platform">
                  <Button variant="outline">View Features</Button>
                </Link>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-purple-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Transparent Pricing - No Hidden Fees
                </h3>
                <p className="text-gray-600 mb-4">
                  3 different plans designed for the way you trade. No per-trade commissions, platform licensing fees, or order routing fees
                </p>
                <Link href="/pricing">
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:col-span-2">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  OPEN ACCOUNT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-200 rounded-lg p-12 mb-8">
            <span className="text-gray-600 text-lg">Platform Screenshot</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            GET AN INSTANT PLATFORM PREVIEW
          </h2>
          <Link href="/try-it">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              TRY IT NOW
            </Button>
          </Link>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Switch to InfiniaTrade and Trade Futures on a Modern Futures Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Trading Products */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-blue-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Trade Futures, Options on Futures, as-well-as Get Stock Data From Leading Exchanges
                </h3>
                <p className="text-gray-600 mb-4">
                  You can trade index, interest rate, metals, energies & grain futures & with full, mini, Micro & smalls contracts - Now you have even more choices.
                </p>
                <Link href="/trading-products">
                  <Button variant="outline">View Trading Products</Button>
                </Link>
              </div>
            </div>

            {/* Integration Tools */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-green-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Expand your Trading with 3rd Party Integration Tools
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium partners include a full InfiniaTrade integration enabling accounts and orders to be synchronized across all tools and screens.
                </p>
                <Link href="/platform/add-on-integration-tools">
                  <Button variant="outline">View Partners</Button>
                </Link>
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-purple-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Education to Help you Every Step of the Way
                </h3>
                <p className="text-gray-600 mb-4">
                  Over 50 videos to help you get started PLUS integrated CME Resource Center so you can enhance your futures trading knowledge.
                </p>
                <div className="flex gap-4">
                  <Link href="/cme-group-resource-center">
                    <Button variant="outline">View Resource Center</Button>
                  </Link>
                  <Link href="/videos">
                    <Button variant="outline">Watch Videos</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Custom Indicators */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-red-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Create Your Own Indicators & Import Tools from our Community of Traders
                </h3>
                <p className="text-gray-600 mb-4">
                  Request or collaborate with other InfiniaTrade users on indicators as well as develop your own indicators to use in InfiniaTrade.
                </p>
                <div className="flex gap-4">
                  <Link href="/community">
                    <Button variant="outline">See Our Community</Button>
                  </Link>
                  <Link href="/platform/custom-indicators-api">
                    <Button variant="outline">View Custom Indicator Tools</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Technology */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-yellow-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Leverage InfiniaTrade Technologies Infrastructure to Elevate Your Futures Business
                </h3>
                <p className="text-gray-600 mb-4">
                  InfiniaTrade technologies has Prop firm tools, Sim-to-Funded business and custom indicator capabilities.
                </p>
                <Link href="https://www.infiniatradetechnologies.com">
                  <Button variant="outline">Visit InfiniaTrade Technologies</Button>
                </Link>
              </div>
            </div>

            {/* API Tools */}
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:w-1/3">
                <div className="bg-indigo-100 rounded-lg p-6 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Build Custom Trading Solutions with InfiniaTrade's Powerful API Tools
                </h3>
                <p className="text-gray-600 mb-4">
                  Get full access to InfiniaTrade's trading, data and technology, including advanced features, using any programming language.
                </p>
                <Link href="/platform/custom-indicators-api">
                  <Button variant="outline">View API Tools</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
