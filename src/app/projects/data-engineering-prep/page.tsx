import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function DataEngineeringPrepPage() {
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

          {/* Header */}
          <div className="mt-12">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Featured Project
            </p>

            <h1 className="mt-5 text-4xl font-bold md:text-6xl">
              Data Engineering Prep
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              A structured Data Engineering learning hub built around weekly
              topics, hands-on examples, assignments, and projects covering
              programming, databases, cloud platforms, orchestration,
              distributed processing, DevOps, and modern data engineering
              practices.
            </p>

            {/* Technology Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
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
                href="https://github.com/harikishoreabbina/Data_Engineer_Prep"
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
                Data Engineering Prep is designed as a practical learning
                repository that breaks Data Engineering into structured weekly
                topics. Each section combines concepts with hands-on examples,
                assignments, and project work so the learning path moves from
                fundamentals into real engineering workflows.
              </p>

            </div>

          </div>

          {/* Learning Path */}
          <div className="mt-24 border-t border-white/10 pt-16">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              02 / Learning Path
            </p>

            <h2 className="mt-8 text-3xl font-bold md:text-4xl">
              What the Repository Covers
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {[
                "Python fundamentals for Data Engineering",
                "SQL and relational database concepts",
                "AWS, Azure, and GCP cloud fundamentals",
                "Apache Spark and distributed data processing",
                "Workflow orchestration with Airflow",
                "CI/CD and version-control practices",
                "Docker and container fundamentals",
                "Hands-on assignments and Data Engineering projects",
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

          {/* Structure */}
          <div className="mt-24 border-t border-white/10 pt-16">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              03 / Structure
            </p>

            <h2 className="mt-8 text-3xl font-bold md:text-4xl">
              Learning Workflow
            </h2>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <div className="grid gap-4 text-center md:grid-cols-7">

                <div className="rounded-xl border border-white/10 p-5">
                  Topic
                </div>

                <div className="flex items-center justify-center text-zinc-600">
                  →
                </div>

                <div className="rounded-xl border border-white/10 p-5">
                  Example
                </div>

                <div className="flex items-center justify-center text-zinc-600">
                  →
                </div>

                <div className="rounded-xl border border-white/10 p-5">
                  Assignment
                </div>

                <div className="flex items-center justify-center text-zinc-600">
                  →
                </div>

                <div className="rounded-xl border border-white/10 p-5">
                  Project
                </div>

              </div>

            </div>

          </div>

          {/* Why I Built It */}
          <div className="mt-24 border-t border-white/10 pt-16">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              04 / Purpose
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-2">

              <h2 className="text-3xl font-bold md:text-4xl">
                Why I Built It
              </h2>

              <p className="leading-8 text-zinc-400">
                I created this repository to organize Data Engineering concepts
                into a practical learning path rather than treating tools as
                isolated topics. The goal is to connect programming, SQL,
                cloud platforms, orchestration, distributed processing, CI/CD,
                and projects into one continuous learning workflow.
              </p>

            </div>

          </div>

          {/* Key Outcome */}
          <div className="mt-24 border-t border-white/10 pt-16">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              05 / Outcome
            </p>

            <h2 className="mt-8 text-3xl font-bold md:text-4xl">
              What This Project Demonstrates
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              {[
                "Structured self-learning and technical documentation",
                "Hands-on practice across multiple Data Engineering technologies",
                "Progression from concepts to assignments and projects",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 leading-7 text-zinc-300"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}