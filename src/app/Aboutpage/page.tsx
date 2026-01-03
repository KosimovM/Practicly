'use client'

const Aboutpage = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
            Our mission is to <span className="text-gradient">empower voices</span> worldwide.
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Welcome to our blog platform! Here, we aim to share insightful articles, tutorials, and creative ideas to help you grow personally and professionally.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-primary/5 flex items-center justify-center border border-primary/10">
            <div className="text-8xl">🚀</div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-secondary/20 blur-3xl rounded-full" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-foreground/60 mb-6 leading-relaxed">
              Our mission is to build a community of readers and writers who are passionate about learning, sharing knowledge, and inspiring each other.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              We believe in the power of storytelling, critical thinking, and continuous improvement. Whether you are a beginner or an experienced professional, you’ll find something valuable here.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="h-1 w-12 bg-primary rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Authenticity', desc: 'We value real experiences and genuine content.', icon: '✨' },
              { title: 'Learning', desc: 'Continuous growth and education are at our core.', icon: '📚' },
              { title: 'Collaboration', desc: 'Sharing ideas makes everyone stronger.', icon: '🤝' },
              { title: 'Creativity', icon: '🎨', desc: 'Innovation and imagination drive our platform forward.' }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white dark:bg-slate-900 border border-foreground/5 rounded-3xl hover:shadow-xl transition-all">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start writing?</h2>
            <p className="text-xl text-white/70 mb-10">
              Become part of our growing community! Contribute articles, share your insights, and connect with others.
            </p>
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-2xl shadow-xl hover:bg-slate-100 transition-all active:scale-95">
              Join Our Community
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </section>
      </div>
    </div>
  )
}

export default Aboutpage
