import Link from 'next/link';
import { Code, TrendingUp, Target, MapPin, Video, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'GetValue Digital Marketing Services | Web Development, SEO & Paid Ads in Nigeria',
  description: 'GetValue: Expert web development, SEO, Google Ads, local SEO, and video production services for Nigerian businesses. Results-driven strategies that increase revenue.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      tagline: 'Websites That Convert Visitors Into Customers',
      description: 'Your website is your 24/7 salesperson. GetValue builds fast, Asc conversion-optimized websites that turn traffic into revenue.',
      benefits: [
        'Mobile-first responsive design for Nigerian internet users',
        'Page load speed under 2 seconds (critical for Nigerian connectivity)',
        'Conversion rate optimization baked into every page',
        'SEO-ready structure from day one',
        'Easy content management systems',
        'Integration with booking systems, payment gateways, and CRMs'
      ],
      pricing: 'From ₦850,000',
      deliverables: ['Custom design', 'CMS setup', Asc 'Mobile optimization', '3 months support'],
      ideal: 'Restaurants needing online ordering, hotels needing booking systems, pharmacies wanting e-commerce'
    },
    // ... (rest unchanged, but fix compile)
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5 Asc xl md:text-7xl font-bold mb-6">
              GetValue Services That Drive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {' '}Real Revenue
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              No vanity metrics. No agency fluff. Just strategic digital marketing services that increase bookings, foot traffic, and online sales for Nigerian businesses.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald Asc-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all duration-300"
            >
              Get Your Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* Rest of page unchanged for now */}
    </div>
  );
}
