import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Margins() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Margin Requirements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Competitive margin rates for futures trading. View current requirements
            for all major contracts and understand how margins work.
          </p>
        </div>
      </section>

      {/* Margin Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding Futures Margins
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Margins in futures trading are performance bonds, not down payments.
              They represent the minimum amount required to open and maintain positions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <CardTitle>Intraday Margins</CardTitle>
                <CardDescription>
                  Lower margin requirements for positions closed before market close
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <CardTitle>Overnight Margins</CardTitle>
                <CardDescription>
                  Higher margin requirements for positions held overnight
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle>Dynamic Margins</CardTitle>
                <CardDescription>
                  Margins may change based on market volatility and risk
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Margin Tables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Margin Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Effective as of January 2025. Margins are subject to change based on market conditions.
            </p>
          </div>

          {/* Index Futures */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Index Futures</CardTitle>
                <Badge>Most Popular</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Contract</th>
                      <th className="text-left py-3 px-4">Symbol</th>
                      <th className="text-left py-3 px-4">Intraday</th>
                      <th className="text-left py-3 px-4">Overnight</th>
                      <th className="text-left py-3 px-4">Point Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["E-mini S&P 500", "ES", "$500", "$13,200", "$50"],
                      ["Micro E-mini S&P 500", "MES", "$50", "$1,320", "$5"],
                      ["E-mini NASDAQ", "NQ", "$1,000", "$17,600", "$20"],
                      ["Micro E-mini NASDAQ", "MNQ", "$100", "$1,760", "$2"],
                      ["E-mini Dow", "YM", "$500", "$8,800", "$5"],
                      ["Micro E-mini Dow", "MYM", "$50", "$880", "$0.50"],
                      ["E-mini Russell 2000", "RTY", "$800", "$8,800", "$10"],
                      ["Micro E-mini Russell", "M2K", "$80", "$880", "$1"]
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{row[0]}</td>
                        <td className="py-3 px-4 font-mono">{row[1]}</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">{row[2]}</td>
                        <td className="py-3 px-4">{row[3]}</td>
                        <td className="py-3 px-4">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Energy Futures */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Energy Futures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Contract</th>
                      <th className="text-left py-3 px-4">Symbol</th>
                      <th className="text-left py-3 px-4">Intraday</th>
                      <th className="text-left py-3 px-4">Overnight</th>
                      <th className="text-left py-3 px-4">Point Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Crude Oil", "CL", "$2,500", "$6,600", "$1,000"],
                      ["Micro Crude Oil", "MCL", "$250", "$660", "$100"],
                      ["Natural Gas", "NG", "$1,500", "$4,400", "$10,000"],
                      ["Gasoline", "RB", "$2,200", "$5,775", "$42,000"],
                      ["Heating Oil", "HO", "$2,200", "$5,775", "$42,000"]
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{row[0]}</td>
                        <td className="py-3 px-4 font-mono">{row[1]}</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">{row[2]}</td>
                        <td className="py-3 px-4">{row[3]}</td>
                        <td className="py-3 px-4">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Metals Futures */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Metals Futures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Contract</th>
                      <th className="text-left py-3 px-4">Symbol</th>
                      <th className="text-left py-3 px-4">Intraday</th>
                      <th className="text-left py-3 px-4">Overnight</th>
                      <th className="text-left py-3 px-4">Point Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Gold", "GC", "$1,500", "$11,000", "$100"],
                      ["Micro Gold", "MGC", "$150", "$1,100", "$10"],
                      ["Silver", "SI", "$2,500", "$16,500", "$5,000"],
                      ["Copper", "HG", "$1,500", "$6,600", "$25,000"],
                      ["Platinum", "PL", "$1,000", "$3,300", "$50"],
                      ["Palladium", "PA", "$1,500", "$4,950", "$100"]
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{row[0]}</td>
                        <td className="py-3 px-4 font-mono">{row[1]}</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">{row[2]}</td>
                        <td className="py-3 px-4">{row[3]}</td>
                        <td className="py-3 px-4">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Currency Futures */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Currency Futures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Contract</th>
                      <th className="text-left py-3 px-4">Symbol</th>
                      <th className="text-left py-3 px-4">Intraday</th>
                      <th className="text-left py-3 px-4">Overnight</th>
                      <th className="text-left py-3 px-4">Point Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Euro FX", "6E", "$1,000", "$2,640", "$1,250"],
                      ["British Pound", "6B", "$1,000", "$2,970", "$625"],
                      ["Japanese Yen", "6J", "$1,000", "$2,310", "$1,250"],
                      ["Canadian Dollar", "6C", "$800", "$1,980", "$1,000"],
                      ["Australian Dollar", "6A", "$800", "$1,980", "$1,000"],
                      ["Swiss Franc", "6S", "$1,000", "$2,310", "$1,250"]
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{row[0]}</td>
                        <td className="py-3 px-4 font-mono">{row[1]}</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">{row[2]}</td>
                        <td className="py-3 px-4">{row[3]}</td>
                        <td className="py-3 px-4">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              *Margins shown are subject to change based on market conditions and volatility.
              Intraday margins apply to positions closed before market close.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button>
                  Start 90-Day Free Trial
                </Button>
              </Link>
              <Button variant="outline">
                Download Full Margin Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Important Margin Information
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Margin Calls and Liquidation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If your account equity falls below the required margin level, you may receive a margin call
                  requiring additional funds. If margin requirements are not met promptly, positions may be
                  liquidated to bring the account into compliance. You remain liable for any resulting deficit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Margin Changes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Margin requirements are set by the exchanges and can change at any time, especially during
                  periods of high volatility. InfiniaTrade may also impose higher margin requirements than
                  those set by the exchanges. Customers will be notified of margin changes when possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proper risk management is essential when trading on margin. Never risk more than you can
                  afford to lose, and always maintain adequate account equity above minimum margin requirements.
                  Consider using stop-loss orders to limit potential losses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}