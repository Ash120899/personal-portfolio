"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Project Data with Media & Layout Configuration
const projects = [
  {
    id: "elite-hotel",
    title: "Woolah Tea",
    category: "E-Commerce • Shopify",
    description: "E-commerce tea brand website focused on clean UI, performance, and conversion.",
    longDescription: "Woolah Tea is a consumer-facing e-commerce website built to present premium tea products through a clean and modern interface. The project emphasized frontend presentation, responsive layouts, optimized product pages, and performance improvements to ensure fast load times and smooth user experience across devices.",
    techStack: [
  "Shopify",
  "Liquid",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Theme Customization",
  "Performance Optimization"
],
    demo: "https://woolahtea.com/",
    color: "from-blue-600/20 to-cyan-500/20",
    hoverColor: "group-hover:from-blue-600/40 group-hover:to-cyan-500/40",
    span: "md:col-span-2 md:row-span-2",
    mediaType: "image",
    // Abstract Network/Server for Grid
    mediaUrl: "/woolah-tea.jpeg",
    // Code/Structure Demo for Modal
    demoUrl: "/woolah-tea-2.jpeg"
  },
  {
    id: "nxtcart",
    title: "Taiga Green",
    category: "WooCommerce • Performance",
    description: "Large-scale WooCommerce storefront focused on performance, UX, and multilingual support.",
    longDescription: "Taiga Green is a Germany-based WooCommerce store with a large product catalog and multilingual audience. The project involved frontend customization, pagination stability fixes, performance optimization, and improving user experience across category and product pages. Special attention was given to Core Web Vitals, frontend JavaScript behavior, and multilingual compatibility.",
   techStack: [
  "WordPress",
  "WooCommerce",
  "JavaScript",
  "PHP",
  "TranslatePress",
  "HTML5",
  "CSS3",
  "Performance Optimization"
],
    repo: null,
    demo: "https://taiga.green/",
    color: "from-purple-600/20 to-pink-500/20",
    hoverColor: "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
    span: "md:col-span-1 md:row-span-2",
    mediaType: "image",
    // Shopping/Ecommerce Concept
    mediaUrl: "/taiga-green.jpeg",
    // Shopping Interaction
    demoUrl: "/taiga-green-2.jpeg"
  },
  {
    id: "dropbox-clone",
    title: "ABN Junction",
    category: "WordPress • Optimization",
    description: "Business-focused WordPress website optimized for performance and responsiveness.",
    longDescription: "ABN Junction is a corporate WordPress platform where the focus was on frontend stability, responsive layouts, caching integration, and overall performance optimization. The project included UI refinements, Cloudflare integration, and improving load times for better user engagement.",
    techStack: ["WordPress",
  "JavaScript",
  "PHP",
  "HTML5",
  "CSS3",
  "Cloudflare",
  "Caching Optimization"],
    repo: null,
    demo: "https://abnjunction.com/",
    color: "from-orange-500/20 to-red-500/20",
    hoverColor: "group-hover:from-orange-500/40 group-hover:to-red-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Cloud/Data Abstract
    mediaUrl: "/abn-junction.jpeg",
    // File Management
    demoUrl: "/abn-junction-2.jpeg"
  },
  {
    id: "blog-microservices",
    title: "Experience India",
    category: "WordPress • Content Platform",
    description: "Content-driven website with responsive UI and optimized frontend performance.",
    longDescription: "Experience India is a content-heavy platform designed to showcase travel and cultural information. The work focused on frontend layout consistency, mobile responsiveness, and improving page load performance while maintaining a clean and readable content structure.",
    techStack: [ "WordPress",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "Performance Optimization"],
    repo: null,
    demo: "https://experienceindia.co.in/",
    color: "from-green-600/20 to-teal-500/20",
    hoverColor: "group-hover:from-green-600/40 group-hover:to-teal-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
        // Typing/Code Abstract
        mediaUrl: "/experience-india.jpeg",
    // Server/Terminal
    demoUrl: "/experience-india-2.jpeg"
  },
  {
    id: "bookstore-app",
    title: "AuraSense Beauty",
    category: "Frontend • Shopify",
    description: "Beauty e-commerce website with optimized product UI and navigation flow.",
    longDescription: "AuraSense Beauty is a WooCommerce-based beauty brand website focused on structured layouts, optimized product pages, and smooth customer navigation. The project aimed to improve frontend usability and performance while maintaining a visually appealing interface.",
    techStack: [ "WordPress",
  "WooCommerce",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Performance Optimization"],
    repo: null,
    demo: "https://aurasensebeauty.com/",
    color: "from-indigo-600/20 to-purple-500/20",
    hoverColor: "group-hover:from-indigo-600/40 group-hover:to-purple-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Reading/Books
    mediaUrl: "/aura-sense.jpeg",
    // Library/Shelf
    demoUrl: "/aura-sense-2.jpeg"
  },
  {
    id: "pixabay-gallery",
    title: "Videeo",
    category: "Frontend • WordPress",
    description: "Landing and platform pages with performance-focused frontend implementation.",
    longDescription: "Videeo is a platform-oriented website where frontend work focused on layout clarity, responsive UI components, and optimized rendering for improved performance and user interaction.",
    techStack: [ "WordPress",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Performance Optimization"],
    repo: null,
    demo: "https://www.videeo.live/",
    color: "from-pink-600/20 to-rose-500/20",
    hoverColor: "group-hover:from-pink-600/40 group-hover:to-rose-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Color/Art
    mediaUrl: "/videeo.jpeg",
    // Searching/Scanning
    demoUrl: "/videeo-2.jpeg"
  },
  {
    id: "room-upload",
    title: "UnicMinds",
    category: " Edtech • Corporate Platform",
    description: "Professional business website with clean UI and mobile-first approach.",
    longDescription: "UnicMinds is a corporate website built with a mobile-first mindset, focusing on frontend structure, readability, and consistent user experience across devices.",
    techStack: ["WordPress",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Mobile Optimization"],
    repo: null,
    demo: "https://unicminds.com/",
    color: "from-yellow-600/20 to-orange-500/20",
    hoverColor: "group-hover:from-yellow-600/40 group-hover:to-orange-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Data Transfer
    mediaUrl: "/unic-minds.jpeg",
    // Upload/Processing
    demoUrl: "/unic-minds-2.jpeg                                    "
  },
];

const INITIAL_VISIBLE_COUNT = 5;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const selectedProject = projects.find((p) => p.id === selectedId);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A curated selection of frontend-focused projects showcasing React, Next.js, CMS Platforms, and performance-driven UI development.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]"
        >
            <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        onClick={() => setSelectedId(project.id)}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md ${project.span}`}
                        whileHover={{ scale: 1.015 }}
                    >
                        {/* Media Background - Always 'mediaUrl' for Grid */}
                        <img 
                            src={project.mediaUrl}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-linear-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-60 group-hover:opacity-80 mix-blend-overlay`} />
                        
                        {/* Darkener */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        {/* Noise */}
                        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                 <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-blue-300 backdrop-blur-md">
                                    {project.category}
                                 </span>
                                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                 </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">{project.title}</h3>
                                <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    {project.techStack.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Pagination Buttons */}
        <motion.div layout className="flex justify-center mt-12">
            {hasMore ? (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                >
                    View More Projects
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.button>
            ) : projects.length > INITIAL_VISIBLE_COUNT && (
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                            projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        setVisibleCount(INITIAL_VISIBLE_COUNT);
                    }}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                 >
                    Show Less
                    <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                 </motion.button>
            )}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
            {selectedId && selectedProject && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-60"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-70 pointer-events-auto p-4 md:p-8">
                        <motion.div
                           layoutId={selectedId}
                           className="bg-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-4xl border border-white/10 shadow-2xl relative scrollbar-hide"
                        >
                           <button 
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                           </button>

                           <div className="flex flex-col md:flex-row h-full">
                                { /* Visual Side - Prioritize 'demoUrl', fallback to 'mediaUrl' */ }
                                <div className={`w-full md:w-2/5 min-h-[300px] relative overflow-hidden flex flex-col justify-end p-8`}>
                                    <img 
                                        src={selectedProject.demoUrl || selectedProject.mediaUrl}
                                        alt={selectedProject.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80" 
                                    />
                                   <div className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-80`} />
                                   <div className="absolute inset-0 bg-black/20" />
                                   
                                   <motion.span 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.2 }}
                                     className="relative z-10 inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-white mb-4 w-fit border border-white/10 backdrop-blur-md"
                                   >
                                     {selectedProject.category}
                                   </motion.span>
                                   <motion.h3 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.3 }}
                                     className="relative z-10 text-4xl font-bold text-white leading-none tracking-tight drop-shadow-xl"
                                   >
                                     {selectedProject.title}
                                   </motion.h3>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#121212]">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the project</h4>
                                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                            {selectedProject.longDescription}
                                        </p>

                                        <div className="mb-10">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Core Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.techStack.map((tech, i) => (
                                                    <motion.span 
                                                        key={tech} 
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.5 + (i * 0.05) }}
                                                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-white/10">
                                         
                                            <a 
                                                href={selectedProject.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex-1 py-4 rounded-xl bg-white/5 text-white font-bold text-center hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2"
                                            >
                                                Visit Live Website
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                           </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
