import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL (Basic)"]
    },
    {
      title: "Design",
      skills: ["Figma", "Web Design", "Graphic Design", "Brand Design"]
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "Product Management", "Vite", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 text-primary group-hover:scale-105 transition-transform origin-left">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-textSecondary group-hover:text-textPrimary transition-colors">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Background Skill Ticker or Grid would be nice, but keeping it classy for now */}
      </div>
    </section>
  );
};

export default Skills;
