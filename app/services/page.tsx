import Link from 'next/link';
import type { ComponentType } from 'react';
import { Code, TrendingUp, Target, MapPin, Video, ArrowRight, CheckCircle, Camera, PenTool, Smartphone, Users, Megaphone, FileText, Headphones, Monitor, Map, Film } from 'lucide-react';

export const metadata = {
  title: 'REPUTEBULL Digital Marketing Services | Web Development, SEO & Creative Media',
  description: 'REPUTEBULL: web design, SEO, ads, local SEO, media production, and integrated digital services. Results-driven, Nigerian market-focused strategies.',
};

interface Service {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  keywords: string[];
  startingPrice?: string;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Design and App Development',
      tagline: 'Websites and apps built for conversion and scale',
      description: 'Fast, responsive web and mobile experiences with a focus on UX, performance, and measurable results.',
      keywords: ['Web Design', 'App Development', 'UX', 'Performance'],
      startingPrice: 'From ₦850,000'
    },
    {
      id: 'seo',
      icon: TrendingUp,
      title: 'SEO Services',
      tagline: 'Rank higher, win more customers',
      description: 'Technical SEO, content optimization, and authority building tuned for the Nigerian search market.',
      keywords: ['SEO', 'Content', 'Link Building', 'Local Search'],
      startingPrice: 'From ₦350,000/month'
    },
    {
      id: 'google-ads',
      icon: Target,
      title: 'Google Ads & Paid Advertising',
      tagline: 'Profitable ads with real ROI',
      description: 'High-intent search campaigns, remarketing flows, and ROI optimization across Google and social channels.',
      keywords: ['PPC', 'Ad Management', 'ROAS'],
      startingPrice: 'From ₦250,000/month + spend'
    },
    {
      id: 'local-seo',
      icon: MapPin,
      title: 'Local SEO',
      tagline: 'Own your local market',
      description: 'Google Business Profile, local citations, and review management for physical businesses across Nigeria.',
      keywords: ['Local SEO', 'GBP', 'Citations'],
      startingPrice: 'From ₦200,000/month'
    },
    {
      id: 'event-coverage',
      icon: Video,
      title: 'Event Coverage & Videography',
      tagline: 'Production that tells your brand story',
      description: 'Professional video content for events, testimonials, promo reels, and social channels.',
      keywords: ['Video', 'Event Coverage', 'Documentaries', 'Corporate Video'],
      startingPrice: 'From ₦150,000/project'
    },
    {
      id: 'brand-identity',
      icon: PenTool,
      title: 'Brand Identity',
      tagline: 'Build an unforgettable image',
      description: 'Logo, visual guidelines, brand voice, and stationery design to position your business for trust and recognition.',
      keywords: ['Brand', 'Logo Design', 'Visual Identity']
    },
    {
      id: 'photography',
      icon: Camera,
      title: 'Photography Services',
      tagline: 'High-quality visuals for marketing',
      description: 'Product, lifestyle, event, and corporate photography that elevates digital assets across platforms.',
      keywords: ['Photography', 'Product Photos', 'Corporate Photos']
    },
    {
      id: 'social-media',
      icon: Users,
      title: 'Social Media Management',
      tagline: 'Engage audiences and grow communities',
      description: 'Content calendars, creative assets, community management, and paid amplification for consistent growth.',
      keywords: ['Social Media', 'Content', 'Community Management']
    },
    {
      id: 'digital-marketing',
      icon: Megaphone,
      title: 'Digital Marketing Services',
      tagline: 'Integrated campaigns that move metrics',
      description: 'Strategy, execution and analytics across SEO, ads, social, email and more for measurable revenue growth.',
      keywords: ['Digital Marketing', 'Performance', 'Analytics']
    },
    {
      id: 'documentaries',
      icon: Film,
      title: 'Documentaries',
      tagline: 'Narrative-driven storytelling for brands',
      description: 'Long-form documentary-style content to capture your mission, values, and impact in an immersive way.',
      keywords: ['Documentary', 'Storytelling', 'Brand Film']
    },
    {
      id: 'voiceovers',
      icon: Headphones,
      title: 'Voiceovers',
      tagline: 'Professional voice work for ads and content',
      description: 'Male and female voice talent for radio, video, e-learning, and marketing productions.',
      keywords: ['Voiceovers', 'Audio Production', 'Narration']
    },
    {
      id: 'tv-radio',
      icon: Monitor,
      title: 'TV and Radio Adverts',
      tagline: 'Broadcast ads that reach mass audiences',
      description: 'Concept, scriptwriting, production and distribution support for TV and radio campaigns.',
      keywords: ['TV Ads', 'Radio Ads', 'Broadcast Media']
    },
    {
      id: 'printing',
      icon: FileText,
      title: 'Printing Services',
      tagline: 'High-quality prints that represent your brand',
      description: 'Brochures, banners, posters, business cards, and custom print collateral to support campaigns.',
      keywords: ['Printing', 'Collateral', 'Brand Materials']
    },
    {
      id: 'consultancy',
      icon: CheckCircle,
      title: 'Consultancy',
      tagline: 'Strategy and advisory for sustained growth',
      description: 'Marketing and operations strategy sessions that align goals, refine positioning, and accelerate performance.',
      keywords: ['Consultancy', 'Strategy', 'Growth']
    },
    {
      id: 'billboard-placement',
      icon: Map,
      title: 'Billboard Placement',
      tagline: 'Outdoor visibility in prime locations',
      description: 'Planning, creative, and placement for billboard campaigns that build local awareness and drive foot traffic.',
      keywords: ['Billboard', 'OOH', 'Outdoor Advertising']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              REPUTEBULL Services That Drive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Real Revenue
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              No vanity metrics. No agency fluff. Just strategic digital marketing services that increase bookings, foot traffic, and online sales for Nigerian businesses.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all duration-300"
            >
              Get Your Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-[#111111] border-t border-white/10">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">About REPUTEBULL</h2>
            <p className="text-gray-300 mb-4">
              REPUTEBULL was born from a simple promise: build digital marketing that delivers predictable revenue, not vanity metrics. We serve fast-growth businesses in Nigeria and globally with an integrated stack of SEO, web, advertising and media production that is built for market realities and African infrastructure.
            </p>
            <p className="text-gray-300 mb-6">
              We operate like a product growth team: research, rapid testing, conversion focus and continuous optimization. Our clients include restaurants, healthcare providers, corporates and e-commerce brands that need measurable ROI from every campaign.
            </p>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 mt-1" /> 15+ years of combined marketing experience with enterprise and SMB teams</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 mt-1" /> 40% average increase in qualified leads within 90 days for new clients</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 mt-1" /> 100+ websites and campaigns launched with a revenue-first framework</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 mt-1" /> Zero long-term contracts; we earn your trust every quarter</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-3">Our Client-First Approach</h3>
            <p className="text-gray-300 mb-4">
              1. Discover: deep audit and competitor gap analysis in 7 days.
            </p>
            <p className="text-gray-300 mb-4">
              2. Build: high-impact site and campaign assets with conversion UX and local-first performance.
            </p>
            <p className="text-gray-300 mb-4">
              3. Scale: systematic split tests, channel optimization, and KPI-driven growth loops.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all duration-300">
              Request a Growth Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-emerald-500/60 transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-3">{service.tagline}</p>
                <p className="text-gray-400 mb-4">{service.description}</p>
                {service.startingPrice && <p className="text-sm font-semibold text-emerald-300 mb-4">Starting at: {service.startingPrice}</p>}
                <p className="text-xs text-gray-400 mb-4">Keywords: {service.keywords.join(', ')}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold">
                  Discuss This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
