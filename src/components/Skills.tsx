const skillGroups = [
  {
    title: "Databases & Warehousing",
    skills: [
      "Snowflake",
      "Amazon Redshift",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "ETL & Transformation",
    skills: [
      "IBM DataStage",
      "dbt Core",
      "ETL / ELT",
      "Incremental Models",
      "Data Contracts",
    ],
  },
  {
    title: "Cloud & Integration",
    skills: [
      "AWS",
      "Amazon S3",
      "AWS Glue",
      "Athena",
      "REST APIs",
      "JSON",
    ],
  },
  {
    title: "Programming",
    skills: [
      "Python",
      "SQL",
      "C",
    ],
  },
  {
    title: "Big Data & Processing",
    skills: [
      "Apache Spark",
      "PySpark",
      "Spark SQL",
      "Batch Processing",
      "Incremental Processing",
    ],
  },
  {
    title: "Data Modeling",
    skills: [
      "Star Schema",
      "Snowflake Schema",
      "Fact & Dimension Modeling",
      "SCD Type 1",
      "SCD Type 2",
      "Medallion Architecture",
    ],
  },
  {
    title: "CI/CD & DevOps",
    skills: [
      "Git",
      "GitHub Actions",
      "Terraform",
      "Docker",
      "DEV / QA-UAT / PROD",
    ],
  },
  {
    title: "Data Quality & Governance",
    skills: [
      "dbt Tests",
      "Schema Validation",
      "Source-to-Target Reconciliation",
      "RBAC",
      "Row-Level Security",
    ],
  },
  {
    title: "Analytics & Visualization",
    skills: [
      "Power BI",
      "Tableau",
      "Snowflake Dashboards",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/10 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Technical Skills
        </p>

        <div className="mt-6 max-w-3xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
            A practical technology stack covering data ingestion,
            transformation, cloud platforms, distributed processing,
            data modeling, quality, governance, and deployment.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}