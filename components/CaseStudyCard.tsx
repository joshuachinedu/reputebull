import { ArrowRight, BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';

type CaseStudyTag = 'SEO' | 'Web Dev' | 'Conversion' | 'UX' | 'Reputation' | 'Technical';

export type CaseStudyData = {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  results: string;
  metrics: { label: string; value: string; icon: React.ComponentType<any> }[];
  tags: CaseStudyTag[];
};

export default function CaseStudyCard({ study }: { study: CaseStudyData }) {
  return (
    <article className="h-full flex flex-col justify-between p-6 bg-slate-900/60 border border-white/10 rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-xl md:text-2xl font-extrabold leading-tight tracking-tight text-white">{study.title}</h3>
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400">{study.industry}</span>
        </div>
        <p className="text-gray-300 mb-3"><span className="font-semibold text-white">Problem:</span> {study.problem}</p>
        <p className="text-gray-300 mb-3"><span className="font-semibold text-white">Solution:</span> {study.solution}</p>
        <p className="text-emerald-300 font-semibold mb-4"><span className="text-white font-semibold">Results:</span> {study.results}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="p-3 bg-slate-950/60 border border-white/10 rounded-lg">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <metric.icon className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-widest text-slate-300">{metric.label}</span>
              </div>
              <div className="text-sm font-bold text-white">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="/contact"
        className="mt-4 inline-flex items-center justify-center gap-2 py-2 rounded-full bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500 hover:text-black hover:font-semibold transition-all duration-300"
      >
        Learn How We Can Do This For You <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}
