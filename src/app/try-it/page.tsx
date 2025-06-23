import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TryIt() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Experience InfiniaTrade Platform Live
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Try our advanced futures trading platform with real-time market data.
            No registration required - explore all features risk-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Launch Live Demo
            </Button>
            <Link href="/register">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                Open Real Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Full Platform Access - No Limitations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience every feature of our professional trading platform with live market data.
              This is the exact same platform our customers use for real trading.
            </p>
          </div>

          {/* Main Platform Demo */}
          <div className="bg-gray-900 rounded-lg p-8 mb-12">
            <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center mb-6">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Trading Platform</h3>
                <p className="text-gray-400 mb-4">Click the button below to launch the full demo</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Launch Platform Demo
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-sm">
              <div className="bg-gray-800/50 rounded p-3">
                <div className="font-semibold text-green-400">Live Market Data</div>
                <div className="text-gray-300">Real-time futures prices</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3">
                <div className="font-semibold text-blue-400">Full Feature Access</div>
                <div className="text-gray-300">All tools & indicators</div>
              </div>
              <div className="bg-gray-800/50 rounded p-3">
                <div className="font-semibold text-purple-400">Simulated Trading</div>
                <div className="text-gray-300">Practice with virtual funds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Try */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You Can Try in the Demo
            </h2>
            <p className="text-lg text-gray-600">
              Explore every aspect of our professional trading platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Charting",
                description: "Professional charts with 100+ technical indicators, drawing tools, and multiple timeframes",
                icon: "📈",
                badge: "Popular"
              },
              {
                title: "Order Management",
                description: "Place and manage orders with advanced order types including stops, limits, and brackets",
                icon: "📋",
                badge: "Essential"
              },
              {
                title: "Market Scanner",
                description: "Scan thousands of futures contracts to find trading opportunities based on your criteria",
                icon: "🔍",
                badge: "Pro Tool"
              },
              {
                title: "Real-Time Data",
                description: "Live market data feeds, Level II quotes, and time & sales information",
                icon: "⚡",
                badge: "Live Data"
              },
              {
                title: "Risk Management",
                description: "Set position sizes, stop losses, and monitor real-time P&L across all positions",
                icon: "🛡️",
                badge: "Safety"
              },
              {
                title: "Economic Calendar",
                description: "Stay informed with economic events and news that impact futures markets",
                icon: "📅",
                badge: "News"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* System Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                System Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our cloud-based platform works on any device with a modern web browser.
                No downloads or installations required.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">💻 Desktop</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Windows 10+ or macOS 10.14+</li>
                    <li>• Chrome, Firefox, Safari, or Edge</li>
                    <li>• 4GB RAM minimum, 8GB recommended</li>
                    <li>• Broadband internet connection</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">📱 Mobile & Tablet</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• iOS 13+ or Android 8+</li>
                    <li>• Safari, Chrome, or Samsung Browser</li>
                    <li>• 2GB RAM minimum</li>
                    <li>• 4G/WiFi internet connection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Demo Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Demo Features
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Full Platform Access",
                    description: "Every feature available to paying customers"
                  },
                  {
                    title: "Live Market Data",
                    description: "Real-time quotes and market information"
                  },
                  {
                    title: "Simulated Trading",
                    description: "Practice with $100,000 virtual account"
                  },
                  {
                    title: "No Time Limits",
                    description: "Use the demo as long as you want"
                  },
                  {
                    title: "No Registration",
                    description: "Start immediately without signing up"
                  },
                  {
                    title: "Save Preferences",
                    description: "Layouts and settings saved in browser"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Demo FAQ
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Is the demo completely free?",
                answer: "Yes, the demo is completely free with no hidden costs or time limits. You can use it as long as you want without any obligations."
              },
              {
                question: "Do I need to provide personal information?",
                answer: "No registration is required to use the demo. You can start trading immediately without providing any personal information."
              },
              {
                question: "Is the market data real?",
                answer: "Yes, the demo uses live, real-time market data from major exchanges, so you see exactly what real traders see."
              },
              {
                question: "Can I save my layouts and preferences?",
                answer: "Yes, your workspace layouts, watchlists, and preferences are automatically saved in your browser for future sessions."
              },
              {
                question: "What's the difference between demo and live trading?",
                answer: "The demo uses virtual money instead of real funds. All other features, data, and functionality are identical to live trading."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Trading for Real?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Once you've explored the demo, open a live account to start trading
            with our competitive pricing and professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Open Live Account
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
