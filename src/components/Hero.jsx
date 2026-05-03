import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Layout } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface border border-white/10 text-sm font-medium text-primary mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Freelance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting Digital <br />
            <span className="gradient-text">Experiences</span> with <br />
            Code & Design.
          </h1>
          
          <p className="text-xl text-textSecondary mb-8 max-w-lg">
            Hi, I'm Harsh Khatri. A passionate IT Student and Web Developer specializing in building modern, scalable applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all flex items-center group">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-semibold transition-all">
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass rounded-3xl p-8 border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary"><Code size={24} /></div>
                  <div>
                    <div className="text-sm font-bold">Frontend</div>
                    <div className="text-xs text-textSecondary">React, JS</div>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="p-2 bg-secondary/20 rounded-lg text-secondary"><Server size={24} /></div>
                  <div>
                    <div className="text-sm font-bold">Backend</div>
                    <div className="text-xs text-textSecondary">Node.js, MongoDB</div>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-3">
                  <div className="p-2 bg-accent/20 rounded-lg text-accent"><Layout size={24} /></div>
                  <div>
                    <div className="text-sm font-bold">Design</div>
                    <div className="text-xs text-textSecondary">Figma, UI/UX</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dummy Profile Image Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                <div className="relative z-10 text-center">
                    <span className="text-4xl font-bold opacity-30">HK.</span>
                </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -right-6 w-12 h-12 glass rounded-xl border-white/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            <Code size={20} />
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-6 -left-6 w-12 h-12 glass rounded-xl border-white/20 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          >
            <Terminal size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
