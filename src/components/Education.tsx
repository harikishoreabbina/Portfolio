import Image from "next/image";

export default function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-white/10 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Education
        </p>

        <h2 className="mt-6 text-3xl font-bold md:text-5xl">
          Academic Background
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
          My academic background combines Data Science with Electronics and
          Computer Science, providing a strong foundation across data systems,
          analytics, programming, machine learning, and emerging technologies.
        </p>

        {/* Education Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Rowan University */}
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-white/20">

            {/* Logo Banner */}
            <div className="flex h-52 items-center justify-center bg-white p-8">
              <Image
                src="/rowan-logo.png"
                alt="Rowan University logo"
                width={420}
                height={180}
                className="max-h-40 w-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-8 text-center md:p-10">

              <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                Rowan University
              </h3>

              <p className="mt-7 text-xl leading-8 text-zinc-200">
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
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </article>

          {/* KL University */}
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-white/20">

            {/* Logo Banner */}
            <div className="flex h-52 items-center justify-center bg-white p-8">
              <Image
                src="/klu-logo.png"
                alt="KL University logo"
                width={420}
                height={180}
                className="max-h-40 w-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-8 text-center md:p-10">

              <h3 className="text-2xl font-bold uppercase tracking-wide text-white">
                KL University
              </h3>

              <p className="mt-7 text-xl leading-8 text-zinc-200">
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
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </article>

        </div>

      </div>
    </section>
  );
}