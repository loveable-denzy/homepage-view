import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Find & Book Your Dentist?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Skip the phone calls. Tell us what you need and book a real appointment with a dentist in our network — in minutes.
          </p>
          <Button size="lg" className="text-base px-8 py-6 rounded-xl gap-2">
            Start Searching <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
