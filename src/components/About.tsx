export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-black/40 px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-[350px] w-[350px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          About Me
        </p>

        {/* Main About Layout */}
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Building reliable data platforms from ingestion to analytics.
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-6 text-base leading-8 text-zinc-400 md:text-lg">
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
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-semibold text-white">
              4+ Years
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Data Engineering & Analytics
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-semibold text-white">
              Snowflake + dbt
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Cloud Data Warehousing
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-semibold text-white">
              AWS + DataStage
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Enterprise Data Integration
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]">
            <p className="text-2xl font-semibold text-white">
              Python + SQL + Spark
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Data Processing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}