import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Find the Right Dentist?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Most people just Google "dentist near me" and hope for the best.<br />
            Denzy helps you find the one that's actually right for you.
          </p>
          <Button size="lg" className="text-base px-8 py-6 rounded-xl gap-2">
            Find in Seconds <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
