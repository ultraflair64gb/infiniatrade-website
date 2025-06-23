import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Videos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Education Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master futures trading with our comprehensive video library.
            From platform basics to advanced strategies, learn at your own pace.
          </p>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn Futures Trading
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over 50 educational videos covering everything from getting started
              to advanced trading techniques and platform mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started",
                description: "Platform basics, account setup, and first trades",
                videos: 12,
                duration: "2.5 hours",
                level: "Beginner",
                color: "green"
              },
              {
                title: "Platform Features",
                description: "Advanced tools, charting, and order management",
                videos: 15,
                duration: "3.2 hours",
                level: "Intermediate",
                color: "blue"
              },
              {
                title: "Trading Strategies",
                description: "Market analysis, risk management, and techniques",
                videos: 18,
                duration: "4.1 hours",
                level: "Advanced",
                color: "purple"
              },
              {
                title: "Market Fundamentals",
                description: "Understanding futures markets and contracts",
                videos: 10,
                duration: "2.8 hours",
                level: "Beginner",
                color: "orange"
              },
              {
                title: "Technical Analysis",
                description: "Chart patterns, indicators, and analysis tools",
                videos: 14,
                duration: "3.5 hours",
                level: "Intermediate",
                color: "red"
              },
              {
                title: "Risk Management",
                description: "Position sizing, stops, and portfolio management",
                videos: 8,
                duration: "2.1 hours",
                level: "All Levels",
                color: "indigo"
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="secondary">{category.level}</Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{category.videos} videos</span>
                    <span>{category.duration}</span>
                  </div>
                  <Button className="w-full">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Videos
            </h2>
            <p className="text-lg text-gray-600">
              Popular and recently updated educational content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "InfiniaTrade Platform Overview",
                description: "Complete walkthrough of the trading platform and its features",
                duration: "15:32",
                views: "12,450",
                category: "Platform",
                featured: true
              },
              {
                title: "Understanding Futures Margins",
                description: "How margins work in futures trading and risk management",
                duration: "12:18",
                views: "8,920",
                category: "Education",
                featured: false
              },
              {
                title: "Advanced Charting Tools",
                description: "Master the advanced charting features and technical indicators",
                duration: "18:45",
                views: "6,780",
                category: "Platform",
                featured: true
              },
              {
                title: "Order Types and Execution",
                description: "Learn about different order types and when to use them",
                duration: "14:22",
                views: "9,340",
                category: "Trading",
                featured: false
              },
              {
                title: "Risk Management Strategies",
                description: "Essential risk management techniques for futures traders",
                duration: "16:55",
                views: "11,200",
                category: "Strategy",
                featured: true
              },
              {
                title: "Market Analysis Fundamentals",
                description: "How to analyze futures markets and identify opportunities",
                duration: "20:10",
                views: "7,650",
                category: "Analysis",
                featured: false
              }
            ].map((video, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${video.featured ? 'border-blue-200' : ''}`}>
                <CardHeader>
                  <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{video.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{video.category}</Badge>
                    {video.featured && <Badge>Featured</Badge>}
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{video.views} views</span>
                    <span>{video.duration}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-lg text-gray-600">
              Follow our curated learning paths for systematic skill development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Complete Beginner Path</CardTitle>
                <CardDescription>
                  Start from zero and build a solid foundation in futures trading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-green-600">1</span>
                    </div>
                    <span className="text-sm">What are Futures Contracts?</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-green-600">2</span>
                    </div>
                    <span className="text-sm">Platform Setup and Navigation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-green-600">3</span>
                    </div>
                    <span className="text-sm">Placing Your First Trade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">4</span>
                    </div>
                    <span className="text-sm text-gray-500">Risk Management Basics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">5</span>
                    </div>
                    <span className="text-sm text-gray-500">Market Analysis Introduction</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>8 videos • 2.5 hours</span>
                  <span>60% complete</span>
                </div>
                <Button className="w-full">
                  Continue Learning
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Advanced Trader Path</CardTitle>
                <CardDescription>
                  Master advanced strategies and professional trading techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-blue-600">1</span>
                    </div>
                    <span className="text-sm">Advanced Order Types</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-blue-600">2</span>
                    </div>
                    <span className="text-sm">Algorithmic Trading Strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">3</span>
                    </div>
                    <span className="text-sm text-gray-500">Portfolio Risk Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">4</span>
                    </div>
                    <span className="text-sm text-gray-500">Market Making Strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">5</span>
                    </div>
                    <span className="text-sm text-gray-500">Professional Trading Psychology</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>12 videos • 4.2 hours</span>
                  <span>25% complete</span>
                </div>
                <Button className="w-full">
                  Start Path
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CME Resource Center */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CME Group Resource Center
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access additional educational resources from CME Group, the world's
              leading derivatives marketplace.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Enhanced Futures Education
                  </h3>
                  <p className="text-gray-600 mb-6">
                    InfiniaTrade customers get exclusive access to CME Group's comprehensive
                    educational resources, including market insights, contract specifications,
                    and advanced trading concepts.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li>• Market fundamentals and contract details</li>
                    <li>• Economic indicators and market drivers</li>
                    <li>• Advanced trading strategies and techniques</li>
                    <li>• Risk management best practices</li>
                  </ul>
                  <Button>
                    Access CME Resources
                  </Button>
                </div>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-600">CME Group Logo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Trading Education Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Access our complete video library and start building your futures
            trading knowledge with expert-created content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Open Account & Learn
              </Button>
            </Link>
            <Link href="/try-it">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Try Platform Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            All educational content is free for InfiniaTrade customers
          </p>
        </div>
      </section>
    </div>
  );
}