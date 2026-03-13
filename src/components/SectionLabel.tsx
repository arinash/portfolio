export default function SectionLabel({children}: { children: React.ReactNode }) {
  return (
    <p className="text-xl tracking-normal uppercase text-accent mb-4 font-mono">
        {children}
    </p>
  )
}
