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
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
              <span className="text-gradient">Share your thoughts</span> with the world.
            </h1>
            <p className="text-xl text-foreground/60 mb-10 leading-relaxed">
              Дар ин ҷо ту метавонед мақолаҳо, идеяҳо, омӯзишҳо ва блогҳои шахсиро мутолиа кунӣ. Ҳар рӯз мазмуни нав илова мешавад!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setAddOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                Create New Post
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-foreground/10 hover:border-primary/50 text-foreground font-bold rounded-2xl transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
                Explore Categories
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: 'Technology', icon: '💻', count: 12 },
            { name: 'Design', icon: '🎨', count: 8 },
            { name: 'Marketing', icon: '🚀', count: 5 },
            { name: 'Business', icon: '💼', count: 14 },
            { name: 'Lifestyle', icon: '🌿', count: 9 },
            { name: 'Health', icon: '🧘', count: 6 },
          ].map((cat, i) => (
            <button key={i} className="group p-6 bg-white dark:bg-slate-900 border border-foreground/5 rounded-3xl hover:border-primary/30 transition-all hover:shadow-lg text-left">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h4 className="font-bold text-sm mb-1">{cat.name}</h4>
              <p className="text-xs text-foreground/40">{cat.count} Articles</p>
            </button>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
            <div className="h-1 w-12 bg-primary rounded-full" />
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
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Simple, transparent pricing</h2>
          <p className="text-foreground/50 max-w-xl mx-auto">Choose the plan that's right for your creative journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Starter', price: 'Free', features: ['Unlimited reading', 'Basic editor', 'Community access'] },
            { name: 'Pro', price: '$12', features: ['Advanced analytics', 'Custom domains', 'Priority support', 'Newsletter tool'], popular: true },
            { name: 'Enterprise', price: 'Custom', features: ['Team accounts', 'API access', 'Dedicated manager', 'SSO Auth'] }
          ].map((plan, i) => (
            <div key={i} className={`relative p-8 rounded-[2.5rem] border ${plan.popular ? 'border-primary bg-primary/5' : 'border-foreground/5 bg-white dark:bg-slate-900'} transition-all hover:shadow-2xl`}>
              {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">MOST POPULAR</span>}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.price !== 'Free' && plan.price !== 'Custom' && <span className="text-foreground/40 text-sm ml-1">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary-hover' : 'bg-foreground/5 text-foreground hover:bg-foreground/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-24 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] my-24 border border-foreground/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is it free to start blogging?', a: 'Yes! Our Starter plan allows you to write and publish articles for free forever.' },
              { q: 'Can I use my own domain name?', a: 'Absolutely. Pro and Enterprise plans allow you to connect your custom domains easily.' },
              { q: 'How do I earn money from my blog?', a: 'We offer integrated monetization tools like premium subscriptions and ad placements for our Pro users.' }
            ].map((faq, i) => (
              <div key={i} className="group p-6 bg-white dark:bg-slate-900 rounded-3xl border border-foreground/5">
                <h4 className="font-bold text-lg mb-2 flex justify-between items-center">
                  {faq.q}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/20 group-hover:text-primary transition-colors"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </h4>
                <p className="text-foreground/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
