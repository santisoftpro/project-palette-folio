import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      description: "Lead development of enterprise-level applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and deployment.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with UX/UI designers to create user-friendly interfaces. Specialized in React ecosystem and modern CSS frameworks.",
      achievements: [
        "Built 15+ responsive web applications",
        "Reduced bundle size by 30%",
        "Implemented accessibility standards"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartupVenture",
      period: "2019 - 2020",
      description: "Started my career building features for a fast-growing startup. Gained experience in full-stack development and agile methodologies.",
      achievements: [
        "Contributed to 3 major product releases",
        "Learned multiple technologies quickly",
        "Participated in code reviews"
      ]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                
                <Card className="flex-1 p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <p className="text-lg font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;