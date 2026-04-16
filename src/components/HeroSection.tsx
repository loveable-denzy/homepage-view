import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

const suggestions = [
  "Dentists in Markham accepting new patients",
  "Affordable teeth whitening near me",
  "Dentists accepting insurance in Toronto",
  "Pediatric dentist with weekend hours",
];

const HeroSection = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto text-center relative z-10 px-[30px] pt-[50px] pb-[100px] mb-[40px] mt-[10px]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
          <Sparkles size={14} />
          AI-Powered Dental Matching & Booking
        </div>

        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6">
          Find the right dentist,
          <br />
          <span className="text-gradient">not just the nearest.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Tell us what you need, get matched with a dentist in our network, and book a real appointment — all in one conversation.
        </p>

        {/* Chat-style input */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative chat-input-shadow rounded-2xl bg-card border border-border">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: &quot;dentists in Markham accepting insurance&quot;"
              className="w-full bg-transparent px-6 py-5 pr-14 text-foreground placeholder:text-muted-foreground text-base md:text-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity">
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
            150+ Dentists in Our Network
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Real-Time Online Booking
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            4.9★ Average Rating
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
