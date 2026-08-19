import { Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Left */}
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-white">
            VYKUNTA KISHORE
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Data Engineer | Snowflake | dbt | AWS
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-zinc-400">

          <a
            href="https://www.linkedin.com/in/vykunta-kishore-67ba79402"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <FaLinkedinIn size={20} />
          </a>

          <a
            href="mailto:vykuntakishore@gmail.com"
            aria-label="Email"
            className="transition hover:text-white"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/harikishoreabbina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <FaGithub size={21} />
          </a>

          <span className="hidden h-5 w-px bg-white/10 md:block" />

          <p className="text-sm text-zinc-600">
            © 2026 Vykunta Kishore
          </p>

        </div>

      </div>
    </footer>
  );
}