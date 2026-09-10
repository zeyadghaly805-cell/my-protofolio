import React, { useState, useEffect, useMemo } from 'react';
import { 
  Network, Shield, Terminal, Database, Code, Cpu, Award, BookOpen, 
  Mail, Phone, Linkedin, Github, ExternalLink, Download, ChevronRight, 
  Menu, X, Server, Wifi, CpuIcon, Layers, FileText, CheckCircle2, 
  Clock, ArrowUpRight, GraduationCap, Briefcase, Sparkles, Filter
} from 'lucide-react';

const PORTFOLIO_DATA = {
  personal: {
    name: "Zeyad Mohamed Ghaly",
    title: "Computer & Control Engineering Student",
    specialization: "Networking, IT Infrastructure & Cybersecurity",
    location: "Tanta, Egypt",
    email: "zeyadghaly805@gmail.com",
    phone: "01550541727",
    linkedin: "https://www.linkedin.com/in/zeyad-ghaly",
    github: "https://github.com/zeyadghaly805-cell",
    cvPath: "/assets/Zeyad-Mohamed-Ghaly-CV.pdf",
    summary: "Second-year Computer & Control Engineering student at Tanta University with a 3.77 GPA. Passionate about building rock-solid practical foundations in networking, IT infrastructure, Linux administration, and cybersecurity."
  },
  education: {
    university: "Tanta University",
    faculty: "Faculty of Engineering",
    department: "Computer & Control Engineering",
    level: "Second Year",
    expectedGraduation: "2029",
    gpa: "3.77 / 4.00"
  },
  skills: {
    networking: {
      title: "Networking & Infrastructure",
      level: "Hands-on / Core Strength",
      items: ["CCNA", "Cisco Packet Tracer", "VLANs", "Inter-VLAN Routing", "Subnetting", "DHCP", "DNS", "OSPF", "RIP", "SSH", "Wireless Networking", "Basic Network Troubleshooting", "Network Design"]
    },
    cybersecurity: {
      title: "Cybersecurity & Firewalls",
      level: "Foundational & Training",
      items: ["Network Security Fundamentals", "Fortinet Firewall Fundamentals", "Wireshark", "Kali Linux", "Nmap (Foundational)"]
    },
    linux: {
      title: "Linux & System Admin",
      level: "NTI Training Completed",
      items: ["Linux Command Line", "Users & Groups", "Permissions", "Packages", "Services", "Storage", "Mounting", "Logs", "Scheduling", "General SysAdmin"]
    },
    programming: {
      title: "Programming Languages",
      level: "Academic & Practical",
      items: ["C++", "C", "C#", "Python"]
    },
    computerScience: {
      title: "Computer Science & DB",
      level: "Core Fundamentals",
      items: ["Object-Oriented Programming", "Data Structures", "Databases", "Software Engineering Fundamentals", "Microsoft SQL Server", "SQL", "ADO.NET"]
    },
    dataEngineering: {
      title: "Data Engineering (DEPI)",
      level: "Currently Learning",
      items: ["Python", "Pandas", "NumPy", "Matplotlib", "File Handling", "Basic Data Cleaning", "Big Data (Upcoming)", "Azure (Upcoming)"]
    },
    frontend: {
      title: "Frontend & Web",
      level: "Practice / Fundamentals",
      items: ["HTML5", "CSS3", "JavaScript", "Landing Pages", "Responsive Design"]
    },
    professional: {
      title: "Professional & Soft Skills",
      level: "Ongoing Training",
      items: ["Business English", "Professional Emails", "Client Communication", "Presentations", "Freelancing Fundamentals", "Requirement Analysis"]
    }
  },
  projects: [
    {
      id: "hotel-network",
      title: "Hotel Network Design",
      category: "Networking",
      type: "Individual Project (Cisco Packet Tracer)",
      scale: "3-floor hotel network with multiple switches and approximately three routers.",
      description: "Designed and configured a comprehensive multi-floor hotel network architecture ensuring secure guest isolation, high-availability routing, and seamless wireless access.",
      technologies: ["VLANs", "Inter-VLAN Routing", "OSPF", "DHCP", "DNS", "Wireless Networking", "Subnetting", "Cisco Packet Tracer"],
      contribution: "Created entire topology layout, configured multi-router OSPF dynamic routing, defined VLAN segmentation, and deployed DHCP/DNS services for guest and staff networks.",
      github: "https://github.com/zeyadghaly805-cell",
      featured: true,
      topology: {
        type: "hotel",
        nodes: ["Internet / WAN", "Core Router (Gateway)", "Distribution Switches (3 Floors)", "Access Points & End User VLANs"]
      }
    },
    {
      id: "university-network",
      title: "University Network Design",
      category: "Networking",
      type: "Individual Project (Cisco Packet Tracer)",
      scale: "3-building university network with routers, switches, and servers.",
      description: "Engineered a robust multi-building academic campus network layout integrating administrative and student networks with secure remote administration protocols.",
      technologies: ["VLANs", "RIP Routing", "SSH", "Network Services", "Subnetting", "Cisco Packet Tracer"],
      contribution: "Implemented RIP routing protocols across multiple building segments, configured administrative SSH access, and verified end-to-end multi-subnet connectivity.",
      github: "https://github.com/zeyadghaly805-cell",
      featured: true,
      topology: {
        type: "university",
        nodes: ["Building 1 (Admin)", "Building 2 (Academic)", "Building 3 (Library/Data)", "Interconnecting Routers & Servers"]
      }
    },
    {
      id: "bank-management",
      title: "Bank Management System",
      category: "Software",
      type: "Academic Software Project",
      scale: "Object-Oriented Console / Desktop Application",
      description: "Built a robust banking simulation application enforcing strict object-oriented programming principles, account management logic, and secure transaction workflows.",
      technologies: ["C++", "C#", "OOP", "Data Structures"],
      contribution: "Designed modular class architectures for customer accounts, transaction histories, and security authentication checks.",
      github: "https://github.com/zeyadghaly805-cell",
      featured: false
    },
    {
      id: "car-application",
      title: "Car Application & Inventory",
      category: "Database",
      type: "Database-Driven Desktop Application",
      scale: "C# ADO.NET & SQL Server Integration",
      description: "Developed a database-connected application for managing car inventories, client records, and transaction logs with structured SQL queries.",
      technologies: ["C#", "ADO.NET", "SQL Server", "SQL"],
      contribution: "Created relational database schema, written optimized stored queries, and built data connectivity layers using ADO.NET.",
      github: "https://github.com/zeyadghaly805-cell",
      featured: false
    },
    {
      id: "tic-tac-toe",
      title: "Interactive Tic-Tac-Toe",
      category: "Software",
      type: "Programming Practice Project",
      scale: "C++ Console Application",
      description: "Created a clean, interactive console game to sharpen algorithmic thinking, input validation, and control flow in C++.",
      technologies: ["C++", "Control Flow", "Application Logic"],
      contribution: "Implemented game state matrix checking, win-condition algorithms, and turn-based player loops.",
      github: "https://github.com/zeyadghaly805-cell",
      featured: false
    },
    {
      id: "frontend-practice",
      title: "Frontend Landing Pages",
      category: "Frontend",
      type: "Web Development Practice",
      scale: "3 Responsive Landing Pages",
      description: "Built responsive landing pages while strengthening core HTML, CSS, and JavaScript fundamentals. (Focused on fundamentals rather than professional frontend services).",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      contribution: "Designed clean layouts, practiced CSS Flexbox/Grid, and handled basic DOM interactivity.",
      github: "https://github.com/zeyadghaly805-cell",
      featured: false
    }
  ],
  certifications: [
    {
      title: "CCNA Training & Labs",
      issuer: "Professional Networking Training",
      status: "Completed",
      type: "Certification / Training",
      description: "Comprehensive training covering routing, switching, VLANs, subnetting, OSPF, and practical Cisco Packet Tracer labs."
    },
    {
      title: "Linux Administration Training",
      issuer: "NTI (National Telecommunication Institute)",
      status: "Completed with Certificate",
      type: "Official Training",
      description: "Intensive training in Linux command line, user management, file permissions, storage mounting, services, and log auditing."
    },
    {
      title: "Fortinet Firewall / Cybersecurity",
      issuer: "NTI (National Telecommunication Institute)",
      status: "Completed with Certificate",
      type: "Official Training",
      description: "Practical training on firewall security concepts, network perimeter defense, and NSE4-focused foundational security principles."
    },
    {
      title: "DEPI Data Engineering Track",
      issuer: "DEPI Scholarship",
      status: "Currently Enrolled (6-Month Program)",
      type: "Scholarship / Ongoing",
      description: "Learning Python, Pandas, NumPy, Matplotlib, file handling, and data cleaning, with upcoming modules on Big Data and Azure."
    },
    {
      title: "Business English & Freelancing",
      issuer: "Professional Development Training",
      status: "Currently Ongoing",
      type: "Soft Skills & Career",
      description: "Studying professional communication, email etiquette, presentation skills, requirement gathering, and freelancing fundamentals."
    }
  ],
  roadmap: [
    { phase: "01", title: "Engineering Foundation", desc: "Tanta University Faculty of Engineering, GPA 3.77, rigorous core math and science." },
    { phase: "02", title: "Programming & CS Fundamentals", desc: "Mastering C++, C, C#, OOP, Data Structures, and relational databases." },
    { phase: "03", title: "Networking & CCNA", desc: "Designing 3-floor hotel & university networks in Packet Tracer with VLANs and OSPF." },
    { phase: "04", title: "Linux Administration (NTI)", desc: "Gaining practical CLI, permissioning, service management, and sysadmin skills." },
    { phase: "05", title: "Cybersecurity Fundamentals", desc: "Studying Fortinet firewalls, Wireshark, Nmap, and Kali Linux concepts." },
    { phase: "06", title: "Parallel: Data Engineering (DEPI)", desc: "Expanding technical versatility with Python, Pandas, NumPy, and database pipelines." },
    { phase: "07", title: "Long-Term Goal", desc: "Transitioning toward advanced Network Security, IT Infrastructure, and Cybersecurity engineering." }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filter projects based on category
  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return PORTFOLIO_DATA.projects;
    return PORTFOLIO_DATA.projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Notification Bar / Status Banner */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border-b border-cyan-500/20 py-2 px-4 text-xs text-cyan-300 text-center font-medium">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Seeking Network Engineering, IT Infrastructure & Cybersecurity Internships • Tanta, Egypt
        </span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              ZG
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block text-slate-100">Zeyad M. Ghaly</span>
              <span className="text-xs text-cyan-400 font-medium">Computer & Control Engineering</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Training</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href={PORTFOLIO_DATA.personal.cvPath} 
              download 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-5 space-y-4 backdrop-blur-2xl">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
            >
              Projects
            </a>
            <a 
              href="#roadmap" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
            >
              Roadmap
            </a>
            <a 
              href="#certifications" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
            >
              Training & Certifications
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
            >
              Contact
            </a>
            <div className="pt-2">
              <a 
                href={PORTFOLIO_DATA.personal.cvPath} 
                download 
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/50 to-slate-950 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-semibold mb-6 shadow-sm">
              <Shield className="w-3.5 h-3.5" />
              Tanta University • Faculty of Engineering (GPA 3.77)
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight mb-6">
              Zeyad Mohamed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ghaly</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4">
              Computer & Control Engineering Student
            </p>
            <p className="text-lg text-cyan-300 font-medium mb-8">
              Networking • IT Infrastructure • Linux • Cybersecurity
            </p>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Building practical foundations in networking, IT infrastructure, Linux, and cybersecurity — one project at a time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm transition-all"
              >
                Contact Me
              </a>
              <a 
                href={PORTFOLIO_DATA.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={PORTFOLIO_DATA.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Quick status badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 text-left">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/60">
                <span className="block text-xs text-slate-400 font-medium">Primary Focus</span>
                <span className="text-sm font-bold text-cyan-400">Networking & IT</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/60">
                <span className="block text-xs text-slate-400 font-medium">Academic Standing</span>
                <span className="text-sm font-bold text-slate-200">2nd Year (GPA 3.77)</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/60">
                <span className="block text-xs text-slate-400 font-medium">Key Training</span>
                <span className="text-sm font-bold text-slate-200">NTI Linux & Fortinet</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/60">
                <span className="block text-xs text-slate-400 font-medium">Goal</span>
                <span className="text-sm font-bold text-cyan-400">Network / Cyber Intern</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/40 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                <Cpu className="w-4 h-4" /> About Me
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                Motivated engineering student with a rigorous technical foundation.
              </h2>
              <p className="text-slate-300 leading-relaxed">
                I am a second-year Computer & Control Engineering student at Tanta University with a 3.77 GPA. My academic journey is strongly anchored in hardware-software integration, system controls, and robust networking architectures.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Beyond my core curriculum, I have actively pursued practical training in Linux system administration at NTI, completed rigorous CCNA networking labs, and built multi-floor simulated enterprise networks. My long-term professional trajectory is focused on transitioning from IT infrastructure and networking into advanced network security and cybersecurity.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 text-xs font-semibold">Tanta University</span>
                <span className="px-3 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 text-xs font-semibold">GPA: 3.77 / 4.00</span>
                <span className="px-3 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 text-xs font-semibold">NTI Linux & Firewall</span>
                <span className="px-3 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 text-xs font-semibold">DEPI Data Engineering</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Networking & Infrastructure</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Hands-on proficiency in CCNA principles, VLAN segmentation, OSPF dynamic routing, subnetting, and Cisco Packet Tracer topology simulations.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Cybersecurity & Linux</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  NTI-certified training in Linux administration, user/permission management, system logs, Fortinet firewall concepts, and packet analysis tools.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Data Engineering (DEPI)</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Currently enrolled in DEPI's 6-month Data Engineering track, studying Python, Pandas, NumPy, data cleaning, and database connectivity.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Software & CS Foundations</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Solid grounding in C++, C, C#, Object-Oriented Programming, Data Structures, and SQL Server database applications.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Technical Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-2 mb-4">
              Structured Competency Matrix
            </h2>
            <p className="text-slate-400 text-base">
              A clear overview of my technical proficiencies, highlighting my primary focus in networking and IT infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Networking - Highlighted Primary */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border-2 border-cyan-500/40 shadow-xl relative group">
              <div className="absolute top-4 right-4 bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-1 rounded-full font-semibold">
                Primary Strength
              </div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{PORTFOLIO_DATA.skills.networking.title}</h3>
              <span className="text-xs text-cyan-400 font-medium block mb-4">{PORTFOLIO_DATA.skills.networking.level}</span>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.skills.networking.items.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-800/90 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{PORTFOLIO_DATA.skills.cybersecurity.title}</h3>
              <span className="text-xs text-blue-400 font-medium block mb-4">{PORTFOLIO_DATA.skills.cybersecurity.level}</span>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.skills.cybersecurity.items.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Linux */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{PORTFOLIO_DATA.skills.linux.title}</h3>
              <span className="text-xs text-indigo-400 font-medium block mb-4">{PORTFOLIO_DATA.skills.linux.level}</span>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.skills.linux.items.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{PORTFOLIO_DATA.skills.programming.title}</h3>
              <span className="text-xs text-emerald-400 font-medium block mb-4">{PORTFOLIO_DATA.skills.programming.level}</span>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.skills.programming.items.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Computer Science & Databases */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{PORTFOLIO_DATA.skills.computerScience.title}</h3>
              <span className="text-xs text-purple-400 font-medium block mb-4">{PORTFOLIO_DATA.skills.computerScience.level}</span>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.skills.computerScience.items.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Engineering */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{PORTFOLIO_DATA.skills.dataEngineering.title}</h3>
              <span className="text-xs text-amber-400 font-medium block mb-4">{PORTFOLIO_DATA.skills.dataEngineering.level}</span>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.skills.dataEngineering.items.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-4">
                <CpuIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{PORTFOLIO_DATA.skills.frontend.title}</h3>
              <span className="text-xs text-rose-400 font-medium block mb-4">{PORTFOLIO_DATA.skills.frontend.level}</span>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.skills.frontend.items.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">{PORTFOLIO_DATA.skills.professional.title}</h3>
              <span className="text-xs text-teal-400 font-medium block mb-4">{PORTFOLIO_DATA.skills.professional.level}</span>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.skills.professional.items.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/30 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Practical Engineering</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-2">
                Featured Projects & Topology Labs
              </h2>
              <p className="text-slate-400 text-base mt-2 max-w-xl">
                Hands-on Cisco Packet Tracer networks, academic database applications, and software systems built during my engineering studies.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Networking', 'Software', 'Database', 'Frontend'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === tab 
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' 
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-md border border-cyan-800/40">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-300">
                    <span className="text-cyan-400">Scale:</span> {project.scale}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Conceptual Topology Preview for Network Projects */}
                  {project.topology && (
                    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-2">
                      <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                        Conceptual Topology Overview:
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                        {project.topology.nodes.map((node, i) => (
                          <React.Fragment key={i}>
                            <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-cyan-200">
                              {node}
                            </span>
                            {i < project.topology.nodes.length - 1 && (
                              <span className="text-cyan-500 font-bold">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-slate-400 block">My Contribution:</span>
                    <p className="text-xs text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60 leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="w-4 h-4" /> View Source on GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-xs text-slate-500 font-medium">
                    Packet Tracer / Academic
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Learning Journey & Roadmap Section */}
      <section id="roadmap" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Career Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-2 mb-4">
              Learning Journey & Long-Term Specialization
            </h2>
            <p className="text-slate-400 text-base">
              Progressive technical path from engineering fundamentals toward networking, IT infrastructure, and network security.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {PORTFOLIO_DATA.roadmap.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg relative group hover:border-cyan-500/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-sm shadow-md">
                  {step.phase}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Training & Certifications Section */}
      <section id="certifications" className="py-24 bg-slate-900/30 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Credentials & Training</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mt-2 mb-4">
              Training & Scholarship Programs
            </h2>
            <p className="text-slate-400 text-base">
              Clear distinction between completed official training and ongoing scholarship tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      cert.status.includes('Completed') 
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/50' 
                        : 'bg-amber-950/80 text-amber-300 border border-amber-800/50'
                    }`}>
                      {cert.status}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {cert.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-cyan-400">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-medium flex items-center justify-between">
                  <span>Verified Training</span>
                  <Award className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-cyan-400 pointer-events-none">
              <GraduationCap className="w-48 h-48" />
            </div>

            <div className="max-w-2xl relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" /> Academic Background
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                {PORTFOLIO_DATA.education.university}
              </h3>
              <p className="text-lg font-medium text-cyan-300">
                {PORTFOLIO_DATA.education.faculty} — {PORTFOLIO_DATA.education.department}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-sm">
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-xs">Current Level</span>
                  <span className="font-bold text-slate-200">{PORTFOLIO_DATA.education.level}</span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-xs">Expected Graduation</span>
                  <span className="font-bold text-slate-200">{PORTFOLIO_DATA.education.expectedGraduation}</span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-xs">Cumulative GPA</span>
                  <span className="font-bold text-cyan-400">{PORTFOLIO_DATA.education.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-6">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                Open to Internship Opportunities
              </h2>
              <p className="text-slate-300 leading-relaxed">
                I am actively seeking Network Engineering, IT Infrastructure, Summer, and Cybersecurity internship opportunities. Feel free to reach out via email, phone, or LinkedIn.
              </p>

              <div className="space-y-4 pt-4">
                <a 
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email Address</span>
                    <span className="text-slate-200 font-semibold text-sm">{PORTFOLIO_DATA.personal.email}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Phone Number</span>
                    <span className="text-slate-200 font-semibold text-sm">{PORTFOLIO_DATA.personal.phone}</span>
                  </div>
                </a>

                <a 
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">LinkedIn Profile</span>
                    <span className="text-slate-200 font-semibold text-sm">zeyad-ghaly</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-100 mb-6">Send a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-cyan-950/60 border border-cyan-800 p-6 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="font-bold text-cyan-200 text-lg">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">Thank you for reaching out. Zeyad will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Recruiter / Manager Name" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="name@company.com" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
                    <textarea 
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Discussing internship or career opportunity..." 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-xs">
              ZG
            </div>
            <span className="text-sm font-bold text-slate-300">Zeyad Mohamed Ghaly</span>
          </div>

          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} Zeyad Mohamed Ghaly. Computer & Control Engineering Student. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
