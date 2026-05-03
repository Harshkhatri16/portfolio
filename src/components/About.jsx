import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Experience', value: '1+ Year', icon: <Briefcase size={20} /> },
    { label: 'Education', value: 'BCA & IT', icon: <GraduationCap size={20} /> },
    { label: 'Location', value: 'Bhuj, Gujarat', icon: <MapPin size={20} /> },
    { label: 'Age', value: '20 Years', icon: <Calendar size={20} /> },
  ];

  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">I'm a Developer & Designer.</h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
              I am Harsh Khatri, an IT student with a deep interest in web development and software engineering. Currently pursuing my Bachelor of Computer Application & Information Technology, I've built a strong foundation in both frontend and backend technologies.
            </p>
            <p className="text-textSecondary mb-8 leading-relaxed">
              My journey started with a curiosity for how things work on the internet, which led me to master React, Node.js, and modern CSS frameworks like Tailwind. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 glass rounded-2xl flex items-start space-x-3">
                  <div className="text-primary mt-1">{stat.icon}</div>
                  <div>
                    <div className="text-sm text-textSecondary">{stat.label}</div>
                    <div className="font-bold">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-4 rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="aspect-[4/5] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-40"></div>
                  <div className="relative z-10 p-8 text-center bg-background/40 backdrop-blur-sm rounded-xl m-6">
                    <p className="italic text-lg font-medium text-white mb-2">"Coding is not just about writing lines of text; it's about solving real-world problems with elegance."</p>
                    <p className="text-primary font-bold text-sm">— Harsh Khatri</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
