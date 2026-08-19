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
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-24">

      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-10 top-20 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl">

        <p className="text-sm md:text-base uppercase tracking-[0.25em] text-zinc-400">
          Hi, you finally found
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Vykunta Kishore
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-zinc-200">
            DATA ENGINEER
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-zinc-200">
            SNOWFLAKE DEVELOPER
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-zinc-200">
            DATA ANALYTICS
          </span>
        </div>

        <p className="mt-8 max-w-2xl text-base md:text-lg leading-8 text-zinc-400">
          I build reliable data pipelines and cloud data solutions that transform
          raw data into analytics-ready information.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Open to Full-Time Opportunities
        </div>

        {/* Contact Information */}
        <div className="mt-8 flex flex-col gap-5 text-base text-zinc-200 md:flex-row md:flex-wrap md:gap-8 md:text-lg">

          <div className="flex items-center gap-3">
            <MapPin size={22} />
            <span>Chicago, IL</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={22} />
            <span>vykuntakishore@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={22} />
            <span>+1 (856) 526-0810</span>
          </div>

        </div>

        {/* Main Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/resume.pdf"
            className="flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-black transition duration-300 hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </a>

          <a
            href="#projects"
            className="flex items-center gap-3 rounded-full border border-zinc-700 px-7 py-3.5 text-base font-semibold transition duration-300 hover:border-white"
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
            className="transition duration-300 hover:text-white hover:scale-110"
          >
            <FaLinkedinIn size={28} />
          </a>

          <a
            href="mailto:vykuntakishore@gmail.com"
            aria-label="Email"
            className="transition duration-300 hover:text-white hover:scale-110"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://github.com/harikishoreabbina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition duration-300 hover:text-white hover:scale-110"
          >
            <FaGithub size={28} />
          </a>

        </div>

      </div>
    </section>
  );
}