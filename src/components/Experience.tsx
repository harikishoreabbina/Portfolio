export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/10 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Experience
        </p>

        <h2 className="mt-6 text-3xl font-bold md:text-5xl">
          Professional Journey
        </h2>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Vertical Line */}
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-10">

            {/* Fifth Third Bank */}
            <div className="relative md:pl-12">

              <div className="absolute left-0 top-3 hidden h-4 w-4 rounded-full border-4 border-black bg-blue-400 md:block" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-8">

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Fifth Third Bank
                    </h3>

                    <p className="mt-1 text-lg text-zinc-400">
                      Data Engineer
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm text-zinc-400">
                      Mar 2024 – Present
                    </p>

                    <p className="mt-1 text-sm text-zinc-600">
                      Chicago, Illinois
                    </p>
                  </div>

                </div>

                <ul className="mt-6 space-y-3 leading-7 text-zinc-400">
                  <li>
                    • Built enterprise-scale ETL/ELT pipelines using IBM
                    DataStage, AWS S3, Snowflake, and dbt.
                  </li>

                  <li>
                    • Engineered Snowflake pipelines using Bronze, Silver,
                    and Gold Medallion Architecture layers.
                  </li>

                  <li>
                    • Implemented incremental dbt processing, data-quality
                    controls, and CI/CD across DEV, QA/UAT, and PROD.
                  </li>
                </ul>

                {/* Technology Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Snowflake",
                    "dbt",
                    "AWS",
                    "DataStage",
                    "SQL",
                    "Python",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {/* LTIMindtree */}
            <div className="relative md:pl-12">

              <div className="absolute left-0 top-3 hidden h-4 w-4 rounded-full border-4 border-black bg-purple-400 md:block" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-8">

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      LTIMindtree
                    </h3>

                    <p className="mt-1 text-lg text-zinc-400">
                      Data Analyst
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm text-zinc-400">
                      Feb 2022 – Jul 2023
                    </p>

                    <p className="mt-1 text-sm text-zinc-600">
                      Hyderabad, India
                    </p>
                  </div>

                </div>

                <ul className="mt-6 space-y-3 leading-7 text-zinc-400">
                  <li>
                    • Built ETL workflows using Python, Apache Spark,
                    PySpark, and Spark SQL.
                  </li>

                  <li>
                    • Developed Power BI dashboards and dimensional data
                    models for business reporting.
                  </li>

                  <li>
                    • Performed large-scale cleansing, profiling,
                    deduplication, and quality validation.
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "PySpark",
                    "Spark SQL",
                    "Power BI",
                    "SQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {/* Aadhya Skills */}
            <div className="relative md:pl-12">

              <div className="absolute left-0 top-3 hidden h-4 w-4 rounded-full border-4 border-black bg-zinc-500 md:block" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-8">

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Aadhya Skills
                    </h3>

                    <p className="mt-1 text-lg text-zinc-400">
                      Summer Intern
                    </p>
                  </div>

                  <p className="text-sm text-zinc-400">
                    Jun 2021 – Jul 2021
                  </p>

                </div>

                <ul className="mt-6 space-y-3 leading-7 text-zinc-400">
                  <li>
                    • Developed NI LabVIEW applications for sensor data
                    acquisition, monitoring, and automation.
                  </li>

                  <li>
                    • Worked with calibration, signal validation, and
                    instrumentation workflows.
                  </li>
                </ul>

              </div>
            </div>

            {/* Tessolve */}
            <div className="relative md:pl-12">

              <div className="absolute left-0 top-3 hidden h-4 w-4 rounded-full border-4 border-black bg-zinc-600 md:block" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] md:p-8">

                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      Tessolve
                    </h3>

                    <p className="mt-1 text-lg text-zinc-400">
                      Summer Intern
                    </p>
                  </div>

                  <p className="text-sm text-zinc-400">
                    Jun 2021
                  </p>

                </div>

                <ul className="mt-6 space-y-3 leading-7 text-zinc-400">
                  <li>
                    • Completed hands-on training in embedded systems,
                    IoT, and industrial automation.
                  </li>

                  <li>
                    • Learned sensor interfacing, data acquisition,
                    monitoring, and connected-device workflows.
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}