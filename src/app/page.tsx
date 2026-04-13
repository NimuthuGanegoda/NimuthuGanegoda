'use client';
import { cv } from '../data/cv';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ArrowRight, 
  Code2, 
  ShieldCheck, 
  Smartphone, 
  Terminal,
  Activity,
  ChevronDown
} from 'lucide-react';

const SlideIn = ({ children, direction = 'up', delay = 0 }: { children: React.ReactNode, direction?: 'up' | 'left' | 'right', delay?: number }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : 0 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] as any 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#020202] text-white selection:bg-cyan-500/30">
      <div className="noise" />
      <div className="grid-bg" />
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#00f2ff] origin-left z-[100]" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative p-6">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="glow-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="glow-blob top-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full" 
          />
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
          className="relative z-10 mb-12"
        >
          {cv.photo && (
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <img
                src={cv.photo}
                alt={t('profile.name')}
                width={220}
                height={220}
                className="rounded-full grayscale hover:grayscale-0 transition-all duration-700 ring-1 ring-cyan-500/30 p-2 bg-black relative z-10"
              />
            </div>
          )}
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="cyber-headline mb-4">
              <span className="text-glow-cyan">{cv.name.split(' ')[0]}</span>
              <br />
              <span className="text-white/10">{cv.name.split(' ')[1]}</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-cyan-400/60 text-lg md:text-2xl font-medium tracking-[0.3em] uppercase mb-12"
          >
            {t('profile.title')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="#projects" className="btn-neon-cyan group">
              {t('home.seeProjects')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-neon-outline">
              {t('nav.contact')}
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 text-cyan-900"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="cyber-section overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <SlideIn direction="left">
              <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-cyan-500 mb-4">// {t('nav.about')}</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-glow-cyan">{t('about.intro1')}</h3>
              <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-3xl">{t('profile.summary')}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6" />, title: t('about.security'), text: t('about.securityText') },
                  { icon: <Terminal className="w-6 h-6" />, title: t('about.languages'), text: t('about.languagesText') },
                  { icon: <Smartphone className="w-6 h-6" />, title: t('about.mobile'), text: t('about.mobileText') },
                  { icon: <Code2 className="w-6 h-6" />, title: t('about.ai'), text: t('about.aiText') },
                ].map((s, i) => (
                  <SlideIn key={i} delay={i * 0.1} direction="up">
                    <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group hover:bg-cyan-500/5">
                      <div className="text-cyan-500 group-hover:scale-110 transition-transform">{s.icon}</div>
                      <div>
                        <h4 className="font-bold mb-1 group-hover:text-cyan-400 transition-colors">{s.title}</h4>
                        <p className="text-sm text-slate-500">{s.text}</p>
                      </div>
                    </div>
                  </SlideIn>
                ))}
              </div>
            </SlideIn>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <SlideIn direction="right" delay={0.2}>
              <div className="cyber-card group hover:border-violet-500/30">
                <h3 className="font-bold mb-4 uppercase tracking-wider text-xs text-violet-400">{t('home.currentlyLearning')}</h3>
                <div className="space-y-4">
                  {cv.currentlyLearning?.map((l, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.4}>
              <div className="cyber-card group hover:border-cyan-500/30">
                <h3 className="font-bold mb-4 uppercase tracking-wider text-xs text-cyan-400">{t('home.beyondCode')}</h3>
                <div className="flex flex-wrap gap-2">
                  {cv.interests?.map((interest, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-slate-400 border border-white/5 group-hover:border-cyan-500/20 transition-colors">
                      {interest.split(':')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="cyber-section bg-white/[0.01]">
        <SlideIn direction="up">
          <div className="mb-20">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-cyan-500 mb-4">// {t('projects.title')}</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-glow-cyan text-white">Latest Prototypes</h3>
          </div>
        </SlideIn>
        
        <div className="grid md:grid-cols-2 gap-8">
          {cv.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cyber-card !p-0 hover:border-cyan-500/30 transition-all"
            >
              <div className="relative aspect-video overflow-hidden border-b border-white/5">
                {project.image ? (
                  <Image src={project.image} alt={project.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-100" />
                ) : (
                  <div className="absolute inset-0 bg-cyan-500/5 flex items-center justify-center">
                    <Terminal className="w-16 h-16 text-white/5 group-hover:text-cyan-500/20 transition-all duration-500" />
                  </div>
                )}
                <div className="absolute top-6 right-6 flex gap-2">
                  {project.tags?.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[9px] font-bold uppercase bg-black/80 backdrop-blur-md border border-cyan-500/20 text-cyan-400 rounded tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{project.name}</h4>
                  <div className="flex gap-4">
                    {project.link && <Link href={project.link} target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors"><Github className="w-5 h-5" /></Link>}
                    {project.demo && <Link href={project.demo} target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors"><ExternalLink className="w-5 h-5" /></Link>}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(s => (
                    <span key={s} className="px-3 py-1 bg-cyan-500/5 rounded-md text-[10px] font-mono text-cyan-500/80 border border-cyan-500/10">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="cyber-section">
        <SlideIn direction="up">
          <div className="mb-20 text-center">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-violet-500 mb-4">// {t('experience.title')}</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-glow-violet">Career Path</h3>
          </div>
        </SlideIn>
        
        <div className="max-w-4xl mx-auto">
          {cv.experiences.map((exp, i) => (
            <SlideIn key={i} direction="right" delay={i * 0.2}>
              <div className="relative pl-12 pb-16 last:pb-0 border-l border-violet-500/20 ml-6">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_20px_rgba(112,0,255,0.6)]" />
                <div className="cyber-card group hover:border-violet-500/40 transition-all duration-500 bg-violet-500/[0.01]">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl font-bold mb-1 group-hover:text-violet-400 transition-colors">{exp.role}</h4>
                      <p className="text-violet-500/80 font-medium tracking-wide">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-violet-500/10 rounded-full text-xs font-mono border border-violet-500/20 text-violet-400">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 mb-6 text-sm italic">{exp.summary}</p>
                  <ul className="space-y-3 mb-8">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex gap-4 text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                        <Activity className="w-4 h-4 mt-0.5 shrink-0 text-violet-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech?.map(t => (
                      <span key={t} className="px-2 py-1 bg-violet-500/10 text-violet-400 text-[10px] font-bold rounded uppercase tracking-tighter border border-violet-500/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </section>

      {/* Skills & Contact */}
      <section id="contact" className="cyber-section bg-[#050505]">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <SlideIn direction="left">
            <div>
              <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-cyan-500 mb-4">// {t('nav.contact')}</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 text-glow-cyan text-white">Get in Touch</h3>
              <p className="text-slate-400 text-lg mb-12">Have a project in mind or just want to chat about history, anime, or cybersecurity?</p>
              
              <div className="space-y-6">
                <a href={`mailto:${cv.email}`} className="flex items-center gap-6 group cyber-card !p-6 hover:bg-cyan-500/[0.03] hover:border-cyan-500/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-500">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">{t('cv.email')}</div>
                    <div className="text-lg font-mono text-cyan-100">{cv.email}</div>
                  </div>
                </a>
                
                <div className="flex gap-4">
                  {cv.socials?.map((social) => (
                    <Link 
                      key={social.name} 
                      href={social.url} 
                      target="_blank"
                      className="w-14 h-14 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-500"
                    >
                      {social.name === 'GitHub' && <Github className="w-6 h-6" />}
                      {social.name === 'LinkedIn' && <Linkedin className="w-6 h-6" />}
                      {!(social.name === 'GitHub' || social.name === 'LinkedIn') && <ExternalLink className="w-6 h-6" />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right">
            <div className="cyber-card border-cyan-500/10">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-cyan-400">
                <Terminal className="w-6 h-6" />
                Technical Skills
              </h3>
              <div className="space-y-8">
                {cv.skills.map((group, i) => (
                  <div key={i}>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-white/[0.02] border border-white/5 rounded-lg text-xs text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 relative z-10 bg-[#020202]">
        <SlideIn direction="up">
          <p className="text-slate-600 text-sm font-mono tracking-widest uppercase opacity-50">
            © {new Date().getFullYear()} {cv.name}. Designed with Dark Devotion.
          </p>
        </SlideIn>
      </footer>
    </div>
  );
}
