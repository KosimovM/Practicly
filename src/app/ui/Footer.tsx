import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
                B
              </div>
              <span className="text-xl font-bold tracking-tight">
                Blog<span className="text-primary">Space</span>
              </span>
            </Link>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6">
              Empowering creators to share their stories with the world. A premium platform for modern blogging.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">Features</Link></li>
              <li><Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">Templates</Link></li>
              <li><Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/Aboutpage" className="text-foreground/50 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-foreground/50 hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-foreground/50 text-sm mb-4 leading-relaxed">
              Stay updated with the latest stories and product features.
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/30 rounded-xl outline-none text-sm transition-all"
              />
              <button className="w-full px-4 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-hover transition-all active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/30 text-xs">
            © 2025 BlogSpace Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-foreground/30 hover:text-foreground text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-foreground/30 hover:text-foreground text-xs transition-colors">Terms of Service</Link>
            <Link href="#" className="text-foreground/30 hover:text-foreground text-xs transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
