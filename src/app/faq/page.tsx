import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I open an account with InfiniaTrade?",
          answer: "Opening an account is simple and can be done online in minutes. Click the 'Open Account' button, provide your basic information, fund your account, and you'll be ready to start trading. The entire process typically takes less than 24 hours."
        },
        {
          question: "What is the minimum deposit required?",
          answer: "The minimum deposit to open a futures trading account is $1,000. However, we recommend starting with at least $2,500 to have adequate risk capital for futures trading."
        },
        {
          question: "Can I try the platform before opening an account?",
          answer: "Yes! We offer a free demo platform with live market data that requires no registration. You can access all platform features and practice trading with virtual funds."
        },
        {
          question: "What devices can I use to trade?",
          answer: "InfiniaTrade works on all devices - desktop computers (Windows/Mac), tablets, and smartphones. Our cloud-based platform runs in your web browser, so no downloads are required."
        }
      ]
    },
    {
      category: "Pricing & Fees",
      questions: [
        {
          question: "What are your commission rates?",
          answer: "We offer three pricing plans: Free ($0.39-$1.29 per side), Monthly ($0.15-$0.99 per side), and Lifetime ($0.05-$0.59 per side). All plans include full platform access with no hidden fees."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! Our pricing is completely transparent. You only pay commissions per trade and any applicable exchange fees. There are no platform fees, data fees, or inactivity fees."
        },
        {
          question: "Can I change my pricing plan?",
          answer: "Yes, you can upgrade or downgrade your pricing plan at any time. Changes take effect immediately, and you'll see the new rates on your next trade."
        },
        {
          question: "What are margin requirements?",
          answer: "Margin requirements vary by contract and are set by the exchanges. We offer competitive intraday margins that are typically lower than overnight margins. View our margin schedule for specific requirements."
        }
      ]
    },
    {
      category: "Platform & Trading",
      questions: [
        {
          question: "What markets can I trade?",
          answer: "You can trade futures contracts across all major markets including equity indices (S&P 500, NASDAQ), commodities (gold, oil, grains), currencies, and interest rates. We offer full-size, mini, micro, and nano contracts."
        },
        {
          question: "What order types are available?",
          answer: "We support all standard order types including market, limit, stop, stop-limit, OCO (One-Cancels-Other), and bracket orders. Advanced algorithmic order types are also available."
        },
        {
          question: "Can I trade on mobile devices?",
          answer: "Yes, our platform is fully optimized for mobile trading. You can access all features, place orders, manage positions, and monitor markets from your smartphone or tablet."
        },
        {
          question: "Do you offer automated trading?",
          answer: "Yes, we support automated trading strategies through our API and third-party integrations. You can also use custom indicators and trading algorithms."
        }
      ]
    },
    {
      category: "Account & Security",
      questions: [
        {
          question: "How is my account protected?",
          answer: "Your account is protected by bank-level security including SSL encryption, two-factor authentication, and segregated customer funds. We are NFA regulated and maintain the highest security standards."
        },
        {
          question: "How do I fund my account?",
          answer: "You can fund your account via bank wire, ACH transfer, or check. Funding instructions are provided in your account dashboard. Most funding methods are free of charge."
        },
        {
          question: "How quickly can I withdraw funds?",
          answer: "Withdrawal requests are typically processed within 1-2 business days. ACH withdrawals are free, while wire transfers may have a small fee."
        },
        {
          question: "What if I forget my password?",
          answer: "You can reset your password using the 'Forgot Password' link on the login page. For additional security, you may need to verify your identity through our support team."
        }
      ]
    },
    {
      category: "Support & Education",
      questions: [
        {
          question: "What support is available?",
          answer: "We offer 24x5 technical support, live chat during business hours, phone support, and a comprehensive knowledge base. Our emergency trade desk is available 24 hours."
        },
        {
          question: "Do you provide education resources?",
          answer: "Yes, we offer educational videos, webinars, trading guides, and access to the CME Resource Center. Our community forum also provides peer-to-peer learning opportunities."
        },
        {
          question: "Can I get help with my trading strategy?",
          answer: "While we don't provide trading advice, we offer educational resources to help you develop your own strategies. Our support team can help with platform features and technical questions."
        },
        {
          question: "How do I contact support?",
          answer: "You can reach support through live chat (in-platform), phone at 1-844-283-3100, email at support@infiniatrade.com, or through our support portal."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about InfiniaTrade's platform,
            pricing, and services. Can't find what you're looking for?
          </p>
          <div className="mt-8">
            <Link href="/support">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg text-gray-900">
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our support team is here to help. Get in touch through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>
                  Available during business hours for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>
                  24x5 technical support and 24-hour emergency trade desk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-gray-900">
                  1-844-283-3100
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  Send us detailed questions and we'll respond promptly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  support@infiniatrade.com
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/try-it">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Demo</CardTitle>
                  <CardDescription>
                    Try our platform with live data
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/pricing">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Pricing Plans</CardTitle>
                  <CardDescription>
                    View our transparent pricing
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/trading-products">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Trading Products</CardTitle>
                  <CardDescription>
                    Explore available markets
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/videos">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Education Center</CardTitle>
                  <CardDescription>
                    Learn with our video library
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
