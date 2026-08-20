"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full max-w-full overflow-x-hidden border-t border-white/10 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Education
          </p>

          <h2 className="mt-6 break-words text-3xl font-bold md:text-5xl">
            Academic Background
          </h2>

          <p className="mt-6 max-w-2xl break-words text-base leading-8 text-zinc-400 md:text-lg">
            My academic background combines Data Science with Electronics and
            Computer Science, providing a strong foundation across data systems,
            analytics, programming, machine learning, and emerging technologies.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="mt-14 grid min-w-0 gap-8 lg:grid-cols-2">

          {/* Rowan University */}
          <motion.article
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: "easeOut",
            }}
            className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111827] transition-colors duration-300 hover:border-white/20"
          >

            {/* Rowan Logo */}
            <div className="flex h-52 w-full items-center justify-center overflow-hidden bg-white p-6 sm:p-8">
              <Image
                src="/rowan-logo.png"
                alt="Rowan University logo"
                width={420}
                height={180}
                className="max-h-40 max-w-full w-auto object-contain"
              />
            </div>

            {/* Rowan Content */}
            <div className="min-w-0 p-7 text-center md:p-10">

              <h3 className="break-words text-2xl font-bold uppercase tracking-wide text-white">
                Rowan University
              </h3>

              <p className="mt-7 break-words text-xl leading-8 text-zinc-200">
                Master of Science in Data Science
              </p>

              <p className="mt-2 text-lg text-zinc-300">
                Aug 2023 – Apr 2025
              </p>

              <p className="mt-3 text-base text-zinc-400">
                GPA: 3.5
              </p>

              {/* Coursework */}
              <div className="mt-8">

                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-300">
                  Relevant Coursework
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {[
                    "Data Warehousing",
                    "Database Management Systems",
                    "Data Mining",
                    "Probability & Statistics",
                    "Multivariate Data Analysis",
                    "Visual Analytics",
                    "Machine Learning",
                  ].map((course) => (
                    <span
                      key={course}
                      className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </motion.article>

          {/* KL University */}
          <motion.article
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111827] transition-colors duration-300 hover:border-white/20"
          >

            {/* KL Logo */}
            <div className="flex h-52 w-full items-center justify-center overflow-hidden bg-white p-6 sm:p-8">
              <Image
                src="/klu-logo.png"
                alt="KL University logo"
                width={420}
                height={180}
                className="max-h-40 max-w-full w-auto object-contain"
              />
            </div>

            {/* KL Content */}
            <div className="min-w-0 p-7 text-center md:p-10">

              <h3 className="break-words text-2xl font-bold uppercase tracking-wide text-white">
                KL University
              </h3>

              <p className="mt-7 break-words text-xl leading-8 text-zinc-200">
                Bachelor of Technology in Electronics and Computer Science
              </p>

              <p className="mt-2 text-lg text-zinc-300">
                Jul 2019 – Mar 2023
              </p>

              <p className="mt-3 text-base text-zinc-400">
                Grade: 8.9
              </p>

              {/* Coursework */}
              <div className="mt-8">

                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-300">
                  Relevant Coursework
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {[
                    "Database Management Systems",
                    "Robotics",
                    "Autonomous Vehicles",
                    "Python",
                    "C Programming",
                    "Java",
                  ].map((course) => (
                    <span
                      key={course}
                      className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </motion.article>

        </div>

      </div>
    </section>
  );
}