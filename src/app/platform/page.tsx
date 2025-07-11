import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Platform() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Trading Platform Built for Futures Traders
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experience the power of cloud-based trading with 40+ advanced tools,
                real-time data, and seamless multi-device access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start 90-Day Free Trial
                  </Button>
                </Link>
                <Link href="/try-it">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                    Try Live Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-200/20 backdrop-blur-sm rounded-lg p-8 h-80 flex items-center justify-center">
                <span className="text-gray-300 text-lg">Platform Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Trade Futures
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with intuitive design to deliver
              a superior trading experience across all devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Charting */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle>Advanced Charting</CardTitle>
                <CardDescription>
                  Professional-grade charts with 100+ technical indicators, custom drawing tools, and multiple timeframes.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Real-Time Data */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Real-Time Market Data</CardTitle>
                <CardDescription>
                  Lightning-fast market data feeds with Level II quotes, time & sales, and market depth information.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Order Management */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <CardTitle>Advanced Order Types</CardTitle>
                <CardDescription>
                  Complete order management with market, limit, stop, OCO, bracket orders, and algorithmic strategies.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Risk Management */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle>Risk Management</CardTitle>
                <CardDescription>
                  Built-in risk controls, position sizing tools, and real-time P&L monitoring to protect your capital.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Multi-Device */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Multi-Device Trading</CardTitle>
                <CardDescription>
                  Seamless trading across desktop, tablet, and mobile devices with cloud synchronization.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Customization */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <CardTitle>Full Customization</CardTitle>
                <CardDescription>
                  Customize layouts, create personal workspaces, and build custom indicators with our API.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Trading Tools */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                40+ Professional Trading Tools
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Access the most comprehensive suite of trading tools designed specifically
                for futures markets. From basic market analysis to advanced algorithmic trading.
              </p>

              <div className="space-y-4">
                {[
                  "Market Scanner & Watchlists",
                  "Economic Calendar Integration",
                  "News & Analysis Feeds",
                  "Option Chain Analysis",
                  "Spread Trading Tools",
                  "Automated Trading Strategies"
                ].map((tool, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/register">
                  <Button size="lg">
                    Start 90-Day Free Trial
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <div className="bg-gray-200 rounded-lg p-8 h-96 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Trading Tools Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Third-Party Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite trading tools and platforms. InfiniaTrade works
              with the tools you already know and love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>TradingView Integration</CardTitle>
                <CardDescription>
                  Full synchronization with TradingView charts and analysis tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Popular</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>NinjaTrader Compatible</CardTitle>
                <CardDescription>
                  Use familiar NinjaTrader strategies and indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Advanced</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Custom API Access</CardTitle>
                <CardDescription>
                  Build your own integrations with our comprehensive API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Developer</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/platform/add-on-integration-tools">
              <Button variant="outline" size="lg">
                View All Integrations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security & Reliability */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Enterprise-Grade Security & Reliability
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Your trading capital and data are protected by bank-level security
                measures and 99.9% uptime guarantee.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Security Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 2FA Authentication</li>
                    <li>• SSL Encryption</li>
                    <li>• NFA Regulated</li>
                    <li>• Segregated Funds</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Reliability</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 99.9% Uptime</li>
                    <li>• Redundant Systems</li>
                    <li>• 24/7 Monitoring</li>
                    <li>• Instant Failover</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-700/50 rounded-lg p-8 h-80 flex items-center justify-center">
                <span className="text-gray-300 text-lg">Security Features Diagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the InfiniaTrade Platform?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of traders who have made the switch to our advanced futures trading platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start 90-Day Free Trial - No Credit Card
              </Button>
            </Link>
            <Link href="/try-it">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Try Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
