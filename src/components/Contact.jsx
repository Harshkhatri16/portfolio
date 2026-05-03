import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z"/>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.055 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.818.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.055-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.419-.679-.818-.896-1.381-.164-.422-.36-1.056-.413-2.227-.054-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.055-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.419-.419.818-.679 1.381-.896.422-.164 1.056-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.837c-3.403 0-6.163 2.76-6.163 6.163s2.76 6.163 6.163 6.163 6.163-2.76 6.163-6.163S15.403 5.837 12 5.837zm0 10.167c-2.212 0-4.004-1.792-4.004-4.004S9.788 7.996 12 7.996s4.004 1.792 4.004 4.004S14.212 16.004 12 16.004zm7.074-10.271c.796 0 1.44.644 1.44 1.44s-.644 1.44-1.44 1.44-1.44-.644-1.44-1.44.644-1.44 1.44-1.44z"/>
  </svg>
);

const Contact = () => {
  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "harshkhatri1975@gmail.com", href: "mailto:harshkhatri1975@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 98796 42688", href: "tel:+919879642688" },
    { icon: <MapPin size={20} />, label: "Location", value: "Bhuj, Gujarat, India", href: "#" },
  ];

  const socials = [
    { icon: <GithubIcon size={24} />, href: "https://github.com/Harshkhatri16", color: "hover:text-white" },
    { icon: <LinkedinIcon size={24} />, href: "https://www.linkedin.com/in/harsh-khatri-183390245/", color: "hover:text-blue-500" },
    { icon: <InstagramIcon size={24} />, href: "https://www.instagram.com/harsh_khatri16/", color: "hover:text-pink-500" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's build something amazing together.</h3>
            <p className="text-textSecondary mb-10 leading-relaxed max-w-md">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.href}
                  className="flex items-center p-4 glass rounded-2xl hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-textSecondary">{info.label}</div>
                    <div className="font-bold">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-6">
              {socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-textSecondary ${social.color} transition-colors transform hover:scale-125 duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[2rem]"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-2">Full Name</label>
                  <input type="text" className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-2">Email Address</label>
                  <input type="email" className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-2">Subject</label>
                <input type="text" className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-2">Message</label>
                <textarea rows="4" className="w-full bg-background/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold transition-all flex items-center justify-center group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
