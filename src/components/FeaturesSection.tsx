import { Shield, Clock, MapPin, Star, CreditCard, CalendarCheck } from "lucide-react";

const features = [
  { icon: Shield, title: "Non-Biased", desc: "Searches every dental clinic in your area, not paid listings or sponsored clinics." },
  { icon: MapPin, title: "Location Smart", desc: "We'll ask to auto-detect your location so we can match you with dentists nearby." },
  { icon: CreditCard, title: "Personalized Match", desc: "Get matched based on your unique needs — treatment, insurance, anxiety, and more." },
  { icon: Clock, title: "Real-Time Availability", desc: "See open appointment slots from Denzy verified clinics. No phone calls needed." },
  { icon: CalendarCheck, title: "Denzy Verified", desc: "Some clinics connect with Denzy to offer online booking and keep profiles up-to-date." },
  { icon: Star, title: "Honest Reviews", desc: "Read real patients reviews pulled from Google, Yelp, and Denzy." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Smarter Way to Find & Book A Dentist
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            With so many dental clinic options, it's hard to know who to trust. <br />
            Save time and let our AI find your best match.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-colors duration-200">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
