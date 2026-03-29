import { Fragment } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, BarChart3, Zap } from 'lucide-react';

export const metadata = {
  title: 'Case Studies | REPUTEBULL - Proven SEO & Web Design Results',
  description: 'Real case studies showing +230% bookings, +300% traffic, and proven ROI from REPUTEBULL digital marketing and SEO services.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'REPUTEBULL Case Studies',
  description: 'Proven results in SEO, web development, and conversion optimization',
  url: 'https://reputebull.com/case-studies',
};

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  results: string;
  mainMetric: { label: string; value: string };
  secondaryMetrics: { label: string; value: string }[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'restaurant-seo',
    title: 'Restaurant SEO Growth',
    industry: 'Restaurant',
    problem: 'Low visibility in search results and minimal table reservations during weekdays.',
    solution: 'Local SEO optimization, Google Business Profile management, review strategy, and location-based content.',
    results: '+230% online bookings in 4 months with 45% CPA reduction.',
    mainMetric: { label: 'Bookings Increase', value: '+230%' },
    secondaryMetrics: [
      { label: 'Monthly Traffic', value: '+340%' },
      { label: 'Revenue Growth', value: '+72%' }
    ],
    tags: ['SEO', 'Local SEO', 'Conversion']
  },
  {
    id: 'hotel-bookings',
    title: 'Hotel Direct Bookings System',
    industry: 'Hospitality',
    problem: 'Over-reliance on OTA platforms with high commission fees eating into margins.',
    solution: 'Direct booking optimization, CRO funnel redesign, mobile UX improvements, and retargeting campaigns.',
    results: '+180% direct bookings while cutting OTA costs by 40%.',
    mainMetric: { label: 'Direct Bookings', value: '+180%' },
    secondaryMetrics: [
      { label: 'OTA Cost Reduction', value: '-40%' },
      { label: 'Conversion Rate', value: '+28%' }
    ],
    tags: ['Web Design', 'Conversion', 'CRO']
  },
  {
    id: 'small-business-seo',
    title: 'Small Business Page 1 Rankings',
    industry: 'Professional Services',
    problem: 'No visibility in local search and weak organic traffic from competitors.',
    solution: 'Technical SEO audit, keyword targeting, local citations, content strategy, and link building.',
    results: '20 keywords on Google page 1 in 90 days, +110% organic traffic.',
    mainMetric: { label: 'Page 1 Keywords', value: '+20' },
    secondaryMetrics: [
      { label: 'Organic Traffic', value: '+110%' },
      { label: 'Qualified Leads', value: '+92%' }
    ],
    tags: ['SEO', 'Technical SEO', 'Content']
  },
  {
    id: 'ecommerce-conversion',
    title: 'E-commerce Conversion Boost',
    industry: 'E-commerce',
    problem: 'High cart abandonment and low checkout conversion rates limiting revenue potential.',
    solution: 'UX overhaul, speed optimization, checkout funnel simplification, and email recovery campaigns.',
    results: '+150% transaction volume with 60% improvement in cart conversion.',
    mainMetric: { label: 'Sales Growth', value: '+150%' },
    secondaryMetrics: [
      { label: 'Cart Conversion', value: '+60%' },
      { label: 'Page Speed', value: '2.8s load' }
    ],
    tags: ['Web Design', 'Conversion', 'UX']
  },
  {
    id: 'personal-brand',
    title: 'Personal Brand Authority Building',
    industry: 'Politics',
    problem: 'Low online authority for a public figure competing with established politicians.',
    solution: 'Thought leadership content, media relations, backlink strategy, and press release distribution.',
    results: '+210% organic followers, +85% speaking invitations and media features.',
    mainMetric: { label: 'Organic Followers', value: '+210%' },
    secondaryMetrics: [
      { label: 'Domain Authority', value: '+74 DR' },
      { label: 'Speaking Invites', value: '+85%' }
    ],
    tags: ['Reputation', 'Content', 'Authority']
  },
  {
    id: 'technical-seo-fix',
    title: 'Technical SEO Fix - Traffic Recovery',
    industry: 'Healthcare',
    problem: 'Indexation issues, duplicate content, and mobile problems caused 70% traffic drop.',
    solution: 'Site audit, canonicalization fixes, structured data markup, mobile optimization, and server optimization.',
    results: '+300% traffic recovery in 3 months, +55% new patient calls.',
    mainMetric: { label: 'Traffic Recovery', value: '+300%' },
    secondaryMetrics: [
      { label: 'Indexed Pages', value: '+98%' },
      { label: 'Patient Calls', value: '+55%' }
    ],
    tags: ['Technical SEO', 'SEO', 'Performance']
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#111111] text-white pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Real Results. Real Businesses. Proven Growth.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses like yours achieve measurable growth through SEO, web development, and strategic digital marketing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition-all duration-300 text-lg"
          >
            Get Similar Results
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ========== FEATURED CASE STUDY ========== */}
      <section className="py-16 px-6 lg:px-8 bg-emerald-500/10 border-y border-emerald-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Featured Case Study</span>
              <h2 className="text-4xl font-bold mt-3 mb-4">Restaurant SEO Growth</h2>
              <p className="text-gray-300 mb-8">
                This restaurant was losing bookings to competitors. We implemented a comprehensive local SEO strategy including Google Business optimization, review management, and keyword targeting. The results? Record-breaking reservation numbers.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-black/50 rounded-lg border border-white/10">
                  <div className="text-sm text-gray-400 mb-1">Before</div>
                  <div className="text-sm text-gray-200">
                    1,000 visits/mo<br />
                    12 bookings/day<br />
                    7% conversion
                  </div>
                </div>
                <div className="p-4 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                  <div className="text-sm text-emerald-300 mb-1">After</div>
                  <div className="text-sm text-emerald-100">
                    4,500 visits/mo<br />
                    40 bookings/day<br />
                    28% conversion
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span>+340% monthly website traffic</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <span>+230% online reservation increase</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  <span>+72% revenue from online bookings</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Local SEO', 'Google Business', 'Reviews', 'Conversion'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/10 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="text-6xl font-bold text-emerald-400 mb-2">230%</div>
                <div className="text-xl text-gray-300 mb-8">Increase in bookings</div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/40 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">340%</div>
                    <div className="text-xs text-gray-400">Traffic Growth</div>
                  </div>
                  <div className="p-4 bg-black/40 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">72%</div>
                    <div className="text-xs text-gray-400">Revenue Increase</div>
                  </div>
                  <div className="p-4 bg-black/40 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">28%</div>
                    <div className="text-xs text-gray-400">Conversion Rate</div>
                  </div>
                  <div className="p-4 bg-black/40 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">4 mo</div>
                    <div className="text-xs text-gray-400">Time to Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-3">Ready for results like this?</h3>
          <p className="text-gray-300 mb-6">
            Let's discuss how REPUTEBULL can transform your business with proven digital marketing strategies.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all"
          >
            Schedule Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========== CASE STUDIES GRID ========== */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">More Success Stories</h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Explore how we've driven measurable results across diverse industries
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(1).map((study, idx) => (
              <Fragment key={study.id}>
                <article className="h-full flex flex-col bg-white/5 border border-white/10 hover:border-emerald-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                      <span className="text-sm font-semibold text-emerald-400">{study.industry}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{study.problem}</p>

                  <div className="mb-4 p-4 bg-black/40 rounded-lg border border-white/10">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">{study.mainMetric.value}</div>
                    <div className="text-sm text-gray-400">{study.mainMetric.label}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.secondaryMetrics.map((metric) => (
                      <div key={metric.label} className="p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                        <div className="font-bold">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-emerald-500/15 text-emerald-300 rounded border border-emerald-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>

                {/* CTA after every 2 case studies */}
                {(idx + 1) % 2 === 0 && idx < caseStudies.length - 2 && (
                  <div key={`cta-${idx}`} className="col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="text-center bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-blue-500/10 border border-emerald-500/20 rounded-xl p-8">
                      <h4 className="text-xl font-bold mb-3">Seeing patterns in your industry?</h4>
                      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Every business is unique, but the principles of growth are universal. Let's find what works for yours.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-all"
                      >
                        Start Your Free Audit <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-t from-emerald-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want results like these? Let's talk.
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            REPUTEBULL specializes in turning marketing spend into measurable business outcomes. Get a custom strategy review for your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition-all text-lg"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 font-bold rounded-lg transition-all text-lg"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
