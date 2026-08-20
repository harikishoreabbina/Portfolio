import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import Reveal from "@/components/Reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/Stagger";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full max-w-full overflow-x-hidden border-t border-white/10 px-6 py-24 md:px-12 lg:px-20"
    >
      <Reveal className="mx-auto w-full min-w-0 max-w-7xl">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Featured Projects
        </p>

        <h2 className="mt-6 text-3xl font-bold md:text-5xl">
          Selected Work
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
          Hands-on projects and learning resources focused on data engineering,
          scalable pipelines, cloud platforms, distributed processing, and
          analytics.
        </p>

        {/* Animated Projects Grid */}
        <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* Project 1 */}
          <StaggerItem>
            <article className="group h-full min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] md:p-8">

              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Project 01
                </p>

                <ArrowUpRight
                  size={22}
                  className="text-zinc-500 transition duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white md:text-3xl">
                Data Engineering Prep
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                A structured Data Engineering learning guide organized around
                weekly topics, hands-on examples, assignments, and projects.
                Covers programming, databases, cloud platforms, distributed
                processing, orchestration, and modern engineering practices.
              </p>

              {/* Technology Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "AWS",
                  "Azure",
                  "GCP",
                  "Airflow",
                  "Apache Spark",
                  "Orchestration",
                  "CI/CD",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap gap-6">

                <Link
                  href="/projects/data-engineering-prep"
                  className="flex items-center gap-2 text-sm font-medium text-white transition hover:text-zinc-300"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </Link>

                <a
                  href="https://github.com/harikishoreabbina/Data_Engineer_Prep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

              </div>

            </article>
          </StaggerItem>

          {/* Project 2 */}
          <StaggerItem>
            <article className="group h-full min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] md:p-8">

              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Project 02
                </p>

                <ArrowUpRight
                  size={22}
                  className="text-zinc-500 transition duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white md:text-3xl">
                Stock Analysis
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                A data pipeline and analytics project that collects stock market
                data, processes and transforms it using Databricks and PySpark,
                stores analytical datasets, and visualizes market trends for
                downstream analysis.
              </p>

              {/* Technology Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
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
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap gap-6">

                <Link
                  href="/projects/stock-analysis"
                  className="flex items-center gap-2 text-sm font-medium text-white transition hover:text-zinc-300"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </Link>

                <a
                  href="https://github.com/harikishoreabbina/Stock_analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

              </div>

            </article>
          </StaggerItem>

          {/* Future Project */}
          <StaggerItem className="lg:col-span-2">
            <article className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-7 md:p-8">

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Project 03
              </p>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Currently Building
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-zinc-500">
                A new Data Engineering project is currently in development and
                will be added here soon.
              </p>

            </article>
          </StaggerItem>

        </StaggerContainer>

      </Reveal>
    </section>
  );
}