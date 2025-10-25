import { Code2, Palette, Rocket, Database, Sparkles, Zap } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      items: ["React", "TypeScript", "Node.js", "Python"]
    },
    {
      icon: Palette,
      title: "Design",
      items: ["UI/UX", "Figma", "Branding", "Prototyping"]
    },
    {
      icon: Database,
      title: "Backend",
      items: ["APIs", "Databases", "Cloud", "DevOps"]
    },
    {
      icon: Rocket,
      title: "Tools",
      items: ["Git", "Docker", "CI/CD", "Agile"]
    },
    {
      icon: Sparkles,
      title: "Creative",
      items: ["Problem Solving", "Innovation", "Strategy", "Leadership"]
    },
    {
      icon: Zap,
      title: "Performance",
      items: ["Optimization", "Testing", "Analytics", "Security"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit to bring your vision to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground group-hover:shadow-lg transition-shadow">
                  <skill.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
