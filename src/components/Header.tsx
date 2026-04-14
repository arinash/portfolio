export default function Header() {
  return (
    <header className="bg-accent px-16 pt-16 pb-10 flex items-end justify-between gap-8 flex-wrap">
        <div>
            <h1 className="font-mono leading-none tracking-tight text-4xl md:text-6xl text-white">
                Arina Shumeliuk
            </h1>
        </div>
        <div className="md:text-right text-left text-white text-xs leading-6 font-mono">
            <p>Frontend Developer · Berlin</p>
            <a href="mailto:arina.shumeliuk@gmail.com" 
                className="hover:text-muted hover:underline transition-colors duration-200">
                    arina.shumeliuk@gmail.com
            </a>
            <br />
            <a href="https://github.com/arinash" 
                className="hover:text-muted hover:underline transition-colors duration-200">
                github.com/arinash
            </a>
        </div>
    </header>
  )
}
