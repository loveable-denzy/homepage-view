import { MessageSquare, Search, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Us What You Need",
    description: "Type naturally — like texting a friend. \"Looking for dentist that speaks Spanish & direct bills my insurance.\"",
  },
  {
    icon: Search,
    title: "AI Finds Your Match",
    description: "Our AI searches every clinic in Canada and matches you based on what you value — location, service, anxiety, insurance, language, etc.",
  },
  {
    icon: CalendarCheck,
    title: "Book Appointment Online",
    description: "See real-time appointment availability from Denzy verified clinics. For other clinics, we'll share their contact info.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto ml-[10px] mr-[10px]">
            No more endlessly searching on Google or asking around for recommendations.<br />Tell us once. We search everywhere so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="relative bg-card rounded-2xl p-8 border border-border hover:glow-shadow transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <step.icon size={22} className="text-primary" />
              </div>
              <span className="absolute top-6 right-6 text-5xl font-display font-bold text-muted/50">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
