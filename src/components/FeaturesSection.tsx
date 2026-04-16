import { Shield, Clock, MapPin, Star, CreditCard, CalendarCheck } from "lucide-react";

const features = [
  { icon: MapPin, title: "Location-Smart", desc: "Searches every dental clinic in your area, not just the ones who paid to be listed." },
  { icon: CreditCard, title: "Insurance Match", desc: "We'll match you with dentists who accept your specific dental insurance plan." },
  { icon: Clock, title: "Real-Time Availability", desc: "See open appointment slots from Denzy verified clinics. No phone calls needed." },
  { icon: CalendarCheck, title: "Instant Online Booking", desc: "Book confirmed appointments without phone calls or waiting." },
  { icon: Shield, title: "Vetted Network", desc: "Every dentist is hand-selected, licensed, and credential-verified." },
  { icon: Star, title: "Verified Reviews", desc: "Authentic patient reviews from our booking network." },
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
