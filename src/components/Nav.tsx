export default function Nav({ onTabChange, currentTab }: { onTabChange: (tab: string) => void; currentTab: string }) {
  const items = [
    { label: 'Education', value: 'education' },
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
  ]

  return (
    <nav className="flex justify-center sm:justify-start sm:px-16 py-4 border-b border-line flex">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onTabChange(item.value)}
          className={`mr-10 text-xs tracking-widest uppercase font-mono border-b transition-colors duration-200 ${
            item.value === currentTab
              ? 'text-ink border-accent'
              : 'text-muted border-transparent hover:text-ink'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
