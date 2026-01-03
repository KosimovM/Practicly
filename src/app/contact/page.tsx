'use client'

const ContactPage = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-8">
              Get in <span className="text-gradient">touch</span> with us.
            </h1>
            <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
              Have a question or feedback? We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email us</h3>
                  <p className="text-foreground/50">support@blogspace.com</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Visit us</h3>
                  <p className="text-foreground/50">123 Creator St, Digital City, 10101</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] border border-foreground/5 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground/60 ml-1">First Name</label>
                  <input type="text" className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/50 rounded-xl outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-foreground/60 ml-1">Last Name</label>
                  <input type="text" className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/50 rounded-xl outline-none transition-all" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-foreground/60 ml-1">Email Address</label>
                <input type="email" className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/50 rounded-xl outline-none transition-all" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-foreground/60 ml-1">Message</label>
                <textarea className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/50 rounded-xl outline-none transition-all min-h-[150px] resize-none"></textarea>
              </div>
              
              <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-hover transition-all active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
