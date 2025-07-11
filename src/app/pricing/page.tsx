import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your 90-Day Free Trial
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No credit card required. Full access to all premium features.
            Experience the power of intelligent automation risk-free.
          </p>
        </div>
      </section>

      {/* Free Trial Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-500 relative hover:shadow-lg transition-shadow">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-lg px-4 py-1">
                90-Day Free Trial
              </Badge>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-3xl font-bold">Complete Access</CardTitle>
                <CardDescription className="text-lg">
                  Try our AI workflow automation software completely free
                </CardDescription>
                <div className="mt-6">
                  <div className="text-5xl font-bold text-blue-600">FREE</div>
                  <div className="text-lg text-gray-600">for 90 days</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">What's Included:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span>Automate repetitive tasks in 3 clicks or less</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span>Process documents 10x faster</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span>Pre-built templates for common processes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span>Drag-and-drop interface (no coding)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span>Enterprise-grade security</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span>Seamless tool integration</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Trial Benefits:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>No credit card needed</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Full access to all premium features</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Free onboarding support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>Cancel anytime</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>24/7 customer support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-600" />
                        <span>No setup fees or hidden costs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/register">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg">
                      Start 90-Day Free Trial - No Credit Card
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-600 mt-4">
                    Click "Start Free Trial" to begin streamlining your workflow immediately.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Your Free Trial Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>
                  Create your free account in under 2 minutes. No credit card required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <CardTitle>Explore & Automate</CardTitle>
                <CardDescription>
                  Use pre-built templates or create custom workflows with our drag-and-drop interface.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <CardTitle>See Results</CardTitle>
                <CardDescription>
                  Watch your productivity soar as workflows run automatically in the background.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Do I really need to provide a credit card?",
                answer: "No! Our 90-day free trial requires no credit card. You can explore all features completely risk-free."
              },
              {
                question: "What happens after the 90-day trial?",
                answer: "You can choose to continue with a paid plan or cancel anytime. We'll notify you before your trial ends."
              },
              {
                question: "Can I cancel anytime during the trial?",
                answer: "Absolutely! You can cancel your trial at any time with no questions asked and no fees."
              },
              {
                question: "Is there a limit to what I can automate during the trial?",
                answer: "No limits! You get full access to all premium features, templates, and automation capabilities."
              },
              {
                question: "Do you provide support during the free trial?",
                answer: "Yes! You get free onboarding support and 24/7 customer service throughout your entire trial period."
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

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already saving time and increasing productivity 
            with InfiniaTrade automation.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg">
              Start 90-Day Free Trial - No Credit Card
            </Button>
          </Link>
          <p className="text-sm text-gray-300 mt-4">
            No credit card • No risk • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}