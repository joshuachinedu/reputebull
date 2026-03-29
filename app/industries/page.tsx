import Link from 'next/link';
import { ArrowRight, Utensils, Landmark, Users, Briefcase, Heart, ShoppingCart, Building2 } from 'lucide-react';

export const metadata = {
  title: 'REPUTEBULL Industries | Reputation Management & Digital Marketing',
  description: 'REPUTEBULL: Explore our digital marketing and reputation management services tailored for restaurants, politics, healthcare, e-commerce, real estate, and more industries worldwide.',
};

const industries = [
  {
    slug: 'restaurants',
    icon: Utensils,
    title: 'Restaurants & Food Service',
    description: 'Fill every table with strategic digital marketing. From local SEO to online ordering systems.',
    color: 'emerald'
  },
  {
    slug: 'hotel-spa',
    icon: Landmark,
    title: 'Hotel/Spa & Hospitality',
    description: 'Maximize occupancy and guest satisfaction with booking funnels, reputation, and loyalty marketing.',
    color: 'blue'
  },
  {
    slug: 'politicians',
    icon: Landmark,
    title: 'Politics & Public Office',
    description: 'Win elections with campaign websites, donation systems, voter engagement, and targeted political advertising.',
    color: 'blue'
  },
  {
    slug: 'healthcare',
    icon: Users,
    title: 'Healthcare & Medical',
    description: 'Build trust and attract patients with professional medical website design and local healthcare marketing.',
    color: 'red'
  },
  {
    slug: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce & Retail',
    description: 'Boost online sales with Shopify optimization, paid ads, and conversion-focused e-commerce strategies.',
    color: 'purple'
  },
  {
    slug: 'real-estate',
    icon: Building2,
    title: 'Real Estate',
    description: 'Showcase properties with stunning websites, virtual tours, and targeted property marketing campaigns.',
    color: 'amber'
  },
  {
    slug: 'professional-services',
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Law firms, accountants, consultants - build authority and generate quality leads.',
    color: 'slate'
  },
  {
    slug: 'nonprofit',
    icon: Heart,
    title: 'Non-Profit & NGOs',
    description: 'Amplify your cause with donor engagement, volunteer recruitment, and awareness campaigns.',
    color: 'pink'
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    hover: 'hover:border-emerald-500/40'
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/20',
    hover: 'hover:border-blue-500/40'
  },
  red: {
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    border: 'border-red-500/20',
    hover: 'hover:border-red-500/40'
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/20',
    hover: 'hover:border-purple-500/40'
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    hover: 'hover:border-amber-500/40'
  },
  slate: {
    bg: 'bg-slate-500/10',
    text: 'text-slate-400',
    border: 'border-slate-500/20',
    hover: 'hover:border-slate-500/40'
  },
  pink: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    border: 'border-pink-500/20',
    hover: 'hover:border-pink-500/40'
  }
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              Industries We Serve
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Marketing for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500">
                {' '}Every Industry
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We tailor our digital marketing strategies to the unique needs of each industry. From restaurants to political campaigns, we deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => {
              const colors = colorClasses[industry.color];
              
              return (
                <Link 
                  key={i}
                  href={`/industries/${industry.slug}`}
                  className={`p-8 bg-white/5 border ${colors.border} ${colors.hover} rounded-2xl transition-all group`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 ${colors.bg} rounded-lg`}>
                      <industry.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold group-hover:${colors.text} transition-colors">{industry.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{industry.description}</p>
                  <div className={`flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-4 transition-all`}>
                    Learn More <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            We work with businesses across all industries. Get a customized digital marketing strategy for your specific needs.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold rounded-full transition-all duration-300"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

