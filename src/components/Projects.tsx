import SectionLabel from "./SectionLabel"
import { projects, papers } from '../data/data'

export default function Projects() {
  return (
    <div className='px-16 py-8'>
        <SectionLabel>Projects</SectionLabel>
        <div>
            {projects.map((item, i) => (
            <div 
                key={i}
                className="py-7 border-b border-line last:border-none"
            >
                <div className="flex justify-between items-baseline gap-4 mb-2 flex-wrap">
                    <h3
                        className="text-xl leading-tight mb-1"
                    >
                        {item.title}
                    </h3>
                </div>
                <ul className="flex flex-col gap-1">
                {item.description.map((bullet, idx) => (
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

        <SectionLabel>Publications</SectionLabel>
        <div>
            {papers.map((item, i) => (
            <div 
                key={i}
                className="py-7 border-b border-line last:border-none"
            >
                <div className="flex justify-between items-baseline gap-4 mb-2 flex-wrap">
                    <h3
                        className="text-xl leading-tight mb-1"
                    >
                        <a 
                            href="https://immersive-reality-lab.de/pages/publicationDetail.html?id=C98"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-muted"
                        >
                            {item.title}
                        </a>
                    </h3>
                </div>
                <ul className="flex flex-col gap-1">
                {item.description.map((bullet, idx) => (
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

    </div>
  )
}
