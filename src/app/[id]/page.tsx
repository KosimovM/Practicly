'use client'

import { getCardById } from '@/app/lib/Api/api';
import { AppDispatch, RootState } from '@/app/lib/Store/store';
import React, { useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

const Cardpage = ({ params }: PageProps) => {
  const resolvedParams = use(params);
  const id = Number(resolvedParams.id);
  const dispatch = useDispatch<AppDispatch>();
  const { card } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(getCardById(id));
    }
  }, [dispatch, id]);

  if (!card) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <article className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Navigation back */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-foreground/40 hover:text-primary transition-colors mb-12 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Feed
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest rounded-full">
              Technology
            </span>
            <span className="text-foreground/30 text-sm font-medium">5 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
            {card.name}
          </h1>

          <div className="flex items-center gap-4 py-8 border-y border-foreground/5">
            <div className="w-12 h-12 rounded-2xl bg-slate-200" />
            <div>
              <p className="font-bold text-foreground">John Doe</p>
              <p className="text-sm text-foreground/40">Published on Jan 3, 2026</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-foreground/70 leading-relaxed mb-8 font-medium">
            {card.description}
          </p>
          
          <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-foreground/5">
            <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p className="text-foreground/60">Insightful exploration of modern architecture patterns.</p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p className="text-foreground/60">Practical examples for implementing clean code principles.</p>
              </li>
            </ul>
          </div>

          <p className="text-lg text-foreground/60 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Footer actions */}
        <footer className="mt-20 pt-12 border-t border-foreground/5">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold rounded-2xl hover:opacity-90 transition-all active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                Like 
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-foreground font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95">
                Share
              </button>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-foreground/40 hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Cardpage;
