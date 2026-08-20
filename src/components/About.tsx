"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full max-w-full overflow-x-hidden px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] max-w-full rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute right-0 top-20 h-[400px] w-[400px] max-w-full rounded-full bg-purple-500/5 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Animated Main Content */}
      <motion.div
        className="mx-auto w-full min-w-0 max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          About Me
        </p>

        {/* Main Layout */}
        <div className="mt-8 grid w-full min-w-0 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Side */}
          <div className="min-w-0">
            <h2 className="w-full max-w-full break-words text-3xl font-bold leading-tight md:text-5xl">
              Building reliable data platforms from ingestion to analytics.
            </h2>
          </div>

          {/* Right Side */}
          <div className="min-w-0 space-y-6 break-words text-base leading-8 text-zinc-400 md:text-lg">

            <p>
              I am a Data Engineer with 4+ years of combined experience in
              data engineering and analytics, focused on building scalable
              ETL/ELT pipelines and trusted data products.
            </p>

            <p>
              My work spans AWS, Snowflake, dbt Core, IBM DataStage, SQL,
              Python, and Spark, with hands-on experience across ingestion,
              transformation, incremental processing, dimensional modeling,
              data quality, governance, and CI/CD.
            </p>

            <p>
              I enjoy designing data solutions that make information easier
              to trust, maintain, and use for regulatory reporting, analytics,
              business intelligence, and downstream decision-making.
            </p>

          </div>
        </div>

        {/* Highlight Cards */}
        <div className="mt-16 grid w-full min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="break-words text-2xl font-semibold text-white">
              4+ Years
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Data Engineering & Analytics
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="break-words text-2xl font-semibold text-white">
              Snowflake + dbt
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Cloud Data Warehousing
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="break-words text-2xl font-semibold text-white">
              AWS + DataStage
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Enterprise Data Integration
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="break-words text-2xl font-semibold text-white">
              Python + SQL + Spark
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Data Processing
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}