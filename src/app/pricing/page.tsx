import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Trading Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing designed for traders. No hidden fees, no surprises.
            Choose the plan that fits your trading style and volume.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Free Plan */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-blue-600">$0</div>
                  <div className="text-sm text-gray-600">Monthly fee</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$0.39</div>
                    <div className="text-sm text-gray-600">Micro contracts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$1.29</div>
                    <div className="text-sm text-gray-600">Standard contracts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$0.20</div>
                    <div className="text-sm text-gray-600">Nano & Event contracts</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Commission per side</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">No monthly commitment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">All platform features</span>
                  </div>
                </div>

                <Link href="/register">
                  <Button className="w-full" variant="outline">
                    Get Started Free
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Monthly Plan */}
            <Card className="border-2 border-blue-500 relative hover:shadow-lg transition-shadow">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Monthly</CardTitle>
                <CardDescription>Best for active traders</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-blue-600">$99</div>
                  <div className="text-sm text-gray-600">Per month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$0.29</div>
                    <div className="text-sm text-gray-600">Micro contracts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$0.99</div>
                    <div className="text-sm text-gray-600">Standard contracts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$0.15</div>
                    <div className="text-sm text-gray-600">Nano & Event contracts</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Reduced commission rates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">All platform features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Priority support</span>
                  </div>
                </div>

                <Link href="/register">
                  <Button className="w-full">
                    Start Monthly Plan
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Lifetime Plan */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Lifetime</CardTitle>
                <CardDescription>Lowest possible rates</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-purple-600">$1,499</div>
                  <div className="text-sm text-gray-600">One-time payment</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$0.09</div>
                    <div className="text-sm text-gray-600">Micro contracts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$0.59</div>
                    <div className="text-sm text-gray-600">Standard contracts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$0.05</div>
                    <div className="text-sm text-gray-600">Nano & Event contracts</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Lowest commission rates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">VIP support</span>
                  </div>
                </div>

                <Link href="/register">
                  <Button className="w-full" variant="outline">
                    Get Lifetime Access
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Features Comparison */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">All Plans Include</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Advanced Charting",
                  description: "Professional-grade charts with 100+ technical indicators"
                },
                {
                  title: "Multi-Device Access",
                  description: "Trade from desktop, mobile, tablet - Mac & PC compatible"
                },
                {
                  title: "Real-Time Data",
                  description: "Live market data and news feeds"
                },
                {
                  title: "Risk Management",
                  description: "Advanced order types and risk controls"
                },
                {
                  title: "Third-Party Integration",
                  description: "Connect with TradingView and other platforms"
                },
                {
                  title: "Paper Trading",
                  description: "Practice with unlimited simulated trading"
                },
                {
                  title: "Market Research",
                  description: "Daily market analysis and research reports"
                },
                {
                  title: "Customer Support",
                  description: "24x5 technical support and trade desk"
                },
                {
                  title: "Educational Resources",
                  description: "Videos, webinars, and trading guides"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ALL INFINIATRADE PLATFORMS INCLUDED WITH NO LICENSE FEES
              </h3>
              <p className="text-gray-600 mb-6">
                Exchange, clearing, and NFA fees still apply. No setup fees, no data fees, no platform fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg">
                    Start Trading Today
                  </Button>
                </Link>
                <Link href="/try-it">
                  <Button variant="outline" size="lg">
                    Try Platform Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
