import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function TradingProducts() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trade the World's Leading Futures Markets
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Access comprehensive futures markets including indices, commodities, currencies,
            and interest rates. From full-size to micro contracts.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start 90-Day Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Markets Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Market Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trade across multiple asset classes with competitive margins and
              low commission rates on all major futures exchanges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Index Futures */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <CardTitle>Index Futures</CardTitle>
                <CardDescription>
                  S&P 500, NASDAQ, Dow Jones, Russell 2000, and international indices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Most Popular</Badge>
              </CardContent>
            </Card>

            {/* Energy */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Energy</CardTitle>
                <CardDescription>
                  Crude Oil, Natural Gas, Gasoline, Heating Oil, and renewable energy contracts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Volatile</Badge>
              </CardContent>
            </Card>

            {/* Metals */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <CardTitle>Metals</CardTitle>
                <CardDescription>
                  Gold, Silver, Copper, Platinum, Palladium and industrial metals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Safe Haven</Badge>
              </CardContent>
            </Card>

            {/* Agriculture */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <CardTitle>Agriculture</CardTitle>
                <CardDescription>
                  Corn, Wheat, Soybeans, Coffee, Sugar, Cotton, and livestock contracts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Seasonal</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contract Sizes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Contract Sizes for Every Trader
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right contract size for your account and risk tolerance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Full Size",
                description: "Standard futures contracts for institutional and high-volume traders",
                example: "1 ES = $50 per point",
                color: "blue"
              },
              {
                title: "Mini Contracts",
                description: "Smaller position sizes, perfect for medium-sized accounts",
                example: "1 MES = $5 per point",
                color: "green"
              },
              {
                title: "Micro Contracts",
                description: "Ultra-small positions ideal for new traders and small accounts",
                example: "1 MES = $1.25 per point",
                color: "purple"
              },
              {
                title: "Nano Contracts",
                description: "The smallest available contracts for maximum flexibility",
                example: "1 Nano = $0.25 per point",
                color: "orange"
              }
            ].map((contract, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className={`text-${contract.color}-600`}>{contract.title}</CardTitle>
                  <CardDescription>{contract.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-mono bg-gray-100 rounded p-2">
                    {contract.example}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Contracts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Most Traded Contracts
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Contract</th>
                  <th className="text-left py-3 px-4">Symbol</th>
                  <th className="text-left py-3 px-4">Point Value</th>
                  <th className="text-left py-3 px-4">Margin (Day)</th>
                  <th className="text-left py-3 px-4">Hours</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["E-mini S&P 500", "ES", "$50", "$500", "23/6"],
                  ["E-mini NASDAQ", "NQ", "$20", "$1,000", "23/6"],
                  ["E-mini Dow", "YM", "$5", "$500", "23/6"],
                  ["Crude Oil", "CL", "$1,000", "$2,500", "23/6"],
                  ["Gold", "GC", "$100", "$1,500", "23/6"],
                  ["Euro FX", "6E", "$1,250", "$1,000", "23/5"],
                  ["10-Year Note", "ZN", "$1,000", "$800", "22/5"],
                  ["Corn", "ZC", "$50", "$1,000", "20/5"]
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{row[0]}</td>
                    <td className="py-3 px-4 font-mono">{row[1]}</td>
                    <td className="py-3 px-4">{row[2]}</td>
                    <td className="py-3 px-4">{row[3]}</td>
                    <td className="py-3 px-4">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              *Margins shown are intraday rates and subject to change. Overnight margins may be higher.
            </p>
            <Link href="/margins">
              <Button variant="outline">
                View Complete Margin Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trading Hours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Extended Trading Hours
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Take advantage of nearly 24-hour trading access across global markets.
                Trade when news breaks and opportunities arise.
              </p>

              <div className="space-y-4">
                {[
                  {
                    market: "Equity Index Futures",
                    hours: "Sunday 6:00 PM - Friday 5:00 PM ET"
                  },
                  {
                    market: "Energy Futures",
                    hours: "Sunday 6:00 PM - Friday 5:00 PM ET"
                  },
                  {
                    market: "Metals Futures",
                    hours: "Sunday 6:00 PM - Friday 5:00 PM ET"
                  },
                  {
                    market: "Currency Futures",
                    hours: "Sunday 6:00 PM - Friday 5:00 PM ET"
                  },
                  {
                    market: "Interest Rate Futures",
                    hours: "Sunday 6:00 PM - Friday 5:00 PM ET"
                  },
                  {
                    market: "Agricultural Futures",
                    hours: "Various hours by contract"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{item.market}</h3>
                    <p className="text-gray-600">{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Market Benefits</h3>
                <div className="space-y-4">
                  {[
                    "Deep liquidity across all major contracts",
                    "Transparent, centralized pricing",
                    "Low margin requirements",
                    "Advanced order types available",
                    "Professional-grade execution",
                    "Risk management tools included"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/register">
                    <Button className="w-full">
                      Start Trading Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Trade Futures?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Open your account today and get access to all these markets with
            competitive pricing and professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Open Trading Account
              </Button>
            </Link>
            <Link href="/try-it">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Try Demo First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
