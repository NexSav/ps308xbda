export default function PageHeader({ title, subtitle, imageSrc }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc || "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"}
          alt={title}
          className="h-full w-full object-cover"
        />
        {/* Warm Gradient Overlay - Enhanced for School Colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-black/80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 mt-20">
        <div className="max-w-4xl space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/20 shadow-lg">
            <img
              src="/assets/images/ps308bda logo.webp"
              alt="BDA Logo"
              className="h-5 w-auto brightness-0 invert"
            />
            <span>Bronx Dance Academy</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white font-heading leading-tight tracking-tight drop-shadow-2xl">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-lg border-l-4 border-accent pl-6">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
}

