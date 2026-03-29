'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with your form handler
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Grow Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {' '}Business Together
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Schedule a free strategy call. No sales pitch. Just honest analysis of your situation and a clear path to growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">Tell Us About Your Business</h2>
                
                {submitted ? (
                  <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-emerald-400 mb-2">Message Received!</h3>
                      <p className="text-gray-300">
                        Thank you for reaching out. We'll review your information and get back to you within 4 hours during business hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                            Business Name *
                          </label>
                          <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            required
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                            placeholder="Taste of Lagos Restaurant"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                            placeholder="john@business.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                            placeholder="+234 XXX XXX XXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Monthly Marketing Budget *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors text-white"
                        >
                          <option value="">Select your budget range</option>
                          <option value="under-200k">Under ₦200,000</option>
                          <option value="200k-500k">₦200,000 - ₦500,000</option>
                          <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                          <option value="1m-2m">₦1,000,000 - ₦2,000,000</option>
                          <option value="2m-plus">₦2,000,000+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Tell Us About Your Goals *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                          placeholder="What are your main business goals? What challenges are you facing? What services are you interested in?"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </form>

                    <style jsx>{`
                      select option {
                        background-color: #0a0a0a;
                        color: #ffffff;
                      }
                    `}</style>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Call Us</div>
                      <a href="tel:+234" className="text-gray-400 hover:text-emerald-400 transition-colors">
                        +234 810 649 0399
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email Us</div>
                      <a href="mailto:info@reputebull.com" className="text-gray-400 hover:text-emerald-400 transition-colors break-all">
                        info@reputebull.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <p className="text-gray-400">
                        Abuja, FCT<br />
                        Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg">
                      <Clock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Business Hours</div>
                      <p className="text-gray-400">
                        Monday - Friday: 9AM - 6PM<br />
                        Saturday: 10AM - 2PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-black rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <div className="font-semibold">We Review Your Info</div>
                      <div className="text-sm text-gray-400">Within 4 business hours</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-black rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <div className="font-semibold">Schedule a Call</div>
                      <div className="text-sm text-gray-400">45-minute strategy session</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-black rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <div className="font-semibold">Get Your Plan</div>
                      <div className="text-sm text-gray-400">Custom strategy with pricing</div>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Trust Signals */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Why Work With Us?</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Based in Abuja - Local expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>No long-term contracts required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Results typically within 90 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Transparent pricing & reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-96 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-gray-400">
                Google Maps Integration<br />
                <span className="text-sm">(Add your Google Maps embed code here)</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
