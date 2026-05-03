import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Layout, Terminal } from 'lucide-react';

const ProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="mt-8 relative w-full aspect-square cursor-pointer [perspective:1000px] group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/20 to-secondary/20">
          <img 
            src="/harsh.png" 
            alt="Harsh Khatri" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
             <div className="glass px-4 py-2 rounded-full text-white text-sm font-bold flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Click to Flip
             </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden border border-white/20 bg-surface flex flex-col items-center justify-center p-8 text-center shadow-2xl shadow-primary/20">
            <motion.div
              animate={{ 
                rotate: [0, 20, -10, 20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-8xl mb-6 select-none"
            >
              👋
            </motion.div>
            <h3 className="text-3xl font-bold gradient-text mb-3">Hello!</h3>
            <p className="text-textSecondary text-lg leading-relaxed">
              I'm <span className="text-primary font-bold">Harsh</span>. <br />
              Ready to turn your ideas into reality!
            </p>
            <div className="mt-6 flex gap-3">
               <div className="h-2 w-2 rounded-full bg-primary opacity-50"></div>
               <div className="h-2 w-2 rounded-full bg-secondary opacity-50"></div>
               <div className="h-2 w-2 rounded-full bg-accent opacity-50"></div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

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
          <div className="relative z-10 glass rounded-[2.5rem] p-10 border-white/20">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-3"
                >
                  <div className="p-2 bg-primary/20 rounded-lg text-primary"><Code size={24} /></div>
                  <div>
                    <div className="text-sm font-bold">Frontend</div>
                    <div className="text-xs text-textSecondary">React, JS</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-3"
                >
                  <div className="p-2 bg-secondary/20 rounded-lg text-secondary"><Server size={24} /></div>
                  <div>
                    <div className="text-sm font-bold">Backend</div>
                    <div className="text-xs text-textSecondary">Node.js, MongoDB</div>
                  </div>
                </motion.div>
              </div>
              <div className="pt-10">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-3"
                >
                  <div className="p-2 bg-accent/20 rounded-lg text-accent"><Layout size={24} /></div>
                  <div>
                    <div className="text-sm font-bold">Design</div>
                    <div className="text-xs text-textSecondary">Figma, UI/UX</div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <ProfileCard />
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
            className="absolute -top-6 -right-6 w-14 h-14 glass rounded-2xl border-white/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(59,130,246,0.3)] z-20"
          >
            <Code size={24} />
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
            className="absolute -bottom-6 -left-6 w-14 h-14 glass rounded-2xl border-white/20 flex items-center justify-center text-secondary shadow-[0_0_20px_rgba(99,102,241,0.3)] z-20"
          >
            <Terminal size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
