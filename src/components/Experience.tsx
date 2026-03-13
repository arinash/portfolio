import SectionLabel from "./SectionLabel"
import { experience, skillGroups } from '../data/data'

export default function Experience() {
  return (
    <div className='px-16 py-8'>
        <SectionLabel>Professional Experience</SectionLabel>
        <div>
            {experience.map((item, i) => (
            <div 
                key={i}
                className="py-7 border-b border-line last:border-none"
            >
                <div className="flex justify-between items-baseline gap-4 mb-2 flex-wrap">
                    <h3
                        className="text-xl leading-tight mb-1"
                    >
                        {item.role}
                    </h3>
                    <span className="text-muted text-xs font-mono whitespace-nowrap">
                        {item.period}
                    </span>
                </div>
                <p className="text-sm text-accent font-mono tracking-normal uppercase mb-3">
                    {item.company}
                </p>
                <ul className="flex flex-col gap-1">
                {item.bullets.map((bullet, idx) => (
                    <li key={idx}
                        className="relative pl-4 text-muted text-xs font-mono leading-relaxed">
                        <span className="absolute left-0 text-line select-none">—</span>
                        {bullet}
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>

        {/* Skills */}
        <div className="mt-10 pt-8 border-t border-line">
            <SectionLabel>Skills</SectionLabel>
            <div className="flex flex-col gap-4">
                {skillGroups.map((group) => (
                <div
                    key={group.label}
                    className="flex flex-wrap items-baseline gap-2"
                >
                    <span className="text-xs uppercase tracking-normal text-muted font-mono min-w-[100px]">
                        {group.label}
                    </span>
                    {group.skills.map((skill) => (
                    <span
                        key={skill}
                        className="text-ink px-4 py-2 border border-line text-xs font-mono text-muted"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
