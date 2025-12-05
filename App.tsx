import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from './constants';
import Section from './components/Section';
import { Icons } from './components/Icon';
import { Publication } from './types';

// Citation Graph Component with accurate data
const CitationGraph: React.FC = () => {
    // Data matched to citations per year: 2, 9, 45, 177, 231, 233
    const data = [2, 9, 45, 177, 231, 233];
    const years = ['2020', '2021', '2022', '2023', '2024', '2025'];
    const maxVal = Math.max(...data);
    const totalCitations = 704;
    
    return (
        <div className="mt-6 mb-2 w-full">
            <div className="flex justify-between items-end mb-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Citations</h3>
                <span className="text-xl font-bold text-slate-800">{totalCitations}</span>
            </div>
            
            <div className="h-24 w-full flex items-end gap-1 px-1 border-b border-l border-slate-200">
                {data.map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col justify-end group relative">
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                            {years[idx]}: {val}
                        </div>
                        <div 
                            className="bg-blue-200 hover:bg-accent transition-colors rounded-t-sm w-full"
                            style={{ height: `${(val / maxVal) * 100}%` }}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>2020</span>
                <span>2025</span>
            </div>
        </div>
    );
};

const PublicationGroup: React.FC<{ title: string; papers: Publication[] }> = ({ title, papers }) => {
    if (papers.length === 0) return null;
    return (
        <div className="mb-8 last:mb-0">
            <h3 className="text-lg font-bold text-slate-700 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                {title}
                <span className="text-xs font-normal text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">{papers.length}</span>
            </h3>
            <div className="space-y-4">
                {papers.map((pub, idx) => (
                    <div key={idx} className="group p-4 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all bg-slate-50/50">
                        <h4 className="font-semibold text-slate-900 group-hover:text-accent transition-colors leading-snug mb-1">
                            {pub.title}
                        </h4>
                        <p className="text-sm text-slate-500 mb-2">{pub.authors}</p>
                        <div className="flex flex-wrap gap-2 items-center text-xs">
                            <span className={`px-2 py-0.5 rounded font-medium ${
                                pub.venue.includes('CVPR') || pub.venue.includes('NeurIPS') || pub.venue.includes('ICCV') || pub.venue.includes('ICLR') || pub.venue.includes('ICML')
                                ? 'bg-indigo-50 text-indigo-700' 
                                : 'bg-slate-200 text-slate-600'
                            }`}>
                                {pub.venue}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500">{pub.year}</span>
                            {pub.status && (
                                <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">{pub.status}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('experience');

  // Handle scroll spy for active navigation state
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'experience', label: 'Experience', icon: 'Briefcase' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'publications', label: 'Publications', icon: 'BookOpen' },
    { id: 'skills', label: 'Skills', icon: 'Code' },
    { id: 'patents', label: 'Patents', icon: 'Lightbulb' },
    { id: 'awards', label: 'Awards', icon: 'Award' },
  ];

  // Group publications
  const firstAuthored = RESUME_DATA.publications.filter(p => p.category === 'First Author');
  const nonFirstAuthored = RESUME_DATA.publications.filter(p => p.category !== 'First Author');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-600">
      
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col w-72 fixed h-screen bg-white border-r border-slate-200 overflow-y-auto scrollbar-hide">
        <div className="p-8 pb-4">
            <div className="w-24 h-24 bg-slate-200 rounded-full mb-4 overflow-hidden shadow-inner">
                 <img src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 leading-tight">{RESUME_DATA.name}</h1>
            <p className="text-accent font-medium text-sm mt-1">{RESUME_DATA.role}</p>
            
            <CitationGraph />
        </div>

        <nav className="flex-1 px-4 py-2 space-y-1">
            {navItems.map((item) => {
                const Icon = Icons[item.icon as keyof typeof Icons];
                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            activeSection === item.id 
                            ? 'bg-blue-50 text-accent' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    >
                        <Icon size={18} />
                        {item.label}
                    </button>
                );
            })}
        </nav>

        <div className="p-8 border-t border-slate-100">
            <div className="space-y-3 text-sm">
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors">
                    <Icons.Mail size={16} />
                    <span className="truncate">{RESUME_DATA.contact.email}</span>
                </a>
                <a href={`tel:${RESUME_DATA.contact.phone.replace(/ /g,'')}`} className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors">
                    <Icons.Phone size={16} />
                    <span>{RESUME_DATA.contact.phone}</span>
                </a>
                <a href={`https://linkedin.com/in/${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors">
                    <Icons.Linkedin size={16} />
                    <span>LinkedIn</span>
                </a>
                 <a href="https://scholar.google.com/citations?user=ZsgWCyMAAAAJ&hl=en" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors">
                    <Icons.FileText size={16} />
                    <span>Google Scholar</span>
                </a>
            </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 sticky top-0 z-40 p-4 flex items-center justify-between shadow-sm">
         <div>
            <h1 className="font-bold text-slate-900">{RESUME_DATA.name}</h1>
            <p className="text-xs text-accent">{RESUME_DATA.role}</p>
         </div>
         <div className="flex gap-2">
             <a href={`mailto:${RESUME_DATA.contact.email}`} className="p-2 bg-slate-100 rounded-full text-slate-600">
                 <Icons.Mail size={18} />
             </a>
         </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-6 md:p-12 lg:p-16 max-w-5xl mx-auto">
        
        {/* Intro / About (Hidden on Desktop Sidebar, visible here for structure on mobile) */}
        <div className="mb-12 md:hidden">
             <div className="w-20 h-20 bg-slate-200 rounded-full mb-4 overflow-hidden">
                 <img src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
                Staff AI Research Scientist specializing in Computer Vision, Generative AI, and efficient model deployment on edge devices.
            </p>
            
            {/* Added CitationGraph for Mobile */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <CitationGraph />
            </div>
        </div>

        <Section id="experience" title="Experience" icon="Briefcase">
            <div className="space-y-12">
                {RESUME_DATA.experience.map((job, idx) => (
                    <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full before:ring-4 before:ring-blue-50 border-l-2 border-slate-100 pb-2 last:border-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                            <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                            <span className="text-sm font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">{job.period}</span>
                        </div>
                        <div className="text-accent font-medium mb-4">{job.company}, {job.location}</div>
                        <ul className="space-y-2">
                            {job.achievements.map((achievement, aIdx) => (
                                <li key={aIdx} className="text-slate-600 leading-relaxed text-sm relative pl-4">
                                    <span className="absolute left-0 top-2 w-1 h-1 bg-slate-300 rounded-full"></span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>

        <Section id="education" title="Education" icon="GraduationCap">
            <div className="grid gap-6">
                {RESUME_DATA.education.map((edu, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold text-slate-900">{edu.institution}</h3>
                                <p className="text-slate-600 text-sm">{edu.degree}</p>
                            </div>
                            <span className="text-xs font-semibold bg-green-50 text-green-600 px-2 py-1 rounded border border-green-100">
                                GPA {edu.gpa}
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-slate-500 mt-4">
                            <span>{edu.year}</span>
                            {edu.details.map((detail, dIdx) => (
                                <span key={dIdx} className="italic">{detail}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        <Section id="publications" title="Selected Publications" icon="BookOpen">
            <PublicationGroup title="First-Authored Papers" papers={firstAuthored} />
            <PublicationGroup title="Non-First Author Papers" papers={nonFirstAuthored} />
        </Section>

        <Section id="skills" title="Technical Skills" icon="Code">
             <div className="grid sm:grid-cols-2 gap-6">
                {RESUME_DATA.skills.map((category, idx) => (
                    <div key={idx} className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white opacity-5 rounded-full blur-xl"></div>
                        <h3 className="font-bold text-lg mb-4 text-blue-200">{category.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        <Section id="patents" title="Patents" icon="Lightbulb">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Title</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</span>
                </div>
                <div className="divide-y divide-slate-100">
                    {RESUME_DATA.patents.slice(0, 8).map((patent, idx) => (
                        <div key={idx} className="p-4 flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors">
                            <p className="text-sm font-medium text-slate-700">{patent.title}</p>
                            <span className={`text-xs px-2 py-1 rounded font-medium whitespace-nowrap ${
                                patent.status === 'Granted' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-amber-50 text-amber-600'
                            }`}>
                                {patent.status}
                            </span>
                        </div>
                    ))}
                    {RESUME_DATA.patents.length > 8 && (
                        <div className="p-3 text-center text-xs text-slate-400 italic">
                            + {RESUME_DATA.patents.length - 8} more patents filed/granted
                        </div>
                    )}
                </div>
            </div>
        </Section>

        <Section id="awards" title="Awards & Recognition" icon="Award">
             <div className="grid sm:grid-cols-2 gap-4">
                 {RESUME_DATA.recognition.map((award, idx) => (
                     <div key={idx} className="border border-slate-200 p-5 rounded-xl bg-white hover:border-accent/50 transition-colors">
                         <div className="flex justify-between items-start mb-2">
                             <h3 className="font-bold text-slate-900 text-sm">{award.title}</h3>
                             <span className="text-xs font-mono text-slate-400">{award.year}</span>
                         </div>
                         <p className="text-xs font-semibold text-accent mb-2">{award.issuer}</p>
                         <p className="text-xs text-slate-600 leading-relaxed">{award.description}</p>
                     </div>
                 ))}
             </div>
        </Section>

         {/* Projects Section - Optional if space permits, or merged */}
         <Section id="projects" title="Key Projects" icon="Cpu">
            <div className="space-y-6">
                {RESUME_DATA.projects.map((proj, idx) => (
                     <div key={idx}>
                        <div className="flex justify-between items-baseline mb-1">
                             <h3 className="font-bold text-slate-900">{proj.title}</h3>
                             <span className="text-xs text-slate-400">{proj.period}</span>
                        </div>
                        <ul className="list-disc list-inside text-sm text-slate-600 marker:text-slate-300">
                            {proj.description.map((desc, dIdx) => (
                                <li key={dIdx}>{desc}</li>
                            ))}
                        </ul>
                     </div>
                ))}
            </div>
        </Section>
        
        <footer className="mt-20 py-8 border-t border-slate-200 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Shubhankar Borse. All rights reserved.</p>
            <p className="mt-2 text-xs">Built with React & Tailwind</p>
        </footer>

      </main>
    </div>
  );
};

export default App;
