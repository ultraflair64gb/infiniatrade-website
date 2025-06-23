import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trade Futures With InfiniaTrade Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Simple Yet Powerful Futures Trading Tools
            </p>
            <p className="text-lg mb-10 text-gray-400 max-w-3xl mx-auto">
              InfiniaTrade brings innovation to future trading by building our platform from the ground up for speed and multi-device trading using technology designed for active futures traders. You can trade from anywhere on Any device - Both PC and Mac Compatible.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Open Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose InfiniaTrade Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose InfiniaTrade?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Trade Anywhere - From Any Device</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Full access to all versions of InfiniaTrade's cloud-based platform to trade on all of your devices: Desktop, mobile & tablet - Mac & PC Compatible.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">40+ Advanced Trading Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Designed specifically for futures traders, this suite of tools was built for the modern markets. Identify and execute your next trade with advanced InfiniaTrade tools.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Transparent Pricing - No Hidden Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  3 different plans designed for the way you trade.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cloud based trading system with latest 2FA security for your account and NFA regulated.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Preview CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get an Instant Platform Preview
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience cloud-based futures trading for FREE. Take a look at the tools and analytics that InfiniaTrade offers with live real-time futures data.
          </p>
          <Link href="/try-it">
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
              TRY IT NOW
            </Button>
          </Link>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose a Pricing Plan that Fits Your Trading Style
            </h2>
            <p className="text-lg text-gray-600">
              Trade with no commitment per side pricing or upgrade at any time to potentially lower your trading costs further
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <CardDescription>No commitment, pay a commission only when you trade</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$0.39</div>
                  <div className="text-sm text-gray-600">Micros</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$1.29</div>
                  <div className="text-sm text-gray-600">Standard</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$0.20</div>
                  <div className="text-sm text-gray-600">Nano & Event Contracts</div>
                </div>
                <div className="text-center text-sm text-gray-600">Commission per side</div>
                <div className="text-center font-semibold text-green-600">No Monthly Fee</div>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Plan */}
            <Card className="border-2 border-blue-500 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
                Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Monthly</CardTitle>
                <CardDescription>Reduce your per trade commissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$0.29</div>
                  <div className="text-sm text-gray-600">Micros</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$0.99</div>
                  <div className="text-sm text-gray-600">Standard</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$0.15</div>
                  <div className="text-sm text-gray-600">Nano & Event Contracts</div>
                </div>
                <div className="text-center text-sm text-gray-600">Commission per side</div>
                <div className="text-center font-semibold text-blue-600">$99/month</div>
                <Button className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Lifetime Plan */}
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Lifetime</CardTitle>
                <CardDescription>Lowest commissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$0.09</div>
                  <div className="text-sm text-gray-600">Micros</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$0.59</div>
                  <div className="text-sm text-gray-600">Standard</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$0.05</div>
                  <div className="text-sm text-gray-600">Nano & Event Contracts</div>
                </div>
                <div className="text-center font-semibold text-purple-600">$1,499 one-time payment</div>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* All Plans Include */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">All plans include access to advanced tools</h3>
            <p className="text-center text-gray-600 mb-8">
              Every plan also includes access to the following tools, so you can fully customize the way you trade futures:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Powerful charts</h4>
                <p className="text-sm text-gray-600">Advanced yet easy-to-use charting tools</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Third-party tools integration</h4>
                <p className="text-sm text-gray-600">Connect with your favorite trading tools</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Free simulated trading</h4>
                <p className="text-sm text-gray-600">Test strategies risk-free</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Customer support</h4>
                <p className="text-sm text-gray-600">24x5 technical support</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              ALL INFINIATRADE PLATFORMS INCLUDED WITH NO LICENCE FEES
            </p>
            <p className="text-sm text-gray-600">
              Exchange, clearing, and NFA fees still apply.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
