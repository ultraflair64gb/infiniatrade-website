import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Press() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Press & Media Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest news, press releases, and media resources about InfiniaTrade's
            innovative futures trading platform and company developments.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Announcements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "January 15, 2025",
                title: "InfiniaTrade Launches Enhanced Mobile Trading Platform",
                excerpt: "New mobile features include advanced charting tools and real-time notifications for futures traders on the go.",
                category: "Product Update"
              },
              {
                date: "December 20, 2024",
                title: "InfiniaTrade Achieves Record Trading Volume in Q4 2024",
                excerpt: "Platform processes over $50 billion in futures trading volume, marking 300% year-over-year growth.",
                category: "Company News"
              },
              {
                date: "November 30, 2024",
                title: "New Partnership with Leading Data Provider",
                excerpt: "Enhanced market data feeds and analytics now available to all InfiniaTrade customers at no additional cost.",
                category: "Partnership"
              },
              {
                date: "October 15, 2024",
                title: "InfiniaTrade Wins 'Best Futures Platform' Award",
                excerpt: "Industry recognition for innovative cloud-based trading technology and customer service excellence.",
                category: "Award"
              },
              {
                date: "September 10, 2024",
                title: "Expanded Trading Hours for Global Markets",
                excerpt: "Extended trading sessions now available for major futures contracts, providing 23-hour market access.",
                category: "Product Update"
              },
              {
                date: "August 25, 2024",
                title: "InfiniaTrade Introduces Micro Futures Trading",
                excerpt: "New micro contract offerings make futures trading accessible to smaller accounts with reduced margin requirements.",
                category: "Product Launch"
              }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{news.category}</span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{news.excerpt}</CardDescription>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Media Resources
            </h2>
            <p className="text-lg text-gray-600">
              Download logos, images, and company information for media use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Logo Package</CardTitle>
                <CardDescription>
                  High-resolution logos in various formats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Fact Sheet</CardTitle>
                <CardDescription>
                  Company overview and key statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Video Assets</CardTitle>
                <CardDescription>
                  Platform demos and promotional videos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Executive Bios</CardTitle>
                <CardDescription>
                  Leadership team photos and biographies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  View Bios
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Press Contact
            </h2>
            <p className="text-lg text-gray-600">
              For media inquiries, interviews, and press-related questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Media Relations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">press@infiniatrade.com</span>
                </div>
                <div>
                  <span className="font-medium">Phone:</span>
                  <span className="ml-2">1-844-283-3100 ext. 101</span>
                </div>
                <div>
                  <span className="font-medium">Response Time:</span>
                  <span className="ml-2">Within 24 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partnership Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">partnerships@infiniatrade.com</span>
                </div>
                <div>
                  <span className="font-medium">Phone:</span>
                  <span className="ml-2">1-844-283-3100 ext. 102</span>
                </div>
                <div>
                  <span className="font-medium">Focus:</span>
                  <span className="ml-2">Strategic partnerships & integrations</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated with InfiniaTrade News
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest company news, product updates, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}