import { MessageSquare, Search, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Us What You Need",
    description: "Type naturally — like texting a friend. \"I need a dentist near Markham who takes Blue Cross.\"",
  },
  {
    icon: Search,
    title: "AI Finds Your Match",
    description: "Our AI searches our network of 150+ verified dentists and matches you based on location, insurance, specialty, and availability.",
  },
  {
    icon: CalendarCheck,
    title: "Book Your Appointment",
    description: "See real-time availability from your dentist's actual schedule and book your appointment instantly — no phone calls needed.",
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
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From search to booked appointment — all in one conversation.
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
