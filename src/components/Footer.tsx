import logo from "@/assets/denzy-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="DentaFind" className="h-7 w-auto" />
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#" className="hover:text-foreground transition-colors">For Dentists</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 DentaFind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
