import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Image 
                src="/gv-logo.png" 
                alt="GetValue" 
                width={40} 
                height={40} 
                className="rounded-lg"
              />
              <div>
                <div className="font-bold text-lg leading-tight">GetValue</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Revenue-focused digital marketing for ambitious Nigerian businesses at getvalue.online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services#web-development" className="hover:text-emerald-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services#seo" className="hover:text-emerald-400 transition-colors">SEO Services</Link></li>
              <li><Link href="/services#paid-ads" className="hover:text-emerald-400 transition-colors">Google Ads</Link></li>
              <li><Link href="/services#local-seo" className="hover:text-emerald-400 transition-colors">Local SEO</Link></li>
              <li><Link href="/services#videography" className="hover:text-emerald-400 transition-colors">Event Coverage</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/industries/restaurants" className="hover:text-emerald-400 transition-colors">Restaurants</Link></li>
              <li><Link href="/industries/hotels" className="hover:text-emerald-400 transition-colors">Hotels</Link></li>
              <li><Link href="/industries/pharmacies" className="hover:text-emerald-400 transition-colors">Pharmacies</Link></li>
              <li><Link href="/case-studies" className="hover:text-emerald-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                <span className="text-sm">Abuja, FCT, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <a href="tel:+447344683916" className="hover:text-emerald-400 transition-colors text-sm">
                  +44 7344 683916 (UK)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <a href="tel:+2348106490399" className="hover:text-emerald-400 transition-colors text-sm">
                  +234 810 649 0399 (Nigeria)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <a href="mailto:getvalue.online@gmail.com" className="hover:text-emerald-400 transition-colors text-sm">
                  getvalue.online@gmail.com
                </a>
                <a href="mailto:joshuadabs@gmail.com" className="hover:text-emerald-400 transition-colors text-sm">
                  joshuadabs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 GetValue. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
