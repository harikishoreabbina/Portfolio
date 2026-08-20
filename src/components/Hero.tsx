import {
  MapPin,
  Mail,
  Phone,
  Download,
  ArrowRight,
} from "lucide-react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative w-full max-w-full overflow-x-hidden px-6 pb-16 pt-28 md:px-12 md:pt-24 lg:px-20">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] max-w-full -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-0 top-20 h-[300px] w-[300px] max-w-full rounded-full bg-purple-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="w-full min-w-0 max-w-5xl">

        <p className="text-sm uppercase tracking-[0.18em] text-zinc-400 sm:text-base sm:tracking-[0.25em]">
          Hi, you finally found
        </p>

        <h1 className="mt-4 w-full max-w-full break-words text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
          Vykunta Kishore
        </h1>

        {/* Role Badges */}
        <div className="mt-7 flex w-full max-w-full flex-wrap gap-2 sm:gap-3">

          <span className="max-w-full break-words rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium tracking-wide text-zinc-200 sm:px-4 sm:text-sm">
            DATA ENGINEER
          </span>

          <span className="max-w-full break-words rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium tracking-wide text-zinc-200 sm:px-4 sm:text-sm">
            SNOWFLAKE DEVELOPER
          </span>

          <span className="max-w-full break-words rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium tracking-wide text-zinc-200 sm:px-4 sm:text-sm">
            DATA ANALYTICS
          </span>

        </div>

        {/* Intro */}
        <p className="mt-7 max-w-2xl break-words text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
          I build reliable data pipelines and cloud data solutions that
          transform raw data into analytics-ready information.
        </p>

        {/* Availability */}
        <div className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">

          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />

          <span className="break-words">
            Open to Full-Time Opportunities
          </span>

        </div>

        {/* Contact */}
        <div className="mt-7 flex min-w-0 flex-col gap-4 text-base text-zinc-200 md:flex-row md:flex-wrap md:gap-8 md:text-lg">

          <div className="flex min-w-0 items-center gap-3">
            <MapPin size={22} className="shrink-0" />
            <span>Chicago, IL</span>
          </div>

          <div className="flex min-w-0 items-center gap-3">
            <Mail size={22} className="shrink-0" />

            <a
              href="mailto:vykuntakishore@gmail.com"
              className="min-w-0 break-all transition hover:text-white"
            >
              vykuntakishore@gmail.com
            </a>
          </div>

          <div className="flex min-w-0 items-center gap-3">
            <Phone size={22} className="shrink-0" />

            <a
              href="tel:+18565260810"
              className="transition hover:text-white"
            >
              +1 (856) 526-0810
            </a>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">

          <a
            href="/resume.pdf"
            download
            className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-black transition duration-300 hover:scale-105 sm:w-auto"
          >
            <Download size={20} />
            Download Resume
          </a>

          <a
            href="#projects"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-zinc-700 px-7 py-3.5 text-base font-semibold text-white transition duration-300 hover:border-white sm:w-auto"
          >
            View Projects
            <ArrowRight size={20} />
          </a>

        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-7 text-zinc-300">

          <a
            href="https://www.linkedin.com/in/vykunta-kishore-67ba79402"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition duration-300 hover:scale-110 hover:text-white"
          >
            <FaLinkedinIn size={28} />
          </a>

          <a
            href="mailto:vykuntakishore@gmail.com"
            aria-label="Email"
            className="transition duration-300 hover:scale-110 hover:text-white"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://github.com/harikishoreabbina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition duration-300 hover:scale-110 hover:text-white"
          >
            <FaGithub size={28} />
          </a>

        </div>

      </div>
    </section>
  );
}