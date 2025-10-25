import { User, Target, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Who I Am",
      description: "A passionate professional dedicated to creating meaningful digital experiences."
    },
    {
      icon: Target,
      title: "What I Do",
      description: "Transform ideas into reality through innovative design and development."
    },
    {
      icon: Sparkles,
      title: "My Approach",
      description: "Combining creativity with technical excellence to deliver exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and powered by innovation, I bring ideas to life through thoughtful design and robust development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              With a foundation built on continuous learning and a passion for excellence, I've developed expertise 
              in creating solutions that not only meet but exceed expectations. My journey has been marked by 
              challenging projects, collaborative successes, and a commitment to pushing boundaries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of technology to transform businesses and improve lives. Every project is an 
              opportunity to make a positive impact, and I approach each one with dedication, creativity, and 
              attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
