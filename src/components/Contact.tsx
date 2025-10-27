import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/yourusername",
      color: "hover:text-[#E4405F]"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourhandle",
      color: "hover:text-[#1DA1F2]"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12 shadow-lg animate-scale-in">
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <p className="text-muted-foreground mb-8">
            Whether you have a project in mind, need consultation, or want to explore potential collaborations, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all"
            asChild
          >
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Send me an email
            </a>
          </Button>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-semibold mb-6">Connect on Social Media</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8" />
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
