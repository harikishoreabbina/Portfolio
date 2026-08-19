import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/10 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Contact
        </p>

        {/* Main Contact Card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 lg:p-16">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left Side */}
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Let&apos;s build something meaningful with data.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
                I&apos;m open to full-time Data Engineering opportunities and
                conversations around cloud data platforms, Snowflake, dbt,
                AWS, analytics, and modern data engineering.
              </p>

              <a
                href="mailto:vykuntakishore@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105"
              >
                <Mail size={20} />
                Send Me an Email
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Right Side */}
            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Location
                  </p>

                  <p className="mt-1 text-lg text-white">
                    Chicago, IL
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Email
                  </p>

                  <a
                    href="mailto:vykuntakishore@gmail.com"
                    className="mt-1 block text-lg text-white transition hover:text-zinc-300"
                  >
                    vykuntakishore@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Phone
                  </p>

                  <a
                    href="tel:+18565260810"
                    className="mt-1 block text-lg text-white transition hover:text-zinc-300"
                  >
                    +1 (856) 526-0810
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">

                <p className="text-sm text-zinc-500">
                  Connect
                </p>

                <div className="mt-4 flex gap-4">

                  <a
                    href="https://www.linkedin.com/in/vykunta-kishore-67ba79402"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                  >
                    <FaLinkedinIn size={21} />
                  </a>

                  <a
                    href="mailto:vykuntakishore@gmail.com"
                    aria-label="Email"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                  >
                    <Mail size={21} />
                  </a>

                  <a
                    href="https://github.com/harikishoreabbina"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                  >
                    <FaGithub size={22} />
                  </a>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}