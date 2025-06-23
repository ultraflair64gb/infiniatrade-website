import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Devices() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trade on Any Device, Anywhere
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            InfiniaTrade's cloud-based platform works seamlessly across all your devices.
            Desktop, mobile, tablet - Mac or PC compatible with full feature access.
          </p>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Full Platform Access on Every Device
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No downloads required. Access the complete InfiniaTrade platform
              through your web browser with all features synchronized across devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Desktop */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Desktop</CardTitle>
                <CardDescription>
                  Full-featured trading experience on Windows and Mac
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Recommended</Badge>
              </CardContent>
            </Card>

            {/* Laptop */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v12H3V3zm0 12h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Laptop</CardTitle>
                <CardDescription>
                  Portable trading with complete platform functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Popular</Badge>
              </CardContent>
            </Card>

            {/* Tablet */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Tablet</CardTitle>
                <CardDescription>
                  Touch-optimized interface for iPad and Android tablets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Touch Friendly</Badge>
              </CardContent>
            </Card>

            {/* Mobile */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Mobile</CardTitle>
                <CardDescription>
                  Trade on the go with iPhone and Android smartphones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">On-the-Go</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              System Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Minimal requirements for optimal trading performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desktop Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Desktop & Laptop
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Operating System</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Windows 10 or later</li>
                    <li>• macOS 10.14 (Mojave) or later</li>
                    <li>• Linux (Ubuntu 18.04+)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Browser</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Chrome 90+ (Recommended)</li>
                    <li>• Firefox 88+</li>
                    <li>• Safari 14+</li>
                    <li>• Edge 90+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hardware</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 4GB RAM minimum, 8GB recommended</li>
                    <li>• Broadband internet connection</li>
                    <li>• 1920x1080 resolution recommended</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Mobile Devices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">iOS Devices</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• iOS 13 or later</li>
                    <li>• iPhone 7 or newer</li>
                    <li>• iPad (6th generation) or newer</li>
                    <li>• Safari browser</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Android Devices</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Android 8.0 (API level 26) or later</li>
                    <li>• 2GB RAM minimum</li>
                    <li>• Chrome or Samsung Browser</li>
                    <li>• 720p resolution minimum</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Connection</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 4G/LTE or WiFi connection</li>
                    <li>• Stable internet required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Performance Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Performance Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Optimal Performance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use wired internet when possible</li>
                    <li>• Close unnecessary browser tabs</li>
                    <li>• Keep browser updated</li>
                    <li>• Use dedicated trading device</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Multiple Monitors</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Supported on desktop/laptop</li>
                    <li>• Drag charts between screens</li>
                    <li>• Independent window management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backup Options</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mobile hotspot for backup internet</li>
                    <li>• Multiple device access</li>
                    <li>• Phone support for emergencies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Features by Device Type
            </h2>
            <p className="text-lg text-gray-600">
              All core trading features available across devices with optimized interfaces
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Desktop</th>
                  <th className="text-center py-4 px-4">Laptop</th>
                  <th className="text-center py-4 px-4">Tablet</th>
                  <th className="text-center py-4 px-4">Mobile</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Advanced Charting", "✓", "✓", "✓", "✓"],
                  ["Order Management", "✓", "✓", "✓", "✓"],
                  ["Real-time Data", "✓", "✓", "✓", "✓"],
                  ["Multiple Watchlists", "✓", "✓", "✓", "✓"],
                  ["Risk Management", "✓", "✓", "✓", "✓"],
                  ["News & Analysis", "✓", "✓", "✓", "✓"],
                  ["Multiple Windows", "✓", "✓", "Limited", "No"],
                  ["Keyboard Shortcuts", "✓", "✓", "No", "No"],
                  ["Touch Interface", "No", "No", "✓", "✓"],
                  ["Push Notifications", "✓", "✓", "✓", "✓"]
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{row[0]}</td>
                    <td className="py-3 px-4 text-center">{row[1]}</td>
                    <td className="py-3 px-4 text-center">{row[2]}</td>
                    <td className="py-3 px-4 text-center">{row[3]}</td>
                    <td className="py-3 px-4 text-center">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Trade on Any Device?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the freedom of cloud-based trading. Start with our demo
            or open a live account to trade from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/try-it">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Try Platform Demo
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Open Trading Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}