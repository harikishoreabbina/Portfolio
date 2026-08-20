"use client";

import { motion } from "framer-motion";

import {
  SiSnowflake,
  SiPython,
  SiApachespark,
  SiDocker,
  SiTerraform,
  SiGithubactions,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

import {
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaShieldAlt,
  FaAws,
  FaChartBar,
  FaCloud,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Databases & Warehousing",
    icon: <FaDatabase size={30} />,
    skills: [
      {
        name: "Snowflake",
        icon: <SiSnowflake size={22} />,
      },
      {
        name: "Amazon Redshift",
        icon: <FaAws size={22} />,
      },
      {
        name: "SQL Server",
        icon: <FaDatabase size={22} />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={22} />,
      },
      {
        name: "MySQL",
        icon: <SiMysql size={22} />,
      },
    ],
  },

  {
    title: "ETL & Transformation",
    icon: <FaCode size={30} />,
    skills: [
      {
        name: "IBM DataStage",
        icon: <FaDatabase size={22} />,
      },
      {
        name: "dbt Core",
        icon: <FaCode size={22} />,
      },
      {
        name: "ETL / ELT",
        icon: <FaCode size={22} />,
      },
      {
        name: "Incremental Models",
        icon: <FaCode size={22} />,
      },
      {
        name: "Data Contracts",
        icon: <FaCode size={22} />,
      },
    ],
  },

  {
    title: "Cloud & Integration",
    icon: <FaAws size={30} />,
    skills: [
      {
        name: "AWS",
        icon: <FaAws size={22} />,
      },
      {
        name: "Amazon S3",
        icon: <FaCloud size={22} />,
      },
      {
        name: "AWS Glue",
        icon: <FaAws size={22} />,
      },
      {
        name: "Amazon Athena",
        icon: <FaAws size={22} />,
      },
      {
        name: "REST APIs",
        icon: <FaCode size={22} />,
      },
      {
        name: "JSON",
        icon: <FaCode size={22} />,
      },
    ],
  },

  {
    title: "Programming",
    icon: <FaCode size={30} />,
    skills: [
      {
        name: "Python",
        icon: <SiPython size={22} />,
      },
      {
        name: "SQL",
        icon: <FaDatabase size={22} />,
      },
      {
        name: "C",
        icon: <FaCode size={22} />,
      },
    ],
  },

  {
    title: "Big Data & Processing",
    icon: <SiApachespark size={30} />,
    skills: [
      {
        name: "Apache Spark",
        icon: <SiApachespark size={22} />,
      },
      {
        name: "PySpark",
        icon: <SiApachespark size={22} />,
      },
      {
        name: "Spark SQL",
        icon: <SiApachespark size={22} />,
      },
      {
        name: "Batch Processing",
        icon: <FaDatabase size={22} />,
      },
      {
        name: "Incremental Processing",
        icon: <FaDatabase size={22} />,
      },
    ],
  },

  {
    title: "Data Modeling",
    icon: <FaDatabase size={30} />,
    skills: [
      {
        name: "Star Schema",
        icon: <FaDatabase size={22} />,
      },
      {
        name: "Snowflake Schema",
        icon: <SiSnowflake size={22} />,
      },
      {
        name: "Fact & Dimension Modeling",
        icon: <FaDatabase size={22} />,
      },
      {
        name: "SCD Type 1",
        icon: <FaDatabase size={22} />,
      },
      {
        name: "SCD Type 2",
        icon: <FaDatabase size={22} />,
      },
      {
        name: "Medallion Architecture",
        icon: <FaDatabase size={22} />,
      },
    ],
  },

  {
    title: "CI/CD & DevOps",
    icon: <FaGitAlt size={30} />,
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt size={22} />,
      },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions size={22} />,
      },
      {
        name: "Terraform",
        icon: <SiTerraform size={22} />,
      },
      {
        name: "Docker",
        icon: <SiDocker size={22} />,
      },
      {
        name: "DEV / QA-UAT / PROD",
        icon: <FaCode size={22} />,
      },
    ],
  },

  {
    title: "Data Quality & Governance",
    icon: <FaShieldAlt size={30} />,
    skills: [
      {
        name: "dbt Tests",
        icon: <FaCode size={22} />,
      },
      {
        name: "Schema Validation",
        icon: <FaShieldAlt size={22} />,
      },
      {
        name: "Source-to-Target Reconciliation",
        icon: <FaShieldAlt size={22} />,
      },
      {
        name: "RBAC",
        icon: <FaShieldAlt size={22} />,
      },
      {
        name: "Row-Level Security",
        icon: <FaShieldAlt size={22} />,
      },
    ],
  },

  {
    title: "Analytics & Visualization",
    icon: <FaChartBar size={30} />,
    skills: [
      {
        name: "Power BI",
        icon: <FaChartBar size={22} />,
      },
      {
        name: "Tableau",
        icon: <FaChartBar size={22} />,
      },
      {
        name: "Snowflake Dashboards",
        icon: <SiSnowflake size={22} />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Technical Skills
          </p>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            A practical technology stack covering data ingestion,
            transformation, cloud platforms, distributed processing,
            data modeling, quality, governance, and deployment.
          </p>
        </motion.div>

        {/* Animated Skill Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.5,
                ease: "easeOut",
              }}
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >

              {/* Category Header */}
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-200">
                  {group.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

              </div>

              {/* Technologies */}
              <div className="mt-6 space-y-3">

                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 text-zinc-400 transition duration-300 hover:border-white/15 hover:bg-white/[0.03] hover:text-white"
                  >
                    <span className="shrink-0 text-zinc-300">
                      {skill.icon}
                    </span>

                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}