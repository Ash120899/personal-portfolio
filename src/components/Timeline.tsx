"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TIMELINE_DATA = [
 {
  year: "2023 – Present",
  title: "Senior Web Developer",
  org: "ABN Junction",
  description: "Working on real-world frontend and CMS-driven projects for clients across India and Europe. Focused on building responsive, performance-optimized user interfaces using React, Next.js, WordPress, and Shopify, with strong emphasis on Core Web Vitals, UX, and maintainable frontend architecture.",
  type: "work",
},
{
  year: "2022 – 2023",
  title: "Senior Associate – Web Development",
  org: "Walnut Folks Group",
  description: "Built and optimized frontend-heavy WordPress and Shopify websites. Collaborated closely with designers, improved page speed and responsiveness, implemented SEO-friendly layouts, and mentored junior developers on frontend best practices.",
  type: "work",
},
{
  year: "2021 – 2022",
  title: "Marketing Web Developer",
  org: "Inframantra",
  description: "Worked on frontend interfaces for marketing platforms and business websites. Contributed to UI development, landing pages, dashboards, and content-driven websites while gaining hands-on experience with real client projects.",
  type: "work",
},
{
  year: "2024 – 2026",
  title: "Master of Computer Applications (MCA)",
  org: "Manipal University",
  description: "Currently pursuing MCA with a focus on advanced software development concepts, modern web technologies, and scalable application design.",
  type: "education",
},
{
  year: "2021 – 2024",
  title: "Bachelor of Computer Applications (BCA)",
  org: "Chandigarh University",
  description: "Studied computer science fundamentals including programming, databases, and web technologies. Built a strong foundation that supported my transition into professional frontend and WordPress development.",
  type: "education",
},

{
  year: "Early Journey",
  title: "Getting Started with Web Development",
  org: "Self-Driven Learning",
  description: "Began exploring web development through HTML, CSS, and JavaScript, gradually moving into WordPress, frontend frameworks, and modern UI development through hands-on projects and continuous learning.",
  type: "milestone",
},

];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="journey">
       {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
             My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From writing my first "Hello World" to building complex applications. 
            Here is a glimpse into my professional evolution.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-blue-500/20 via-purple-500/50 to-blue-500/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-1/2" />

      {/* Point on Line */}
      <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#121212] transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
         <div className="absolute inset-0 bg-blue-400 blur-sm opacity-70" />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
        <div className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
          <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"} mb-2`}>
             <span className="text-xs text-blue-400 font-mono border border-blue-500/30 px-2 py-1 rounded-full bg-blue-500/10 mb-2 w-fit">
              {item.year}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {item.title}
            </h3>
          </div>
          
          <p className="text-sm text-purple-300 mb-4 font-medium uppercase tracking-wider">
            {item.org}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
