import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function StockAnalysisPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">

          {/* Back Link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mt-12">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Featured Project
            </p>

            <h1 className="mt-5 text-4xl font-bold md:text-6xl">
              Stock Analysis
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              A data engineering and analytics project focused on collecting,
              processing, transforming, storing, and analyzing stock market
              data using modern data engineering technologies.
            </p>

            {/* Technology Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Databricks",
                "Python",
                "SQL",
                "PySpark",
                "Git",
                "CI/CD",
                "Cassandra",
                "NoSQL",
                "Data Visualization",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <div className="mt-10">

              <a
                href="https://github.com/harikishoreabbina/Stock_analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                <FaGithub size={20} />
                View GitHub
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

          {/* Overview */}
          <div className="mt-24 border-t border-white/10 pt-16">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              01 / Overview
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-2">

              <h2 className="text-3xl font-bold md:text-4xl">
                Project Overview
              </h2>

              <p className="leading-8 text-zinc-400">
                The project builds a data pipeline for stock market data,
                transforming raw market information into structured datasets
                that can be analyzed and visualized to identify trends and
                support exploratory market analysis.
              </p>

            </div>

          </div>

          {/* Architecture */}
          <div className="mt-24 border-t border-white/10 pt-16">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              02 / Architecture
            </p>

            <h2 className="mt-8 text-3xl font-bold md:text-4xl">
              Data Pipeline Architecture
            </h2>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <div className="grid gap-4 text-center md:grid-cols-5">

                <div className="rounded-xl border border-white/10 p-5">
                  Stock Data
                </div>

                <div className="flex items-center justify-center text-zinc-600">
                  →
                </div>

                <div className="rounded-xl border border-white/10 p-5">
                  Python / PySpark
                </div>

                <div className="flex items-center justify-center text-zinc-600">
                  →
                </div>

                <div className="rounded-xl border border-white/10 p-5">
                  Databricks
                </div>

              </div>

              <div className="mt-4 grid gap-4 text-center md:grid-cols-5">

                <div />

                <div />

                <div className="flex justify-center text-zinc-600">
                  ↓
                </div>

                <div />

                <div />

              </div>

              <div className="mt-4 grid gap-4 text-center md:grid-cols-3">

                <div className="rounded-xl border border-white/10 p-5">
                  Cassandra / NoSQL
                </div>

                <div className="rounded-xl border border-white/10 p-5">
                  Processed Data
                </div>

                <div className="rounded-xl border border-white/10 p-5">
                  Data Visualization
                </div>

              </div>

            </div>

          </div>

          {/* What I Built */}
          <div className="mt-24 border-t border-white/10 pt-16">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              03 / Implementation
            </p>

            <h2 className="mt-8 text-3xl font-bold md:text-4xl">
              What I Built
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Stock market data ingestion and processing pipeline",
                "Data transformation using Python, SQL, and PySpark",
                "Databricks-based distributed processing",
                "Cassandra / NoSQL integration for data storage",
                "Git-based source control and CI/CD practices",
                "Analytical datasets for visualization and trend analysis",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* Learnings */}
          <div className="mt-24 border-t border-white/10 pt-16">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              04 / Learnings
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-2">

              <h2 className="text-3xl font-bold md:text-4xl">
                Key Learnings
              </h2>

              <p className="leading-8 text-zinc-400">
                This project strengthened my understanding of end-to-end data
                pipeline design, distributed processing with PySpark,
                Databricks workflows, NoSQL storage, source control, CI/CD,
                and transforming raw data into information suitable for
                downstream analysis and visualization.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}