import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomerFunds() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Customer Fund Protection
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn how your trading funds are protected through segregation,
            insurance, and regulatory oversight at InfiniaTrade.
          </p>
        </div>
      </section>

      {/* Fund Protection Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Funds Are Protected
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              InfiniaTrade maintains the highest standards of customer fund protection
              through multiple layers of security and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Segregated Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customer funds are held in segregated accounts separate from
                  InfiniaTrade's operating funds, as required by CFTC regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">SIPC Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customer accounts are protected by SIPC insurance up to $500,000
                  per customer, including $250,000 in cash claims.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Regulatory Oversight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular audits and compliance monitoring by the CFTC and NFA
                  ensure adherence to all customer protection regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            <Card>
              <CardHeader>
                <CardTitle>Segregation of Customer Funds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  In accordance with Commodity Futures Trading Commission (CFTC) regulations, 
                  InfiniaTrade maintains customer funds in segregated accounts at qualified 
                  financial institutions. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Customer funds are kept separate from InfiniaTrade's operating capital</li>
                  <li>Funds cannot be used for any business purposes other than customer trading</li>
                  <li>Daily reconciliation ensures accurate segregation of all customer deposits</li>
                  <li>Independent third-party custodians hold the segregated funds</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SIPC Insurance Coverage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  The Securities Investor Protection Corporation (SIPC) provides additional 
                  protection for customer accounts:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Coverage Limits:</h4>
                  <ul className="space-y-1 text-blue-800">
                    <li>• Up to $500,000 per customer account</li>
                    <li>• Including up to $250,000 in cash claims</li>
                    <li>• Covers securities and cash held in customer accounts</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  SIPC protection covers the custodial function of the broker-dealer, 
                  which means that if InfiniaTrade were to fail, SIPC would work to 
                  return customer funds and securities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Qualified Financial Institutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Customer funds are deposited only with banks and financial institutions 
                  that meet strict CFTC requirements:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>FDIC-insured banks with strong credit ratings</li>
                  <li>Regular financial health monitoring and assessment</li>
                  <li>Compliance with all applicable banking regulations</li>
                  <li>Formal agreements governing the segregation of customer funds</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Monitoring and Reconciliation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  InfiniaTrade employs rigorous daily procedures to ensure customer fund protection:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Daily Activities:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Account balance reconciliation</li>
                      <li>• Segregation requirement calculations</li>
                      <li>• Bank balance verification</li>
                      <li>• Regulatory reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Oversight:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Independent auditor reviews</li>
                      <li>• NFA examinations</li>
                      <li>• CFTC compliance monitoring</li>
                      <li>• Internal control assessments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Framework</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">CFTC Regulations</h4>
                    <p className="text-gray-600 text-sm">
                      The Commodity Futures Trading Commission oversees futures markets 
                      and ensures customer protection through comprehensive regulations 
                      governing fund segregation and broker conduct.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">NFA Membership</h4>
                    <p className="text-gray-600 text-sm">
                      As a member of the National Futures Association, InfiniaTrade 
                      adheres to strict ethical standards and undergoes regular 
                      examinations to ensure compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What This Means for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">Your Benefits:</h4>
                  <ul className="space-y-2 text-green-800">
                    <li>✓ Your funds are protected even if InfiniaTrade faces financial difficulties</li>
                    <li>✓ Multiple layers of protection through segregation and insurance</li>
                    <li>✓ Regulatory oversight ensures compliance with all protection requirements</li>
                    <li>✓ Daily monitoring provides real-time protection of your assets</li>
                    <li>✓ Transparent reporting keeps you informed about your account status</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions About Fund Protection?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our compliance team is available to answer any questions about
              how your funds are protected at InfiniaTrade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Compliance Department</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">compliance@infiniatrade.com</p>
                <p className="text-gray-600">1-844-283-3100 ext. 103</p>
                <Button className="mt-4">
                  Contact Compliance
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Customer Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">support@infiniatrade.com</p>
                <p className="text-gray-600">1-844-283-3100</p>
                <Link href="/support">
                  <Button variant="outline" className="mt-4">
                    Get Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}