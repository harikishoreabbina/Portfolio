export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">

        <a
          href="#"
          className="text-sm font-semibold tracking-[0.18em] text-white"
        >
          VYKUNTA KISHORE
        </a>

        <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#education" className="transition hover:text-white">
            Education
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}