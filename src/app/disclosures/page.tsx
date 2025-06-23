import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Disclosures() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Legal Disclosures
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Important legal information, risk disclosures, and regulatory
            compliance statements for InfiniaTrade customers and visitors.
          </p>
        </div>
      </section>

      {/* Disclosures Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            <Card>
              <CardHeader>
                <CardTitle>Risk Disclosure Statement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>FUTURES AND OPTIONS TRADING INVOLVES SUBSTANTIAL RISK OF LOSS AND IS NOT SUITABLE FOR ALL INVESTORS.</strong>
                </p>
                <p className="text-gray-600">
                  The risk of loss in trading commodity futures, options, and foreign exchange ("forex") is substantial. 
                  In some cases, you may sustain losses in excess of your initial margin funds. Placing contingent orders, 
                  such as "stop-loss" or "stop-limit" orders, will not necessarily limit your losses to the intended amounts. 
                  Market conditions may make it impossible to execute such orders. You may be called upon at short notice to 
                  make additional margin deposits. If the required margin deposits are not made within the prescribed time, 
                  your position may be liquidated. You will remain liable for any resulting deficit in your account.
                </p>
                <p className="text-gray-600">
                  You should therefore carefully consider whether such trading is suitable for you in light of your 
                  circumstances and financial resources. You should be aware of all the risks associated with commodity 
                  futures and foreign exchange trading and seek advice from an independent financial advisor if you have 
                  any doubts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">National Futures Association (NFA)</h4>
                  <p className="text-gray-600">
                    InfiniaTrade is a registered Introducing Broker with the National Futures Association (NFA ID: #0000000). 
                    The NFA is the industrywide, self-regulatory organization for the U.S. derivatives industry, 
                    including on-exchange traded futures, retail off-exchange foreign exchange (forex) and swaps.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Commodity Futures Trading Commission (CFTC)</h4>
                  <p className="text-gray-600">
                    Our activities are regulated by the Commodity Futures Trading Commission (CFTC), 
                    an independent agency of the US government that regulates the U.S. derivatives markets.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Fund Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Customer funds are held in segregated accounts at qualified financial institutions in accordance 
                  with CFTC regulations. These funds are separate from InfiniaTrade's operating funds and are not 
                  used for any business purposes other than margining and guaranteeing customer trades.
                </p>
                <p className="text-gray-600">
                  All customer funds are protected by the Securities Investor Protection Corporation (SIPC) up to 
                  $500,000 per customer, including up to $250,000 in cash claims.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Electronic Trading Risks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Electronic trading systems may be subject to system failures, delays, and other disruptions. 
                  InfiniaTrade cannot guarantee that orders will be executed at the price or time requested. 
                  Market volatility and volume may delay system response times and affect order execution.
                </p>
                <p className="text-gray-600">
                  Customers should be prepared for the possibility of system failures and have contingency 
                  plans for order management, including alternative methods of placing orders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Margin Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Margin requirements are set by the exchanges and may be changed at any time. InfiniaTrade 
                  may impose higher margin requirements than those set by the exchanges. Customers are 
                  responsible for monitoring their account equity and margin requirements.
                </p>
                <p className="text-gray-600">
                  If account equity falls below required margin levels, positions may be liquidated without 
                  prior notice to meet margin requirements. Customers remain liable for any resulting deficit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hypothetical Performance Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>HYPOTHETICAL PERFORMANCE RESULTS HAVE MANY INHERENT LIMITATIONS.</strong>
                </p>
                <p className="text-gray-600">
                  No representation is being made that any account will or is likely to achieve profits or 
                  losses similar to those shown. In fact, there are frequently sharp differences between 
                  hypothetical performance results and the actual results subsequently achieved by any 
                  particular trading program.
                </p>
                <p className="text-gray-600">
                  One of the limitations of hypothetical performance results is that they are generally 
                  prepared with the benefit of hindsight. In addition, hypothetical trading does not involve 
                  financial risk, and no hypothetical trading record can completely account for the impact 
                  of financial risk in actual trading.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Foreign Exchange (Forex) Risks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Trading in foreign exchange markets carries additional risks including, but not limited to, 
                  currency fluctuations, political instability, and economic factors that may affect exchange rates.
                </p>
                <p className="text-gray-600">
                  Leverage in forex trading can amplify both profits and losses. Small price movements can 
                  result in significant gains or losses relative to the amount of money invested.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Affiliate Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  InfiniaTrade may receive compensation from third-party service providers, data vendors, 
                  and technology partners. These relationships do not affect the pricing or quality of 
                  services provided to customers.
                </p>
                <p className="text-gray-600">
                  Any recommendations or endorsements of third-party services are based on our assessment 
                  of their value to our customers and are not influenced by compensation arrangements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data and Technology Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Market data is provided by third-party vendors and exchanges. InfiniaTrade does not 
                  guarantee the accuracy, completeness, or timeliness of market data. Delays in data 
                  transmission may occur.
                </p>
                <p className="text-gray-600">
                  Technical analysis tools and indicators are provided for informational purposes only 
                  and should not be considered as investment advice. Past performance of any trading 
                  strategy or methodology is not indicative of future results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  For questions about these disclosures or regulatory matters:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">InfiniaTrade Compliance Department</p>
                  <p className="text-gray-600">Email: compliance@infiniatrade.com</p>
                  <p className="text-gray-600">Phone: 1-844-283-3100</p>
                  <p className="text-gray-600">Address: [Company Address]</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}