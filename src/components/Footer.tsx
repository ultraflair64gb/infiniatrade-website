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
            <Link href="/" className="text-2xl font-bold text-slate-800 mb-4 block">
              InfiniaTrade
            </Link>
            <div className="space-y-2">
              <Link href="/support" className="block text-sm text-gray-600 hover:text-gray-900">
                CONTACT US
              </Link>
              <Link href="/reviews" className="block text-sm text-gray-600 hover:text-gray-900">
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
