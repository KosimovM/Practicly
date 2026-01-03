import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
            B
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Blog<span className="text-primary">Space</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/Aboutpage" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Sign In
          </button>
          <button className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-lg shadow-md shadow-primary/20 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
