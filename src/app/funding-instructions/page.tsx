import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function FundingInstructions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Account Funding Instructions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quick and secure ways to fund your InfiniaTrade account.
            Multiple funding options with fast processing times.
          </p>
        </div>
      </section>

      {/* Funding Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Funding Method
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer multiple secure funding options to get you trading quickly.
              All methods are free of charge from InfiniaTrade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bank Wire */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <CardTitle className="text-center">Bank Wire Transfer</CardTitle>
                <CardDescription className="text-center">
                  Fast and secure wire transfers from your bank
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Processing Time:</span>
                    <span className="text-sm font-medium">Same day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">InfiniaTrade Fee:</span>
                    <span className="text-sm font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bank Fee:</span>
                    <span className="text-sm font-medium">$15-$30</span>
                  </div>
                </div>
                <Badge className="mb-4">Recommended</Badge>
                <Button className="w-full">
                  Get Wire Instructions
                </Button>
              </CardContent>
            </Card>

            {/* ACH Transfer */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <CardTitle className="text-center">ACH Transfer</CardTitle>
                <CardDescription className="text-center">
                  Electronic transfer from your checking account
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Processing Time:</span>
                    <span className="text-sm font-medium">1-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">InfiniaTrade Fee:</span>
                    <span className="text-sm font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Bank Fee:</span>
                    <span className="text-sm font-medium text-green-600">Usually Free</span>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-4">Most Popular</Badge>
                <Button variant="outline" className="w-full">
                  Setup ACH Transfer
                </Button>
              </CardContent>
            </Card>

            {/* Check Deposit */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-center">Check Deposit</CardTitle>
                <CardDescription className="text-center">
                  Mail a personal or cashier's check
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Processing Time:</span>
                    <span className="text-sm font-medium">3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">InfiniaTrade Fee:</span>
                    <span className="text-sm font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Mailing Cost:</span>
                    <span className="text-sm font-medium">$0.50-$5</span>
                  </div>
                </div>
                <Badge variant="outline" className="mb-4">Traditional</Badge>
                <Button variant="outline" className="w-full">
                  Get Mailing Address
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Instructions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Step-by-Step Instructions
            </h2>
          </div>

          <div className="space-y-8">
            {/* Wire Transfer Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Wire Transfer Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Bank Information:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Bank Name:</span>
                      <span className="ml-2">First National Bank</span>
                    </div>
                    <div>
                      <span className="font-medium">Routing Number:</span>
                      <span className="ml-2">123456789</span>
                    </div>
                    <div>
                      <span className="font-medium">Account Number:</span>
                      <span className="ml-2">987654321</span>
                    </div>
                    <div>
                      <span className="font-medium">Account Name:</span>
                      <span className="ml-2">InfiniaTrade Customer Funds</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Important Notes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Include your InfiniaTrade account number in the wire reference</li>
                    <li>Wires received before 3:00 PM ET are typically credited same day</li>
                    <li>International wires may take 1-2 additional business days</li>
                    <li>Your bank may charge a wire fee (typically $15-$30)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* ACH Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  ACH Transfer Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Setup Process:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Log into your InfiniaTrade account</li>
                    <li>Navigate to "Account Funding" section</li>
                    <li>Select "Add Bank Account" and enter your banking details</li>
                    <li>Verify your account with micro-deposits (1-2 business days)</li>
                    <li>Once verified, initiate ACH transfers instantly</li>
                  </ol>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">ACH Limits:</h4>
                  <div className="text-sm text-green-800">
                    <p>• Daily limit: $50,000</p>
                    <p>• Monthly limit: $250,000</p>
                    <p>• Higher limits available upon request</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Check Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Check Deposit Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-3">Mailing Address:</h4>
                  <div className="text-sm text-purple-800">
                    <p>InfiniaTrade Customer Deposits</p>
                    <p>Attn: Account #[Your Account Number]</p>
                    <p>123 Trading Street</p>
                    <p>Chicago, IL 60601</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Check Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Make check payable to "InfiniaTrade"</li>
                    <li>Write your account number in the memo line</li>
                    <li>Personal and cashier's checks accepted</li>
                    <li>Third-party checks are not accepted</li>
                    <li>Maximum check amount: $100,000</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Important Funding Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-gray-600">
                  <li>• All funds are held in segregated accounts</li>
                  <li>• FDIC insured up to applicable limits</li>
                  <li>• Anti-money laundering compliance required</li>
                  <li>• Funds must come from accounts in your name</li>
                  <li>• Large deposits may require additional verification</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Processing Times</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wire Transfer:</span>
                    <span className="font-medium">Same day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ACH Transfer:</span>
                    <span className="font-medium">1-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check Deposit:</span>
                    <span className="font-medium">3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">International Wire:</span>
                    <span className="font-medium">1-2 business days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help with Funding?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our support team is available to assist with any funding questions
            or issues you may encounter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start 90-Day Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Call: 1-844-283-3100
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Support available 24x5 for funding assistance
          </p>
        </div>
      </section>
    </div>
  );
}