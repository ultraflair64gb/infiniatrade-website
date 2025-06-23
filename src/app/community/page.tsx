import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            InfiniaTrade Community Forum
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow traders, share strategies, get platform help,
            and stay updated with the latest futures trading insights.
          </p>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Trading Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access exclusive discussions, educational content, and peer-to-peer
              learning opportunities in our private community forum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Active Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Engage in real-time discussions about market trends, trading strategies,
                  and platform features with experienced traders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Educational Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access exclusive educational content, webinars, and tutorials
                  shared by community members and trading experts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Custom Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Share and download custom indicators, trading scripts,
                  and automation tools created by the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Forum Categories
            </h2>
            <p className="text-lg text-gray-600">
              Organized discussions for every aspect of futures trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "General Trading Discussion",
                description: "Market analysis, trading strategies, and general futures trading topics",
                posts: "2,847",
                members: "1,234",
                badge: "Most Active"
              },
              {
                title: "Platform Support",
                description: "Get help with InfiniaTrade platform features and technical issues",
                posts: "1,523",
                members: "892",
                badge: "Support"
              },
              {
                title: "Market Analysis",
                description: "Daily market insights, economic calendar discussions, and news analysis",
                posts: "1,892",
                members: "756",
                badge: "Analysis"
              },
              {
                title: "Custom Indicators & Scripts",
                description: "Share and request custom indicators, trading scripts, and automation tools",
                posts: "934",
                members: "445",
                badge: "Technical"
              },
              {
                title: "Education & Learning",
                description: "Trading education, tutorials, webinars, and learning resources",
                posts: "1,156",
                members: "1,089",
                badge: "Educational"
              },
              {
                title: "New Trader Corner",
                description: "Beginner-friendly discussions and mentorship for new futures traders",
                posts: "678",
                members: "567",
                badge: "Beginner"
              }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="secondary">{category.badge}</Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{category.posts} posts</span>
                    <span>{category.members} members</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Category
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Community Activity
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Best practices for risk management in volatile markets",
                author: "TraderMike",
                category: "General Trading",
                replies: 23,
                time: "2 hours ago",
                featured: true
              },
              {
                title: "New custom indicator: Advanced Volume Profile",
                author: "CodeTrader",
                category: "Custom Indicators",
                replies: 15,
                time: "4 hours ago",
                featured: false
              },
              {
                title: "Weekly market outlook: Energy futures analysis",
                author: "MarketAnalyst",
                category: "Market Analysis",
                replies: 31,
                time: "6 hours ago",
                featured: false
              },
              {
                title: "Platform update: New charting features available",
                author: "InfiniaTradeSupport",
                category: "Platform Support",
                replies: 8,
                time: "1 day ago",
                featured: false
              },
              {
                title: "Beginner's guide to futures contract specifications",
                author: "EduTrader",
                category: "Education",
                replies: 42,
                time: "2 days ago",
                featured: true
              }
            ].map((post, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${post.featured ? 'border-blue-200 bg-blue-50' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{post.title}</h3>
                        {post.featured && <Badge>Featured</Badge>}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>by {post.author}</span>
                        <span>in {post.category}</span>
                        <span>{post.replies} replies</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              View All Recent Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Guidelines
            </h2>
            <p className="text-lg text-gray-600">
              Help us maintain a respectful and productive trading community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do's</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Share educational content and insights</li>
                  <li>✓ Help fellow traders with platform questions</li>
                  <li>✓ Provide constructive feedback and analysis</li>
                  <li>✓ Respect different trading styles and opinions</li>
                  <li>✓ Use appropriate categories for your posts</li>
                  <li>✓ Search before posting duplicate questions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Don'ts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>✗ Share specific trading advice or recommendations</li>
                  <li>✗ Post spam or promotional content</li>
                  <li>✗ Use offensive language or personal attacks</li>
                  <li>✗ Share account information or login details</li>
                  <li>✗ Discuss illegal trading activities</li>
                  <li>✗ Post off-topic or unrelated content</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Connect with experienced traders, learn new strategies, and get the most
            out of your InfiniaTrade platform experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Open Account & Join Forum
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Browse as Guest
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Forum access is free for all InfiniaTrade customers
          </p>
        </div>
      </section>
    </div>
  );
}