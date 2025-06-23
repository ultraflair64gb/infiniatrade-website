import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Links */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="flex items-center space-x-2">
                {/* Logo Icon */}
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Logo Text */}
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  InfiniaTrade
                </div>
              </div>
            </Link>
            <div className="space-y-2">
              <Link href="/support" className="block text-sm text-gray-600 hover:text-gray-900">
                CONTACT US
              </Link>
              <Link href="/press" className="block text-sm text-gray-600 hover:text-gray-900">
                PRESS
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <div className="space-y-2">
              <Link href="/disclosures" className="block text-sm text-gray-600 hover:text-gray-900">
                DISCLOSURES
              </Link>
              <Link href="/privacy-policy" className="block text-sm text-gray-600 hover:text-gray-900">
                PRIVACY POLICY
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="space-y-2">
              <a href="https://twitter.com/InfiniaTrade" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-gray-900">
                Twitter
              </a>
              <a href="https://www.facebook.com/infiniatrade/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-gray-900">
                Facebook
              </a>
              <a href="https://www.linkedin.com/company/infiniatrade-technologies-llc" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-gray-900">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/channel/UCU-B5RmkYzPq9GVNmvSgU3A" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-gray-900">
                YouTube
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Get News & Updates by E-Mail
            </h3>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email*"
                className="w-full"
              />
              <Button className="w-full" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Disclaimers */}
        <div className="space-y-4 text-xs text-gray-600">
          <p>
            Futures, foreign currency and options trading contains substantial risk and is not for every investor.
            An investor could potentially lose all or more than the initial investment. Risk capital is money that
            can be lost without jeopardizing ones financial security or lifestyle. Only risk capital should be
            used for trading and only those with sufficient risk capital should consider trading. Past performance
            is not necessarily indicative of future results.
          </p>

          <p>
            The Trading of virtual currencies and Bitcoin futures carries additional risk. Prior to trading virtual
            currencies, please view NFA & CFTC advisories providing more information on these potentially significant risks.
          </p>

          <p>
            NinjaTrader Group, LLC Affiliates: NinjaTrader, LLC is a software development company which owns and
            supports all proprietary technology relating to and including the NinjaTrader trading platform.
            NinjaTrader Brokerage is a NFA registered introducing broker (NFA #0339976) providing brokerage
            services to traders of futures and foreign exchange products. Exchange, clearing and NFA fees still apply.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/customer-funds" className="hover:text-gray-900">
              FCM Disclosures
            </Link>
            <span>|</span>
            <Link href="/disclosures#disclosure-9" className="hover:text-gray-900">
              Affiliate Disclosure
            </Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>

          <p className="pt-4">
            © 2025 InfiniaTrade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}