import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const timeline = [
    {
      type: "work",
      icon: Briefcase,
      title: "Senior Professional",
      organization: "Company Name",
      period: "2022 - Present",
      description: "Leading innovative projects and driving digital transformation initiatives. Collaborating with cross-functional teams to deliver exceptional results.",
      achievements: [
        "Led development of key platform features",
        "Improved system performance by 40%",
        "Mentored junior team members"
      ]
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Mid-Level Professional",
      organization: "Previous Company",
      period: "2020 - 2022",
      description: "Developed and maintained critical applications while expanding technical expertise and leadership capabilities.",
      achievements: [
        "Built scalable solutions for enterprise clients",
        "Implemented best practices and code standards",
        "Contributed to architectural decisions"
      ]
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Degree Program",
      organization: "University Name",
      period: "2016 - 2020",
      description: "Graduated with honors, focusing on computer science and software engineering principles.",
      achievements: [
        "Dean's List multiple semesters",
        "Capstone project recognition",
        "Active in tech student organizations"
      ]
    },
    {
      type: "certification",
      icon: Award,
      title: "Professional Certifications",
      organization: "Various Institutions",
      period: "Ongoing",
      description: "Continuous learning through industry-recognized certifications and specialized training programs.",
      achievements: [
        "Cloud Architecture Certification",
        "Advanced Development Practices",
        "Leadership & Management Training"
      ]
    }
  ];

  const getIconBg = (type: string) => {
    switch (type) {
      case "work":
        return "bg-primary text-primary-foreground";
      case "education":
        return "bg-accent text-accent-foreground";
      case "certification":
        return "bg-gradient-to-br from-primary to-accent text-primary-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, learning, and achievement
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className={`absolute left-0 p-3 rounded-full ${getIconBg(item.type)} shadow-lg`}>
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted inline-block w-fit">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-primary font-medium mb-3">{item.organization}</p>
                  <p className="text-muted-foreground mb-4">{item.description}</p>

                  <div className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
