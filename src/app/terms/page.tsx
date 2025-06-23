import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using InfiniaTrade's
            services and trading platform.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  By accessing or using InfiniaTrade's services, you agree to be bound by these Terms of Service
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are
                  prohibited from using or accessing this site and our services.
                </p>
                <p className="text-gray-600">
                  These terms apply to all users of the service, including without limitation users who are
                  browsers, vendors, customers, merchants, and/or contributors of content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  InfiniaTrade provides online futures trading services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Access to futures trading platforms and tools</li>
                  <li>Market data and research services</li>
                  <li>Order execution and clearing services</li>
                  <li>Customer support and educational resources</li>
                  <li>Account management and reporting tools</li>
                </ul>
                <p className="text-gray-600">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services
                  at any time without prior notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Account Registration and Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Eligibility Requirements</h4>
                  <p className="text-gray-600">
                    To use our services, you must be at least 18 years old and have the legal capacity
                    to enter into binding contracts. You must provide accurate, complete, and current
                    information during the registration process.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Account Security</h4>
                  <p className="text-gray-600">
                    You are responsible for maintaining the confidentiality of your account credentials
                    and for all activities that occur under your account. You must notify us immediately
                    of any unauthorized use of your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Account Verification</h4>
                  <p className="text-gray-600">
                    We may require additional documentation to verify your identity and comply with
                    regulatory requirements. Failure to provide required documentation may result
                    in account restrictions or closure.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Trading Terms and Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Risk Acknowledgment</h4>
                  <p className="text-gray-600">
                    You acknowledge that futures trading involves substantial risk of loss and may not
                    be suitable for all investors. You should carefully consider your financial situation
                    and risk tolerance before trading.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Order Execution</h4>
                  <p className="text-gray-600">
                    We will use reasonable efforts to execute your orders, but we cannot guarantee
                    execution at any particular price or time. Market conditions may prevent order
                    execution or result in execution at prices different from those requested.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Margin Requirements</h4>
                  <p className="text-gray-600">
                    You must maintain adequate margin in your account. We may liquidate positions
                    without prior notice if margin requirements are not met. You remain liable for
                    any resulting deficit in your account.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Fees and Charges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You agree to pay all applicable fees and charges as outlined in our fee schedule.
                  Fees may include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Commission charges per trade</li>
                  <li>Exchange and regulatory fees</li>
                  <li>Data feed charges (if applicable)</li>
                  <li>Wire transfer and other service fees</li>
                </ul>
                <p className="text-gray-600">
                  We reserve the right to change our fee structure with appropriate notice.
                  All fees are non-refundable unless otherwise specified.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Prohibited Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Market manipulation or fraudulent trading practices</li>
                  <li>Unauthorized access to our systems or other users' accounts</li>
                  <li>Transmission of viruses, malware, or other harmful code</li>
                  <li>Violation of any applicable laws or regulations</li>
                  <li>Use of our services for money laundering or terrorist financing</li>
                  <li>Providing false or misleading information</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  All content, software, and materials provided through our services are protected
                  by intellectual property laws. You may not copy, modify, distribute, or create
                  derivative works without our express written permission.
                </p>
                <p className="text-gray-600">
                  Market data is provided by third parties and is subject to their terms of use.
                  You agree to use market data only for your personal trading activities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, INFINIATRADE SHALL NOT BE LIABLE
                  FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</strong>
                </p>
                <p className="text-gray-600">
                  Our total liability to you for any claims arising from or related to these terms
                  or our services shall not exceed the amount of fees paid by you to us in the
                  twelve months preceding the claim.
                </p>
                <p className="text-gray-600">
                  We are not liable for losses resulting from market movements, system failures,
                  or other circumstances beyond our reasonable control.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You agree to indemnify and hold harmless InfiniaTrade, its officers, directors,
                  employees, and agents from any claims, damages, losses, or expenses arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Your use of our services</li>
                  <li>Your violation of these terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Your trading activities and decisions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Either party may terminate this agreement at any time with or without cause.
                  We may suspend or terminate your account immediately if you violate these terms
                  or engage in prohibited activities.
                </p>
                <p className="text-gray-600">
                  Upon termination, you must close all open positions and withdraw your funds.
                  Provisions regarding liability, indemnification, and dispute resolution shall
                  survive termination.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Arbitration</h4>
                  <p className="text-gray-600">
                    Any disputes arising from these terms or our services shall be resolved through
                    binding arbitration in accordance with the rules of the American Arbitration
                    Association. You waive your right to participate in class action lawsuits.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Governing Law</h4>
                  <p className="text-gray-600">
                    These terms shall be governed by and construed in accordance with the laws
                    of the United States and the state in which InfiniaTrade is incorporated.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. We will notify you of
                  material changes by email or through our platform. Your continued use of our
                  services after such notification constitutes acceptance of the modified terms.
                </p>
                <p className="text-gray-600">
                  It is your responsibility to review these terms periodically for changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">InfiniaTrade Legal Department</p>
                  <p className="text-gray-600">Email: legal@infiniatrade.com</p>
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