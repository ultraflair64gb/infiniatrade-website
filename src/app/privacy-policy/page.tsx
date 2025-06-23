import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <p className="text-gray-600">
                    When you create an account, we collect personal information such as your name,
                    email address, phone number, date of birth, social security number, and address.
                    This information is required for regulatory compliance and account verification.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Financial Information</h4>
                  <p className="text-gray-600">
                    We collect financial information including bank account details, trading history,
                    account balances, and transaction records necessary for providing our trading services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technical Information</h4>
                  <p className="text-gray-600">
                    We automatically collect technical information such as IP addresses, browser type,
                    device information, and usage patterns to improve our platform and ensure security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide and maintain our trading services</li>
                  <li>Verify your identity and comply with regulatory requirements</li>
                  <li>Process transactions and manage your account</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Detect and prevent fraud, abuse, and security threats</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share your information in the following circumstances:
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                  <p className="text-gray-600">
                    We may share information with regulatory bodies, exchanges, and clearinghouses
                    as required by law or regulation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Service Providers</h4>
                  <p className="text-gray-600">
                    We may share information with trusted third-party service providers who assist
                    us in operating our platform, processing payments, or providing customer support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legal Requirements</h4>
                  <p className="text-gray-600">
                    We may disclose information when required by law, court order, or to protect
                    our rights, property, or safety.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>SSL encryption for all data transmissions</li>
                  <li>Two-factor authentication for account access</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Segregated customer funds in accordance with regulations</li>
                  <li>Access controls and employee training</li>
                  <li>Secure data centers with physical and network security</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Essential cookies for platform functionality</li>
                  <li>Performance cookies to analyze usage and improve our services</li>
                  <li>Security cookies to protect against fraud</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
                <p className="text-gray-600">
                  You can control cookie preferences through your browser settings, though
                  disabling certain cookies may affect platform functionality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We retain your information as long as necessary to provide our services
                  and comply with regulatory requirements. Financial records and trading
                  data are typically retained for at least seven years as required by law.
                  You may request deletion of certain personal information, subject to
                  regulatory and legal constraints.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">You have the following rights regarding your information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Access: Request access to your personal information</li>
                  <li>Correction: Request correction of inaccurate information</li>
                  <li>Deletion: Request deletion of certain personal information</li>
                  <li>Portability: Request a copy of your data in a structured format</li>
                  <li>Opt-out: Unsubscribe from marketing communications</li>
                </ul>
                <p className="text-gray-600">
                  To exercise these rights, contact us at privacy@infiniatrade.com or
                  through your account settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. International Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your information may be transferred to and processed in countries other than
                  your country of residence. We ensure appropriate safeguards are in place to
                  protect your information in accordance with applicable privacy laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of
                  material changes by email or through our platform. The "Last updated" date
                  at the top of this policy indicates when it was last revised.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">
                  If you have questions about this privacy policy or our privacy practices,
                  please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">InfiniaTrade Privacy Team</p>
                  <p className="text-gray-600">Email: privacy@infiniatrade.com</p>
                  <p className="text-gray-600">Phone: 1-844-283-3100</p>
                  <p className="text-gray-600">Address: [Company Address]</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. California Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  California residents have additional rights under the California Consumer
                  Privacy Act (CCPA), including the right to know what personal information
                  is collected, the right to delete personal information, and the right to
                  opt-out of the sale of personal information. We do not sell personal information.
                  For more information about your California privacy rights, contact us at
                  privacy@infiniatrade.com.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
