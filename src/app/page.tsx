'use client';
import { cv } from '../data/cv';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
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
  Database,
  Search,
  History,
  Activity,
  ChevronDown
} from 'lucide-react';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#050505] text-white selection:bg-blue-500/30">
      <div className="noise" />
      <div className="grid-bg" />
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative p-6">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" 
          />
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mb-12"
        >
          {cv.photo && (
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <img
                src={cv.photo}
                alt={t('profile.name')}
                width={220}
                height={220}
                className="rounded-full grayscale hover:grayscale-0 transition-all duration-700 ring-1 ring-white/10 p-2 bg-black"
              />
            </div>
          )}
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="cyber-headline mb-4">
              <span className="text-glow">{cv.name.split(' ')[0]}</span>
              <br />
              <span className="text-white/20">{cv.name.split(' ')[1]}</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-400 text-lg md:text-2xl font-medium tracking-widest uppercase mb-12"
          >
            {t('profile.title')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="#projects" className="btn-cyber-primary group">
              {t('home.seeProjects')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-cyber">
              {t('nav.contact')}
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 text-gray-600"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About / Summary Section */}
      <section id="about" className="cyber-section">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">// {t('nav.about')}</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {t('about.intro1')}
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-3xl">
                {t('profile.summary')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6" />, title: t('about.security'), text: t('about.securityText') },
                  { icon: <Terminal className="w-6 h-6" />, title: t('about.languages'), text: t('about.languagesText') },
                  { icon: <Smartphone className="w-6 h-6" />, title: t('about.mobile'), text: t('about.mobileText') },
                  { icon: <Code2 className="w-6 h-6" />, title: t('about.ai'), text: t('about.aiText') },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-blue-500">{s.icon}</div>
                    <div>
                      <h4 className="font-bold mb-1">{s.title}</h4>
                      <p className="text-sm text-gray-500">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-6">
              <div className="cyber-card">
                <h3 className="font-bold mb-4 uppercase tracking-wider text-xs">{t('home.currentlyLearning')}</h3>
                <div className="space-y-4">
                  {cv.currentlyLearning?.map((l, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {l}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cyber-card">
                <h3 className="font-bold mb-4 uppercase tracking-wider text-xs">{t('home.beyondCode')}</h3>
                <div className="flex flex-wrap gap-2">
                  {cv.interests?.map((interest, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5">
                      {interest.split(':')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Projects Section */}
      <section id="projects" className="cyber-section bg-white/[0.01]">
        <Reveal>
          <div className="mb-20">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">// {t('projects.title')}</h2>
            <h3 className="text-4xl md:text-6xl font-bold">Latest Prototypes</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cv.projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cyber-card !p-0"
              >
                <div className="relative aspect-video overflow-hidden border-b border-white/5">
                  {project.image ? (
                    <Image src={project.image} alt={project.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                  ) : (
                    <div className="absolute inset-0 bg-blue-500/5 flex items-center justify-center">
                      <Terminal className="w-16 h-16 text-white/10" />
                    </div>
                  )}
                  <div className="absolute top-6 right-6 flex gap-2">
                    {project.tags?.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[9px] font-bold uppercase bg-black/80 backdrop-blur-md border border-white/10 rounded tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">{project.name}</h4>
                    <div className="flex gap-4">
                      {project.link && <Link href={project.link} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>}
                      {project.demo && <Link href={project.demo} target="_blank" className="text-gray-500 hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></Link>}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(s => (
                      <span key={s} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-mono text-blue-400 border border-blue-400/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="cyber-section">
        <Reveal>
          <div className="mb-20 text-center">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">// {t('experience.title')}</h2>
            <h3 className="text-4xl md:text-6xl font-bold">Career Path</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {cv.experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 pb-16 last:pb-0 border-l border-white/10 ml-6">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <div className="cyber-card group">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                      <p className="text-blue-500 font-medium">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-white/5 rounded-full text-xs font-mono border border-white/5 text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6 text-sm italic">{exp.summary}</p>
                  <ul className="space-y-3 mb-8">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex gap-4 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                        <Activity className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech?.map(t => (
                      <span key={t} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Skills & Contact */}
      <section id="contact" className="cyber-section">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4">// {t('nav.contact')}</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8">Get in Touch</h3>
              <p className="text-gray-400 text-lg mb-12">
                Have a project in mind or just want to chat about history, anime, or cybersecurity?
              </p>
              
              <div className="space-y-6">
                <a href={`mailto:${cv.email}`} className="flex items-center gap-6 group cyber-card !p-6 hover:bg-white/5">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">{t('cv.email')}</div>
                    <div className="text-lg font-mono">{cv.email}</div>
                  </div>
                </a>
                
                <div className="flex gap-4">
                  {cv.socials?.map((social) => (
                    <Link 
                      key={social.name} 
                      href={social.url} 
                      target="_blank"
                      className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                    >
                      {social.name === 'GitHub' && <Github className="w-6 h-6" />}
                      {social.name === 'LinkedIn' && <Linkedin className="w-6 h-6" />}
                      {!(social.name === 'GitHub' || social.name === 'LinkedIn') && <ExternalLink className="w-6 h-6" />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="cyber-card">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-blue-500" />
                Technical Skills
              </h3>
              <div className="space-y-8">
                {cv.skills.map((group, i) => (
                  <div key={i}>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-4">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-xs text-gray-400">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="py-20 text-center border-t border-white/5 relative z-10">
        <p className="text-gray-600 text-sm font-mono">
          © {new Date().getFullYear()} {cv.name}. Built with Precision & Obsession.
        </p>
      </footer>
    </div>
  );
}
