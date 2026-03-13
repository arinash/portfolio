import SectionLabel from "./SectionLabel"
import { education, languages } from '../data/data'

export default function Education() {
  return (
    <div className='px-16 py-8'>
        <SectionLabel>Education</SectionLabel>
        <div>
        {education.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-1 py-7 border-b border-line last:border-none"
          >
            <div>
              <h3
                className="text-xl leading-tight mb-1"
              >
                {item.degree}
              </h3>
              <p className="text-muted text-xs font-mono">{item.school}</p>
            </div>
            <div className="text-right text-muted text-xs font-mono pt-1 whitespace-nowrap">
              {item.period}
            </div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <SectionLabel>Languages</SectionLabel>
      <div className="mt-4 flex flex-wrap gap-4">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="px-4 py-2 border border-line text-xs font-mono text-muted"
          >
            <span className="text-ink mr-2">{lang.name}</span>
            {lang.level}
          </div>
        ))}
      </div>

    </div>
  )
}
