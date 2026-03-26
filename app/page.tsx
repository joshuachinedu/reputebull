'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
GetValue - getvalue.online • Abuja Based
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
Revenue Growth with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                GetValue
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
GetValue: Strategic digital marketing that delivers measurable results for restaurants, hotels, pharmacies, and growth-focused businesses across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                Get Your Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/case-studies" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-semibold rounded-full transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Results in 90 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>ROI-Focused Strategy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Numbers Tell the Story
            </h2>
            <p className="text-xl text-gray-400">
              Real results from real Nigerian businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '340%', label: 'Average ROI Increase', desc: 'First 6 months' },
              { stat: '2.8M₦', label: 'Average Revenue Generated', desc: 'Per client annually' },
              { stat: '47 Days', label: 'Average Time to First Sale', desc: 'From campaign launch' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                <div className="text-5xl font-bold text-emerald-400 mb-2">{item.stat}</div>
                <div className="text-xl font-semibold mb-2">{item.label}</div>
                <div className="text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Services That Actually
                <span className="text-emerald-400"> Drive Revenue</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We don&apos;t do vanity metrics. Every service is designed to increase bookings, foot traffic, and online sales for your business.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-4 transition-all">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'SEO That Ranks',
                  desc: 'First page Google rankings for your most profitable keywords. Organic traffic that converts.',
                  icon: TrendingUp
                },
                {
                  title: 'Paid Ads That Convert',
                  desc: 'Google Ads campaigns with ROAS above 400%. We spend your budget like it is our own.',
                  icon: Award
                },
                {
                  title: 'Local SEO Domination',
                  desc: 'Own your local market. Google Maps visibility that brings customers to your door.',
                  icon: MapPin
                }
              ].map((service, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <service.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-400">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specialization */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-gray-400">
              We understand your business model, your customers, and what drives revenue in your industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Restaurants',
                tagline: 'Fill Every Table, Every Night',
                benefits: ['Google Maps dominance', 'Review generation', 'Delivery platform optimization', 'Event bookings'],
                cta: 'restaurants'
              },
              {
                industry: 'Hotels',
                tagline: 'Maximum Occupancy, Premium Rates',
                benefits: ['Direct booking growth', 'OTA cost reduction', 'Corporate client acquisition', 'Event space marketing'],
                cta: 'hotels'
              },
              {
                industry: 'Pharmacies',
                tagline: 'Trusted Health Partner Online',
                benefits: ['Local search visibility', 'Healthcare SEO compliance', 'Prescription traffic', 'Product e-commerce'],
                cta: 'pharmacies'
              }
            ].map((industry, i) => (
              <Link 
                href={`/industries/${industry.cta}`} 
                key={i}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {industry.industry}
                </h3>
                <p className="text-gray-400 mb-6">{industry.tagline}</p>
                <ul className="space-y-3 mb-6">
                  {industry.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Process: Strategy to Scale
            </h2>
            <p className="text-xl text-gray-400">
              No guesswork. No wasted budget. Just a proven system that works.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit & Analysis', desc: 'Deep dive into your current performance, competitors, and market opportunity' },
              { step: '02', title: 'Strategy Blueprint', desc: 'Custom roadmap with clear KPIs, budget allocation, and 90-day milestones' },
              { step: '03', title: 'Execution & Optimization', desc: 'Launch campaigns, test relentlessly, double down on what converts' },
              { step: '04', title: 'Scale & Sustain', desc: 'Compound growth through data-driven optimization and expansion' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-emerald-500/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-400">
              Results speak louder than promises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Within 3 months, our online reservations tripled. Joshua's team understands the restaurant business inside out.",
                author: "Chioma Okonkwo",
                role: "Owner, Taste of Lagos Restaurant",
                result: "+287% bookings"
              },
              {
                quote: "Our direct bookings increased by 156% while we cut OTA commissions by 40%. Best ROI we've ever seen.",
                author: "Ibrahim Hassan",
                role: "GM, Prestige Suites Abuja",
                result: "+156% direct bookings"
              },
              {
                quote: "Local search traffic grew 5x. Now we're the top pharmacy result in our area. Phone hasn't stopped ringing.",
                author: "Dr. Adebayo Adeleke",
                role: "Pharmacist, MediCare Plus",
                result: "+412% local traffic"
              }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-4xl text-emerald-400 mb-4">"</div>
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 mb-2">{testimonial.role}</div>
                  <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let&apos;s build a digital strategy that turns your website into your best salesperson. 
            <br />Free consultation. No obligations. Just actionable insights.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-black text-lg font-bold rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/25 group"
          >
            Book Your Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            Typical response time: Under 4 hours
          </p>
        </div>
      </section>
    </div>
  );
}

