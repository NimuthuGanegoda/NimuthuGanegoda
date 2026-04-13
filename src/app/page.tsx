'use client';
import { cv } from '../data/cv';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
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
  ChevronDown
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <div className="relative">
      {/* Background blobs */}
      <div className="blob w-[500px] h-[500px] bg-blue-400 -top-48 -left-48 rounded-full" />
      <div className="blob w-[400px] h-[400px] bg-purple-400 top-1/2 -right-48 rounded-full" />

      {/* Hero Section */}
      <section className="hero-section text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          {cv.photo && (
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <img
                src={cv.photo}
                alt={t('profile.name')}
                width={200}
                height={200}
                className="rounded-full object-cover ring-8 ring-white dark:ring-white/10 shadow-2xl relative z-10"
              />
            </div>
          )}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="apple-headline"
        >
          {t('profile.name')}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="apple-subheadline max-w-3xl mx-auto"
        >
          {t('profile.title')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-4"
        >
          <a href="#projects" className="btn-primary group">
            {t('home.seeProjects')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary">
            {t('nav.contact')}
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            {t('nav.about')}
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="card">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                {t('profile.summary')}
              </p>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>{t('about.intro2')}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[t('about.bullet1'), t('about.bullet2'), t('about.bullet3')].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, title: t('about.security'), text: t('about.securityText') },
                { icon: <Terminal className="w-8 h-8 text-purple-500" />, title: t('about.languages'), text: t('about.languagesText') },
                { icon: <Smartphone className="w-8 h-8 text-pink-500" />, title: t('about.mobile'), text: t('about.mobileText') },
                { icon: <Code2 className="w-8 h-8 text-orange-500" />, title: t('about.ai'), text: t('about.aiText') },
              ].map((skill, i) => (
                <div key={i} className="card !p-6 flex flex-col items-center text-center group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-xs text-gray-500">{skill.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-gray-50/50 dark:bg-white/[0.02]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            {t('projects.title')}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cv.projects.map((project, i) => (
              <motion.div key={i} variants={itemVariants} className="card flex flex-col group">
                <div className="relative mb-6 aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-700">
                      <Code2 className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.tags?.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map(s => (
                    <span key={s} className="px-2 py-1 text-[10px] font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <Link href={project.link} target="_blank" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      {t('projects.source')} <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} target="_blank" className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
                      {t('projects.liveDemo')} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            {t('experience.title')}
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-white/10 before:to-transparent">
            {cv.experiences.map((exp, i) => (
              <motion.div key={i} variants={itemVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] card !p-6 md:!p-8">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <time className="text-xs font-medium text-blue-500 whitespace-nowrap">{exp.period}</time>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">{exp.company}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{exp.summary}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-xs flex gap-3 text-gray-500">
                        <ArrowRight className="w-3 h-3 mt-0.5 shrink-0 text-blue-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills & Contact Section */}
      <section id="contact" className="section bg-gray-900 text-white overflow-hidden relative">
        <div className="blob w-[600px] h-[600px] bg-blue-600 bottom-0 right-0 opacity-10" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <motion.h2 variants={itemVariants} className="text-5xl font-bold mb-8 text-left">
                {t('about.contactSocials')}
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-12">
                {t('profile.summary')}
              </motion.p>
              
              <motion.div variants={itemVariants} className="space-y-6">
                <a href={`mailto:${cv.email}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">{t('cv.email')}</div>
                    <div className="text-xl font-medium">{cv.email}</div>
                  </div>
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 mt-12">
                {cv.socials?.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.url} 
                    target="_blank"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                  >
                    {social.name === 'GitHub' && <Github className="w-5 h-5" />}
                    {social.name === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                    {!(social.name === 'GitHub' || social.name === 'LinkedIn') && <ExternalLink className="w-5 h-5" />}
                  </Link>
                ))}
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="card !bg-white/5 !border-white/10 text-white">
              <h3 className="text-2xl font-bold mb-8">{t('home.technicalSkills')}</h3>
              <div className="flex flex-wrap gap-3">
                {cv.skills.flatMap(s => s.items).map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-white/10 text-sm font-medium hover:bg-blue-600 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
