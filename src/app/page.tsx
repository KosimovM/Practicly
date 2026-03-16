'use client'
import { getCards } from '@/app/lib/Api/api';
import { AppDispatch, RootState } from '@/app/lib/Store/store';
import Card from '@/app/ui/Cards/Card';
import Add from '@/app/ui/Modal/page';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const [AddOpen, setAddOpen] = useState(false);
  const { data } = useSelector((state: RootState) => state.user)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])

  return (
    <div className="min-h-screen pb-20">
      <Add AddOpen={AddOpen} setAddOpen={setAddOpen} />

      <section className="relative overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-8 bg-primary/10 border border-primary/20 rounded-full animate-in fade-in zoom-in duration-500">
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Welcome to the Future of Blogging</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 transition-all">
              <span className="text-gradient">Experience</span> the Art of <span className="italic font-serif">Writing.</span>
            </h1>
            <p className="text-xl text-foreground/70 dark:text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Макони идеалӣ барои идеяҳо ва дониш. Дар ин ҷо шумо метавонед мақолаҳо, идеяҳо ва блогҳои шахсиро мутолиа кунед.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => setAddOpen(true)}
                className="w-full sm:w-auto px-10 py-5 bg-gradient-vibrant text-white font-black rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                Create New Post
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 border-2 border-primary/10 hover:border-primary/30 text-foreground font-black rounded-2xl transition-all shadow-lg">
                Explore Categories
              </button>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full animate-float" />
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-secondary rounded-full animate-ping delay-300" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'Technology', icon: '💻', count: 12, color: 'from-blue-500/10 to-blue-500/20' },
            { name: 'Design', icon: '🎨', count: 8, color: 'from-purple-500/10 to-purple-500/20' },
            { name: 'Marketing', icon: '🚀', count: 5, color: 'from-orange-500/10 to-orange-500/20' },
            { name: 'Business', icon: '💼', count: 14, color: 'from-emerald-500/10 to-emerald-500/20' },
            { name: 'Lifestyle', icon: '🌿', count: 9, color: 'from-green-500/10 to-green-500/20' },
            { name: 'Health', icon: '🧘', count: 6, color: 'from-rose-500/10 to-rose-500/20' },
          ].map((cat, i) => (
            <button key={i} className="group p-8 bg-white dark:bg-slate-900 border border-border rounded-[2.5rem] transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 text-center relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform relative z-10">{cat.icon}</div>
              <h4 className="font-bold text-base mb-1 relative z-10">{cat.name}</h4>
              <p className="text-xs text-foreground/30 font-bold uppercase tracking-widest relative z-10">{cat.count} Posts</p>
            </button>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 tracking-tighter">Latest Stories</h2>
            <p className="text-foreground/40 text-lg">Кашшоф бошед ва аз мақолаҳои ҷолибтарин баҳра баред.</p>
          </div>
          <div className="flex gap-2">
            {/* Simple Filter placeholder */}
            <span className="text-sm font-medium text-foreground/40 uppercase tracking-widest">Sort by: Newest</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>

        {data.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-foreground/5 rounded-3xl">
            <div className="text-6xl mb-4">✍️</div>
            <h3 className="text-xl font-bold mb-2">No posts yet</h3>
            <p className="text-foreground/50 mb-6">Be the first to share something amazing!</p>
            <button
              onClick={() => setAddOpen(true)}
              className="px-6 py-2 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors"
            >
              Start Writing
            </button>
          </div>
        )}
      </main>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter">Simple, transparent pricing</h2>
          <p className="text-foreground/40 max-w-xl mx-auto text-lg font-medium">Choose the plan that's right for your creative journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Starter', price: 'Free', features: ['Unlimited reading', 'Basic editor', 'Community access'] },
            { name: 'Pro', price: '$12', features: ['Advanced analytics', 'Custom domains', 'Priority support', 'Newsletter tool'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Team accounts', 'API access', 'Dedicated manager', 'SSO Auth'] }
          ].map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-[3rem] border transition-all duration-500 card-hover ${plan.popular ? 'border-primary bg-primary/[0.02] scale-105 z-10' : 'border-border bg-white dark:bg-slate-900/50'}`}>
              {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-premium text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl shadow-primary/20">MOST POPULAR</span>}
              <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                {plan.price !== 'Free' && plan.price !== 'Custom' && <span className="text-foreground/30 text-sm font-bold ml-1">/month</span>}
              </div>
              <ul className="space-y-5 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-4 text-sm font-medium text-foreground/50">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${plan.popular ? 'bg-gradient-premium text-white shadow-2xl shadow-primary/30 hover:shadow-primary/40' : 'bg-foreground/5 text-foreground hover:bg-foreground/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-32 bg-slate-50 dark:bg-slate-900/20 rounded-[4rem] my-32 border border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-black mb-16 text-center tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Is it free to start blogging?', a: 'Yes! Our Starter plan allows you to write and publish articles for free forever.' },
              { q: 'Can I use my own domain name?', a: 'Absolutely. Pro and Enterprise plans allow you to connect your custom domains easily.' },
              { q: 'How do I earn money from my blog?', a: 'We offer integrated monetization tools like premium subscriptions and ad placements for our Pro users.' }
            ].map((faq, i) => (
              <div key={i} className="group p-8 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-border transition-all hover:border-primary/30">
                <button className="w-full text-left">
                  <h4 className="font-bold text-xl mb-4 flex justify-between items-center group-hover:text-primary transition-colors">
                    {faq.q}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/20 group-hover:rotate-180 transition-transform"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </h4>
                  <p className="text-foreground/40 text-base leading-relaxed font-medium">{faq.a}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
