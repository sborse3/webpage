import React from 'react';
import { Icons, IconName } from './Icon';

interface SectionProps {
  id: string;
  title: string;
  icon?: IconName;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children, className = "" }) => {
  const IconComponent = icon ? Icons[icon] : null;

  return (
    <section id={id} className={`py-12 border-b border-slate-200 last:border-0 scroll-mt-16 ${className}`}>
      <div className="flex items-center gap-3 mb-8">
        {IconComponent && (
            <div className="p-2 bg-blue-50 text-accent rounded-lg">
                <IconComponent size={24} />
            </div>
        )}
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="pl-2 sm:pl-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
