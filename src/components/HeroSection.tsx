import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

const suggestions = [
  "Vancouver dentist accepting Sunlife",
  "Affordable teeth whitening near me",
  "My tooth really hurts",
  "Need a dentist with weekend availability",
];

const HeroSection = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto text-center relative z-10 px-[30px] pb-[100px] mb-[40px] mt-[10px] pt-[25px] py-[40px]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
          <Sparkles size={14} />
          AI-Powered Dental Search
        </div>

        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6">
          Find the right dentist,
          <br />
          <span className="text-gradient">not just the nearest.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Tell us what you're looking for in plain language. We'll match you with the right dentist. Book online in minutes.
        </p>

        {/* Chat-style input */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative chat-input-shadow rounded-2xl bg-card border border-border">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: &quot;gentle dentist for my dental anxiety&quot;"
              className="w-full bg-transparent px-6 py-5 pr-14 text-foreground placeholder:text-muted-foreground text-base md:text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#9139ea] text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Suggestion chips */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setQuery(s)}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-accent transition-colors border border-border"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            100% Free to Use
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            4.7★ Trustpilot Rating
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            10,000+ Patient Bookings
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
